import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  styled,
  Box,
  Stack,
  Divider,
  Grid,
  TypeBackground,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Desc = styled(Box)(({ theme }: { theme: any }) => ({
  color: theme.palette.common.caption,
  fontWeight: 400,
  fontSize: 24,
  lineHeight: "42px",
  whiteSpace: "normal",
  img: {
    maxWidth: "100%",
  },
  "&:after": {
    content: '""',
    display: "block",
    clear: "both",
  },
  [theme.breakpoints.down("xl")]: {
    lineHeight: "35px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    color: "rgba(58, 53, 65, 0.87)",
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 400,
  },
}));

const CardItem = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  minHeight: 470,
  position: "relative",
  boxShadow: "none",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const DashContent = styled(Box)(({ theme }) => ({
  border: "1px dashed #C1272D",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const DashDescription = styled("p")(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.common.black,
  lineHeight: "20px",
  maxWidth: "550px",
}));

const GridContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  gap: "20px",
  marginTop: "3rem",
  position: "relative",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const BoxLeft = styled(Grid)(({ theme }) => ({
  borderRadius: "10px",
  overflow: "hidden",
  width: "50%",
  "& .MuiGrid-item": {
    "&:not(:last-child)": {
      borderBottom: "1px solid #717171",
    },
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const ImgContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    alignItems: "stretch",
    gap: "10px",
    img: {
      "&:first-child": {
        width: "45%",
      },
      "&:last-child": {
        width: "calc(55% - 10px)",
      },
    },
  },
}));

const GridTitle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "15px",
  height: "100%",
  backgroundColor: theme.palette.primary.dark,
  "& .dotted": {
    width: "24px",
    minWidth: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  "& .label": {
    fontSize: "16px",
    lineHeight: "20px",
    color: theme.palette.common.white,
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const GridDescription = styled("p")(({ theme }) => ({
  padding: "15px",
  fontSize: "14px",
  lineHeight: "20px",
  backgroundColor: "#f6d1d2",
}));

const Title = styled("h3")(({ theme }) => ({
  borderLeft: "4px solid #C1272D",
  display: "inline-block",
  borderColor: theme.palette.primary.main,
  padding: "5px 150px 5px 10px",
  background: "linear-gradient(to left, rgba(255,0,0,0), #f6d2d3)",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    padding: "5px 10px",
  },
}));

const SymbolContent = styled(Grid)(({ theme }) => ({
  marginTop: "2rem",
  gap: "15px",
  padding: "20px 15px",
  backgroundColor: "#F5F7FA",
  display: "flex",
  alignItems: "stretch",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const SymbolCard = styled(Grid)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: theme.palette.common.white,
  borderRadius: "10px",
  gap: "10px",
  padding: "15px",
  "& .img": {
    width: "130px",
    height: "120px",
  },
  "& .title": {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 700,
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  "& .description": {
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    color: theme.palette.text.link,
  },
}));

type DetailPageProps = {
  page: string;
  category: string;
  data: any;
};

const DetailPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <CardItem>
      <CardContent sx={{ p: 0 }}>
        <Desc>
          <Title>{t("DPS_PAGE.whatIsDps?")}</Title>
          <DashContent>
            <DashDescription>{t("DPS_PAGE.whatIsDpsAnswer")}</DashDescription>
            <img src="/images/pages/services/img1.png" />
          </DashContent>
          <Title sx={{ marginTop: "3rem" }}>{t("DPS_PAGE.howItWork")}</Title>
          <GridContent>
            <BoxLeft container>
              <Grid item xs={5} sm={4}>
                <GridTitle>
                  <div className="dotted">1</div>
                  <p className="label">
                    {t("DPS_PAGE.receiveOrderInformation")}{" "}
                  </p>
                </GridTitle>
              </Grid>
              <Grid item xs={7} sm={8}>
                <GridDescription>
                  {t("DPS_PAGE.receiveOrderInformationAnswer")}
                </GridDescription>
              </Grid>
              <Grid item xs={5} sm={4}>
                <GridTitle>
                  <div className="dotted">2</div>
                  <p className="label">
                    {t("DPS_PAGE.productLocationTracking")}{" "}
                  </p>
                </GridTitle>
              </Grid>
              <Grid item xs={7} sm={8}>
                <GridDescription>
                  {t("DPS_PAGE.productLocationTrackingAnswer")}
                </GridDescription>
              </Grid>
              <Grid item xs={5} sm={4}>
                <GridTitle>
                  <div className="dotted">3</div>
                  <p className="label">
                    {t("NEBULA_PLATFORM_PAGE.pickingOperationGuide")}
                  </p>
                </GridTitle>
              </Grid>
              <Grid item xs={7} sm={8}>
                <GridDescription>
                  {t("DPS_PAGE.pickingOperationGuideAnswer")}
                </GridDescription>
              </Grid>
              <Grid item xs={5} sm={4}>
                <GridTitle>
                  <div className="dotted">4</div>
                  <p className="label">
                    {" "}
                    {t("NEBULA_PLATFORM_PAGE.checkAndUpdateTasks")}{" "}
                  </p>
                </GridTitle>
              </Grid>
              <Grid item xs={7} sm={8}>
                <GridDescription>
                  {t("DPS_PAGE.checkAndUpdateTasksAnswer")}
                </GridDescription>
              </Grid>
              <Grid item xs={5} sm={4}>
                <GridTitle>
                  <div className="dotted">5</div>
                  <p className="label">
                    {" "}
                    {t("NEBULA_PLATFORM_PAGE.packagingAndShipping")}{" "}
                  </p>
                </GridTitle>
              </Grid>
              <Grid item xs={7} sm={8}>
                <GridDescription>
                  {t("DPS_PAGE.packagingAndShippingAnswer")}
                </GridDescription>
              </Grid>
            </BoxLeft>
            <ImgContent>
              <img src="/images/pages/services/img2_4.jpg" />
              <img src="/images/pages/services/img2_5.jpg" />
            </ImgContent>
          </GridContent>
          <Divider sx={{ margin: "2rem 0" }}></Divider>
          <Title>{t("DPS_PAGE.features")}</Title>
          <SymbolContent>
            <SymbolCard>
              <img
                className="img"
                src="/images/pages/services/dps-symbol-1.png"
              />
              <p className="title">{t("DPS_PAGE.improvedAccuracy")}</p>
              <p className="description">
                {t("DPS_PAGE.improvedAccuracyContent")}
              </p>
            </SymbolCard>
            <SymbolCard>
              <img
                className="img"
                src="/images/pages/services/dps-symbol-2.png"
              />
              <p className="title">{t("DPS_PAGE.improveWorkEfficiency")}</p>
              <p className="description">
                {t("DPS_PAGE.improveWorkEfficiencyContent")}
              </p>
            </SymbolCard>
            <SymbolCard>
              <img
                className="img"
                src="/images/pages/services/dps-symbol-3.png"
              />
              <p className="title">
                {t("DPS_PAGE.realTimeInventoryManagement")}
              </p>
              <p className="description">
                {t("DPS_PAGE.realTimeInventoryManagementContent")}
              </p>
            </SymbolCard>
            <SymbolCard>
              <img
                className="img"
                src="/images/pages/services/dps-symbol-4.png"
              />
              <p className="title">{t("DPS_PAGE.costSavings")}</p>
              <p className="description">{t("DPS_PAGE.costSavingsContent")}</p>
            </SymbolCard>
            <SymbolCard>
              <img
                className="img"
                src="/images/pages/services/dps-symbol-5.png"
              />
              <p className="title">{t("DPS_PAGE.improveCustomerService")}</p>
              <p className="description">
                {t("DPS_PAGE.improveCustomerServiceContent")}
              </p>
            </SymbolCard>
          </SymbolContent>
        </Desc>
      </CardContent>
    </CardItem>
  );
};

export default DetailPage;
