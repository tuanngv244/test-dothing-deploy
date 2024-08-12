import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  styled,
  Grid,
  Box,
  useMediaQuery,
  Theme,
  Typography,
  Button,
} from "@mui/material";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import CardText3 from "@/views/assets/components/cards/CardText3";
import { WIDTH_MEDIUM } from "@/@core/configs";

const CardStories = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { i18n } = useTranslation();

  const spacing = useMemo(() => {
    if (isDesktop) return 10.5;

    if (isTablet) return 4.5;

    return 5;
  }, []);

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          imgSrc="/images/pages/construction/cj.jpg"
          width={"200px"}
          title={<Typography variant="h4">CJ대한통운</Typography>}
          label={
            <>
              제목 <br />
              제목
            </>
          }
          elementDesk={
            <>
              CJ대한통운이 운영하는 다양한 3PL 창고의 DPS, DAS의 피킹시스템 구축
            </>
          }
          elementMobile={
            <>
              CJ대한통운이 운영하는 다양한 3PL 창고의 DPS, DAS의 피킹시스템 구축
            </>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          title={<Typography variant="h4">스타벅스부산센터</Typography>}
          imgSrc="/images/pages/construction/starbucks.png"
          width={"120px"}
          label="Web3 site URL"
          elementDesk={<>양산 스타벅스 냉동 창고의 DPS 시스템 구축</>}
          elementMobile={<>양산 스타벅스 냉동 창고의 DPS 시스템 구축</>}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          title={<Typography variant="h4">쿠팡인천물류센터</Typography>}
          label="Domain invest"
          imgSrc="/images/pages/construction/coupang.jpg"
          width={"200px"}
          elementDesk={<>인천 쿠팡 11센타의 단독버튼, DPS/DAS 시스템 구축</>}
          elementMobile={<>인천 쿠팡 11센타의 단독버튼, DPS/DAS 시스템 구축</>}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText3
          title={<Typography variant="h4">올리브영 물류센터</Typography>}
          label="Domain invest"
          imgSrc="/images/pages/construction/spc-2.jpg"
          width={"200px"}
          elementDesk={<>...</>}
          elementMobile={<>...</>}
        />
      </Grid>
    </Grid>
  );
};

export default CardStories;
