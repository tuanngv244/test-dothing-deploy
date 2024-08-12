import CircleOutline from "mdi-material-ui/CircleOutline";
import { LayoutTypes, NavPos } from "@/domains/types/device.type";

export type LanguagesType = { en: string; kr: string; vi: string; ja: string };
export type ColorsType = {
  main: string;
  gray: string;
  green: string;
  red: string;
  yellow: string;
  blue: string;
};

const showSettingIcon = { display: "flex", hide: "none" };
const colors: ColorsType = {
  main: "primary",
  gray: "secondary",
  green: "success",
  red: "error",
  yellow: "warning",
  blue: "info",
};
const languages: LanguagesType = { en: "en", kr: "kr", vi: "vi", ja: "ja" };

const themeConfig = {
  defaultLanguage: languages.kr,
  displaySettingIcon: showSettingIcon.hide,
  defaultColor: colors.main,
  templateName: "DOTHING" /* App Name */,
  layout: "horizontal" /* vertical | horizontal */,
  mode: "light" /* light | dark */,
  direction: "ltr" /* ltr | rtl */,
  skin: "default" /* default | bordered | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  contentWidth: "boxed" /* full | boxed */,
  footer: "static" /* fixed | static | hidden */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: CircleOutline /* Icon Element */,
  verticalNavToggleType:
    "accordion" /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  navCollapsed:
    false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize:
    "100%" /*288 Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 68 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  afterVerticalNavMenuContentPosition: "fixed" /* fixed | static */,
  beforeVerticalNavMenuContentPosition: "fixed" /* fixed | static */,
  horizontalMenuToggle:
    "hover" /* click | hover /*! Note: This is for Horizontal navigation menu only */,
  horizontalMenuAnimation: true /* true | false */,
  // ** AppBar Configs
  appBar:
    "static" /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarBlur: false /* true | false */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
  disableCustomizer: true /* true | false */,
  toastPosition:
    "top-right" /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */,
  type: LayoutTypes.ADMIN,
  defaultNavPos: NavPos.Top,
  navigationSizeAdmin: 300,
};

export default themeConfig;
