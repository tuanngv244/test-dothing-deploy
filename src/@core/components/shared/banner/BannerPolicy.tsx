import React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  styled,
  Theme,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Wrapper from "../sections/wrapper-section";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import Translations from "../../translations";

const Banner = styled(Box)(({ theme }) => ({
  height: "140px",
  marginLeft: "-1rem",
  marginRight: "-1rem",
  position: "relative",
  overflow: "hidden",
  "&.print": {
    "@media print": {
      display: "none",
    },
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    height: "120px",
  },
}));

const ContentBanner = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  display: "flex",
  height: "100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ContentSearch = styled(Box)(({ theme }: { theme: any }) => ({
  position: "relative",
  display: "table",
  margin: "auto",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("xlc")]: {
    h2: {
      fontSize: "2.7rem",
    },
    h4: {
      fontSize: "1.7rem",
      marginBottom: "1rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    h2: {
      marginTop: "1.2rem",
      fontSize: "40px",
    },
    h4: {
      fontSize: "1rem",
      marginBottom: "0",
    },
  },
}));

const Title = styled(Typography)(({ theme }: { theme: any }) => ({
  color: "rgb(255 255 255 / 100%)",
  lineHeight: "32px",
  fontSize: "40px !important",
  fontWeight: 700,
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "35px !important",
    lineHeight: "32px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px !important",
    lineHeight: "36px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "2rem",
    marginRight: "2rem",
    position: "relative",
  },
}));

const BannerPolicy = ({
  title = "",
  page,
}: {
  title?: string;
  page?: string;
}) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const theme = useTheme()
  return (
    <Wrapper bg={theme.palette.primary.main} maxWidth={"100%"}>
      <Banner className="print">
        <ContentBanner>
          <ContentSearch>
            {isMobile && page === "term-of-use" ? (
              <Title>
                개인정보처리방침 및<br />
                이용약관
              </Title>
            ) : (
              <Title>
                <Translations text={title} />
              </Title>
            )}
          </ContentSearch>
        </ContentBanner>
      </Banner>
    </Wrapper>
  );
};

export default BannerPolicy;
