import React from "react";
import {
  styled,
  Typography,
  CardContent,
  Card,
  Grid,
  Box,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import CardIcon from "../components/cards/CardIcon";

const MuiCard = styled(Card)(({ theme }) => ({
  border: 0,
  boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",
  marginBottom: theme.spacing(4.8),
  backgroundColor: theme.palette.common.white,
  borderRadius: 30,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "2.5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    marginTop: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 5,
    borderRadius: 0,
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 0,
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Label = styled(Typography)(({ theme }: { theme: any }) => ({
  color: theme.palette.text.label,
  fontSize: "36px !important",
  lineHeight: "44px",
  fontWeight: 700,
  textAlign: "center",
  marginTop: "3.2rem",
  marginBottom: "0",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px !important",
    lineHeight: "30px",
    marginTop: "1.2rem",
    marginBottom: "0",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "0.7rem",
    fontSize: "24px !important",
    lineHeight: 1,
  },
}));

const CardCtx = styled(CardContent)(({ theme }) => ({
  paddingTop: "2.1rem",
  paddingBottom: "2.1rem !important",
  textAlign: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingTop: "2rem",
    paddingBottom: "3rem !important",
  },
}));

const CardGroupFees = () => {
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("xlc"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { i18n } = useTranslation();

  return (
    <MuiCard>
      <CardCtx>
        <Grid container spacing={isDesktop ? 25 : 10}>
          <Grid item xs={12} sm={4}>
            <CardIcon
              imgSrc={
                isMobile ? "/images/pages/home/fees_2.svg" : "/images/pages/home/fees_3.svg"
              }
              width={"143px"}
              elementEn={<Label variant="h6">No {<br />} renewals cost</Label>}
              elementKr={
                <Label variant="h6">
                  <Translations text={"No renewals cost"} />
                </Label>
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardIcon
              imgSrc={
                isMobile
                  ? "/images/pages/home/gas_2.svg"
                  : "/images/pages/home/gas_3.svg"
              }
              width={"110px"}
              type={"gas"}
              elementEn={
                <Label variant="h6">
                  No gas fee Starting {<br />} in polygon
                </Label>
              }
              elementKr={
                <Label variant="h6">
                  <Translations text={"No gas fee Starting in polygon"} />
                </Label>
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardIcon
              imgSrc={
                isMobile ? "/images/pages/home/usd_2.svg" : "/images/pages/home/usd_3.svg"
              }
              width={"156px"}
              type={"domain"}
              elementEn={
                <Label variant="h6">Starting in {<br />} polygon from $5</Label>
              }
              elementKr={
                <Label variant="h6">
                  <Translations text={"Starting in polygon from $5"} />
                </Label>
              }
            />
          </Grid>
        </Grid>
      </CardCtx>
    </MuiCard>
  );
};

export default CardGroupFees;
