import React from "react";
import { Typography, Box, styled, useMediaQuery, Theme } from "@mui/material";

const Caption = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  lineHeight: "36px",
  fontSize: "20px !important",
  fontWeight: 400,
  marginBottom: 50,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px !important",
    lineHeight: "20px",
    marginTop: 50,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 400,
    textAlign: "center",
    fontSize: "16px !important",
    lineHeight: "30px",
  },
}));

const Img = styled("img")(({ theme }: { theme: any }) => ({
  position: "relative",
  marginBottom: 50,
  marginTop: 20,
  width: "97%",
  marginLeft: "1.2rem",
  [theme.breakpoints.down("xl")]: {
    marginBottom: 45,
  },
  [theme.breakpoints.down("xlc")]: {
    marginBottom: 35,
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    marginLeft: "0",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 25,
    marginBottom: 30,
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "36px",
  fontSize: "32px !important",
  fontWeight: 900,
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px !important",
    lineHeight: 1,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "25px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0.7rem",
    textAlign: "center",
    fontSize: "20px !important",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Web3Intro = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box>
      <Img
        alt="pricing-cta-avatar"
        src="/images/pages/banners/banner1_web3.svg"
      />
      <SubTitle>가상자산 거래를 위한 예금자명 역할</SubTitle>
      <Caption>
        Web3 도메인은 은행계좌의 ‘예금자명’과 같은 역할을 합니다.
        <br />
        즉, ‘예금자명=도메인명’이 됨에 따라,
        <br />
        가상자산 거래, 지갑주소 공유 등에 적용하여
        <br />
        편리하고 안전하게 사용할 수 있습니다.
      </Caption>
    </Box>
  );
};

export default Web3Intro;
