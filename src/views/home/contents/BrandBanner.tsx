import React from "react";
import {
  styled,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Theme,
  Slide,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({}));

const GridStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {},
}));

const ContentLeft = styled(Box)(({ theme }) => ({
  position: "relative",
  h3: {
    fontSize: "54px",
    lineHeight: "80px",
    marginBottom: "1rem",
  },
  h4: {
    lineHeight: "50px",
    fontWeight: 400,
    color: "rgb(10 10 10 / 80%)",
    marginBottom: "1.5rem",
    fontSize: "24px",
  },
  h6: {
    fontSize: "18px",
    color: theme.palette.primary.light,
    lineHeight: 1,
    fontWeight: 500,
  },
  marginTop: "6rem",
  [theme.breakpoints.down("xl")]: {
    h3: {
      lineHeight: "60px",
    },
    h4: {
      lineHeight: "34px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: "4rem",
    h3: {
      fontSize: "2rem",
      lineHeight: "80px",
    },
    h4: {
      fontSize: "25px",
      lineHeight: "30px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0",
    h3: {
      fontSize: "40px",
      lineHeight: "50px",
      textAlign: "center",
    },
    h4: {
      fontSize: "20px",
      lineHeight: "30px",
      textAlign: "center",
    },
    h6: {
      fontSize: "14px",
      lineHeight: "25px",
      textAlign: "center",
      marginBottom: "0.5rem",
    },
  },
}));

const GridContainerStyle = styled(Grid)(({ theme }) => ({
  marginTop: "3.25rem",
  marginBottom: "6rem",
  [theme.breakpoints.down("xl")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: "3rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImgStyle = styled("img")(({ theme }) => ({
  position: "relative",
  right: -40,
  overflow: "hidden",
  [theme.breakpoints.down("xl")]: {
    right: 0,
    width: "549px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "350px",
  },
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BrandBanner = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [checked, setChecked] = React.useState(true);
  const containerRefTxt = React.useRef<HTMLElement>(null);
  const containerRefImg = React.useRef<HTMLElement>(null);

  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      <GridContainerStyle container spacing={5} alignItems={"center"}>
        <Grid item xs={12} sm={7} sx={{ pt: "0 !important" }}>
          <ContentLeft ref={containerRefTxt} sx={{ overflow: "hidden" }}>
            <Slide
              in={checked}
              container={containerRefTxt.current}
              direction="right"
              mountOnEnter
              unmountOnExit
              timeout={500}
            >
              <div>
                {isMobile ? (
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 3,
                      color: "common.brand",
                      textTransform: "capitalize",
                      fontWeight: 900,
                    }}
                  >
                    브랜드를 선점하다
                    <br />
                    Web3 도메인을
                    <br />
                    선점하다.
                  </Typography>
                ) : (
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 3,
                      color: "common.brand",
                      textTransform: "capitalize",
                      fontWeight: 900,
                    }}
                  >
                    브랜드를 선점하다
                    <br />
                    Web3 도메인을 선점하다.
                  </Typography>
                )}
                {isMobile ? (
                  <Typography variant="h4">
                    자신의 아이덴티티를
                    <br />
                    Web3 도메인으로 나타내세요. <br />
                    Web3 도메인으로
                    <br />
                    브랜드와 자산을 소유하세요.
                  </Typography>
                ) : (
                  <Typography variant="h4">
                    자신의 아이덴티티를 Web3 도메인으로 나타내세요. <br />
                    Web3 도메인으로 브랜드와 자산을 소유하세요.
                  </Typography>
                )}
                {isMobile ? (
                  <Typography variant="h6">
                    ※ “WEB3ID”는
                    <br />
                    Unstoppable Domains의 Web3 도메인을
                    <br />
                    등록대행하는 서비스입니다.
                  </Typography>
                ) : (
                  <Typography variant="h6">
                    ※ “WEB3ID”는 Unstoppable Domains의 Web3 도메인을
                    등록대행하는 서비스입니다.
                  </Typography>
                )}
              </div>
            </Slide>
          </ContentLeft>
        </Grid>
        <GridStyle item xs={12} sm={5}>
          <Box ref={containerRefImg}>
            <Slide
              in={checked}
              container={containerRefImg.current}
              direction="left"
              mountOnEnter
              unmountOnExit
              timeout={500}
            >
              <ImgStyle alt="banner2" src={"/images/pages/banners/banner2.svg"} />
            </Slide>
          </Box>
        </GridStyle>
      </GridContainerStyle>
    </BoxStyle>
  );
};

export default BrandBanner;
