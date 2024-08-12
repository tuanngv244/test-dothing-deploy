"use client";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import { Languages, languages } from "@/@core/configs";
import { getBanners, getMainInfo, getSubInfo } from "@/app/reducers/client";
import mainInfoMapper from "@/domains/mappers/home/mapper.main-info";
import subInfoMapper from "@/domains/mappers/home/mapper.sub-info";
import { AppDispatch } from "@/infra/store";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import CustomerStories from "./contents/CustomerStories";
import Recognition from "./contents/Recognition";
import Statistic from "./contents/Statistic";
import Subscription from "./contents/Subscription";
import WhatWeDo from "./contents/WhatWeDo";
import SliderBanner2 from "./contents/SliderBannerV2";
import authConfig from "@/infra/configs/auth";
import { getUserLanguage } from "@/infra/configs/i18n";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [apiDataNew, setDataNews] = useState<any>(null);
  const [apiMainData, setMainData] = useState<any>(null);
  const [bannerData, setBannerData] = useState<any>(null);
  const router = useRouter();
  const { i18n } = useTranslation();

  const theme: any = useTheme();

  const getAllInfosData = async () => {
    const [resSubInfo, resMainInfo] = await Promise.allSettled([
      dispatch(getSubInfo()),
      dispatch(getMainInfo()),
    ]);

    const mainInfo = mainInfoMapper.mapToDto(resMainInfo);
    const subInfo = subInfoMapper.mapToDto(resSubInfo);

    if (mainInfo.isStatus) setMainData(mainInfo?.data);
    if (subInfo.isStatus) setDataNews(subInfo);
  };

  const getBannersData = async () => {
    const cachedLang = localStorage.getItem(authConfig.i18nextLng);
    const currentLang = cachedLang || getUserLanguage() || "en";
    const detectLang = currentLang === "vi" ? "en" : currentLang;

    const [resBanners] = await Promise.allSettled([
      dispatch(
        getBanners({
          useYn: "Y",
          lang: languages[detectLang as Languages],
        })
      ),
    ]);
    const bannerData = subInfoMapper.mapToDto(resBanners);

    if (resBanners) setBannerData(bannerData?.data);
  };

  useEffect(() => {
    getAllInfosData();
    getBannersData();
  }, []);

  return (
    <>
      {/* <Wrapper maxWidth={"100%"}>
        <SliderBanner bannerData={bannerData} />
      </Wrapper> */}
      <SliderBanner2 bannerData={bannerData} />
      <Wrapper nameClass="statistic" maxWidth={"100%"}>
        <Statistic apiMainData={apiMainData} />
      </Wrapper>
      <Wrapper
        nameClass="plan"
        bg={theme.palette.background.bgSection}
        maxWidth={"100%"}
      >
        <WhatWeDo />
      </Wrapper>
      <Wrapper nameClass="article" maxWidth={"100%"}>
        <Subscription
          apiDataNew={
            apiDataNew && apiDataNew?.news?.length ? apiDataNew.news[0] : {}
          }
        />
      </Wrapper>
      <Wrapper
        nameClass="faqs"
        bg={theme.palette.background.bgSection}
        maxWidth={"100%"}
      >
        <CustomerStories />
      </Wrapper>
      <Wrapper
        nameClass="recognition"
        bg={theme.palette.background.bgSection}
        maxWidth={"100%"}
      >
        <Recognition />
      </Wrapper>
    </>
  );
};

export default HomePage;
