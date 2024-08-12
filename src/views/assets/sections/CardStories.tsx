import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  styled,
  Grid,
  Box,
  useMediaQuery,
  Theme,
  Typography,
  Button,
} from "@mui/material";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import CardText3 from "../components/cards/CardText3";
import { WIDTH_MEDIUM } from "@/@core/configs";

const GridStories = styled(Grid)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  boxShadow: "none",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  height: 50,
  width: 266,
  textTransform: "initial",
  marginTop: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 20,
    height: 56,
    width: 276,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "24px !important",
  lineHeight: "32px",
  fontWeight: 500,
  color: "#544e5a",
  marginTop: "16px",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
  },
}));

const CardStories = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { t } = useTranslation();

  const spacing = useMemo(() => {
    if (isDesktop) return 10.5;

    if (isTablet) return 3.5;

    return 5;
  }, []);

  return (
    <GridStories
      container
      maxWidth={800}
      margin={"auto"}
      spacing={isMobile ? 0 : spacing}
      gap={isMobile ? "16px" : 0}
    >
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          imgSrc="/images/pages/construction/cj1.png"
          width={"250px"}
          label={<Label variant="h4">{t("HOME_PAGE.cjLogistics")}</Label>}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          title={
            <Label variant="h4">{t("HOME_PAGE.starbucksBusanCenter")}</Label>
          }
          label="Web3 site URL"
          imgSrc="/images/pages/construction/starbucks.png"
          width={"250px"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          title={
            <Label variant="h4">
              {t("HOME_PAGE.coupangIncheonLogisticCenter")}
            </Label>
          }
          label="Domain invest"
          imgSrc="/images/pages/construction/coupang.png"
          width={"250px"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          title={
            <Label variant="h4">
              {t("HOME_PAGE.oliveYoungLogisticCenter")}
            </Label>
          }
          label="Domain invest"
          imgSrc="/images/pages/construction/olive.png"
          width={"250px"}
        />
      </Grid>
      <Grid item xs={12} md={12} textAlign={"center"}>
        <Link href="/construction-example" passHref>
          <ButtonStyle variant="contained" size="large">
            {t("COMMON.viewAll")}
          </ButtonStyle>
        </Link>
      </Grid>
    </GridStories>
  );
};

export default CardStories;
