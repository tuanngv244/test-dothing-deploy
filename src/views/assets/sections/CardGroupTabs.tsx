import React, { useState, useMemo } from "react";
import { styled, Grid, Box, useMediaQuery, Theme } from "@mui/material";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import CardImg from "../components/cards/CardImg";

const CardGroupTabs = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { i18n } = useTranslation();

  const spacing = useMemo(() => {
    if (isDesktop) return 6;

    if (isTablet) return 5;

    return 6;
  }, []);

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} sm={4}>
        <CardImg
          imgSrc="/images/pages/home/web3_id.svg"
          label="Web3 ID"
          elementDesk={
            <>
              Web3 환경의 개인 디지털 아이덴티티로
              <br />
              다양한 서비스 로그인 위한 ID로 활용
            </>
          }
          elementMobile={
            <>
              Web3 환경의
              <br />
              개인 디지털 아이텐티티로
              <br />
              다양한 서비스 로그인 위한 ID로 활용
            </>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardImg
          imgSrc="/images/pages/home/web3.svg"
          label="Web3 site URL"
          width={"270px"}
          elementDesk={
            <>
              Web3 사이트에서 도메인으로 사용 가능하며
              <br />
              검색 노출도 가능
            </>
          }
          elementMobile={
            <>
              Web3 사이트 구축 시<br />
              도메인으로 사용 가능하며
              <br />
              검색 노출도 가능
            </>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardImg
          imgSrc="/images/pages/home/web3_coin.svg"
          label="Domain invest"
          width={"190px"}
          elementDesk={
            <>
              Web3 도메인의 가치 상승 시<br />
              트레이드를 통한 수익 창출 기대
            </>
          }
          elementMobile={
            <>
              Web3 도메인의 가치 상승 시<br />
              트레이드를 통한 수익 창출 기대
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default CardGroupTabs;
