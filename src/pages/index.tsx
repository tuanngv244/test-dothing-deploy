"use client";
// import HomePage from "@/views/home";
import { getBanners } from "@/app/reducers/client";
import subInfoMapper from "@/domains/mappers/home/mapper.sub-info";
import authConfig from "@/infra/configs/auth";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/views/home"), {
  ssr: false,
});

const Home = () => {
  return <HomePage />;
};

Home.guestGuard = true;

export default Home;
