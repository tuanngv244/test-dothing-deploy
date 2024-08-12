import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import { isScrolledIntoView } from "@/@core/utils/helpers";
import Article from "@/domains/models/Article";
import CardOneAvatar from "@/views/assets/sections/CardOneAvatar";
import { Grid, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.background.bgSection,

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "30px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: "1.5rem",
  fontSize: "64px !important",
  span: {
    color: theme.palette.primary.main,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "80px !important",
    marginBottom: "4.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px !important",
    lineHeight: "28px",
    marginBottom: "3rem",
  },
}));

const Recognition = ({ apiDataNew }: { apiDataNew?: Article }) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const containerRefCard = useRef<HTMLElement>(null);

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleScroll = (e: any) => {
    const { isVisible } = isScrolledIntoView(".recognition");
    setChecked(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      <Grid container>
        <CardOneAvatar />
      </Grid>
    </BoxStyle>
  );
};

export default Recognition;
