import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import WebPolicyLayout from "@/infra/layouts/WebPolicyLayout";
import { convertToSlug } from "@/@core/utils/helpers";
import termPolicyCatesInfoMapper from "@/domains/mappers/terms/mapper.term-policy-categorys";
import termsInfoMapper from "@/domains/mappers/terms/mapper.terms-info";
import { getTermPolicyCategories, getTermDetail } from "@/app/reducers/client";
import TermPage from "@/views/terms/TermPage";

const TermOfUsePage = ({ page = "terms-of-use" }) => {
  const [apiData, setApiData] = useState<any>(null);
  const [categories, setCategories] = useState<Array<any>>([]);
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();

  const getDataTerms = async () => {
    const result = await dispatch(getTermPolicyCategories());
    const { dataResponse } = termPolicyCatesInfoMapper.mapToDto(result);

    let cats = dataResponse.map((cat: string) => {
      return convertToSlug(cat);
    });

    const indexTab = cats.findIndex((cat: string) => cat === "terms-of-use");
    setCategories(dataResponse);
    setTab(indexTab);

    const resultTerm = await dispatch(getTermDetail());
    const { dataResponse: dataTerm } = termsInfoMapper.mapToDto(resultTerm);
    setApiData(dataTerm);
  };

  useEffect(() => {
    getDataTerms();
  }, []);

  return (
    <>
      <Head>
        <title>{`Web3ID - 개인정보처리방침 및 이용약관 - 이용약관`}</title>
        <meta
          name="description"
          content={`Web3ID - 개인정보처리방침 및 이용약관 - 이용약관`}
        />
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <TermPage
        tab={`${tab}`}
        categories={categories}
        page={page}
        apiData={apiData}
      />
    </>
  );
};

TermOfUsePage.guestGuard = true;

TermOfUsePage.getLayout = (page: any) => (
  <WebPolicyLayout page={"개인정보처리방침 및 이용약관"}>
    {page}
  </WebPolicyLayout>
);

export default TermOfUsePage;
