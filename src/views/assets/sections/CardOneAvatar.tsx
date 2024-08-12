import React from "react";
import {
  styled,
  Typography,
  Box,
  Grid,
  Slide,
  Button,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Translations from "@/@core/components/translations";
import Link from "next/link";
import MuiContainer from "@/@core/style-libs/mui-container";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.primary.main,
  border: 0,
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  zIndex: 10,
  minHeight: "400px",
  marginBottom: "60px",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    minHeight: "400px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const BoxStyleMobile = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.primary.main,
  border: 0,
  borderRadius: 20,
  minHeight: 318,
  marginBottom: "0",
  overflow: "hidden",
  position: "relative",
  zIndex: 10,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    minHeight: 418,
    marginTop: "7rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    minHeight: 418,
  },
}));
const BoxStyleGrid = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.common.white,
  minHeight: 630,
  position: "absolute",
  zIndex: 0,
  top: "-8.5rem",
  left: "-2rem",
  transform: "rotate(143deg)",
  "&::after": {
    content: "''",
    display: "block",
    width: "100%",
    height: "100%",
    background: theme.palette.common.white,
    position: "absolute",
    right: 0,
  },
  "&::before": {
    content: "''",
    display: "block",
    width: "100%",
    height: "100%",
    background: theme.palette.common.white,
    position: "absolute",
    right: 0,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    top: "-4.5rem",
    left: "-3rem",
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: 530,
    top: "-5.5rem",
    left: "-2rem",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: 530,
    top: "-8.5rem",
    left: "-11rem",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 350,
    top: "-7.5rem",
    transform: "rotate(135deg)",
    left: "-300px",
  },
}));

const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginLeft: "0",
    marginTop: "0",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: "50px",
  fontWeight: 600,
  fontSize: "44px !important",
  marginBottom: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "1rem",
    fontSize: "48px !important",
    lineHeight: "76px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "34px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingRight: 0,
    fontSize: "24px !important",
    lineHeight: "36px",
    marginBottom: "0",
    margin: "16px 0 20px 0",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 600,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 20,
    lineHeight: "28px",
    marginTop: 5,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const SubTitle2 = styled(Typography)(({ theme }) => ({
  color: "#717171",
  fontWeight: 400,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 18,
    lineHeight: "28px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  boxShadow: "none",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  textTransform: "initial",
  height: 50,
  width: 266,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 20,
    height: 56,
    width: 276,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    height: 42,
    fontSize: 16,
    marginTop: 25,
  },
}));

const ImgStyle = styled(Box)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  zIndex: 9,
  width: "257px",
  height: "52px",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    textIndent: "0",
  },
}));

const ImgAvatar = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "95%",
  },
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0",
  height: "100%",
  [theme.breakpoints.down("md")]: {},
}));

const ContentLeft = styled(Box)(({ theme }) => ({
  paddingLeft: "0",
  paddingRight: "0",
  position: "relative",
  zIndex: 9,
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  [theme.breakpoints.down("xl")]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0rem",
    paddingBottom: "0",
  },
}));

const CardOneAvatar = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      {isMobile ? (
        <BoxStyleMobile width={WIDTH_MEDIUM}>
          <GridContainer container alignItems={"center"}>
            <GridStyle item sm={12} sx={{ margin: "auto" }}>
              <ContentLeft>
                <ImgStyle>
                  <ImgAvatar alt="" src="/images/logos/logo-new.png" />
                </ImgStyle>
                <BoxContent>
                  <Title variant="h1">
                    {t("HOME_PAGE.iotBasedSmartLogisticsSolution")}
                  </Title>
                  <Box>
                    <Link href="/insight/contact-us" passHref>
                      <ButtonStyle variant="contained" size="large">
                        {t("HOME_PAGE.contactUs")}
                      </ButtonStyle>
                    </Link>
                  </Box>
                </BoxContent>
              </ContentLeft>
            </GridStyle>
          </GridContainer>
          <BoxStyleGrid width={"1316px"} />
        </BoxStyleMobile>
      ) : (
        <BoxStyle width={WIDTH_MEDIUM}>
          <GridContainer container spacing={5} alignItems={"center"}>
            <GridStyle item sm={12}>
              <ContentLeft>
                <ImgStyle>
                  <ImgAvatar alt="" src="/images/logos/logo-new.png" />
                </ImgStyle>
                <BoxContent>
                  <Title variant="h1">
                    {t("HOME_PAGE.iotBasedSmartLogisticsSolution")}
                  </Title>
                  <Box>
                    <Link href="/insight/contact-us" passHref>
                      <ButtonStyle variant="contained" size="large">
                        {t("HOME_PAGE.contactUs")}
                      </ButtonStyle>
                    </Link>
                  </Box>
                </BoxContent>
              </ContentLeft>
            </GridStyle>
          </GridContainer>
          <BoxStyleGrid width={"1316px"} />
        </BoxStyle>
      )}
    </>
  );
};

export default CardOneAvatar;
