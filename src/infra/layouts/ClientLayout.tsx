import { ReactNode } from "react";
import { useMediaQuery } from "@mui/material";
import MasterLayout from "@/@core/layouts/MaterLayout";

import HorizontalNavItems from "../navigation/horizontal";
import VerticalNavItems from "../navigation/vertical";

import AppBarContentVertical from "@/@core/components/vertical/appBar/app-bar-content";
import AppBarContentHorizontal from "@/@core/components/horizontal/appBar/app-bar-content";

import { useSettings } from "@/@core/hooks/useSettings";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));

  return (
    <MasterLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
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
    </MasterLayout>
  );
};

export default ClientLayout;
