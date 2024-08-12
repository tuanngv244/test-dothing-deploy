import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  styled,
  Grid,
  Box,
  useMediaQuery,
  Theme,
  Button,
  Typography,
} from "@mui/material";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import CardText3 from "../components/cards/CardText3";
import { WIDTH_MEDIUM } from "@/@core/configs";

const ButtonStyle = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  boxShadow: "none",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  height: 50,
  width: 266,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 20,
    height: 56,
    width: 276,
    marginTop: "2rem",
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

const CardReg = () => {
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

    if (isTablet) return 4.5;

    return 5;
  }, []);

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/cj1.png"
          width={"227px"}
          label={<Label variant="h4">{t("HOME_PAGE.cjLogistics")}</Label>}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          label={
            <Label variant="h4">{t("HOME_PAGE.starbucksBusanCenter")}</Label>
          }
          imgSrc="/images/pages/construction/starbucks.png"
          width={"250px"}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          title={
            <Label variant="h4">
              {t("HOME_PAGE.coupangIncheonLogisticCenter")}
            </Label>
          }
          label="Domain invest"
          imgSrc="/images/pages/construction/coupang.png"
          width={"222px"}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          label={
            <Label variant="h4">
              {" "}
              {t("HOME_PAGE.oliveYoungLogisticCenter")}
            </Label>
          }
          imgSrc="/images/pages/construction/olive.png"
          width={"292px"}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/cj2.png"
          width={"236px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.cjFreshwayYangsanGyeongnam")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/fila.png"
          width={"250px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.filaIcheonLogisticsCenter")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/atom.png"
          width={"180px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.baekamAtomyLogistic")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/cj7.png"
          width={"242px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.dureCustomerCoOperativeLogisticsCenter")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/iherb.png"
          width={"250px"}
          label={
            <Label variant="h4">
              <Box
                component={"div"}
                dangerouslySetInnerHTML={{
                  __html: t(
                    "INSTRUCTION_PAGE.incheonAirportIHerbLogisticsCenter"
                  ),
                }}
              />
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/cj8.png"
          width={"250px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.harimIksanLogisticCenter")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/crocs.png"
          width={"250px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.CrocsYonginCenter")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/paiks.png"
          width={"250px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.baekdabangLogisticsCenter")}
            </Label>
          }
        />
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/hy.png"
          width={"250px"}
          label={<Label variant="h4">{t("INSTRUCTION_PAGE.hy")}</Label>}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/huyndai.png"
          width={"250px"}
          label={<Label variant="h4">{t("INSTRUCTION_PAGE.huyndai")}</Label>}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/naver.png"
          width={"250px"}
          label={<Label variant="h4">{t("INSTRUCTION_PAGE.naver")}</Label>}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/partsMall.png"
          width={"250px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.partsMallLogisticCenter")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/office-depot.png"
          width={"250px"}
          label={
            <Label variant="h4">{t("INSTRUCTION_PAGE.officeDepot")}</Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/clio.png"
          width={"250px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.clioLogisticsCenter")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/joongwon.png"
          width={"250px"}
          label={<Label variant="h4">{t("INSTRUCTION_PAGE.joongwon")}</Label>}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/hwanin.png"
          width={"250px"}
          label={
            <Label variant="h4">
              {t("INSTRUCTION_PAGE.hwaninPharmaceutical")}
            </Label>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/cj10.png"
          width={"250px"}
          label={
            <Label variant="h4">{t("INSTRUCTION_PAGE.pyeonghwaIs")}</Label>
          }
        />
      </Grid>

      <Grid item xs={12} sm={4} md={4}></Grid>

      <Grid item xs={12} sm={4} md={4}>
        <CardText3
          imgSrc="/images/pages/construction/daewon.png"
          width={"250px"}
          label={<Label variant="h4">{t("INSTRUCTION_PAGE.daewon")}</Label>}
        />
      </Grid>

      <Grid item xs={12} sm={4} md={4}></Grid>
    </Grid>
  );
};

export default CardReg;
