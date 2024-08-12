import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import CardOneAvatar from "@/views/assets/sections/CardOneAvatar";
import { Grid, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import DetailPage from "./DetailPage";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  marginBottom: "2.5rem",
  paddingBottom: "2rem",
  paddingTop: "2.5rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingTop: "1.5rem",
    paddingBottom: "5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "0",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: "1.5rem",
  fontSize: "50px !important",
  span: {
    color: theme.palette.primary.main,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "60px !important",
    marginBottom: "4.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px !important",
    lineHeight: "28px",
    marginBottom: "3rem",
  },
}));

const NEBULAPlatform = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <DetailPage />
        </Grid>
      </Grid>
    </BoxStyle>
  );
};

export default NEBULAPlatform;
