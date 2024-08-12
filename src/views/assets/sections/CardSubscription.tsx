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
import CardText2 from "../components/cards/CardText2";
import { WIDTH_MEDIUM } from "@/@core/configs";

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: "1.5rem",
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
    fontSize: "24px !important",
    lineHeight: "32px",
  },
}));

const CardSubscription = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { i18n } = useTranslation();

  const spacing = useMemo(() => {
    if (isDesktop) return 5.5;

    if (isTablet) return 5;

    return 5;
  }, []);

  return (
    <>
      <Grid container spacing={spacing}>
        <Grid item xs={12} md={12} textAlign={"center"}>
          <Title>
            우리의 <span>업무 방식</span>
          </Title>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md>
          <CardText2
            imgSrc="/images/pages/home/web3_coin.svg"
            label="Domain invest"
            width={"190px"}
            elementDesk={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
            elementMobile={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <CardText2
            imgSrc="/images/pages/home/web3_coin.svg"
            label="Domain invest"
            width={"190px"}
            elementDesk={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
            elementMobile={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <CardText2
            imgSrc="/images/pages/home/web3_coin.svg"
            label="Domain invest"
            width={"190px"}
            elementDesk={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
            elementMobile={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <CardText2
            imgSrc="/images/pages/home/web3_coin.svg"
            label="Domain invest"
            width={"190px"}
            elementDesk={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
            elementMobile={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md>
          <CardText2
            imgSrc="/images/pages/home/web3_coin.svg"
            label="Domain invest"
            width={"190px"}
            elementDesk={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
            elementMobile={
              <>
                Web3 도메인의 가치 상승 시 대법원장은 국회의 동의를 얻어
                대통령이 임명한다. 군사재판을 관할하기 위하여 특별법원으로서
                군사법원을 둘 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여
                국군을 통수한다.
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CardSubscription;
