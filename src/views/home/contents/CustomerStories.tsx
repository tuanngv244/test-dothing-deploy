import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import { isScrolledIntoView } from "@/@core/utils/helpers";
import Article from "@/domains/models/Article";
import CardStories from "@/views/assets/sections/CardStories";
import {
  Box,
  Grid,
  Slide,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  paddingBottom: "3rem",
  paddingTop: "3rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginBottom: "0",
    paddingTop: "6rem",
    paddingBottom: "5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: "1.5rem",
  fontSize: "48px !important",
  span: {
    color: theme.palette.primary.main,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "64px !important",
    marginBottom: "3rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "44px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px !important",
    lineHeight: "32px",
    marginBottom: "3.5rem",
  },
}));

const CustomerStories = ({ apiDataNew }: { apiDataNew?: Article }) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const containerRefCard = useRef<HTMLElement>(null);

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleScroll = (e: any) => {
    const { isVisible } = isScrolledIntoView(".faqs");
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
        <Grid item xs={12} md={12} textAlign={"center"}>
          <Title>
            <Box
              component={"div"}
              dangerouslySetInnerHTML={{
                __html: t("HOME_PAGE.customerStories"),
              }}
            />
          </Title>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box ref={containerRefCard}>
            <Slide
              in={checked}
              container={containerRefCard.current}
              direction="up"
              timeout={isMobile ? 800 : 2000}
            >
              <div>
                <CardStories />
              </div>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </BoxStyle>
  );
};

export default CustomerStories;
