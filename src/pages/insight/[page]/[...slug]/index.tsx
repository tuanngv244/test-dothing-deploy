import React, { useState, useEffect } from "react";
import InsightLayout from "@/infra/layouts/InsightLayout";
import { insight_pages } from "@/infra/navigation/router-title";
import { useRouter } from "next/router";
import { filterHtml } from "@/@core/utils/helpers";
import InsightContent from "@/views/insight";
import api from "@/@core/utils/api";

const Slug = () => {
  const router = useRouter();
  const [resultData, setResultData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isDetail, setDetail] = useState(false);

  const getNewsDetail = async () => {
    if (!router || !router.query?.slug) return;

    try {
      const result = await api.get(`/kica/front/news/search/${router.query?.slug[1]}`);
      if (result) {
        let newData = { ...result.data };
        newData.newsContent = filterHtml(newData.newsContent);
        setResultData(newData);
        setDetail(true);
      }
    } catch (error) {
      if (!isNaN(Number(router.query?.slug[1]))) {
        let result;

        if (router.query?.slug[0] !== "all") {
          result = await api.get(`/kica/front/news/searchAll?pageNo=${Number(router.query?.slug[1]
            )}&pageSize=9&sortBy=orderDate&sortDirection=DESC&category=${router.query?.slug[0].toUpperCase()}`);
        } else {
          result = await api.get(
            `/kica/front/news/searchAll?pageNo=${Number(
              router.query?.slug[1]
            )}&pageSize=9&sortBy=orderDate&sortDirection=DESC`
          );
        }

        const resultCats = await api.get("/kica/front/news/category/get");

        if (resultCats) setCategories(resultCats.data);
            setDetail(false);
            setResultData(result.data);
        }
    }
  };

  useEffect(() => {
    getNewsDetail()
  }, [router.query?.slug])

  if (!resultData) return null

  if (router.query?.page && !insight_pages.some(item => item === router.query?.page)) {
    router.push('/page-not-found')
    return
  }

  return (
    <InsightContent 
        page={router.query?.page as string || ''}
        category={router.query?.slug ? router.query?.slug[0] : ''}
        data={resultData}
        apiData={resultData}
        categories={categories}
        isDetail={isDetail}
    />
  )
};

Slug.guestGuard = true;
Slug.getLayout = (pageContent: React.ReactNode) => (
  <InsightLayout type={"detail"}>
    {pageContent}
  </InsightLayout>
);

export default Slug;
