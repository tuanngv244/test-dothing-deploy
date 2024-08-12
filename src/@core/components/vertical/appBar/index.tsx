import {
  styled,
  useTheme,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Stack,
  Typography,
  AppBarProps,
} from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import LanguageDropdown from "../../shared/sections/language-dropdown";
import Link from "next/link";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { useRouter } from "next/router";

const MuiAppBar = styled(AppBar)(({ theme, isMarginBottom }: any) => {
  return {
    transition: "none",
    alignItems: "center",
    backgroundColor: "white",
    color: theme.palette.text.primary,
    boxShadow: "0px 6px 12px 0px #BBBBBB4D",
    [theme.breakpoints.down("sm")]: {
      marginBottom: isMarginBottom ? "30px" : 0,
    },
  };
});

const MuiToolbar = styled(Toolbar)(({ theme }: { theme: any }) => ({
  width: "100%",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.header.vertical.minHeight}px`,
  transition:
    "padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out",
}));

const StackLag = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: "100%",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const LinkStyle = styled(Typography)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 500,
    marginRight: 15,
    borderBottom: "1px solid",
    lineHeight: 1.2,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type LayoutBarProps = {
  settings?: any;
  verticalAppBarContent?: any;
  toggleNavVisibility?: any;
  navVisible?: boolean;
  saveSettings?: Function;
};

const LAppBar = (props: LayoutBarProps) => {
  const {
    settings,
    verticalAppBarContent: userVerticalAppBarContent,
    saveSettings,
  } = props;

  const theme = useTheme();
  const scrollTrigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  const router = useRouter();
  const { skin, appBar, appBarBlur, contentWidth } = settings;

  const appBarFixedStyles = () => {
    return {
      ...(appBarBlur && { backdropFilter: "blur(8px)" }),
      ...(skin === "bordered" && {
        border: `1px solid ${theme.palette.divider}`,
        borderTopWidth: 0,
      }),
      px: `${theme.spacing(5)} !important`,
      boxShadow: theme.shadows[skin === "bordered" ? 0 : 3],
      backgroundColor: hexToRGBA(
        theme.palette.background.paper,
        appBarBlur ? 0.85 : 1
      ),
    };
  };

  if (appBar == "hidden") {
    return null;
  }

  const isMarginB = ["/"].includes(router.pathname);

  return (
    <MuiAppBar
      elevation={0}
      color="default"
      className="layout-navbar"
      position={appBar === "fixed" ? "sticky" : "static"}
      {...{ isMarginBottom: isMarginB }}
    >
      {/* <StackLag
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
      </StackLag> */}
      <MuiToolbar
        className="navbar-content-container"
        sx={{
          "@media print": {
            display: "none",
          },
          ...(appBar === "fixed" &&
            scrollTrigger && { ...appBarFixedStyles() }),
          ...(contentWidth === "boxed" && {
            "@media (min-width:1440px)": {
              maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`,
            },
          }),
        }}
      >
        {(userVerticalAppBarContent && userVerticalAppBarContent(props)) ||
          null}
      </MuiToolbar>
    </MuiAppBar>
  );
};

export default LAppBar;
