import React, { useMemo } from "react";
import {
  Grid,
  Card,
  Box,
  useMediaQuery,
  Theme,
  styled,
  CardContent,
  Fab,
  Typography,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import Instagram from "../../icons/Instagram";
import Globe from "../../icons/Globe";
import Twitter from "../../icons/Twitter";
import Youtube from "../../icons/Youtube";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Translations from "../../translations";
import CardLinks from "@/views/assets/components/cards/CardLinks";

const GridStyle = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    paddingTop: "0 !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardCtx = styled(CardContent)(({ theme }) => ({
  paddingTop: "0",
  paddingBottom: "0.2rem !important",
  paddingLeft: "0",
  paddingRight: "0",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "0 !important",
  },
}));

const CaptionText = styled(Typography)(({ theme }) => ({
  fontSize: "14px !important",
  lineHeight: "16px",
  fontWeight: 400,
  marginTop: ".3rem",
  display: "inline-block",
  color: theme.palette.text.link,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginBottom: "1rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "0",
    paddingBottom: 20,
  },
}));

const Caption = styled(Typography)(({ theme }) => ({
  fontSize: "14px !important",
  lineHeight: "16px",
  fontWeight: 400,
  marginTop: ".3rem",
  display: "inline-block",
  color: theme.palette.text.link,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const LogoLink = styled(Link)(({ theme }) => ({
  marginBottom: "1rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginBottom: "1.8rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2.5rem",
  },
}));

const StackStyle = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column !important",
    ".MuiBox-root": {
      marginLeft: "0 !important",
    },
  },
}));

const LinkMenu = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const CaptionLink = styled(Typography)(({ theme }) => ({
  fontSize: "14px !important",
  lineHeight: "16px",
  fontWeight: 400,
  marginTop: "1.1rem",
  display: "inline-block",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const MuiCard = styled(Card)(({ theme }) => ({
  border: 0,
  boxShadow: "none",
  background: theme.palette.common.bgGray,
  borderRadius: 0,
  [theme.breakpoints.down("xl")]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MobileContent = () => {
  return (
    <Grid container columnSpacing={0} sx={{ marginBottom: "1rem" }}>
      <Grid item xs={6}>
        <CardLinks label="Web3 domain is?">
          <Link href="/web3-domain" passHref style={{ textDecoration: "none" }}>
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Web3 domain"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
          <Link
            href="/web3-domain/premium"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Premium"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
        </CardLinks>
      </Grid>
      <Grid item xs={6}>
        <CardLinks label="Find out">
          <Link
            href="/find-out/create-my-domain"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Create my domain"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
          <Link
            href="/find-out/link-my-wallet"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Link my wallet"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
          <Link
            href="/find-out/utilize-the-domain"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Utilize the domain"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
          <Link
            href="/find-out/sell-the-domain"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Sell the domain"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
        </CardLinks>
      </Grid>
      <Grid item xs={6}>
        <CardLinks label="Insight">
          <Link
            href="/insight/latest-news"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Latest news"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
        </CardLinks>
      </Grid>
      <Grid item xs={6}>
        <CardLinks label="Customer Support">
          <Link
            href="/customer-support/announcement"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Announcement"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
          <Link
            href="/customer-support/faq"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"FAQ"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
          <Link
            href="/insight/contact-us"
            passHref
            style={{ textDecoration: "none" }}
          >
            <LinkMenu>
              <CaptionLink>
                <Translations text={"Contact us"} />
              </CaptionLink>
            </LinkMenu>
          </Link>
        </CardLinks>
      </Grid>
    </Grid>
  );
};

const DesktopContent = () => {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid item xs={12}>
        <StackStyle
          direction={"row"}
          alignItems={"start"}
          justifyContent={"space-evenly"}
        >
          <CardLinks label={t("COMMON.company")}>
            <Stack direction={"row"} alignItems={"start"} spacing={5}>
              <Link
                href="/services/dps"
                passHref
                style={{ textDecoration: "none" }}
              >
                <LinkMenu>
                  <CaptionLink>
                    <Translations text={t("COMMON.service")} />
                  </CaptionLink>
                </LinkMenu>
              </Link>
              <Link
                href="/products"
                passHref
                style={{ textDecoration: "none" }}
              >
                <LinkMenu>
                  <CaptionLink>
                    <Translations text={t("COMMON.product")} />
                  </CaptionLink>
                </LinkMenu>
              </Link>
              <Link
                href="/construction-example"
                passHref
                style={{ textDecoration: "none" }}
              >
                <LinkMenu>
                  <CaptionLink>
                    <Translations text={t("COMMON.customerStories")} />
                  </CaptionLink>
                </LinkMenu>
              </Link>
              <Link
                href="/insight/contact-us/"
                passHref
                style={{ textDecoration: "none" }}
              >
                <LinkMenu>
                  <CaptionLink>
                    <Translations text={t("COMMON.contactUs")} />
                  </CaptionLink>
                </LinkMenu>
              </Link>
              <Link
                href="/insight/recognition"
                passHref
                style={{ textDecoration: "none" }}
              >
                <LinkMenu>
                  <CaptionLink>
                    <Translations text={t("COMMON.recognition")} />
                  </CaptionLink>
                </LinkMenu>
              </Link>
            </Stack>
          </CardLinks>
        </StackStyle>
      </Grid>
    </Grid>
  );
};

const FooterCard = () => {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablelet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const spacing = useMemo(() => {
    if (isDesktop) return 10;

    if (isTablelet) return 7;

    return 5;
  }, []);

  return (
    <Grid container spacing={spacing}>
      <GridStyle item xs={12} sm={5}>
        <MuiCard>
          <CardCtx>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <LogoLink href="/" passHref style={{ textDecoration: "none" }}>
                <Image
                  style={{ borderRadius: "11px" }}
                  src={"/images/logos/logo-new.png"}
                  width={219}
                  height={42}
                  alt="logo"
                />
              </LogoLink>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", md: "start" },
                }}
              >
                <Box sx={{ flexDirection: "column" }}>
                  <CaptionText variant="caption">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("HOME_PAGE.seoulOffice"),
                      }}
                    />
                  </CaptionText>
                  <CaptionText variant="caption">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("HOME_PAGE.researchInstitute"),
                      }}
                    />
                  </CaptionText>
                </Box>
              </Box>
            </Box>
          </CardCtx>
        </MuiCard>
      </GridStyle>
      <GridStyle item xs={12} sm={7}>
        <MuiCard sx={{ mb: 0, mt: isMobile ? "10px" : 0 }}>
          <CardCtx>{<DesktopContent />}</CardCtx>
        </MuiCard>
      </GridStyle>
    </Grid>
  );
};

export default FooterCard;
