import React from "react";
import Head from "next/head";
import DasContent from "@/views/services/das";
import ServiceLayout from "@/infra/layouts/ServiceLayout";

const DasPage = () => {
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - DAS`}</title>
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <DasContent />
    </>
  );
};

DasPage.getLayout = (page: any) => (
  <ServiceLayout page="DAS Service">{page}</ServiceLayout>
);

export default DasPage;
