import React from "react";
import Web3Layout from "@/infra/layouts/Web3Layout";
import Web3Content from "@/views/web3";

const index = () => {
  return <Web3Content tab={'1'} />;
};

index.guestGuard = true;
index.getLayout = (page: any) => <Web3Layout>{page}</Web3Layout>

export default index;
