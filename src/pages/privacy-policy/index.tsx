import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import WebPolicyLayout from "@/infra/layouts/WebPolicyLayout";
import { convertToSlug } from "@/@core/utils/helpers";
import termPolicyCatesInfoMapper from "@/domains/mappers/terms/mapper.term-policy-categorys";
import policiesInfoMapper from "@/domains/mappers/terms/mapper.policies-info";
import {
  getTermPolicyCategories,
  getPolicyDetail,
} from "@/app/reducers/client";
import TermPage from "@/views/terms/TermPage";

const PoliciesPage = ({ page = "privacy-policy" }) => {
  const [apiData, setApiData] = useState<any>(null);
  const [categories, setCategories] = useState<Array<any>>([]);
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();

  const getDataPolicy = async () => {
    const result = await dispatch(getTermPolicyCategories());
    const { dataResponse } = termPolicyCatesInfoMapper.mapToDto(result);

    let cats = dataResponse.map((cat: string) => {
      return convertToSlug(cat);
    });

    const indexTab = cats.findIndex((cat: string) => cat === "privacy-policy");
    setCategories(dataResponse);
    setTab(indexTab);

    const resultTerm = await dispatch(getPolicyDetail());
    const { dataResponse: dataTerm } = policiesInfoMapper.mapToDto(resultTerm);
    setApiData(dataTerm);
  };

  useEffect(() => {
    getDataPolicy();
  }, []);

  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - Web3ID - 개인정보처리방침 및 이용약관 - 개인정보처리방침`}</title>
        <meta
          name="description"
          content={`Web3ID - 개인정보처리방침 및 이용약관 - 개인정보처리방침`}
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

PoliciesPage.guestGuard = true;

PoliciesPage.getLayout = (page: any) => (
  <WebPolicyLayout page={"개인정보처리방침 및 이용약관"}>
    {page}
  </WebPolicyLayout>
);

export default PoliciesPage;
