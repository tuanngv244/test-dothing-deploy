import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  insight_pages,
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import InsightLayout from "@/infra/layouts/InsightLayout";
import { getNews, getCategories } from "@/app/reducers/client";
import { AppDispatch } from "@/infra/store";
import newsInfoMapper from "@/domains/mappers/insight/mapper.new-info";
import categoriesInfoMapper from "@/domains/mappers/insight/mapper.category-info";
import InsightContent from "@/views/insight";

const InsightPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { t } = useTranslation();
  const router = useRouter();

  const [apiData, setApiData] = useState(null);
  const [categories, setCategories] = useState([]);

  const getDataNews = async () => {
    const [resNews, resCategories] = await Promise.allSettled([
      dispatch(getNews()),
      dispatch(getCategories()),
    ]);

    const resNewsResult = newsInfoMapper.mapToDto(resNews);
    const resCategoriesResult = categoriesInfoMapper.mapToDto(resCategories);

    if (resNewsResult.isStatus) setApiData(resNewsResult.dataResponse);
    if (resCategoriesResult.isStatus)
      setCategories(resCategoriesResult.dataResponse);
  };

  useEffect(() => {
    //getDataNews();
  }, []);

  if (
    router.query?.page &&
    !insight_pages.some((page) => page === router.query?.page)
  ) {
    router.push("/page-not-found");
    return;
  }

  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - ${t(
          "NAV." +
            mapRouteTitle[(router.query?.page as mapRouteTitleProps) || ""]
        )}`}</title>
        <meta
          name="description"
          content={`Insight - ${t(
            mapRouteTitle[(router.query?.page as mapRouteTitleProps) || ""]
          )}`}
        />
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <InsightContent
        page={(router.query?.page as string) || ""}
        category={"all"}
        apiData={apiData}
        categories={categories}
      />
    </>
  );
};

InsightPage.guestGuard = true;
InsightPage.getLayout = (page: any) => <InsightLayout>{page}</InsightLayout>;

export default InsightPage;
