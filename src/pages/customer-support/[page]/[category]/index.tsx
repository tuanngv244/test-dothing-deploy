import React, { useState, useEffect } from "react";
import Head from "next/head";
import CustomerLayout from "@/infra/layouts/CustomerLayout";
import CusPage from "@/views/customer-support";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { resetPaging } from "@/app/reducers/client";
import api from "@/@core/utils/api";
import {
  convertToSlug,
  capitalizedInput,
  makeTitle,
} from "@/@core/utils/helpers";
import {
  mapRouteTitleProps,
  mapRouteTitle,
  customer_pages,
} from "@/infra/navigation/router-title";
import announcesInfoMapper from "@/domains/mappers/support/mapper.support";
import faqsInfoMapper from "@/domains/mappers/support/mapper.faqs";

type CatePageProps = {
  page: string;
  category: string;
};

const getPageFAQ = async (cate: any) => {
  let url = "";
  const resultCats = await api.get("/kica/front/faq/category/get");

  let cats = resultCats.data.map((cat: any) => {
    return convertToSlug(cat);
  });

  if (cats.includes(cate)) {
    url = `/kica/front/faq/searchAll?pageNo=1&pageSize=10&sortBy=displayOrder&sortdirection=ASC&category=${makeTitle(
      cate
    )}`;
  } else {
    url = `/kica/front/faq/searchAll?pageNo=1&pageSize=10&sortBy=displayOrder&sortdirection=ASC`;
  }

  const result = await api.get(url);
  const { dataResponse: dataFaqs } = faqsInfoMapper.mapToDto(result);

  const isExist = cate && [...cats, "all"].some((cat) => cat === cate);

  return { data: dataFaqs, isExist, resultCats };
};

const getPageAnnouncement = async (cate: any) => {
  let url = "";
  const resultCats = await api.get("/kica/front/announcements/category");

  let cats = resultCats.data.map((cat: any) => {
    if (cat === "Announcement") return convertToSlug("notification");
    return convertToSlug(cat);
  });

  let category =
    cate === "notification" ? "Announcement" : capitalizedInput(cate);

  if (cats.includes(cate)) {
    url = `/kica/front/announcements/findAllWithSpec?pageNo=1&pageSize=10&sortBy=createdAt&sortDirection=DESC&announceType=${category}`;
  } else {
    url = `/kica/front/announcements/findAllWithSpec?pageNo=1&pageSize=10&sortBy=createdAt&sortDirection=DESC`;
  }

  let isExist = cate && [...cats, "all"].some((cat) => cat === cate);

  const result = await api.get(url);

  const { dataResponse: dataAnnounces } = announcesInfoMapper.mapToDto(result);

  return { data: dataAnnounces, isExist, resultCats };
};

type PagesTypes = keyof typeof pages;

const pages = {
  announcement: (category: any) => {
    return new Promise((resolve, rejected) => {
      resolve(getPageAnnouncement(category));
    });
  },
  faq: (category: any) => {
    return new Promise((resolve, rejected) => {
      resolve(getPageFAQ(category));
    });
  },
};

const CatePage = ({ page, category }: CatePageProps) => {
  const { t } = useTranslation();
  const [apiData, setApiData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isCategory, setIsCategory] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const getDataCategoryPage = async () => {
    const result: any = await pages[page as PagesTypes](category);

    if (result) {
      setApiData(result.data);
      setCategories(result?.resultCats?.data);
      setIsCategory(result.isExist);
      if (!result.isExist) {
        router.push({
          pathname: "/page-not-found",
        });
      }
    }
  };

  useEffect(() => {
    getDataCategoryPage();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetPaging(true));
    };
  }, [category]);

  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - ${t(
          mapRouteTitle[page as mapRouteTitleProps]
        )} - ${category}`}</title>
        <meta
          name="description"
          content={`DOTHING | IoT Smart Logisitics Solution - ${t(
            mapRouteTitle[page as mapRouteTitleProps]
          )} - ${category}`}
        />
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <CusPage
        page={page}
        category={category}
        apiData={apiData}
        categories={categories}
        isCategory={isCategory}
      />
    </>
  );
};

CatePage.guestGuard = true;

CatePage.getLayout = (pageContent: any) => (
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

export const getStaticProps = async (appContext: any) => {
  if (
    appContext.params?.page &&
    !customer_pages.some((page) => page === appContext.params?.page)
  ) {
    return {
      redirect: {
        destination: "/page-not-found",
        permanent: false,
      },
    };
  }

  return {
    props: {
      page: appContext.params?.page,
      category: appContext.params?.category,
      apiData: null,
      categories: [],
    },
  };
};

export default CatePage;
