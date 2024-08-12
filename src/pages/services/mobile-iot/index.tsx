import React from "react";
import Head from "next/head";
import IotContent from "@/views/services/mobile-iot";
import ServiceLayout from "@/infra/layouts/ServiceLayout";

const IotPage = () => {
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - Consulting/loT`}</title>
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <IotContent />
    </>
  );
};

IotPage.getLayout = (page: any) => (
  <ServiceLayout page="Consulting/loT Service">{page}</ServiceLayout>
);

export default IotPage;
