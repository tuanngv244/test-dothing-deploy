import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import InsightLayout from "@/infra/layouts/InsightLayout";
import { useTranslation } from "react-i18next";
import {
  insight_pages,
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import InsightContent from "@/views/insight";
import { convertToSlug, makeTitle } from "@/@core/utils/helpers";
import api from "@/@core/utils/api";

const pages = {
  "latest-news": (category: string) => {
    return new Promise((resolve, rejected) => {
      resolve(getPageLatestNews(category));
    });
  },
};

type pageProps = keyof typeof pages;

const getPageLatestNews = async (cate: string) => {
  let url = "";
  const resultCats = await api.get("/kica/front/news/category/get");

  let cats = resultCats.data.map((cat: any) => {
    return convertToSlug(cat);
  });

  if (cats.includes(cate)) {
    url = `/kica/front/news/searchAll?pageNo=1&pageSize=9&sortBy=orderDate&sortDirection=DESC&category=${makeTitle(
      cate
    )?.toUpperCase()}`;
  } else {
    url = `/kica/front/news/searchAll?pageNo=1&pageSize=9&sortBy=orderDate&sortDirection=DESC`;
  }

  const { data } = await api.get(url);
  const isExist = cate && [...cats, "all"].some((cat) => cat === cate);

  return { data, isExist, resultCats };
};

const CatePage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [apiData, setApiData] = useState<any>(null);
  const [categories, setCategories] = useState<any>([]);
  const [isCategory, setIsCategory] = useState<any>(false);

  const getDataCategory = async () => {
    if (!router || !router.query.category) return;

    const result: any = await pages[router.query?.page as pageProps](
      router.query?.category as string
    );

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
    getDataCategory();
  }, [router.query?.category]);

  if (
    router.query?.page &&
    !insight_pages.some((item) => item === router.query?.page)
  ) {
    router.push("/page-not-found");
    return;
  }

  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - ${t(
          mapRouteTitle[(router.query?.page as mapRouteTitleProps) || ""]
        )} - ${router.query?.category || ""}`}</title>
        <meta
          name="description"
          content={`Web3ID - ${t(
            mapRouteTitle[(router.query?.page as mapRouteTitleProps) || ""]
          )} - ${router.query?.category || ""}`}
        />
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <InsightContent
        page={(router.query?.page as pageProps) || ""}
        category={(router.query?.category as any) || ""}
        apiData={apiData}
        categories={categories}
        isCategory={isCategory}
      />
    </>
  );
};

CatePage.guestGuard = true;
CatePage.getLayout = (page: any) => <InsightLayout>{page}</InsightLayout>;

export default CatePage;
