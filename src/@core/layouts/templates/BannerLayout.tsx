import React, { useEffect, useRef } from "react";
import VerticalLayout from "../modes/VerticalLayout";
import HorizontalLayout from "../modes/HorizontalLayout";
import BannerDomain from "@/@core/components/shared/banner/BannerDomain";
import BreadcrumbBanner from "@/views/assets/components/breadcrumb/BreadcrumbBanner";
import { useRouter } from "next/router";

type BannerLayoutProps = {
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

const BannerLayout = (props: BannerLayoutProps) => {
  const {
    hidden,
    children,
    settings,
    saveSettings,
    title,
    page,
    category,
    type,
  } = props;
  const isCollapsed = useRef(settings.navCollapsed);

  const router = useRouter();

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
        <BannerDomain title={title} page={page || router.query?.page} type={type} />
        {children}
      </HorizontalLayout>
    );
  }

  return (
    <VerticalLayout {...props}>
      <BannerDomain title={title} page={page || router.query?.page} type={type} />
      {children}
    </VerticalLayout>
  );
};

export default BannerLayout;
