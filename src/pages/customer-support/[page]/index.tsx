import React, { useEffect, useState } from "react";
import Head from "next/head";
import CustomerLayout from "@/infra/layouts/CustomerLayout";
import {
  customer_pages,
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import { useTranslation } from "react-i18next";
import api from "@/@core/utils/api";
import CusPage from "@/views/customer-support";
import announcesInfoMapper from "@/domains/mappers/support/mapper.support";
import faqsInfoMapper from "@/domains/mappers/support/mapper.faqs";
import categoriesInfoMapper from "@/domains/mappers/insight/mapper.category-info";
import { getDataFaqsService } from "@/app/services/client";
import { Languages, languages } from "@/@core/configs";

type PageProps = keyof typeof pages;

const pages = {
  announcement: () => {
    return new Promise((resolve, rejected) => {
      resolve(getPageAnnouncement());
    });
  },
  faq: (language: string) => {
    return new Promise((resolve, rejected) => {
      resolve(getPageFAQ(language));
    });
  },
  "contact-us": () => {
    return new Promise((resolve, rejected) => {
      resolve(getPageContactUs());
    });
  },
};

const getPageAnnouncement = async () => {
  const result = await Promise.allSettled([
    api.get(
      "/kica/front/announcements/findAllWithSpec?pageNo=1&pageSize=10&sortBy=createdAt&sortDirection=DESC"
    ),
    api.get("/kica/front/announcements/category"),
  ]);

  const [announces, categories] = result;
  const { dataResponse: dataAnnounces } =
    announcesInfoMapper.mapToDto(announces);
  const { dataResponse: dataCats } = categoriesInfoMapper.mapToDto(categories);

  return { dataResult: dataAnnounces, categories: dataCats };
};

const getPageFAQ = async (language: string) => {
  const result = await Promise.allSettled([
    getDataFaqsService({
      useYn: "Y",
      lang: languages[(language as Languages) || "kr"],
    }),
  ]);

  const [faqs] = result;

  const { dataResponse: dataFaqs } = faqsInfoMapper.mapToDto(faqs);
  const dataCats = dataFaqs?.map((item: any) => item.categoryFaqName);

  return { dataResult: dataFaqs, categories: dataCats };
};

const getPageContactUs = async () => {
  // const result = await Promise.allSettled([
  //   api().get('/kica/front/term/searchAll?pageNo=1&pageSize=50&sortBy=termVersion&sortDirection=DESC'),
  //   api().get('/kica/front/term/category/get')
  // ])

  return null;
};

type CustomerPageProps = {
  page: string;
};

const CustomerPage = ({ page }: CustomerPageProps) => {
  const { t, i18n } = useTranslation();
  const [newCategories, setCategories] = useState([]);
  const [resultData, setResultData] = useState(null);

  const getDataSupportPage = async () => {
    const result: any = await pages[page as PageProps](i18n.language);
    if (result) {
      setResultData(result.dataResult);
      setCategories(result.categories);
    }
  };

  useEffect(() => {
    setResultData(null);
    getDataSupportPage();
  }, [page, i18n.language]);

  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - ${t(
          "NAV." + mapRouteTitle[page as mapRouteTitleProps]
        )}`}</title>
        <meta
          name="description"
          content={`DOTHING | IoT Smart Logisitics Solution - ${t(
            "NAV." + mapRouteTitle[page as mapRouteTitleProps]
          )}`}
        />
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <CusPage
        page={page}
        category={"all"}
        apiData={resultData || []}
        categories={newCategories}
      />
    </>
  );
};

CustomerPage.guestGuard = true;
CustomerPage.getLayout = (pageContent: any) => (
  <CustomerLayout
    category={pageContent?.props?.page as any}
    page={"Customer Support"}
  >
    {pageContent}
  </CustomerLayout>
);

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  if (params?.page && !customer_pages.some((page) => page === params?.page)) {
    return {
      redirect: {
        destination: "/page-not-found",
        permanent: false,
      },
    };
  }

  return {
    props: {
      apiData: null,
      page: params?.page,
      categories: null,
    },
  };
};

export default CustomerPage;
