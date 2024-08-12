import React from "react";
import Web3Content from "@/views/web3";
import Web3Layout from "@/infra/layouts/Web3Layout";
import { useRouter } from "next/router";

const PageCate = () => {
  const router = useRouter();
  return <Web3Content tab={router.query?.category === "premium" ? "2" : "1"} />;
};

PageCate.guestGuard = true;
PageCate.getLayout = (page: any) => <Web3Layout>{page}</Web3Layout>;

export default PageCate;
