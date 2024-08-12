import React, { useState, useRef, useEffect } from "react";
import { styled, Typography, Box, Grid, Slide } from "@mui/material";
import Translations from "@/@core/components/translations";
import Link from "next/link";
import MuiContainer from "@/@core/style-libs/mui-container";
import { WIDTH_MEDIUM } from "@/@core/configs";
import ButtonLink from "@/views/assets/components/button/ButtonLink";
import { useTranslation } from "react-i18next";
import Article from "@/domains/models/Article";
import {
  truncateStr,
  exposeStr,
  isScrolledIntoView,
} from "@/@core/utils/helpers";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({}));

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
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0rem",
    paddingBottom: "4rem",
  },
}));

const ImgStyle = styled("img")(({ theme }) => ({
  position: "relative",
  width: "706px",
  [theme.breakpoints.down("xl")]: {},
  [`@media (max-width: ${WIDTH_MEDIUM}px)`]: {
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  lineHeight: "72px",
  fontSize: "54px",
  marginBottom: "1rem",
  color: "rgb(10 10 10 / 80%)",
  marginTop: "0",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
    lineHeight: 1.3,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    WebkitLineClamp: "2",
    marginTop: "1.2rem",
    fontSize: "40px",
    lineHeight: 1.2,
    textAlign: "center",
  },
}));

const Desc = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: 400,
  color: "rgb(64 64 64 / 80%)",
  marginBottom: "1rem",
  marginTop: "0",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
    lineHeight: "25px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    WebkitLineClamp: "3",
    fontSize: "16px",
    lineHeight: "18px",
    textAlign: "center",
  },
}));

const NewArticle = ({ apiDataNew }: { apiDataNew: Article }) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const containerRefImg = useRef<HTMLElement>(null);
  const containerRefTxt = useRef<HTMLElement>(null);

  const { id, newsType, content, title, attachFileUrl }: Article = apiDataNew;

  const handleScroll = (e: any) => {
    const { visible } = isScrolledIntoView(".article");
    setChecked(visible);
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
        <GridStyle item xs={12} sm={7}>
          <Box ref={containerRefImg} sx={{ overflow: "hidden" }}>
            <Slide
              in={checked}
              container={containerRefImg.current}
              direction="right"
              timeout={1000}
            >
              <div>
                <Link
                  passHref
                  style={{ textDecoration: "none" }}
                  href={`/insight/latest-news/[category]/[...slug]`}
                  as={`/insight/latest-news/${newsType?.toLowerCase()}/${id}`}
                >
                  <ImgStyle
                    alt="pricing-cta-avatar"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/images/pages/banners/banner3.png";
                    }}
                    src={attachFileUrl ?? "/images/tabs/banner3.png"}
                  />
                </Link>
              </div>
            </Slide>
          </Box>
        </GridStyle>
        <Grid item xs={12} sm={5} sx={{ pt: "0 !important" }}>
          <ContentLeft ref={containerRefTxt} sx={{ overflow: "hidden" }}>
            <Slide
              in={checked}
              container={containerRefTxt.current}
              direction="left"
              timeout={1000}
            >
              <div>
                <Link
                  passHref
                  href={`/insight/latest-news/[category]/[...slug]`}
                  as={`/insight/latest-news/${newsType?.toLowerCase()}/${id}`}
                >
                  <Title noWrap sx={{ mb: 3 }}>
                    <Translations text={truncateStr(title || "", 40)} />
                  </Title>
                </Link>
                <Desc
                  noWrap
                  dangerouslySetInnerHTML={{
                    __html: truncateStr(exposeStr(content || ""), 150),
                  }}
                ></Desc>
                <ButtonLink
                  label={t("최신 뉴스 더 보기")}
                  href="/insight/latest-news"
                />
              </div>
            </Slide>
          </ContentLeft>
        </Grid>
      </GridContainer>
    </BoxStyle>
  );
};

export default NewArticle;
