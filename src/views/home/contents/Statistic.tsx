import ReactAnimatedNumber from "@/@core/components/react-animated-number";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import StatsData from "@/domains/models/StatsData";
import {
  Box,
  Grid,
  Slide,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const statsData: StatsData[] = [
  // {
  //   stats: "registeredDomain",
  //   title: "Registered domains",
  //   color: "primary",
  // },
  {
    stats: "supportedCoin",
    title: "Customers",
    color: "success",
  },
  {
    stats: "integrations",
    color: "warning",
    title: "Warehouses",
  },
  {
    stats: "partners",
    color: "info",
    title: "Pick to Light",
  },
];

const BoxStyle = styled(MuiContainer)(({ theme, width }) => ({
  position: "relative",
  paddingBottom: "1rem",

  ["@media (min-width: " + width + "px)"]: {
    minHeight: "250px",
    paddingTop: "2rem",
  },
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

const ContentLeftStyle = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "0.5rem",
  zIndex: 9,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("md")]: {
    top: "-2rem",
  },
}));

const TextDomainStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 700,
  fontSize: "25px !important",
  paddingBottom: "2rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "28px !important",
    lineHeight: "36px",
    paddingBottom: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
    lineHeight: "30px",
    textAlign: "left",
    paddingBottom: "0rem",
    paddingTop: "1rem",
    fontWeight: "bold",
  },
}));

const TextStatStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "70px !important",
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: "0.5rem !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px !important",
    textAlign: "left",
  },
}));

const BoxStatStyle = styled("div")(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center !important",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start !important",
  },
}));

const TextSubStyle = styled(Typography)(({ theme }) => ({
  color: "#717171",
  fontWeight: 600,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 700,
  textAlign: "center",
  fontSize: "54px !important",
  margin: "5rem 0",
  span: {
    color: theme.palette.primary.main,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "64px !important",
    lineHeight: "76px",
    marginTop: "13rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "45px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px !important",
    lineHeight: "44px",
    marginTop: "2rem",
    marginBottom: "20px",
  },
}));

const BoxStats = styled(Grid)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0.5rem !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Stats = ({ value }: { value: number }) => {
  return (
    <TextStatStyle
      variant="h4"
      className="data-stats"
      sx={{ visibility: value ? "visible" : "hidden" }}
    >
      <ReactAnimatedNumber number={value} />+
    </TextStatStyle>
  );
};

const dataTemps = {
  integrations: 50,
  partners: 100000,
  registeredDomain: 100000,
  supportedCoin: 30,
};

type dataTempsProps = keyof typeof dataTemps;

const renderStats = (t: any, apiMainData: any, isMobile: boolean) => {
  return statsData.map((stat: StatsData, index: number) => {
    const findItem = apiMainData?.find(
      (i: { dictLabel: string; dictDesc: string }) =>
        stat?.title === i?.dictLabel
    );
    return (
      <BoxStats
        item
        xs={index === 2 ? 12 : 6}
        sm={4}
        md={4}
        key={index}
        sx={{ marginTop: isMobile ? "40px" : 0 }}
      >
        <BoxStatStyle
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stats value={Number(findItem?.dictDesc || 0)} />
            <TextSubStyle variant="h6">{t(stat.title)}</TextSubStyle>
          </Box>
        </BoxStatStyle>
      </BoxStats>
    );
  });
};

const Statistic = ({ apiMainData }: { apiMainData?: any }) => {
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
        <Grid item xs={12} sm={12} md={12}>
          <ContentLeftStyle>
            <Box ref={containerRefTxt} sx={{ overflow: "hidden" }}>
              <Slide
                in={checked}
                container={containerRefTxt.current}
                direction="up"
                mountOnEnter
                unmountOnExit
                timeout={500}
              >
                <TextDomainStyle variant="h4">
                  {t("HOME_PAGE.weAreASmartLogisticCompanyBaseOnIotExpertise")}
                </TextDomainStyle>
              </Slide>
            </Box>
            {isDesktop && (
              <Grid container spacing={[5, 0]}>
                {renderStats(t, apiMainData, isMobile)}
              </Grid>
            )}
          </ContentLeftStyle>
        </Grid>
        {!isDesktop && (
          <Grid
            container
            spacing={5}
            sx={{ paddingLeft: 4, position: "relative", pb: 6 }}
          >
            {renderStats(t, apiMainData, isMobile)}
          </Grid>
        )}
      </Grid>
      <Title variant="h1">
        <Box
          component={"div"}
          dangerouslySetInnerHTML={{
            __html: t(
              "HOME_PAGE.smartLogisticSpecialistCompanyWithIotFramework"
            ),
          }}
        />
      </Title>
    </BoxStyle>
  );
};

export default Statistic;
