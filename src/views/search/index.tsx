import React from "react";
import Image from "next/image";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import BreadcrumbSearch from "../assets/components/breadcrumb/BreadcrumbSearch";
import MuiContainer from "@/@core/style-libs/mui-container";
import { Box, Grid, styled } from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import BannerSearch from "./contents/BannerSearch";
import Domains from "./contents/Domains";

const BannerBg = styled(Box)(({ theme }) => ({
  height: "245px",
  marginLeft: "-1rem",
  marginRight: "-1rem",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    height: "290px",
  },
}));

const ContentBanner = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
  },
}));

const Breadcrumb = styled(Box)(({ theme }: { theme: any }) => ({
  ".MuiBreadcrumbs-root": {
    position: "absolute",
    top: "2rem",
    zIndex: 99,
    [theme.breakpoints.down("xlc")]: {
      left: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      top: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      top: "1rem",
      position: "relative",
    },
  },
}));

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({
  zIndex: 999,
}));

const SearchPage = () => {
  return (
    <>
      <Wrapper bg="#fff" maxWidth={"100%"}>
        <BannerBg>
          <BoxWrapper width={WIDTH_MEDIUM}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Breadcrumb>
                  <BreadcrumbSearch />
                </Breadcrumb>
              </Grid>
            </Grid>
          </BoxWrapper>
          <ContentBanner>
            <BannerSearch />
          </ContentBanner>
          <Image src={'/images/pages/bg/bg_banner.png'} layout='fill' priority alt=""/>
        </BannerBg>
      </Wrapper>
      <Wrapper bg='#fff' maxWidth={'100%'}>
        <Domains />
      </Wrapper>
    </>
  );
};

export default SearchPage;
