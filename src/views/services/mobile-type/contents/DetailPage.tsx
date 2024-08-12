import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  styled,
  Box,
  Stack,
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
          <h3>I. 특장점</h3>
          <p>- 이동형 랙, 대차 등 장소에 구애받지 않는 물류표시기 운영환경</p>
          <p>
            - 일반형 보조배터리 사용으로 충전 편리 및 교체 용이, 가벼운 무게
          </p>
          <p>- 사용환경 및 목적에 따라 최적의 구축환경 적용</p>
          <h3 style={{ marginTop: "2rem" }}>II. 기본구성</h3>
          <p style={{ textAlign: "center" }}>
            <img src="/images/pages/services/img11_1.png" />
          </p>
          <h3 style={{ marginTop: "2rem" }}>III. 사용 시나리오</h3>
          <Box sx={{ paddingLeft: "2.8rem" }}>
            <p style={{ fontWeight: 600 }}>1. 중소규모 공간:</p>
            <Box sx={{ paddingLeft: "1.5rem" }}>
              <p>* 운영반경 중심에 고정형 Gateway 설치</p>
              <p>* 이동형랙(표시기 및 전원부 탑재) 운영</p>
              <p>
                * Gateway 1대 당 표시기 100대 이내 운영 (설계 및 환경에 따라
                다름)
              </p>
              <p style={{ textAlign: "center", marginTop: "1rem" }}>
                <img src="/images/pages/services/img11_2.png" />
              </p>
            </Box>
            <p style={{ fontWeight: 600 }}>2. 대규모 공간:</p>
            <Box sx={{ paddingLeft: "1.5rem" }}>
              <p>* 거리제한 없음 (동일 WiFi망 구축 시)</p>
              <p>* 게이트웨이-서버간 WiFi망 사용</p>
              <p>* 이동형랙(Gateway, 표시기, 전원부 탑재)</p>
              <p style={{ textAlign: "center", marginTop: "1rem" }}>
                <img src="/images/pages/services/img11_3.png" />
              </p>
            </Box>
          </Box>
        </Desc>
      </CardContent>
    </CardItem>
  );
};

export default DetailPage;
