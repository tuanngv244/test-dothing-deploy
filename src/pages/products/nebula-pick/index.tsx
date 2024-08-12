import React from "react";
import Head from "next/head";
import PickContent from "@/views/products/nebula-pick";
import ProductLayout from "@/infra/layouts/ProductLayout";
import { useTranslation } from "react-i18next";

const PickPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - NEBULA Pick`}</title>

        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <PickContent />
    </>
  );
};

PickPage.getLayout = (page: any) => (
  <ProductLayout page="NEBULA Pick">{page}</ProductLayout>
);

export default PickPage;
