import React from "react";
import { styled, Box, Grid, Divider } from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import FooterCard from "./FooterCard";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  paddingTop: '2rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingTop: '3.7rem'
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: '2rem'
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: '3.5rem'
  },
}));

const FooterLinks = () => {
  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      <Grid container spacing={5} alignItems={"start"}>
        <Grid item xs={12} md={12}>
          <FooterCard />
        </Grid>
      </Grid>
    </BoxStyle>
  );
};

export default FooterLinks;
