import React from "react";
import { convertToSlug } from "@/@core/utils/helpers";
import DetailPage from "./contents/DetailPage";
import ListPage from "./contents/ListPage";
import RecognitionPage from "./contents/RecognitionPage";
import ContactUsV1Page from "./contents/ContactUsV1Page";
import ContactUsV2Page from "./contents/ContactUsV2Page";
import ListNewPage from "./contents/ListNewPage";

type InsightContentProps = {
  page: string;
  category: string;
  data?: string;
  apiData: any;
  categories: Array<any>;
  isCategory?: boolean;
  isDetail?: boolean;
};

const ListPageContainer = {
  'recognition': RecognitionPage,
  'latest-news': ListNewPage,
  'latest-news-v2': ListNewPage,
  'contact-us-v1': ContactUsV2Page,
  'contact-us': ContactUsV1Page,
}

type ListPageContainerProps = keyof typeof ListPageContainer

const MultiplePage = (props: any, ref: any) => {
  const { value, ...otherProps } = props;
  let Component = ListPageContainer[value as ListPageContainerProps];
  if (!Component) return null;
  return <Component ref={ref} {...otherProps} />;
};

const Pages = React.forwardRef(MultiplePage);

const InsightContent = ({
  page,
  category,
  data,
  apiData,
  categories,
  isCategory = true,
  isDetail = false,
}: InsightContentProps) => {
  let cats =
    categories &&
    categories.map((cat) => {
      return convertToSlug(cat);
    });

  // if (!apiData || !isCategory) return null;

  if(isDetail) return <DetailPage category={category} page={page} data={data} />

  return (
    <>
      {cats && [...cats, 'all'].includes(category) ? (
        <Pages value={page} category={category} apiData={apiData} categories={categories} />
      ) : ''}
    </>
  )
};

export default InsightContent;
