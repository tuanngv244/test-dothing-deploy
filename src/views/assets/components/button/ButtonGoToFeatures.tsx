import React from "react";
import Link from "next/link";
import ArrowRight from "@/@core/components/icons/ArrowRight";
import Translations from "@/@core/components/translations";
import { styled, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledLink = styled("span")(
  ({ theme, language }: { theme: any; language: string }) => ({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontSize: 24,
    lineHeight: "32px",
    fontWeight: language === "en" ? 500 : 700,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("xlc")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  })
);

type ButtonGoToFeaturesProps = {
  href: string;
  as: any;
};

const ButtonGoToFeatures = ({ href, as }: ButtonGoToFeaturesProps) => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <Link passHref href={href} as={as} style={{textDecoration: 'none'}}>
      <StyledLink language={i18n.language} theme={theme}>
        <span>
          <Translations text={"목록으로"} />
        </span>
        &nbsp;
        <ArrowRight />
      </StyledLink>
    </Link>
  );
};

export default ButtonGoToFeatures;
