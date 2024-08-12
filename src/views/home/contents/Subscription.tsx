import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import { isScrolledIntoView } from "@/@core/utils/helpers";
import Article from "@/domains/models/Article";
import {
  Box,
  Button,
  Grid,
  Slide,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 10,
  minHeight: 300,
  marginBottom: "4rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    minHeight: 350,
    marginTop: "6rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    marginBottom: "3.5rem",
  },
}));

const BoxStyleGrid = styled(MuiContainer)(({ theme }) => ({
  marginBottom: "4rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginBottom: "6.5rem",
    marginTop: "5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2rem",
  },
}));

const BoxContent = styled(Box)(({ theme }) => ({
  marginLeft: "1.5rem",
  marginTop: "1rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginLeft: "3rem",
    marginTop: "2rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0rem",
    textAlign: "left",
    paddingLeft: 40,
    paddingRight: 40,
    "h6, h1": {
      textAlign: "center",
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "36px !important",
  fontWeight: 600,
  marginBottom: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "1.3rem",
    lineHeight: "44px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px !important",
    lineHeight: "36px",
    marginBottom: "1rem",
  },
}));

const Hint = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  marginBottom: "1.7rem",
  fontWeight: 400,
  color: theme.palette.primary.main,
  fontSize: "16px !important",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "18px !important",
    lineHeight: "28px",
    marginBottom: "2.7rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  },
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  boxShadow: "none",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: 50,
  textTransform: "initial",
  width: 266,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 20,
    height: 56,
    width: 276,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 37,
    marginTop: 15,
  },
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {},
}));

const ContentLeft = styled(Box)(({ theme }) => ({
  paddingLeft: "1.5rem",
  paddingRight: "2rem",
  h3: {
    fontWeight: 900,
    lineHeight: "72px",
    marginBottom: "1rem",
    color: "rgb(10 10 10 / 80%)",
    marginTop: "0",
  },
  h4: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 400,
    color: "rgb(64 64 64 / 80%)",
    marginBottom: "1rem",
  },
  [theme.breakpoints.down("xl")]: {
    h3: {
      lineHeight: 1.1,
    },
    h4: {
      lineHeight: "34px",
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    h3: {
      fontSize: "54px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    h3: {
      fontSize: "2rem",
      lineHeight: 1,
    },
    h4: {
      fontSize: "20px",
      lineHeight: "25px",
    },
  },
  [theme.breakpoints.down("md")]: {
    h3: {
      marginTop: "1rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0rem",
    paddingRight: "0rem",
    textAlign: "center",
    h3: {
      marginTop: "1.2rem",
      fontSize: "40px",
      lineHeight: 1,
      textAlign: "center",
    },
    h4: {
      fontSize: "16px",
      lineHeight: "18px",
      textAlign: "center",
    },
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  marginTop: "3.25rem",
  marginBottom: "4rem",
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("lg")]: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0rem",
    paddingBottom: "3rem",
  },
}));

const ImgStyle = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    width: "100%",
  },
  [theme.breakpoints.down("xs")]: {},
}));
const Image = styled("img")(
  ({ theme, width = "190px" }: { theme: Theme; width?: any }) => ({
    maxWidth: "100%",
    [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
    },
  })
);

const BoxImage = styled(Box)(({ theme }) => ({
  p: 5,
  background: "#ffff",
  borderRadius: "17px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    width: "100%",
    maxWidth: "280px",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 55,
    paddingRight: 55,
    img: {
      width: "100%",
      maxWidth: "200px",
    },
  },
}));

const Subscription = ({ apiDataNew }: { apiDataNew: Article }) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const containerRefImg = useRef<HTMLElement>(null);
  const containerRefTxt = useRef<HTMLElement>(null);
  const containerRefCard = useRef<HTMLElement>(null);

  const { id, newsType, content, title, attachFileUrl }: Article = apiDataNew;

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handleScroll = (e: any) => {
    const { isVisible } = isScrolledIntoView(".article");
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
      <GridContainer container spacing={5} alignItems={"center"}>
        <GridStyle item sm={12} md={7}>
          <ContentLeft ref={containerRefTxt} sx={{ overflow: "hidden" }}>
            <Slide
              in={checked}
              container={containerRefTxt.current}
              direction="up"
              timeout={isMobile ? 800 : 1000}
            >
              <BoxContent>
                <Title variant="h1">{t("HOME_PAGE.whyNEBULA")}</Title>
                <Hint variant="h6">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: isMobile
                        ? t("HOME_PAGE.NEBULAIsAnIotBasedSolutionMobile")
                        : t("HOME_PAGE.NEBULAIsAnIotBasedSolution"),
                    }}
                  />
                </Hint>
                {!isMobile && (
                  <Box>
                    <Link href="/products" passHref>
                      <ButtonStyle variant="contained" size="large">
                        {t("COMMON.viewMore")}
                      </ButtonStyle>
                    </Link>
                  </Box>
                )}
              </BoxContent>
            </Slide>
          </ContentLeft>
        </GridStyle>
        <Grid
          item
          sm={12}
          md={5}
          sx={{
            pt: "0 !important",
            width: {
              xs: "100%",
            },
          }}
        >
          <ImgStyle ref={containerRefImg}>
            <Slide
              in={checked}
              container={containerRefImg.current}
              direction="up"
              timeout={isMobile ? 800 : 1000}
            >
              <BoxImage>
                <Image
                  alt=""
                  width={"350px"}
                  src={"/images/logos/nebula.png"}
                />
                {isMobile && (
                  <Link
                    style={{ marginTop: "2rem", minWidth: "200px" }}
                    href="/products"
                    passHref
                  >
                    <ButtonStyle variant="contained" size="large">
                      {t("COMMON.viewMore")}
                    </ButtonStyle>
                  </Link>
                )}
              </BoxImage>
            </Slide>
          </ImgStyle>
        </Grid>
      </GridContainer>
    </BoxStyle>
  );
};

export default Subscription;
