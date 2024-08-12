import React, { ReactNode, useState } from "react";
import { Fab, Box, styled, useMediaQuery } from "@mui/material";
import themeConfig from "@/infra/configs/themeConfig";

import ScrollTop from "../../components/icons/ScrollTop";
import LAppBar from "../../components/vertical/appBar";
import CustomizeStyle from "../../components/customizer";
import Footer from "../../components/shared/footer";
import ScrollToTop from "../../components/scroll-to-top";
import { LayoutTypes, NavPos } from "@/domains/types/device.type";
import { navpos, NavPosType } from "../../components/vertical/navigation/Navs";

const VerticalLayoutWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  [theme.breakpoints.down("sm")]: {},
}));

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  transition: "padding .25s ease-in-out",
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {},
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

const MultipleNav = (props: any, ref: any) => {
  let Component = navpos[props.value as NavPosType];
  if (!Component) return null;
  return <Component ref={ref} {...props} />;
};

const Navs = React.forwardRef(MultipleNav);

type LayoutProps = {
  children: ReactNode;
  hidden?: any;
  settings?: any;
  scrollToTop?: any;
  saveSettings?: any;
};

const VerticalLayout = (props: LayoutProps) => {
  const { hidden, settings, children, scrollToTop, saveSettings } = props;

  const { skin, navHidden, contentWidth } = settings;
  const {
    navigationSize,
    disableCustomizer,
    collapsedNavigationSize,
    navigationSizeAdmin,
    type,
    defaultNavPos,
  } = themeConfig;

  const navWidth =
    LayoutTypes.ADMIN === type ? navigationSizeAdmin : navigationSize;
  const navigationBorderWidth = skin === "bordered" ? 1 : 0;
  const collapsedNavWidth = collapsedNavigationSize;

  const [navHover, setNavHover] = useState(false);

  const [navVisible, setNavVisible] = useState(false);
  const isHeader = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);

    if (!navVisible) {
      (document.querySelector("html") as HTMLElement).style.overflow = "hidden";
    } else {
      (document.querySelector("html") as HTMLElement).style.overflow = "";
    }
  };

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        {navHidden &&
        themeConfig.layout === "vertical" &&
        !(navHidden && settings.lastLayout === "horizontal") ? null : (
          <Navs
            navWidth={navWidth}
            navHover={navHover}
            navVisible={navVisible}
            setNavHover={setNavHover}
            setNavVisible={setNavVisible}
            collapsedNavWidth={collapsedNavWidth}
            toggleNavVisibility={toggleNavVisibility}
            navigationBorderWidth={navigationBorderWidth}
            value={defaultNavPos}
            {...props}
          />
        )}
        {/* {navHidden &&
            themeConfig.layout === "vertical" &&
            !(navHidden && settings.lastLayout === "horizontal") ? null : (
              <CollapseNavigate
                navWidth={navWidth}
                navHover={navHover}
                navVisible={navVisible}
                setNavHover={setNavHover}
                setNavVisible={setNavVisible}
                collapsedNavWidth={collapsedNavWidth}
                toggleNavVisibility={toggleNavVisibility}
                navigationBorderWidth={navigationBorderWidth}
                {...props}
              />)
          } */}
        <MainContentWrapper className="layout-content-wrapper">
          {isHeader && (
            <LAppBar
              toggleNavVisibility={toggleNavVisibility}
              navVisible={navVisible}
              {...props}
              saveSettings={saveSettings}
            />
          )}
          <ContentWrapper
            className="layout-page-content"
            sx={{
              ...(contentWidth === "boxed" && {
                mx: "auto",
                p: 0,
                "@media (min-width:1200px)": { maxWidth: "100%" },
              }),
            }}
          >
            {children}
          </ContentWrapper>

          <Footer {...props} />
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {disableCustomizer || hidden ? null : <CustomizeStyle />}

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
    </>
  );
};

export default VerticalLayout;
