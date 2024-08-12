import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import CardOneAvatar from "@/views/assets/sections/CardOneAvatar";
import CardReg from "@/views/assets/sections/CardReg";
import {
  Box,
  Grid,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.background.bgSection,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: "1.5rem",
  fontSize: "60px !important",
  margin: "60px 0",
  span: {
    color: theme.palette.primary.main,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "60px !important",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px !important",
    lineHeight: "28px",
    margin: "30px 0",
  },
}));

const BoxImage = styled(Box)(({ theme }) => ({
  width: "100%",
  marginBottom: "60px",
  img: {
    width: "100%",
    objectFit: "contain",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
  },
}));

const Recognition = () => {
  const { t, i18n } = useTranslation();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const genMap = () => {
    let map = "/images/pages/construction/";
    if (!isMobile) {
      if (i18n.language === "kr") {
        map += "dothing-map-kr.png";
      } else if (i18n.language === "en") {
        map += "dothing-map-en.png";
      } else {
        map += "dothing-map-ja.png";
      }
    } else {
      if (i18n.language === "kr") {
        map += "dothing-map-kr-mobile.png";
      } else if (i18n.language === "en") {
        map += "dothing-map-en-mobile.png";
      } else {
        map += "dothing-map-ja-mobile.png";
      }
    }
    return map;
  };

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
          <BoxImage>
            <img src={genMap()} />
          </BoxImage>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CardReg />
        </Grid>
        <Grid
          container
          sx={{
            marginTop: {
              xs: "30px",
              md: "60px",
            },
          }}
        >
          <CardOneAvatar />
        </Grid>
      </Grid>
    </BoxStyle>
  );
};

export default Recognition;
