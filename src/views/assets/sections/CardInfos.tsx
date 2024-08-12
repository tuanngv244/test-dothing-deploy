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
import CardText5 from "../components/cards/CardText5";
import Tower from "@/@core/components/icons/Tower";
import PhoneLarge from "@/@core/components/icons/PhoneLarge";
import Train from "@/@core/components/icons/Train";
import Bus from "@/@core/components/icons/Bus";

import { WIDTH_MEDIUM } from "@/@core/configs";

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: "0.5rem",
  fontSize: "40px !important",
  span: {
    color: theme.palette.primary.main,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "48px !important",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "44px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px !important",
    lineHeight: "32px",
  },
}));

const CardInfos = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { i18n } = useTranslation();

  const spacing = useMemo(() => {
    if (isDesktop) return 7;

    if (isTablet) return 5;

    return 6;
  }, []);

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} sm={6} md={3}>
        <CardText5
          imgSrc="/images/pages/home/web3_id.svg"
          eleIcon={<Tower />}
          label={<>주소</>}
          elementDesk={
            <>[14348]경기도 광명시 새빛공원로 67 광명역자이타워 B동 510호</>
          }
          elementMobile={
            <>[14348]경기도 광명시 새빛공원로 67 광명역자이타워 B동 510호</>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardText5
          imgSrc="/images/pages/home/web3.svg"
          eleIcon={<PhoneLarge />}
          label="대표전화 / 팩스"
          width={"270px"}
          elementDesk={
            <>
              02 - 851 - 9908
              <br />
              02 - 851 - 9909
            </>
          }
          elementMobile={
            <>
              02 - 851 - 9908
              <br />
              02 - 851 - 9909
            </>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardText5
          imgSrc="/images/pages/home/web3_coin.svg"
          eleIcon={<Train />}
          label="지하철 이용시"
          width={"190px"}
          elementDesk={<>광명역 5번 출구 도보 3분 (580m)</>}
          elementMobile={<>광명역 5번 출구 도보 3분 (580m)</>}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardText5
          imgSrc="/images/pages/home/web3_coin.svg"
          eleIcon={<Bus />}
          label="버스 이용시"
          width={"190px"}
          elementDesk={
            <>
              광명역 (도보 3분) 일반 버스 /간선 버스/지선 버스/직행 버스/공항
              버스
            </>
          }
          elementMobile={
            <>
              광명역 (도보 3분) 일반 버스 /간선 버스/지선 버스/직행 버스/공항
              버스
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default CardInfos;
