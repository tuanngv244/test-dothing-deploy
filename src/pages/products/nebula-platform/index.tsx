import React from "react";
import Head from "next/head";
import PlatformContent from "@/views/products/nebula-platform";
import ProductLayout from "@/infra/layouts/ProductLayout";

const PlatformPage = () => {
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - NEBULA Platform`}</title>
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <PlatformContent />
    </>
  );
};

PlatformPage.getLayout = (page: any) => (
  <ProductLayout page="NEBULA Platform">{page}</ProductLayout>
);

export default PlatformPage;
