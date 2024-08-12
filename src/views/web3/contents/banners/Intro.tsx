import React from "react";
import { Typography, Box, styled, useMediaQuery, Theme } from "@mui/material";

const Banner = styled(Box)(({ theme }) => ({
  marginTop: 200,
  marginBottom: 215,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: 200,
    marginBottom: 180,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 50,
    marginBottom: 0,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 18,
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
    lineHeight: "20px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Caption = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  lineHeight: "36px",
  fontSize: "20px !important",
  fontWeight: 400,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px !important",
    lineHeight: "20px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: "16px !important",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Intro = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Banner>
      <SubTitle>읽기 쉬운 문자 형태의 Web3 주소</SubTitle>
      {isMobile ? (
        <Caption>
          가상자산 거래에서
          <br /> 사용되는 42자의 복잡한 블록체인 주소를
          <br />
          누구나 읽기 쉬운 문자로
          <br /> 변환시킨 Web3 주소 입니다.
        </Caption>
      ) : (
        <Caption>
          가상자산 거래에서 사용되는 42자의 복잡한 블록체인 주소를
          <br /> 누구나 읽기 쉬운 문자로 변환시킨 Web3 주소 입니다.
        </Caption>
      )}
    </Banner>
  );
};

export default Intro;
