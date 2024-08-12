import React from "react";
import InsightLayout from "@/infra/layouts/InsightLayout";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import ContentPage from "@/views/insight/contents/LocationPage";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Head>
        <title>DOTHING | IoT Smart Logisitics Solution - Insights</title>
        <meta name="description" />
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <ContentPage />
    </>
  );
};

index.guestGuard = true;
index.getLayout = (page: any) => (
  <InsightLayout page="Insights">{page}</InsightLayout>
);

export default index;
