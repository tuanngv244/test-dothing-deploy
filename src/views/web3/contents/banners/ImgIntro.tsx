import React from "react";
import { Box, styled } from "@mui/material";

const Img = styled("img")(({ theme }: { theme: any }) => ({
  position: "relative",
  width: "97%",
  marginBottom: 50,
  marginTop: 100,
  marginLeft: "1.2rem",
  [theme.breakpoints.down("xl")]: {
    marginBottom: 45,
  },
  [theme.breakpoints.down("xlc")]: {
    marginBottom: 35,
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: 25,
    marginTop: 70,
    width: "100%",
    marginLeft: "0",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 25,
  },
}));

const ImgIntro = () => {
  return (
    <Box>
      <Img
        alt="pricing-cta-avatar"
        src="/images/pages/banners/banner3_web3.svg"
      />
    </Box>
  );
};

export default ImgIntro;
