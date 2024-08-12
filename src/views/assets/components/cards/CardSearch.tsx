import React from "react";
import {
  styled,
  Typography,
  CardContent,
  Card,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
  Theme,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Search from "../search";

const MuiCard = styled(Card)(
  ({ theme, type }: { theme: any; type: string }) => ({
    border: 0,
    boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",
    marginBottom: theme.spacing(6.8),
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginTop: type === "/" ? "-10rem" : 0,
    [theme.breakpoints.down("xlc")]: {
      marginTop: type === "/" ? "-8rem" : 0,
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      marginBottom: "2.1rem",
      marginLeft: "-11px",
      marginRight: "-11px",
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const CardCtx = styled(CardContent)(({ theme }) => ({
  paddingTop: "4rem",
  paddingBottom: "3.5rem !important",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0",
    paddingBottom: ".5rem !important",
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

const ContentSearch = styled(Box)(({ theme }: { theme: any }) => ({
  position: "relative",
  display: "table",
  margin: "auto",
  [theme.breakpoints.down("xl")]: {},
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
  color: theme.palette.common.caption,
  fontWeight: 900,
  fontSize: "40px !important",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginBottom: "2.8rem",
    lineHeight: "56px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "35px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingTop: "1rem",
    fontSize: "24px !important",
    lineHeight: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const TextDomain = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  marginTop: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginBottom: "0.5rem !important",
    lineHeight: "32px",
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "30px",
    textAlign: "center",
    marginBottom: "1.5rem !important",
  },
  [theme.breakpoints.down("xs")]: {},
}));
const CardSearch = ({ type, width }: { type: string , width?: string }) => {
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("xlc"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const theme = useTheme();

  return (
    <MuiCard type={type} theme={theme}>
      <CardCtx>
        <Grid container spacing={isDesktop ? 25 : 10}>
          <Grid item xs={12} md={12}>
            <ContentSearch>
              {isMobile ? (
                <Title sx={{ textAlign: "center" }}>
                  기억하기 쉬운
                  <br /> Web3 도메인을 찾아보세요.
                </Title>
              ) : (
                <Title sx={{ textAlign: "center" }}>
                  기억하기 쉬운 Web3 도메인을 찾아보세요.
                </Title>
              )}
              <Search width={width}/>
              {isMobile ? (
                <TextDomain variant="h6" sx={{ my: 6 }}>
                  .crypto │ .polygon │ .nft │ .x │ .wallet │<br /> .bitcoin │
                  .dao │ .888 │ .zil │ .blockchain
                </TextDomain>
              ) : (
                <TextDomain variant="h6" sx={{ my: 6 }}>
                  .crypto │ .polygon │ .nft │ .x │ .wallet │ .bitcoin │ .dao │
                  .888 │ .zil │ .blockchain
                </TextDomain>
              )}
            </ContentSearch>
          </Grid>
        </Grid>
      </CardCtx>
    </MuiCard>
  );
};

export default CardSearch;
