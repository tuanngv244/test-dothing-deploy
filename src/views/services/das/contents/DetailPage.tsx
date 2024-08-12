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

const StepContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  marginTop: "30px",
  position: "relative",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

const StepList = styled("h6")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 2,
  maxWidth: "50%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const StepDotted = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  width: "45px",
  minWidth: "45px",
  height: "45px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  color: theme.palette.common.white,
  lineHeight: "28px",
  fontWeight: "600",
  position: "relative",
  zIndex: 2,
}));

const StepItem = styled("h6")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "20px",
  paddingBottom: "45px",
  position: "relative",
  "&:not(:last-child)": {
    "&:after": {
      content: `""`,
      height: "100%",
      width: "2px",
      borderLeft: "2px dashed #C1272D",
      display: "block",
      position: "absolute",
      left: "21px",
    },
  },
}));
const StepTitle = styled("h6")(({ theme }) => ({
  fontSize: "20px",
  color: theme.palette.common.black,
  lineHeight: "28px",
  fontWeight: "600",
}));
const StepDescription = styled("p")(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.common.black,
  lineHeight: "20px",
  fontWeight: 400,
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

const SymbolItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px",
  padding: "20px",
}));
const SymbolImage = styled("img")(({ theme }) => ({
  width: "60px",
  height: "60px",
}));
const SymbolTitle = styled("h6")(({ theme }) => ({
  fontSize: "28px",
  color: theme.palette.common.black,
  lineHeight: "36px",
  fontWeight: "600",
  textAlign: "center",
}));
const SymbolDescription = styled("p")(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.common.black,
  lineHeight: "20px",
  maxWidth: "350px",
  textAlign: "center",
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
          <Title>{t("DAS_PAGE.whatIsDas?")}</Title>
          <DashContent>
            <DashDescription>{t("DAS_PAGE.whatIsDasAnswer")}</DashDescription>
            <img src="/images/pages/services/img11.png" />
          </DashContent>
          <Title sx={{ marginTop: "3rem" }}>{t("DAS_PAGE.howItWork")}</Title>
          <StepContent>
            <StepList>
              <StepItem
                sx={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
              >
                <StepDotted>1</StepDotted>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <StepTitle>{t("DAS_PAGE.productScanning")}</StepTitle>
                  <StepDescription>
                    {t("DAS_PAGE.productScanningContent")}
                  </StepDescription>
                </Box>
              </StepItem>
              <StepItem
                sx={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
              >
                <StepDotted>2</StepDotted>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <StepTitle>{t("DAS_PAGE.productPicking")}</StepTitle>
                  <StepDescription>
                    {t("DAS_PAGE.productPickingContent")}
                  </StepDescription>
                </Box>
              </StepItem>
              <StepItem
                sx={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
              >
                <StepDotted>3</StepDotted>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <StepTitle>{t("DAS_PAGE.lineTransferAutomation")}</StepTitle>
                  <StepDescription>
                    {t("DAS_PAGE.lineTransferAutomationContent")}
                  </StepDescription>
                </Box>
              </StepItem>
              <StepItem
                sx={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
              >
                <StepDotted>4</StepDotted>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <StepTitle>
                    {t("DAS_PAGE.inspectionPackagingAutomation")}
                  </StepTitle>
                  <StepDescription>
                    {t("DAS_PAGE.inspectionPackagingAutomationContent")}
                  </StepDescription>
                </Box>
              </StepItem>
              <StepItem
                sx={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
              >
                <StepDotted>5</StepDotted>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <StepTitle>{t("DAS_PAGE.productDelivery")}</StepTitle>
                  <StepDescription>
                    {t("DAS_PAGE.productDeliveryContent")}
                  </StepDescription>
                </Box>
              </StepItem>
            </StepList>
            <ImgContent>
              <img src="/images/pages/services/img2_2.jpg" />
              <img src="/images/pages/services/img2_3.jpg" />
            </ImgContent>
          </StepContent>
          <Divider sx={{ margin: "2rem 0" }}></Divider>
          <Title>{t("DPS_PAGE.features")}</Title>
          <Box>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <SymbolItem>
                  <SymbolImage src="/images/pages/services/speed-meter.png" />
                  <SymbolTitle>{t("DAS_PAGE.speed")}</SymbolTitle>
                  <SymbolDescription>
                    {t("DAS_PAGE.speedContent")}
                  </SymbolDescription>
                </SymbolItem>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SymbolItem>
                  <SymbolImage src="/images/pages/services/clock.png" />
                  <SymbolTitle>{t("DAS_PAGE.realTimeTracking")}</SymbolTitle>
                  <SymbolDescription>
                    {t("DAS_PAGE.realTimeTrackingContent")}
                  </SymbolDescription>
                </SymbolItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <SymbolItem>
                  <SymbolImage src="/images/pages/services/flexibility.png" />
                  <SymbolTitle>{t("DAS_PAGE.flexibility")}</SymbolTitle>
                  <SymbolDescription>
                    {t("DAS_PAGE.flexibilityContent")}
                  </SymbolDescription>
                </SymbolItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <SymbolItem
                  sx={{
                    padding: i18n.language === "en" ? "20px 0 0 0" : "20px",
                  }}
                >
                  <SymbolImage src="/images/pages/services/data.png" />
                  <SymbolTitle>
                    {t("DAS_PAGE.dataDrivenDecisionMaking")}
                  </SymbolTitle>
                  <SymbolDescription>
                    {t("DAS_PAGE.dataDrivenDecisionMakingContent")}
                  </SymbolDescription>
                </SymbolItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <SymbolItem>
                  <SymbolImage src="/images/pages/services/system-update.png" />
                  <SymbolTitle>{t("DAS_PAGE.scalability")}</SymbolTitle>
                  <SymbolDescription>
                    {t("DAS_PAGE.scalabilityContent")}
                  </SymbolDescription>
                </SymbolItem>
              </Grid>
            </Grid>
          </Box>
        </Desc>
      </CardContent>
    </CardItem>
  );
};

export default DetailPage;
