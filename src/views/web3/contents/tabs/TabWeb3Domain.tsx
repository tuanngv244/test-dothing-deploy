import React from "react";
import {
  Box,
  Grid,
  Divider,
  styled,
  useMediaQuery,
  Theme,
} from "@mui/material";
import Intro from "../banners/Intro";
import NFT from "../banners/NFT";
import Web3Intro from "../banners/Web3Intro";
import ImgIntro from "../banners/ImgIntro";
import Traditional from "../banners/Traditional";

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ContentStyle = styled(Box)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
  },
}));

const TabWeb3Domain = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const isDesktop = useMediaQuery((theme: any) =>
    theme.breakpoints.down("xlc")
  );

  return (
    <ContentStyle>
      <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
      <Grid container spacing={isDesktop ? 6 : 12}>
        <Grid item xs={12} md={6}>
          <Intro />
          {isMobile ? <Web3Intro /> : <NFT />}
        </Grid>
        <Grid item xs={12} md={6}>
          {isMobile ? <NFT /> : <Web3Intro />}
          <ImgIntro />
        </Grid>
        <Grid item xs={12} sx={{ pt: "10px !important" }}>
          <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
        </Grid>
        <Grid item xs={12} sx={{ pt: "10px !important" }}>
          <Traditional />
        </Grid>
      </Grid>
      <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
    </ContentStyle>
  );
};

export default TabWeb3Domain;
