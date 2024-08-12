import React, { useMemo, useEffect, useRef, useState } from "react";
import {
  styled,
  Grid,
  Typography,
  useMediaQuery,
  Theme,
  Box,
  Slide,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import CardGroupTabs from "@/views/assets/sections/CardGroupTabs";
import CardGroupFees from "@/views/assets/sections/CardGroupFees";
import CardFeatures from "@/views/assets/sections/CardFeatures";
import { isScrolledIntoView } from "@/@core/utils/helpers";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  paddingTop: "5rem",
  paddingBottom: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingBottom: "5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "30px 0",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: 1,
  fontWeight: 700,
  marginBottom: "1rem",
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
    fontWeight: 900,
    marginBottom: "0",
  },
}));

const WhatWeDo = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));
  const [checked, setChecked] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const spacing = useMemo(() => {
    if (isDesktop) return 5;
    if (isTablet) return 5;
    return 12;
  }, []);

  const handleScroll = (e: any) => {
    const { isVisible } = isScrolledIntoView(".plan");
    if (isVisible == undefined) {
      setChecked(true);
      return;
    }
    setChecked(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BoxStyle width={WIDTH_MEDIUM} ref={containerRef}>
      <Slide
        in={checked}
        container={containerRef.current}
        direction="up"
        timeout={isMobile ? 800 : 1500}
      >
        <div>
          <Grid container spacing={spacing} alignItems={"start"}>
            <Grid item xs={12} md={12} textAlign={"center"}>
              <Title>
                <Box
                  component={"div"}
                  dangerouslySetInnerHTML={{
                    __html: t("HOME_PAGE.whatWeDo"),
                  }}
                />
              </Title>
            </Grid>
            <Grid item xs={12} md={12}>
              <CardFeatures />
            </Grid>
          </Grid>
        </div>
      </Slide>
    </BoxStyle>
  );
};

export default WhatWeDo;
