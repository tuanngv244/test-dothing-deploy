import { useState, useRef } from "react";
import {
  styled,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Theme,
  Slide,
  Fade,
} from "@mui/material";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import { WIDTH_MEDIUM } from "@/@core/configs";
import StatsData from "@/domains/models/StatsData";
import MuiContainer from "@/@core/style-libs/mui-container";
import Search from "@/views/assets/components/search";
import ReactAnimatedNumber from "@/@core/components/react-animated-number";

const statsData: StatsData[] = [
  {
    stats: "registeredDomain",
    title: "Registered domains",
    color: "primary",
  },
  {
    stats: "supportedCoin",
    title: "Support coins + tokens",
    color: "success",
  },
  {
    stats: "integrations",
    color: "warning",
    title: "DApps",
  },
  {
    stats: "partners",
    color: "info",
    title: "Partners",
  },
];

const BoxStyle = styled(MuiContainer)(({ theme, width }) => ({
  position: "relative",
  paddingTop: "9rem",
  ["@media (min-width: " + width + "px)"]: { minHeight: "650px" },
  [theme.breakpoints.down("md")]: {
    paddingTop: "5rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 0) + "!important",
    paddingTop: "2rem !important",
    paddingLeft: "0",
    paddingRight: "0",
  },
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {},
}));

const ImgStyle = styled("img")(({ theme }) => ({
  top: 50,
  right: -7,
  position: "absolute",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    width: 580,
  },
  [`@media (max-width: ${WIDTH_MEDIUM - 1}px)`]: {
    top: 0,
    width: 450,
    right: 10,
  },
  [theme.breakpoints.down("md")]: {
    top: 10,
    position: "relative",
  },
  [theme.breakpoints.down("sm")]: {
    right: 0,
    width: 345,
    top: "-5rem",
    marginBottom: "-4rem",
  },
  [theme.breakpoints.down("xs")]: {
    width: 200,
  },
}));

const ContentLeftStyle = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "-5.5rem",
  zIndex: 9,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    h2: {
      fontSize: "54px",
    },
    h4: {
      fontSize: "28px",
      marginBottom: "0.4rem",
    },
    ".txt-name-domain": {
      marginBottom: "2.4rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    top: "-2rem",
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

const TextDomainStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  textAlign: "center",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "2.5rem",
    marginBottom: "3.5rem !important",
    lineHeight: "32px",
    paddingLeft: 10,
    paddingRight: "0",
    textAlign: "left",
    fontSize: "18px !important",
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: "1.5rem !important",
    textIndent: "0",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px !important",
    lineHeight: "25px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const TextStatStyle = styled(Typography)(({ theme }) => ({
  color: "rgb(10 10 10 / 80%)",
  fontWeight: 900,
  fontSize: "44px !important",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    marginBottom: "0.5rem !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px !important",
  },
}));

const TextSubStyle = styled(Typography)(({ theme }) => ({
  color: "rgb(10 10 10 / 60%)",
  fontWeight: 400,
  textAlign: "center",
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const Stats = ({ value }: { value: number }) => {
  return (
    <TextStatStyle
      variant="h4"
      className="data-stats"
      sx={{ visibility: value ? "visible" : "hidden" }}
    >
      <ReactAnimatedNumber number={value} />
    </TextStatStyle>
  );
};

const renderStats = (t: any, apiMainData: any) => {
  return statsData.map((stat: StatsData, index: number) => (
    <Grid item xs={6} md={3} key={index}>
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Stats
            value={
              apiMainData?.statistic ? apiMainData?.statistic[stat.stats] : 0
            }
          />
          <TextSubStyle variant="h6">{t(stat.title)}</TextSubStyle>
        </Box>
      </Box>
    </Grid>
  ));
};

const BrandDomain = ({ apiMainData }: { apiMainData?: any }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [checked, setChecked] = useState(true);
  const containerRefTxt = useRef<HTMLElement>(null);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { t } = useTranslation();

  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      <Grid container spacing={5} alignItems={"start"}>
        <Grid item xs={12} md={8}>
          <ContentLeftStyle>
            <Box ref={containerRefTxt} sx={{ overflow: "hidden" }}>
              <Slide
                in={checked}
                container={containerRefTxt.current}
                direction="down"
                mountOnEnter
                unmountOnExit
                timeout={500}
              >
                <div>
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 3,
                      color: "common.black",
                      textTransform: "capitalize",
                      fontWeight: 900,
                    }}
                  >
                    The early 
                    {/*@ts-ignore*/}
                    <Typography
                      sx={{ color: "primary.main" }}
                    >
                      Web3 domain
                    </Typography>
                    {isDesktop && <br />} catches {/*@ts-ignore*/}
                    <Typography variant="span" sx={{ color: "common.brand" }}>
                      the brand
                    </Typography>
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ mb: 9.5, color: "common.caption", fontWeight: 400 }}
                    className="txt-name-domain"
                  >
                    <Translations text={"Find The Perfect Domain Name"} />
                  </Typography>
                </div>
              </Slide>
            </Box>
            <Search />
            {isMobile ? (
              <TextDomainStyle variant="h6" sx={{ my: 6 }}>
                .crypto │ .polygon │ .nft │ .x │ .wallet │<br /> .bitcoin │ .dao
                │ .888 │ .zil │ .blockchain
              </TextDomainStyle>
            ) : (
              <TextDomainStyle variant="h6" sx={{ my: 6 }}>
                .crypto │ .polygon │ .nft │ .x │ .wallet │ .bitcoin │ .dao │
                .888 │ .zil │ .blockchain
              </TextDomainStyle>
            )}
            {isDesktop && (
              <Grid container spacing={[5, 0]}>
                {renderStats(t, apiMainData)}
              </Grid>
            )}
          </ContentLeftStyle>
        </Grid>

        <Grid item xs={12} md={4}>
          <Fade timeout={1000} in={checked}>
            <ImgStyle alt="banner" src="/images/pages/banners/banner_0.svg" />
          </Fade>
        </Grid>
        {!isDesktop && (
          <Grid
            container
            spacing={5}
            sx={{ paddingLeft: 4, position: "relative", pb: 6 }}
          >
            {renderStats(t, apiMainData)}
          </Grid>
        )}
      </Grid>
    </BoxStyle>
  );
};

export default BrandDomain;
