import React, { useMemo } from "react";
import { styled, Grid, Box, useMediaQuery, Theme } from "@mui/material";
import MuiContainer from "@/@core/style-libs/mui-container";
import { WIDTH_MEDIUM } from "@/@core/configs";
import CardInfos2 from "@/views/assets/sections/CardInfos2";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  marginTop: "1.5rem",
  marginBottom: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardLocation = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: 492,
  borderRadius: 10,
  border: "1px solid #89939E80",
  marginTop: "0",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    height: 535,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const RecognitionPage = () => {
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
    <BoxStyle width={WIDTH_MEDIUM}>
      <Grid container spacing={7}>
        <Grid item sm={12} md={6}>
          <CardInfos2 />
        </Grid>
        <Grid item sm={12} md={6} sx={{ width: "100%" }}>
          <CardLocation
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7575892214268!2d126.8885662!3d37.419204199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6182e3efd0fd%3A0x62968d27aa8fa51f!2z6rSR66qF7Jet7J6Q7J207YOA7JuM!5e0!3m2!1sen!2s!4v1710297690526!5m2!1sen!2s"
            loading="lazy"
          ></CardLocation>
        </Grid>
      </Grid>
    </BoxStyle>
  );
};

export default RecognitionPage;
