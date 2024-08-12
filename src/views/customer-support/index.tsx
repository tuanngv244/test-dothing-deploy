import React from "react";
import { convertToSlug } from "@/@core/utils/helpers";
import DetailPage from "./contents/DetailPage";
import ListPage from "./contents/ListPage";

type CusPageProps = {
  page: string;
  category: string;
  data?: string;
  apiData: any;
  categories: Array<any>;
  isCategory?: boolean;
  isDetail?: boolean;
};

const CusPage = ({
  page,
  category,
  data,
  apiData,
  categories,
  isCategory = true,
  isDetail = false,
}: CusPageProps) => {
  let cats =
    categories &&
    categories.map((cat) => {
      if (cat === "Announcement") return convertToSlug("notification");
      return convertToSlug(cat);
    });

  // if ((page !== "contact-us" && !apiData) || !isCategory) return null;

  if (isDetail)
    return <DetailPage category={category} page={page} data={data} />;

  return (
    <>
      {cats && [...cats, "all"].includes(category) ? (
        <ListPage
          category={category}
          page={page}
          apiData={apiData}
          categories={categories}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CusPage;
