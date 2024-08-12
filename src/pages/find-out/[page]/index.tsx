import React from "react";
import { find_out_pages } from "@/infra/navigation/router-title";
import Web3Layout from "@/infra/layouts/Web3Layout";
import FindOutContent from "@/views/find-out";

const Page = ({ page }: { page: any }) => {
  return <FindOutContent page={page} category={'0'} />;
};

Page.guestGuard = true;
Page.getLayout = (page: any) => <Web3Layout>{page}</Web3Layout>

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  if (params?.page && !find_out_pages.some((page) => page === params?.page)) {
    return {
      redirect: {
        destination: "/page-not-found",
        permanent: false,
      },
    };
  }

  return {
    props: {
      page: params?.page,
    },
  };
};

export default Page;
