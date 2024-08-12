import Link from "next/link";
import Image from "next/image";
import { Box, styled, Stack, useMediaQuery, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { ReactNode, useEffect } from "react";

const StyleLogo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
}));

const LeftStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const RightStack = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  marginLeft: 15,
  marginRight: 5,
  boxShadow: "none",
  whiteSpace: "nowrap",
  textTransform: "initial",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "25px",
    padding: "0.46875rem 1.53rem",
    marginLeft: "2.5rem",
    marginRight: "0.8rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const AppBarWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    ".menu-content": {
      marginRight: "0",
      width: "auto",
    },
    "& .menu-content": {
      li: {
        paddingLeft: 40,
      },
      "> div:last-child": {
        li: {
          paddingRight: 0,
        },
      },
    },
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
  },
  [`@media (max-width: 1270px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type LAppBarProps = {
  children?: ReactNode;
  horizontalAppBarContent?: any;
  horizontalAppBarBranding?: any;
  domain?: any;
  isPolicy?: boolean;
  apiMainData?: any;
};

const LAppBar = (props: LAppBarProps) => {
  const {
    horizontalAppBarContent: userHorizontalAppBarContent,
    horizontalAppBarBranding: userHorizontalAppBarBranding,
    children,
    domain,
    apiMainData,
  } = props;

  const { i18n, t } = useTranslation();

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("xl"));

  useEffect(() => {
    (document.querySelector("html") as HTMLElement).style.overflow = "";
  }, [isDesktop]);

  return (
    <AppBarWrapper
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: !isDesktop ? [4, 4] : [0, 0],
      }}
    >
      {userHorizontalAppBarBranding ? (
        userHorizontalAppBarBranding(props)
      ) : (
        <LeftStack>
          <Link href="/" passHref>
            <StyleLogo>
              <Image
                style={{ borderRadius: "11px" }}
                src={"/images/logos/logo-new.png"}
                width={219}
                height={42}
                alt="logo"
              />
            </StyleLogo>
          </Link>
        </LeftStack>
      )}
      {children}
      <RightStack>
        <Link href="/insight/contact-us/" passHref>
          <ButtonStyle variant="contained">{t("COMMON.contactUs")}</ButtonStyle>
        </Link>
        {userHorizontalAppBarContent
          ? userHorizontalAppBarContent(props)
          : null}
      </RightStack>
    </AppBarWrapper>
  );
};

export default LAppBar;
