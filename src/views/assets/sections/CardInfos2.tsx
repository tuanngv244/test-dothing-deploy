import Bus from "@/@core/components/icons/Bus";
import PhoneLarge from "@/@core/components/icons/PhoneLarge";
import Tower from "@/@core/components/icons/Tower";
import Train from "@/@core/components/icons/Train";
import { Grid, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import CardText5 from "../components/cards/CardText5";

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

  const { t } = useTranslation();

  const spacing = useMemo(() => {
    if (isDesktop) return 7;

    if (isTablet) return 5;

    return 6;
  }, []);

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} sm={6} md={6}>
        <CardText5
          imgSrc="/images/pages/home/web3_id.svg"
          eleIcon={<Tower />}
          label={<>{t("RECOGNITION_PAGE.address")}</>}
          elementDesk={<>{t("RECOGNITION_PAGE.510BdongGwangmyong")}</>}
          elementMobile={<>{t("RECOGNITION_PAGE.510BdongGwangmyong")}</>}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText5
          imgSrc="/images/pages/home/web3.svg"
          eleIcon={<PhoneLarge />}
          label={t("RECOGNITION_PAGE.phoneFax")}
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
      <Grid item xs={12} sm={6} md={6}>
        <CardText5
          imgSrc="/images/pages/home/web3_coin.svg"
          eleIcon={<Train />}
          label={t("RECOGNITION_PAGE.bySubway")}
          width={"190px"}
          elementDesk={<>{t("RECOGNITION_PAGE.3MinuteWalk")}</>}
          elementMobile={<>{t("RECOGNITION_PAGE.3MinuteWalk")}</>}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardText5
          imgSrc="/images/pages/home/web3_coin.svg"
          eleIcon={<Bus />}
          label={t("RECOGNITION_PAGE.byBus")}
          width={"190px"}
          elementDesk={<>{t("RECOGNITION_PAGE.gwangmyeongStation")}</>}
          elementMobile={<>{t("RECOGNITION_PAGE.gwangmyeongStation")}</>}
        />
      </Grid>
    </Grid>
  );
};

export default CardInfos;
