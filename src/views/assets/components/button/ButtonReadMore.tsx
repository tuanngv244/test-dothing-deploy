import React from "react";
import Link from "next/link";
import ArrowRightColor from "@/@core/components/icons/ArrowRightColor";
import Translations from "@/@core/components/translations";
import { Theme, styled, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledLink = styled("span")(
  ({ theme, language }: { theme: Theme; language: string }) => ({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: language === "en" ? 500 : 700,
  })
);

type ButtonReadMoreProps = {
  href: string;
  as: string;
};

const ButtonReadMore = ({ href, as }: ButtonReadMoreProps) => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  return (
    <Link passHref href={href} as={as} style={{textDecoration: 'none'}}>
      <StyledLink language={i18n.language} theme={theme}>
        <span>
          <Translations text={"Read more"} />
        </span>{" "}
        <ArrowRightColor color={theme.palette.primary.main}/>
      </StyledLink>
    </Link>
  );
};

export default ButtonReadMore;
