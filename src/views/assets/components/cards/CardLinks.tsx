import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Label = styled(Typography)(({ theme }) => ({
  marginTop: 0,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 5,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px !important",
    fontWeight: 700,
  },
}));

type CardLinksProps = {
  children?: React.ReactNode;
  label: string;
  sx?: any;
};

const CardLinks = ({ children, label, sx }: CardLinksProps) => {
  return (
    <BoxStyle sx={{ ...sx }}>
      <Label>{label}</Label>
      {children}
    </BoxStyle>
  );
};

export default CardLinks;
