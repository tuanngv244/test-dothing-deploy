import React from "react";
import Image from "next/image";
import { Box, Grid, Typography, styled, Theme, useTheme } from "@mui/material";
import Wrapper from "../sections/wrapper-section";
import BreadcrumbLink from "@/views/assets/components/breadcrumb/BreadcrumbLink";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import Translations from "../../translations";

const BannerStyle = styled(Box)(
  ({ theme, page }: { theme: Theme; page: string }) => ({
    height: ["web3", "find_out", "insight", "customer-support"].includes(page)
      ? "100px"
      : "100px",
    marginLeft: "-1rem",
    marginRight: "-1rem",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      minHeight: "120px",
      height: "100%",
    },
  })
);

const ContentBanner = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  display: "flex",
  height: "100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ContentSearch = styled(Box)(({ theme }: { theme: any }) => ({
  position: "relative",
  display: "table",
  margin: "auto",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("xlc")]: {
    h2: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1rem",
      marginBottom: "1rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    h2: {
      marginTop: "1.2rem",
      fontSize: "36px",
    },
    h4: {
      fontSize: "0.6rem",
      marginBottom: "0",
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "rgb(255 255 255 / 100%)",
  fontSize: "25px !important",
  fontWeight: 700,
  textAlign: "center",
  marginTop: "1.5rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "28px !important",
    lineHeight: "36px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "23px !important",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px !important",
    lineHeight: "32px",
    position: "relative",
    marginTop: "3.5rem",
    marginBottom: "1rem",
  },
}));

const BreadcrumbBox = styled(Box)(({ theme }: { theme: any }) => ({
  ".MuiBreadcrumbs-root": {
    position: "absolute",
    top: "1.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    [theme.breakpoints.down("xlc")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
}));

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({}));

type BannerDomainProps = {
  title?: string;
  page: any;
  type?: string;
};

const BannerDomain = ({ title = "", page, type }: BannerDomainProps) => {
  const theme = useTheme();

  return (
    <Wrapper bg={theme.palette.primary.dark} maxWidth={"100%"}>
      <BannerStyle page={page} theme={theme}>
        <BoxWrapper width={WIDTH_MEDIUM}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <BreadcrumbBox>
                <BreadcrumbLink page={page} type={type} />
              </BreadcrumbBox>
            </Grid>
          </Grid>
        </BoxWrapper>
        <ContentBanner>
          <ContentSearch>
            <Title>
              {page ? <Translations text={`BANNER.${page}`} /> : ""}
            </Title>
          </ContentSearch>
        </ContentBanner>
      </BannerStyle>
    </Wrapper>
  );
};

export default BannerDomain;
