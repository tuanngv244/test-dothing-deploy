import clsx from "clsx";
import ChevronLeft from "mdi-material-ui/ChevronLeft";
import ChevronRight from "mdi-material-ui/ChevronRight";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Chip,
  Collapse,
  ListItem,
  Typography,
  Box,
  ListItemIcon,
  ListItemButton,
  styled,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import themeConfig from "@/infra/configs/themeConfig";

import { hasActiveChild, removeChildren } from "@/@core/utils/helpers";

import Translations from "../../translations";
import CanViewNavGroup from "@/@core/acl/CanViewNavGroup";
import VerticalNavItems from "./VerticalNavItems";
import ButtonSubmitSmall from "@/views/assets/components/button/ButtonSubmitSmall";
import { useTranslation } from "react-i18next";

const MenuItemTextWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
}));

const MenuGroupToggleRightIcon = styled(ChevronRight)(({ theme }) => ({
  color: theme.palette.common.white,
  transition: "transform .25s ease-in-out",
}));

const MenuGroupToggleLeftIcon = styled(ChevronLeft)(({ theme }) => ({
  color: theme.palette.common.white,
  transition: "transform .25s ease-in-out",
}));

type NavGroupProps = {
  item?: any;
  parent?: any;
  settings?: any;
  navHover?: any;
  navVisible?: any;
  isSubToSub?: any;
  groupActive?: any;
  setGroupActive?: any;
  collapsedNavWidth?: any;
  currentActiveGroup?: any;
  setCurrentActiveGroup?: any;
  navigationBorderWidth?: any;
  setNavVisible?: any;
};

const VerticalNavGroup = (props: NavGroupProps) => {
  const {
    item,
    parent,
    settings,
    navHover,
    navVisible,
    isSubToSub,
    groupActive,
    setGroupActive,
    setNavVisible,
    collapsedNavWidth,
    currentActiveGroup,
    setCurrentActiveGroup,
    navigationBorderWidth,
  } = props;

  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const currentURL = router.pathname;
  const { skin, direction, navCollapsed, verticalNavToggleType } = settings;

  const IconTag = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon;
  const menuGroupCollapsedStyles =
    navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };

  const toggleActiveGroup = (item: any, parent: any) => {
    let openGroup = groupActive;

    if (
      router.asPath.includes("NEBULA-platform") ||
      router.asPath.includes("NEBULA-pick")
    ) {
      setNavVisible(false);
    }

    // ** If Group is already open and clicked, close the group
    if (openGroup.includes(item.title)) {
      openGroup.splice(openGroup.indexOf(item.title), 1);

      // If clicked Group has open group children, Also remove those children to close those groups
      if (item.children) {
        removeChildren(item.children, openGroup, currentActiveGroup);
      }
    } else if (parent) {
      // ** If Group clicked is the child of an open group, first remove all the open groups under that parent
      if (parent.children) {
        removeChildren(parent.children, openGroup, currentActiveGroup);
      }

      // ** After removing all the open groups under that parent, add the clicked group to open group array
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title);
      }
    } else {
      // ** If clicked on another group that is not active or open, create openGroup array from scratch
      // ** Empty Open Group array
      openGroup = [];

      // ** push Current Active Group To Open Group array
      if (currentActiveGroup.every((elem: any) => groupActive.includes(elem))) {
        openGroup.push(...currentActiveGroup);
      }

      // ** Push current clicked group item to Open Group array
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title);
      }
    }
    setGroupActive([...openGroup]);
  };

  const handleGroupClick = () => {
    const openGroup = groupActive;
    if (verticalNavToggleType === "collapse") {
      if (openGroup.includes(item.title)) {
        openGroup.splice(openGroup.indexOf(item.title), 1);
      } else {
        openGroup.push(item.title);
      }
      setGroupActive([...openGroup]);
    } else {
      toggleActiveGroup(item, parent);
    }
    if (openGroup[0] === t("COMMON.product")) {
      setNavVisible(false);
    }
  };

  const conditionalColor = () => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return {
        color: `white !important`,
      };
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return {
        color: `white !important`,
      };
    } else {
      return {
        color: `white !important`,
      };
    }
  };

  const conditionalBgColor = () => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return {
        color: `rgba(${theme.palette.primary.dark}, 0.87)`,
        "&:hover": {
          backgroundColor: `rgba(${theme.palette.primary.dark}, 0.04)`,
        },
        "&.Mui-selected": {
          backgroundColor: `rgba(${theme.palette.primary.dark}, 0.08)`,
          "&:hover": {
            backgroundColor: `rgba(${theme.palette.primary.dark}, 0.12)`,
          },
        },
      };
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return {
        color: `rgba(${theme.palette.primary.light}, 0.87)`,
        "&:hover": {
          backgroundColor: `rgba(${theme.palette.primary.light}, 0.04)`,
        },
        "&.Mui-selected": {
          backgroundColor: `rgba(${theme.palette.primary.light}, 0.08)`,
          "&:hover": {
            backgroundColor: `rgba(${theme.palette.primary.light}, 0.12)`,
          },
        },
      };
    } else {
      return {
        "&.Mui-selected": {
          backgroundColor: "transparent",
          "& p": {
            color:
              ((theme: any) => theme.palette.common.white)(theme) +
              "!important",
          },
          svg: {
            fill:
              ((theme: any) => theme.palette.common.white)(theme) +
              "!important",
          },
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      };
    }
  };

  useEffect(() => {
    if (hasActiveChild(item, currentURL)) {
      if (!groupActive.includes(item.title)) groupActive.push(item.title);
    } else {
      const index = groupActive.indexOf(item.title);
      if (index > -1) groupActive.splice(index, 1);
    }
    setGroupActive([...groupActive]);
    setCurrentActiveGroup([...groupActive]);

    // Empty Active Group When Menu is collapsed and not hovered, to fix issue route change
    if (navCollapsed && !navHover) {
      setGroupActive([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  useEffect(() => {
    if (navCollapsed && !navHover) {
      setGroupActive([]);
    }
    if (
      (navCollapsed && navHover) ||
      (groupActive.length === 0 && !navCollapsed)
    ) {
      setGroupActive([...currentActiveGroup]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navCollapsed, navHover]);

  useEffect(() => {
    if (groupActive.length === 0 && !navCollapsed) {
      setGroupActive([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navHover]);

  return (
    <CanViewNavGroup navGroup={item}>
      <ListItem
        disablePadding
        className="nav-group"
        onClick={handleGroupClick}
        sx={{
          mt: 1.5,
          px: "0 !important",
          flexDirection: "column",
          ul: {
            paddingLeft: 0,
          },
        }}
      >
        <ListItemButton
          className={clsx({
            "Mui-selected":
              groupActive.includes(item.title) ||
              currentActiveGroup.includes(item.title),
          })}
          sx={{
            py: 2.25,
            width: "100%",
            ...conditionalBgColor(),
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            transition: "padding-left .25s ease-in-out",

            pl:
              navCollapsed && !navHover
                ? (collapsedNavWidth - navigationBorderWidth - 24) / 8
                : 5.5,
            pr:
              navCollapsed && !navHover
                ? ((collapsedNavWidth - navigationBorderWidth - 24) / 2 - 5) / 4
                : 3.5,
            p: {
              fontWeight: 400 + " !important",
            },
          }}
        >
          <MenuItemTextWrapper
            sx={{
              ...menuGroupCollapsedStyles,
              ...(isSubToSub ? { ml: 9 } : {}),
            }}
          >
            {item.hasLink ? (
              <Link href={`${item.path}`} style={{ textDecoration: "none" }}>
                <Typography
                  {...((themeConfig.menuTextTruncate ||
                    (!themeConfig.menuTextTruncate &&
                      navCollapsed &&
                      !navHover)) && {
                    noWrap: true,
                  })}
                  sx={{
                    color: "white !important",
                    fontWeight: 400 + " !important",
                  }}
                >
                  <Translations text={t(`NAV.${item.title}`)} />
                </Typography>
              </Link>
            ) : (
              <Typography
                {...((themeConfig.menuTextTruncate ||
                  (!themeConfig.menuTextTruncate &&
                    navCollapsed &&
                    !navHover)) && {
                  noWrap: true,
                })}
                sx={{
                  color: "white !important",
                  fontWeight: 400 + " !important",
                }}
              >
                <Translations text={t(`NAV.${item.title}`)} />
              </Typography>
            )}
            <Box
              className="menu-item-meta"
              sx={{ ml: 0.8, display: "flex", alignItems: "center" }}
            >
              {item.badgeContent ? (
                <Chip
                  label={item.badgeContent}
                  color={item.badgeColor || "primary"}
                  sx={{
                    mr: 0.8,
                    height: 20,
                    fontWeight: 500,
                    "& .MuiChip-label": {
                      px: 1.5,
                      textTransform: "capitalize",
                    },
                  }}
                />
              ) : null}
              {direction === "ltr" ? (
                <MenuGroupToggleRightIcon
                  sx={{
                    ...conditionalColor(),
                    ...(groupActive.includes(item.title)
                      ? { transform: "rotate(90deg)" }
                      : {}),
                  }}
                />
              ) : (
                <MenuGroupToggleLeftIcon
                  sx={{
                    ...conditionalColor(),
                    ...(groupActive.includes(item.title)
                      ? { transform: "rotate(-90deg)" }
                      : {}),
                  }}
                />
              )}
            </Box>
          </MenuItemTextWrapper>
        </ListItemButton>
        <Collapse
          component="ul"
          onClick={(e) => e.stopPropagation()}
          in={groupActive.includes(item.title)}
          sx={{
            pl: 5,
            width: "100%",
            ...menuGroupCollapsedStyles,
            transition: "all .25s ease-in-out",
            "& .MuiListItemButton-gutters": {
              paddingLeft: "2.6rem",
            },
          }}
        >
          <VerticalNavItems
            {...props}
            parent={item}
            navVisible={navVisible}
            verticalNavItems={item.children}
            isSubToSub={parent && item.children ? item : undefined}
          />
        </Collapse>
      </ListItem>
    </CanViewNavGroup>
  );
};

export default VerticalNavGroup;
