import React from "react";
import Head from "next/head";
import DpsContent from "@/views/services/dps";
import ServiceLayout from "@/infra/layouts/ServiceLayout";

const DpsPage = () => {
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - DPS`}</title>
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <DpsContent />
    </>
  );
};

DpsPage.getLayout = (page: any) => (
  <ServiceLayout page="DPS Service">{page}</ServiceLayout>
);

export default DpsPage;
