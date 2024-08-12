import React from "react";
import { Box, styled, useTheme, Theme, Breadcrumbs } from "@mui/material";
import {
  mapRouteTitle,
  customer_pages,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import Link from "next/link";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";

const LinkStyle = styled("div")(
  ({ theme, active }: { theme: Theme; active: boolean }) => ({
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 400,
    color: active ? theme.palette.primary.main : "rgb(0 0 0 / 20%)",
    background: theme.palette.common.white,
    border: `1px solid ${
      active ? theme.palette.primary.main : "rgb(0 0 0 / 20%)"
    }`,
    borderRadius: 60,
    textDecoration: "none",
    padding: "0.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "nowrap",
      fontSize: "16px",
    },
  })
);

const BreadcrumbStyle = styled(Breadcrumbs)(({ theme }) => ({
  fontSize: "28px",
  lineHeight: "32px",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.8)",
  marginTop: "3rem",
  ".MuiBreadcrumbs-separator": {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    marginTop: "2.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
    marginTop: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
    fontSize: "16px",
    ol: {
      flexWrap: "nowrap",
    },
    ".MuiBreadcrumbs-separator": {
      marginLeft: "0.2rem",
      marginRight: "0.2rem",
    },
  },
}));

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({}));

type BreadcrumbBannerProps = {
  page?: string;
};

const BreadcrumbBanner = ({ page }: BreadcrumbBannerProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const breadcrumbs = [
    ...customer_pages.map((item, index) => {
      return (
        <Link passHref key={index} href={"/customer-support/" + item}>
          <LinkStyle
            color="inherit"
            theme={theme}
            active={page === item ? true : false}
          >
            <Translations
              text={t(mapRouteTitle[item as mapRouteTitleProps]) || item}
            />
          </LinkStyle>
        </Link>
      );
    }),
  ];
  return (
    <Wrapper bg="#fff">
      <BoxWrapper width={WIDTH_MEDIUM}>
        <BreadcrumbStyle separator="" aria-label="breadcrumb">
          {breadcrumbs}
        </BreadcrumbStyle>
      </BoxWrapper>
    </Wrapper>
  );
};

export default BreadcrumbBanner;
