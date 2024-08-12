// ** React Imports
import { Fragment, useEffect, useState } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** MUI Imports
import { styled, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";

// ** Third Party Imports
import clsx from "clsx";
import { usePopper } from "react-popper";

// ** Icons Imports
import ChevronLeft from "mdi-material-ui/ChevronLeft";
import ChevronRight from "mdi-material-ui/ChevronRight";

// ** Theme Config Import
import themeConfig from "@/infra/configs/themeConfig";

// ** Custom Components Imports
import CanViewNavGroup from "@/@core/acl/CanViewNavGroup";
import Translations from "../../translations";
import HorizontalNavItems from "./HorizontalNavItems";

import { WIDTH_MEDIUM } from "@/@core/configs";
import { hasActiveChild } from "@/@core/utils/helpers";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useTranslation } from "react-i18next";

// ** Styled Components
const ListItem = styled(Box)(({ theme }: { theme: any }) => ({
  cursor: "pointer",
  paddingTop: theme.spacing(2.25),
  paddingBottom: theme.spacing(2.25),
  "&:hover p": {
    color: theme.palette.primary.main,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingLeft: "1rem !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const LinkStyle = styled(Typography)(({ theme }: { theme: any }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 18,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const NavigationMenu = styled(Paper)(({ theme }) => ({
  overflowY: "auto",
  overflowX: "hidden",
  padding: theme.spacing(0, 0),
  maxHeight: "calc(100vh - 13rem)",
  backgroundColor: theme.palette.background.paper,
  ...(themeConfig.menuTextTruncate ? { width: 263 } : { minWidth: 263 }),
  "&::-webkit-scrollbar": {
    width: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 20,
    background: hexToRGBA(
      theme.palette.mode === "light" ? "#B0ACB5" : "#575468",
      0.6
    ),
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: 20,
    background: "transparent",
  },
  "& .MuiList-root": {
    paddingTop: "0.59rem",
    paddingBottom: "0.59rem",
    borderBottom: "1px solid #F5F7FA",
  },
  "& .MuiList-root:last-child": {
    borderBottom: "0px solid",
  },
  "& .menu-group.Mui-selected": {
    borderRadius: 0,
    backgroundColor: theme.palette.action.hover,
  },
}));

type HorizontalNavGroupProps = {
  item?: any;
  hasParent?: any;
  settings?: any;
};

const HorizontalNavGroup = (props: HorizontalNavGroupProps) => {
  // ** Props
  const { item, hasParent, settings } = props;

  const { t } = useTranslation();
  // ** Hooks & Vars
  const theme = useTheme();
  const router = useRouter();
  const currentURL = router.pathname;
  const { skin, direction } = settings;
  const {
    navSubItemIcon,
    menuTextTruncate,
    horizontalMenuToggle,
    horizontalMenuAnimation,
  } = themeConfig;
  const popperOffsetHorizontal = direction === "rtl" ? 22 : -22;
  const popperPlacement = direction === "rtl" ? "bottom-end" : "bottom-start";
  const popperPlacementSubMenu =
    direction === "rtl" ? "left-start" : "right-start";

  // ** States
  const [menuOpen, setMenuOpen] = useState(false);
  const [popperElement, setPopperElement] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("xlc"));

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: hasParent ? popperPlacementSubMenu : popperPlacement,
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: hasParent ? [-8, 15] : [popperOffsetHorizontal, 5],
          },
        },
        {
          name: "flip",
          enabled: true,
          options: {
            // @ts-ignore
            boundary: window,
            fallbackPlacements: ["auto-start", "right"],
          },
        },
      ],
    }
  );

  const handleGroupOpen = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
    update ? update() : null;
  };

  const handleGroupClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMenuToggleOnClick = (event: React.BaseSyntheticEvent) => {
    if (anchorEl) {
      handleGroupClose();
    } else {
      handleGroupOpen(event);
    }
  };

  const handleURLQueries = () => {
    if (Object.keys(router.query).length && item.path) {
      const arr = Object.keys(router.query);

      return (
        router.asPath.includes(item.path) &&
        router.asPath.includes(router.query[arr[0]] as string)
      );
    }
  };

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries()) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    handleGroupClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const IconTag = item.icon ? item.icon : navSubItemIcon;
  const ToggleIcon = direction === "rtl" ? ChevronLeft : ChevronRight;
  const WrapperCondition = horizontalMenuToggle === "click";
  const MainWrapper: any = WrapperCondition ? ClickAwayListener : "div";
  const ChildWrapper = WrapperCondition ? "div" : Fragment;
  const AnimationWrapper = horizontalMenuAnimation ? Fade : Fragment;

  const childMenuGroupStyles = () => {
    if (attributes && attributes.popper) {
      if (direction === "ltr") {
        if (attributes.popper["data-popper-placement"] === "right-start") {
          return "left";
        }
        if (attributes.popper["data-popper-placement"] === "left-start") {
          return "right";
        }
      } else {
        if (attributes.popper["data-popper-placement"] === "right-start") {
          return "right";
        }
        if (attributes.popper["data-popper-placement"] === "left-start") {
          return "left";
        }
      }
    }
  };

  return (
    <CanViewNavGroup navGroup={item}>
      <MainWrapper
        {...(WrapperCondition
          ? { onClickAway: handleGroupClose }
          : { onMouseLeave: handleGroupClose })}
      >
        <ChildWrapper>
          <List component="div" sx={{ py: skin === "bordered" ? 2.625 : 2.75 }}>
            <ListItem
              aria-haspopup="true"
              {...(WrapperCondition ? {} : { onMouseEnter: handleGroupOpen })}
              className={clsx("menu-group", {
                "Mui-selected": hasActiveChild(item, currentURL),
              })}
              {...(horizontalMenuToggle === "click"
                ? { onClick: handleMenuToggleOnClick }
                : {})}
              sx={{
                ...(menuOpen
                  ? { backgroundColor: theme.palette.action.hover }
                  : {}),
                ...(!hasParent
                  ? {
                      px: 5.5,
                      borderRadius: 0,
                      backgroundColor: "transparent !important",
                      "&.Mui-selected": {
                        boxShadow: 0,
                        color: theme.palette.primary.main,
                        "& p": {
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        },
                      },
                      pr: item.latest ? 0 : 5.5,
                    }
                  : { px: 5 }),
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                ref={setReferenceElement}
              >
                {item.hasLink ? (
                  <Link href={`${item.path}`}>
                    <LinkStyle {...(menuTextTruncate && { noWrap: true })}>
                      <Translations text={t(`NAV.${item.title}`)} />
                    </LinkStyle>
                  </Link>
                ) : (
                  <LinkStyle {...(menuTextTruncate && { noWrap: true })}>
                    <Translations text={t(`NAV.${item.title}`)} />
                  </LinkStyle>
                )}
              </Box>
            </ListItem>
            <AnimationWrapper
              {...(horizontalMenuAnimation && {
                in: menuOpen,
                timeout: { exit: 300, enter: 400 },
              })}
            >
              <Box
                style={styles.popper}
                component={"div"}
                ref={setPopperElement}
                {...attributes.popper}
                sx={{
                  zIndex: theme.zIndex.appBar,
                  ...(!horizontalMenuAnimation && {
                    display: menuOpen ? "block" : "none",
                  }),
                  pl:
                    childMenuGroupStyles() === "left"
                      ? skin === "bordered"
                        ? 2.5
                        : 2.25
                      : 0,
                  pr:
                    childMenuGroupStyles() === "right"
                      ? skin === "bordered"
                        ? 2.5
                        : 2.25
                      : 0,
                  ...(hasParent
                    ? { position: "fixed !important" }
                    : { pt: skin === "bordered" ? 5.5 : 5.75 }),
                }}
              >
                <NavigationMenu
                  sx={{
                    ...(hasParent
                      ? {
                          overflowY: "auto",
                          overflowX: "visible",
                          maxHeight: "calc(100vh - 21rem)",
                        }
                      : {}),
                    ...(skin === "bordered"
                      ? {
                          boxShadow: theme.shadows[0],
                          border: `1px solid ${theme.palette.divider}`,
                        }
                      : { boxShadow: theme.shadows[4] }),
                  }}
                >
                  <HorizontalNavItems
                    {...props}
                    nameClass={item.children.length ? "parent" : ""}
                    horizontalNavItems={item.children}
                  />
                </NavigationMenu>
              </Box>
            </AnimationWrapper>
          </List>
        </ChildWrapper>
      </MainWrapper>
    </CanViewNavGroup>
  );
};

export default HorizontalNavGroup;
