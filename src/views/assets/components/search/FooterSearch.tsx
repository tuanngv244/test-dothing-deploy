import React, { useMemo } from "react";
import { styled, Grid, useMediaQuery, Theme } from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import CardSearch from "../cards/CardSearch";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({}));

const FooterSearch = ({ type = "" }: { type: string }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const spacing = useMemo(() => {
    if (isDesktop) return 12;

    if (isTablet) return 5;

    return 12;
  }, []);

  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      <Grid container spacing={spacing}>
        <Grid item xs={12} md={12}>
          <CardSearch type={type} width={'954px'}/>
        </Grid>
      </Grid>
    </BoxStyle>
  );
};

export default FooterSearch;
