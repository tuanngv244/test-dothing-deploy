import React, { useEffect, useState } from "react";
import CustomerLayout from "@/infra/layouts/CustomerLayout";
import CusPage from "@/views/customer-support";
import { capitalizedInput } from "@/@core/utils/helpers";
import { customer_pages } from "@/infra/navigation/router-title";
import api from "@/@core/utils/api";
import announcesInfoMapper from "@/domains/mappers/support/mapper.support";

type SlugProps = {
  page: string;
  category: string;
  id: any;
};

const Slug = ({ page, category, id }: SlugProps) => {
  const [resultData, setResultData] = useState<any>(null);
  const [categories, setCategories] = useState<any>([]);
  const [isDetail, setIsDetail] = useState<any>(false);

  const getAnnouncementDetail = async () => {
    try {
      const result = await api.get(`/kica/front/announcements/findById/${id}`);
      if (result) {
        setResultData(result.data);
        setIsDetail(true);
      }
    } catch (error) {
      if (!isNaN(Number(id))) {
        let result;
        let newCat =
          category === "notification"
            ? "Announcement"
            : capitalizedInput(category);

        if (newCat !== "All") {
          result = await api.get(
            `/kica/front/announcements/findAllWithSpec?pageNo=${Number(
              id
            )}&pageSize=10&sortBy=createdAt&sortDirection=DESC&announceType=${newCat}`
          );
        } else {
          result = await api.get(
            `/kica/front/announcements/findAllWithSpec?pageNo=${Number(
              id
            )}&pageSize=10&sortBy=createdAt&sortDirection=DESC`
          );
        }

        const { dataResponse: dataAnnounces } =
          announcesInfoMapper.mapToDto(result);

        const resultCats = await api.get("/kica/front/announcements/category");

        setResultData(dataAnnounces);
        setIsDetail(false);
        if (resultCats) setCategories(resultCats.data);
      }
    }
  };

  useEffect(() => {
    getAnnouncementDetail();
  }, [id]);

  if (!resultData) return null;

  return (
    <CusPage
      page={page}
      category={category}
      data={resultData}
      apiData={resultData}
      categories={categories}
      isDetail={isDetail}
    />
  );
};

Slug.guestGuard = true;

Slug.getLayout = (pageContent: any) => (
  <CustomerLayout
    category={pageContent?.props?.page as any}
    type={"detail"}
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
      category: appContext.params?.slug[0],
      id: appContext.params?.slug[1],
      data: null,
    },
  };
};

export default Slug;
