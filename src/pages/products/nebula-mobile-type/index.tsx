import React from "react";
import Head from "next/head";
import MobileTypeNebulaContent from "@/views/products/nebula-mobile-type";
import ProductLayout from "@/infra/layouts/ProductLayout";

const MobileTypePage = () => {
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - NEBULA Mobile Type`}</title>
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <MobileTypeNebulaContent />
    </>
  );
};

MobileTypePage.getLayout = (page: any) => (
  <ProductLayout page="NEBULA Mobile Type">{page}</ProductLayout>
);

export default MobileTypePage;
