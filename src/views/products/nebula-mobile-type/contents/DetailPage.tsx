import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  styled,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Grid } from "mdi-material-ui";

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
const DashContent = styled(Box)(({ theme }) => ({
  marginTop: "3rem",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1.5rem",
  },
}));
const DashItem = styled(Box)(({ theme }) => ({
  padding: "12px 35px",
  border: "1px dashed #C1272D",
  borderRadius: "10px",
  backgroundColor: "#F5F7FA",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const DottedRed = styled(Box)(({ theme }) => ({
  width: "8px",
  height: "8px",
  minWidth: "8px",
  minHeight: "8px",
  backgroundColor: theme.palette.primary.main,
  transform: "rotate(45deg)",
  display: "block",
}));
const BoxDivider = styled(Divider)(({ theme }) => ({
  margin: "50px 0",
  [theme.breakpoints.down("sm")]: {
    margin: "35px 0 45px 0",
  },
}));
const ConfigContent = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: "1.5rem",
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
  "& .wrap": {
    width: "800px",
    height: "700px",
    margin: "auto",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.5rem",
  },
}));
const UsageContent = styled(Box)(({ theme }) => ({
  marginTop: "50px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  img: {
    width: "50%",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginTop: "1.5rem",
    img: {
      width: "100%",
    },
  },
}));

type DetailPageProps = {
  page: string;
  category: string;
  data: any;
};

const DetailPage = () => {
  const { t } = useTranslation();

  return (
    <CardItem>
      <CardContent sx={{ p: 0 }}>
        <Desc>
          <Title>특장점</Title>
          <DashContent>
            <DashItem>
              이동형 랙, 대차 등 장소에 구애받지 않는 물류표시기 운영환경
            </DashItem>
            <DottedRed></DottedRed>
            <DashItem>
              일반형 보조배터리 사용으로 충전 편리 및 교체 용이, 가벼운 무게
            </DashItem>
            <DottedRed></DottedRed>
            <DashItem>사용환경 및 목적에 따라 최적의 구축환경 적용</DashItem>
          </DashContent>

          <BoxDivider />

          <Title>기본구성</Title>

          <ConfigContent>
            <Box component={"div"} className="wrap">
              <img src="/images/pages/products/nebula-mobile-type-img-1.jpg" />
            </Box>
          </ConfigContent>
          <BoxDivider />

          <Title>사용 시나리오</Title>
          <UsageContent>
            <img src="/images/pages/products/nebula-mobile-type-img-2.jpg" />
            <img src="/images/pages/products/nebula-mobile-type-img-3.jpg" />
          </UsageContent>
        </Desc>
      </CardContent>
    </CardItem>
  );
};

export default DetailPage;
