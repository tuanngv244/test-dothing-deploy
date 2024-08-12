import React, { useEffect, useRef } from "react";
import Translations from "@/@core/components/translations";
import {
  Breadcrumbs,
  Typography,
  Link,
  Stack,
  styled,
  Theme,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  mapRouteTitle,
  pageInsight,
  pageInsightProps,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import MuiContainer from "@/@core/style-libs/mui-container";
import { WIDTH_MEDIUM } from "@/@core/configs";
import ChevronRight from "@/@core/components/icons/ChevronRight";

const LinkStyle = styled(Link)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "32px",
  fontWeight: 300,
  color: "rgb(255 255 255 / 80%)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const BreadcrumbStyle = styled(Breadcrumbs)(({ theme }) => ({
  marginTop: "-10px",
  fontSize: "14px",
  lineHeight: "32px",
  fontWeight: 300,
  color: "rgb(255 255 255 / 80%)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    ".MuiBreadcrumbs-ol": {
      flexWrap: "nowrap",
      minWidth: "260px",
      justifyContent: "center",
    },
    ".MuiBreadcrumbs-separator": {
      marginLeft: 3,
      marginRight: 3,
    },
    fontSize: "14px",
  },
}));

const TextStyle = styled(Typography)(
  ({ theme, page }: { theme: Theme; page: string }) => ({
    fontSize: "14px",
    lineHeight: "32px",
    fontWeight: 300,
    color:
      page === "find_out" ||
      page === "customer-support" ||
      page === "web3" ||
      page === "insights"
        ? "rgb(255 255 255 / 80%)"
        : "rgb(255 255 255 / 100%)",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: 1,
    },
  })
);

const Pages = {
  find_out: "/find-out/",
  insight: "/insight/",
  "customer-support": "/customer-support/",
};

type PagesType = "find_out" | "insight" | "customer-support";

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({}));

const getTitleTabs = (str: string) => {
  if (!str) return "";
  return str
    .replace(",all", "")
    .replace(",kica", "")
    .replace(",ud", "")
    .replace(",prepare-my-wallet", "")
    .replace(",search-web3-domain", "")
    .replace(",buy-web3-domain", "")
    .replace(",polygon-minting", "")
    .replace(",link-to-wallet-address", "")
    .replace(",transfer-the-domain", "")
    .replace(",login-with-ud", "")
    .replace(",profile-settings", "")
    .replace(",websites-ipfs", "")
    .replace(",polygon-minting", "")
    .replace(",use-email-ud", "")
    .replace(",add-nft-avatar", "")
    .replace(",building-website", "")
    .replace(",sales-on-the-ud-site", "")
    .replace(",selling-opensea", "");
};

type BreadcrumbLinkProps = {
  page: any;
  type?: string;
};

const BreadcrumbLink = ({ page, type }: BreadcrumbLinkProps) => {
  const router = useRouter();
  const store = useSelector((state: any) => state.client);
  const { t } = useTranslation();
  const linkRef = useRef<any>(null);

  const theme = useTheme();

  let routerPath: any = router.asPath.slice(0, router.asPath.length - 1);
  routerPath = routerPath.split("/");

  // routerPath =
  //   routerPath.length === 2
  //     ? [...routerPath, routerPath[routerPath.length - 1] + "s"]
  //     : routerPath;

  routerPath =
    pageInsight[page as pageInsightProps] &&
    pageInsight[page as pageInsightProps].includes(
      routerPath[routerPath.length - 1]
    )
      ? routerPath.slice(0, routerPath.length - 1)
      : routerPath;

  routerPath = routerPath.join(",");
  routerPath = getTitleTabs(routerPath).split(",");

  routerPath =
    type === "detail"
      ? routerPath.slice(
          0,
          routerPath.length -
            (page === "insight" ||
            routerPath.some((route: any) => route === "announcement")
              ? 1
              : 2)
        )
      : routerPath;

  routerPath = router.asPath.includes("cat")
    ? routerPath.slice(0, routerPath.length - 1)
    : routerPath;

  routerPath =
    routerPath[routerPath.length - 1] === "event" ||
    routerPath[routerPath.length - 1] === "notification"
      ? ["", "customer-support", "announcement"]
      : routerPath;

  const breadcrumbs = [
    ...routerPath.map((item: any, index: number) => {
      if (item === "faq") return null;
      if (index === 0) {
        return (
          <LinkStyle key={index} underline={"hover"} color="inherit" href="/">
            <Translations text={`BANNER.홈`} />
          </LinkStyle>
        );
      }

      if (routerPath.length - 1 === index) {
        return (
          <TextStyle key={index} page={page} theme={theme}>
            {mapRouteTitle[item as mapRouteTitleProps] ? (
              <Translations
                text={`BANNER.${
                  mapRouteTitle[item as mapRouteTitleProps] || item
                }`}
              />
            ) : (
              ""
            )}
          </TextStyle>
        );
      }

      if (
        item === "find-out" ||
        item === "insight" ||
        item === "customer-support" ||
        item === "web3-domain"
      ) {
        return (
          <TextStyle key={index} page={page} theme={theme}>
            {mapRouteTitle[item as mapRouteTitleProps] ? (
              <Translations
                text={`BANNER.${mapRouteTitle[item as mapRouteTitleProps]}`}
              />
            ) : (
              ""
            )}
          </TextStyle>
        );
      }

      return (
        <LinkStyle
          key={index}
          underline={"hover"}
          color="inherit"
          href={
            Pages[page as PagesType]
              ? Pages[page as PagesType] + item
              : "/" + item
          }
        >
          {mapRouteTitle[item as mapRouteTitleProps] || item ? (
            <Translations
              text={`BANNER.${
                mapRouteTitle[item as mapRouteTitleProps] || item
              }`}
            />
          ) : (
            ""
          )}
        </LinkStyle>
      );
    }),
  ];

  return (
    <BoxWrapper width={WIDTH_MEDIUM}>
      <BreadcrumbStyle
        ref={linkRef}
        separator={<ChevronRight />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.filter(Boolean)}
      </BreadcrumbStyle>
    </BoxWrapper>
  );
};

export default BreadcrumbLink;
