import React from "react";
import { Theme, useMediaQuery } from "@mui/material";
import { useSettings } from "@/@core/hooks/useSettings";
import PolicyLayout from "@/@core/layouts/templates/PolicyLayout";

import HorizontalNavItems from "../navigation/horizontal";
import VerticalNavItems from "../navigation/vertical";

import AppBarContentVertical from "@/@core/components/vertical/appBar/app-bar-content";
import AppBarContentHorizontal from "@/@core/components/horizontal/appBar/app-bar-content";

type WebPolicyLayoutProps = {
  children: React.ReactNode;
  page?: string;
  category?: string;
};

const WebPolicyLayout = ({
  children,
  page = "",
  category = "",
}: WebPolicyLayoutProps) => {
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <PolicyLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      title={page ? page : "Insight"}
      page={"term-of-use"}
      category={category}
      {...(settings.layout === "horizontal"
        ? {
            // ** Navigation Items
            horizontalNavItems: HorizontalNavItems(),

            // Uncomment the below line when using server-side menu in horizontal layout and comment the above line
            // horizontalNavItems: ServerSideHorizontalNavItems(),
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

            // Uncomment the below line when using server-side menu in vertical layout and comment the above line
            // verticalNavItems: ServerSideVerticalNavItems(),
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
    </PolicyLayout>
  );
};

export default WebPolicyLayout;
