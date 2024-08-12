import React from "react";
import { Typography, Box, styled, useMediaQuery, Theme } from "@mui/material";

const Caption = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  lineHeight: "36px",
  fontSize: "19px !important",
  fontWeight: 400,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "17px !important",
    lineHeight: "20px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontWeight: 400,
    textAlign: "center",
    fontSize: "16px !important",
    lineHeight: "30px",
  },
}));

const Img = styled("img")(({ theme }: { theme: any }) => ({
  position: "relative",
  width: "100%",
  marginBottom: 55,
  [theme.breakpoints.down("xl")]: {
    marginBottom: 45,
  },
  [theme.breakpoints.down("xlc")]: {
    marginBottom: 35,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: 20,
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

const NFT = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box>
      <Img
        alt="pricing-cta-avatar"
        src="/images/pages/banners/banner2_web3.svg"
      />
      <SubTitle>Web3 서비스 주소로 활용</SubTitle>
      {isMobile ? (
        <Caption>
          가상자산 지갑주소 뿐만 아니라,
          <br />
          개인이나 기업의 디지털 아이덴티티,
          <br />
          Web3 서비스 주소로도 활용 가능합니다.
          <br />
          추가로 Web3 도메인은
          <br />
          실용적인 NFT로서 주목받고 있으며,
          <br />
          NFT 마켓플레이스에서 판매도 가능합니다.
        </Caption>
      ) : (
        <Caption>
          가상자산 지갑주소 뿐만 아니라,
          <br />
          개인이나 기업의 디지털 아이덴티티, Web3 서비스 주소로도 활용
          가능합니다.
          <br />
          추가로 Web3 도메인은 실용적인 NFT로서 주목받고 있으며,
          <br />
          NFT 마켓플레이스에서 판매도 가능합니다.
        </Caption>
      )}
    </Box>
  );
};

export default NFT;
