import React, { useEffect, useRef } from "react";
import VerticalLayout from "../modes/VerticalPolicyLayout";
import HorizontalLayout from "../modes/HorizontalPolicyLayout";
import BannerPolicy from "@/@core/components/shared/banner/BannerPolicy";

type PolicyLayoutProps = {
  children: React.ReactNode;
  hidden?: any;
  settings?: any;
  saveSettings?: any;
  title?: string;
  page: string;
  category?: string;
  type?: string;
  horizontalNavItems?: any;
  horizontalAppBarContent?: any;
  verticalNavItems?: any;
  verticalAppBarContent?: any;
  navVisible?: boolean;
};

const PolicyLayout = (props: PolicyLayoutProps) => {
  const {
    hidden,
    children,
    settings,
    saveSettings,
    title,
    page,
  } = props;
  const isCollapsed = useRef(settings.navCollapsed);
  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: "vertical" });
        isCollapsed.current = true;
      } else {
        saveSettings({ ...settings, layout: "vertical" });
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({
          ...settings,
          navCollapsed: true,
          layout: settings.lastLayout,
        });
        isCollapsed.current = false;
      } else {
        saveSettings({ ...settings, layout: settings.lastLayout });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden]);
  if (settings.layout === "horizontal") {
    return (
      <HorizontalLayout {...props}>
        <BannerPolicy title={title} page={page} />
        {children}
      </HorizontalLayout>
    );
  }

  return (
    <VerticalLayout {...props}>
      <BannerPolicy title={title} page={page} />
      {children}
    </VerticalLayout>
  );
};

export default PolicyLayout;
