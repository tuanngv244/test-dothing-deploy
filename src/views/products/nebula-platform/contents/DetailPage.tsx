import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  styled,
  Box,
  Stack,
  Divider,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { renderImage } from "@/@core/utils/transform";

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
const Title = styled("h3")(({ theme }) => ({
  borderLeft: "4px solid #C1272D",
  display: "inline-block",
  whiteSpace: "pre-wrap",
  borderColor: theme.palette.primary.main,
  padding: "5px 150px 5px 10px",
  background: "linear-gradient(to left, rgba(255,0,0,0), #f6d2d3)",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    padding: "5px 10px",
  },
}));
const Description = styled("p")(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "20px",
  color: theme.palette.common.black,
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
const BoxDivider = styled(Divider)(({ theme }) => ({
  margin: "30px 0 36px 0",
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0 34px 0",
  },
}));

const ProductContent = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: "1.5rem",
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },

  "& .wrapper": {
    width: "1208px",
    height: "465px",
    margin: "auto",
    img: {
      width: "100%",
      height: "100%",
    },
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.5rem",
    "& .wrapper": {
      width: "100%",
      height: "auto",
      img: {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const LogisticContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  gap: "12px",
  border: "1px dashed #C1272D",
  borderRadius: "10px",
  padding: "20px 0",
  marginTop: "38px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "30px",
    marginTop: "24px",
  },
}));
const LogisticItem = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  position: "relative",
  padding: "20px",
  "& .bg": {
    content: `""`,
    width: "230px",
    height: "230px",
    backgroundColor: "#fdf6f6",
    borderRadius: "50%",
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    overflow: "hidden",
  },
  "& .wrap": {
    position: "relative",
    zIndex: 2,
  },
  "& .number": {
    fontSize: "64px",
    lineHeight: 1.19,
    fontWeight: 600,
    paddingLeft: "15px",
    color: theme.palette.primary.main,
  },
  "& .description": {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    color: theme.palette.common.black,
  },
  "& .name": {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 600,
    marginTop: "10px",
    color: theme.palette.common.black,
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "20px 64px",
  },
}));

type DetailPageProps = {
  page: string;
  category: string;
  data: any;
};

const DetailPage = () => {
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const logisticContents = [
    {
      name: t("NEBULA_PLATFORM_PAGE.buildAStableSystem"),
      description: t("NEBULA_PLATFORM_PAGE.buildAStableSystemContent"),
    },
    {
      name: t("NEBULA_PLATFORM_PAGE.scalability&Efficiency"),
      description: t("NEBULA_PLATFORM_PAGE.scalability&EfficiencyContent"),
    },
    {
      name: t("NEBULA_PLATFORM_PAGE.pickingOperationGuide"),
      description: t("NEBULA_PLATFORM_PAGE.pickingOperationGuideContent"),
    },
    {
      name: t("NEBULA_PLATFORM_PAGE.checkAndUpdateTasks"),
      description: t("NEBULA_PLATFORM_PAGE.checkAndUpdateTasksContent"),
    },
    {
      name: t("NEBULA_PLATFORM_PAGE.packagingAndShipping"),
      description: t("NEBULA_PLATFORM_PAGE.packagingAndShippingContent"),
    },
  ];

  return (
    <CardItem>
      <CardContent sx={{ p: 0 }}>
        <Desc>
          <Title sx={{ marginBottom: "30px" }}>
            {t("NEBULA_PLATFORM_PAGE.NEBULADpsDas")}
          </Title>
          <Description>
            {t("NEBULA_PLATFORM_PAGE.dpsDasServiceForSmallAndMedium")}
          </Description>
          <ProductContent>
            <Box component={"div"} className="wrapper">
              <img
                src={renderImage({
                  isMobile,
                  i18n,
                  suffixPath: "/images/pages/products/img",
                  mobileEn: "5-en-mobile.png",
                  mobileJa: "5-ja-mobile.png",
                  mobileKr: "5-mobile.png",
                  desktopEn: "5-en.png",
                  desktopJa: "5-ja.png",
                  desktopKr: "5.png",
                })}
                alt=""
              />
            </Box>
          </ProductContent>
          <BoxDivider></BoxDivider>
          <Title>{t("NEBULA_PLATFORM_PAGE.logisticsOperationSystem")}</Title>
          <LogisticContent>
            {logisticContents.map((item, index) => (
              <LogisticItem key={index}>
                <div className="bg"></div>
                <div className="wrap">
                  <p className="number">0{index + 1}</p>
                  <p className="name">{item.name}</p>
                  <p className="description">{item.description}</p>
                </div>
              </LogisticItem>
            ))}
          </LogisticContent>
        </Desc>
      </CardContent>
    </CardItem>
  );
};

export default DetailPage;
