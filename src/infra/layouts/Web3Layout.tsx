import React from "react";
import { Theme, useMediaQuery } from "@mui/material";
import BannerLayout from "@/@core/layouts/templates/BannerLayout";
import { useSettings } from "@/@core/hooks/useSettings";

import HorizontalNavItems from "../navigation/horizontal";
import VerticalNavItems from "../navigation/vertical";

import AppBarContentVertical from "@/@core/components/vertical/appBar/app-bar-content";
import AppBarContentHorizontal from "@/@core/components/horizontal/appBar/app-bar-content";

type Web3LayoutProps = {
  children: React.ReactNode;
};

const Web3Layout = ({ children }: Web3LayoutProps) => {
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <BannerLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      title={"Web3 도메인이란"}
      page={"web3"}
      {...(settings.layout === "horizontal"
        ? {
            // ** Navigation Items
            horizontalNavItems: HorizontalNavItems(),
            // ** AppBar Content
            horizontalAppBarContent: () => (
              <AppBarContentHorizontal
                hidden={hidden}
                settings={settings}
                saveSettings={saveSettings}
              />
            ),
          }
        : {
            // ** Navigation Items
            verticalNavItems: VerticalNavItems(),
            // ** AppBar Content
            verticalAppBarContent: (props: any) => (
              <AppBarContentVertical
                hidden={hidden}
                settings={settings}
                saveSettings={saveSettings}
                toggleNavVisibility={props.toggleNavVisibility}
                navVisible={props.navVisible}
              />
            ),
          })}
    >
      {children}
    </BannerLayout>
  );
};

export default Web3Layout;
