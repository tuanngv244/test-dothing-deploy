import React from "react";
import {
  Typography,
  Box,
  useMediaQuery,
  styled,
  Divider,
  Theme,
} from "@mui/material";

const Banner = styled(Box)(({ theme }: { theme: any }) => ({
  marginTop: 35,
  marginBottom: 35,
  [theme.breakpoints.down("xl")]: {
    marginTop: 55,
  },
  [theme.breakpoints.down("xlc")]: {
    marginTop: 35,
    marginBottom: 30,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    marginBottom: 30,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 18,
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "36px",
  fontSize: "28px !important",
  fontWeight: 900,
  marginBottom: "0",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px !important",
    lineHeight: 1,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "22px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0",
    paddingRight: "0",
    marginBottom: "0.8rem",
    fontSize: "15px !important",
    lineHeight: "30px",
  },
}));

const Img = styled("img")(({ theme }: { theme: any }) => ({
  position: "relative",
  width: "100%",
  marginBottom: 0,
  marginTop: 30,
  [theme.breakpoints.down("xl")]: {
    marginBottom: 45,
  },
  [theme.breakpoints.down("xlc")]: {
    marginBottom: 35,
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: 25,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 5,
    marginBottom: 5,
  },
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  marginTop: "2.5rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const PreImg = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Banner>
      {isMobile ? (
        <>
          <SubTitle>
            프리미엄 도메인은
            <br />
            짧고 눈길을 끄는 키워드 또는
            <br />
            브랜드 용어로 구성된 도메인으로
            <br />
            Web3환경에서 브랜딩 및 마케팅에활용되고 있습니다.
          </SubTitle>
          <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
        </>
      ) : (
        <>
          <SubTitle>
            프리미엄 도메인은
            <br />
            짧고 눈길을 끄는 키워드 또는 브랜드 용어로 구성된 도메인으로
            <br />
            Web3 환경에서 브랜딩 및 마케팅에 활용되고 있습니다.
          </SubTitle>
          <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
        </>
      )}
      <Img
        alt="pricing-cta-avatar"
        src={
          isMobile
            ? "/images/pages/banners/banner4_web3_mobile.svg"
            : "/images/pages/banners/banner4_web3_4.svg"
        }
      />
    </Banner>
  );
};

export default PreImg;
