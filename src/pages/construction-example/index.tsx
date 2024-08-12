import React from "react";
import Head from "next/head";
import ConstructionContent from "@/views/construction-example";
import { useTranslation } from "react-i18next";

const ConstructionPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - ${t(
          "COMMON.customerStories"
        )}`}</title>
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <ConstructionContent />
    </>
  );
};

export default ConstructionPage;
