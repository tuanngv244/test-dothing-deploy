import React from "react";
import { styled, Box, useMediaQuery, Theme, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CardIconData from "@/domains/models/CardIconData";

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const ImgStyle = styled("img")(
  ({
    theme,
    width = "134px",
    type = "",
  }: {
    theme: Theme;
    width?: string;
    type?: string;
  }) => ({
    width: width,
    margin: "auto",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: type === "gas" ? "74px" : type === "domain" ? "105px" : "93px",
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const CardIcon = (props: CardIconData) => {
  const { i18n } = useTranslation();
  const { imgSrc, elementEn, elementKr, width, type } = props;
  const theme = useTheme();
  return (
    <BoxStyle>
      <ImgStyle width={width} type={type} alt="" src={imgSrc} theme={theme} />
      {i18n.language === "en" ? elementEn : elementKr}
    </BoxStyle>
  );
};

export default CardIcon;
