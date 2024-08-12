import React from "react";
import Head from "next/head";
import ContentPage from "@/views/products/contents/ContentPage";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import ProductLayout from "@/infra/layouts/ProductLayout";
import { useTranslation } from "react-i18next";

const ProductsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{`DOTHING | IoT Smart Logisitics Solution - ${t(
          "NAV.product"
        )}`}</title>
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <Wrapper maxWidth={"100%"}>
        <ContentPage />
      </Wrapper>
    </>
  );
};

ProductsPage.getLayout = (page: any) => (
  <ProductLayout page="제품">{page}</ProductLayout>
);

export default ProductsPage;
