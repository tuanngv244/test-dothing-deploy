import {
  Box,
  Fab,
  AppBar,
  styled,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import themeConfig from "@/infra/configs/themeConfig";
import CustomizeStyle from "../../components/customizer";
import Footer from "../../components/shared/footer";
import ScrollToTop from "../../components/scroll-to-top";
import ScrollTop from "../../components/icons/ScrollTop";
import { WIDTH_MEDIUM } from "../../configs";
import { hexToRGBA } from "../../utils/hex-to-rgba";
import { ReactNode } from "react";
import LAppBar from "../../components/horizontal/appBar";
import Navigation from "../../components/horizontal/navigation";

const HorizontalLayoutWrapper = styled("div")({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  ...(themeConfig.horizontalMenuAnimation && { overflow: "clip" }),
});

const MuiToolbar = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(0, 0)} !important`,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  transition: "padding .25s ease-in-out",
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("md")]: {
    marginBottom: "0",
  },
}));

const BtnScrollTop = styled(Fab)(({ theme }) => ({
  width: "80px",
  height: "80px",
  boxShadow: "0px 4px 16px 5px rgba(0, 54, 135, 0.1)",
  [theme.breakpoints.down("lg")]: {
    width: "50px",
    height: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
}));

type HorizontalLayoutProps = {
  children?: ReactNode;
  hidden?: any;
  settings?: any;
  scrollToTop?: any;
  saveSettings?: any;
  horizontalNavMenuContent?: any;
  horizontalNavItems?: any;
  horizontalAppBarContent?: any;
};

const HorizontalLayout = (props: HorizontalLayoutProps) => {
  const {
    hidden,
    children,
    settings,
    scrollToTop,
    saveSettings,
    horizontalNavMenuContent: userHorizontalNavMenuContent,
  } = props;

  const { skin, appBar, navHidden, appBarBlur, contentWidth } = settings;
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <HorizontalLayoutWrapper className="layout-wrapper">
      <AppBar
        color="default"
        elevation={skin === "bordered" ? 0 : 3}
        className="layout-navbar-and-nav-container"
        position={appBar === "fixed" ? "sticky" : "static"}
        sx={{
          alignItems: "center",
          color: "text.primary",
          justifyContent: "center",
          ...(appBar === "static" && { zIndex: 13 }),
          backgroundColor: (theme) => theme.palette.background.paper,
          ...(skin === "bordered" && {
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }),
          transition:
            "border-bottom 0.2s ease-in-out, backdrop-filter .25s ease-in-out, box-shadow .25s ease-in-out",
          ...(appBar === "fixed"
            ? appBarBlur && {
                backdropFilter: "blur(8px)",
                backgroundColor: (theme) =>
                  hexToRGBA(theme.palette.background.paper, 0.85),
              }
            : {}),
          boxShadow: "0px 6px 12px 0px #BBBBBB4D",
          display: isMobile ? "none" : "flex",
        }}
      >
        {navHidden ? null : (
          <Box className="layout-horizontal-nav" sx={{ width: "100%" }}>
            <MuiToolbar
              className="horizontal-nav-content-container"
              sx={{
                mx: "auto",
                ...(contentWidth === "boxed" && {
                  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
                    width: WIDTH_MEDIUM + "px !important",
                    maxWidth: "none !important",
                  },
                }),
                minHeight: (theme: any) =>
                  `${
                    theme.mixins.toolbar.minHeight -
                    (skin === "bordered" ? 1 : 0)
                  }px !important`,
              }}
            >
              <LAppBar {...props}>
                {(userHorizontalNavMenuContent &&
                  userHorizontalNavMenuContent(props)) || (
                  <Navigation {...props} />
                )}
              </LAppBar>
            </MuiToolbar>
          </Box>
        )}
      </AppBar>

      <ContentWrapper
        className="layout-page-content"
        sx={{
          ...(contentWidth === "boxed" && {
            mx: "auto",
            px: [0, 0],
          }),
        }}
      >
        {children}
      </ContentWrapper>

      <Footer {...props} />

      {themeConfig.disableCustomizer || hidden ? null : <CustomizeStyle />}

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <BtnScrollTop
            color="primary"
            size="small"
            aria-label="scroll back to top"
          >
            <ScrollTop />
          </BtnScrollTop>
        </ScrollToTop>
      )}
    </HorizontalLayoutWrapper>
  );
};

export default HorizontalLayout;
