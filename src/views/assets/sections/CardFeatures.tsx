import React, { useState, useMemo } from "react";
import {
  styled,
  Grid,
  Box,
  useMediaQuery,
  Theme,
  Typography,
} from "@mui/material";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import CardImg from "../components/cards/CardImg";
import CardText from "../components/cards/CardText";
import { WIDTH_MEDIUM } from "@/@core/configs";

const Text = styled(Typography)(({ theme }) => ({
  color: "#717171",
  fontSize: "18px !important",
  fontWeight: 400,
  textAlign: "left",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "18px !important",
    lineHeight: "28px",
  },
  [theme.breakpoints.down("lg")]: {
    lineHeight: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px !important",
    lineHeight: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px !important",
    lineHeight: "28px",
  },
}));

const CardFeatures = () => {
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

    if (isTablet) return 5;

    return 6;
  }, []);

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} sm={6}>
        <CardText
          imgSrc="/images/pages/home/web3.svg"
          label={
            <>
              {isMobile ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("HOME_PAGE.supplyOfDpsDasSolutionMobile"),
                  }}
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("HOME_PAGE.supplyOfDpsDasSolution"),
                  }}
                />
              )}
            </>
          }
          width={"270px"}
          elementDesk={<>{t("HOME_PAGE.NEBULAPickSolution")}</>}
          elementMobile={<>{t("HOME_PAGE.NEBULAPickSolution")}</>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardText
          imgSrc="/images/pages/home/web3_coin.svg"
          label={t("HOME_PAGE.supplyOfLogisticRelatedEquipment")}
          width={"190px"}
          elementDesk={
            <Text>
              <Text>- {t("HOME_PAGE.lightweightRackSlidingRack")}</Text>
              <Text>- {t("HOME_PAGE.itEquipment")}</Text>
              <Text>- {t("HOME_PAGE.electricalNetwork")}</Text>
            </Text>
          }
          elementMobile={
            <Text>
              <Text>- {t("HOME_PAGE.lightweightRackSlidingRack")}</Text>
              <Text>- {t("HOME_PAGE.itEquipment")}</Text>
              <Text>- {t("HOME_PAGE.electricalNetwork")}</Text>
            </Text>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardText
          imgSrc="/images/pages/home/web3_id.svg"
          label={<>{t("HOME_PAGE.supplyOfOEM")}</>}
          elementDesk={
            <div
              dangerouslySetInnerHTML={{
                __html: t("HOME_PAGE.supplyProductsWithTrademarksRequested"),
              }}
            />
          }
          elementMobile={
            <div
              dangerouslySetInnerHTML={{
                __html: t("HOME_PAGE.supplyProductsWithTrademarksRequested"),
              }}
            />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardText
          imgSrc="/images/pages/home/web3_coin.svg"
          label={t("HOME_PAGE.odmBusiness")}
          width={"190px"}
          elementDesk={
            <Text>
              {t("HOME_PAGE.developmentProduction")}
              <Text>- {t("HOME_PAGE.embededSystem")}</Text>
              <Text>- {t("HOME_PAGE.iotLinkedSolution")}</Text>
              <Text>- {t("HOME_PAGE.wiredWirelessTerminal")}</Text>
              <Text>- {t("HOME_PAGE.sensorNetwork")}</Text>
            </Text>
          }
          elementMobile={
            <Text>
              {t("HOME_PAGE.developmentProduction")}
              <Text>- {t("HOME_PAGE.embededSystem")}</Text>
              <Text>- {t("HOME_PAGE.iotLinkedSolution")}</Text>
              <Text>- {t("HOME_PAGE.wiredWirelessTerminal")}</Text>
              <Text>- {t("HOME_PAGE.sensorNetwork")}</Text>
            </Text>
          }
        />
      </Grid>
    </Grid>
  );
};

export default CardFeatures;
