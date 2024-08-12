import Link from "next/link";
import { useRouter } from "next/router";
import {
  Chip,
  ListItem,
  Typography,
  Box,
  ListItemIcon,
  ListItemButton,
  styled,
  useTheme,
} from "@mui/material";
import themeConfig from "@/infra/configs/themeConfig";
import Translations from "../../translations";
import CanViewNavLink from "@/@core/acl/CanViewNavLink";
import { useTranslation } from "react-i18next";

const MenuNavLink = styled(ListItemButton)(({ theme }) => ({
  width: "100%",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  color: theme.palette.common.white,
  transition: "padding-left .25s ease-in-out",
  p: {
    fontWeight: 400 + " !important",
    color: theme.palette.common.white + " !important",
  },
  "&.active": {
    "&, &:hover": {
      boxShadow: "none",
      backgroundColor: "#270809",
      "& p": {
        fontWeight: 700 + " !important",
        color: theme.palette.common.white + "!important",
      },
    },
    "& .MuiTypography-root, & .MuiListItemIcon-root": {
      color: theme.palette.common.white + `!important`,
    },
  },
  "&:hover": {
    backgroundColor: "#270809",
    p: {
      fontWeight: 700 + " !important",
      color: theme.palette.common.white + `!important`,
    },
  },
}));

const MenuItemTextMetaWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
});

type NavLinkProps = {
  item?: any;
  parent?: any;
  navHover?: any;
  settings?: any;
  navVisible?: any;
  isSubToSub?: any;
  collapsedNavWidth?: any;
  toggleNavVisibility?: any;
  navigationBorderWidth?: any;
};

const VerticalNavLink = ({
  item,
  parent,
  navHover,
  settings,
  navVisible,
  isSubToSub,
  collapsedNavWidth,
  toggleNavVisibility,
  navigationBorderWidth,
}: NavLinkProps) => {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  const { skin, navCollapsed } = settings;
  const IconTag = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon;

  const conditionalBgColor = () => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return {
        color: `rgba(${theme.palette.primary.dark}, 0.87)`,
        "&:hover": {
          backgroundColor: `rgba(${theme.palette.primary.dark}, 0.04)`,
        },
      };
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return {
        color: `rgba(${theme.palette.primary.light}, 0.87)`,
        "&:hover": {
          backgroundColor: `rgba(${theme.palette.primary.light}, 0.04)`,
        },
      };
    } else return {};
  };

  const isNavLinkActive = () => {
    let routerPath = router.asPath.slice(0, router.asPath.length - 1);

    if (routerPath === item.path || isActivePage(routerPath)) {
      return true;
    } else {
      return false;
    }
  };

  const isActivePage = (routerPath: string) => {
    return (
      (routerPath.includes("find-out") &&
        routerPath === item.path + "/" + router.query?.category) ||
      (routerPath.includes("insight") &&
        routerPath === item.path + "/" + router.query?.category) ||
      (routerPath.includes("customer-support") &&
        routerPath === item.path + "/" + router.query?.category)
    );
  };

  return (
    <CanViewNavLink navLink={item}>
      <ListItem
        disablePadding
        className="nav-link"
        sx={{ mt: 1.5, px: "0 !important" }}
      >
        <Link
          style={{ width: "100%" }}
          passHref
          href={item.path === undefined ? "/" : item.path}
        >
          <MenuNavLink
            className={isNavLinkActive() ? "active anchor" : "anchor"}
            {...(item.openInNewTab ? { target: "_blank" } : null)}
            onClick={(e) => {
              if (!item.path) {
                e.preventDefault();
                e.stopPropagation();
              }
              if (navVisible) {
                toggleNavVisibility();
              }
            }}
            sx={{
              py: 2.25,
              width: "100%",
              ...conditionalBgColor(),
              ...(item.disabled
                ? { pointerEvents: "none" }
                : { cursor: "pointer" }),
              pl:
                navCollapsed && !navHover
                  ? (collapsedNavWidth - navigationBorderWidth - 24) / 8
                  : 5.5,
              pr:
                navCollapsed && !navHover
                  ? ((collapsedNavWidth - navigationBorderWidth - 24) / 2 - 5) /
                    4
                  : 3.5,
            }}
          >
            <MenuItemTextMetaWrapper
              sx={{
                ...(isSubToSub ? { ml: 9 } : {}),
                ...(navCollapsed && !navHover
                  ? { opacity: 0 }
                  : { opacity: 1 }),
              }}
            >
              <Typography
                {...((themeConfig.menuTextTruncate ||
                  (!themeConfig.menuTextTruncate &&
                    navCollapsed &&
                    !navHover)) && {
                  noWrap: true,
                })}
              >
                {item.path === "/" ? (
                  t(`NAV.${item.title}`)
                ) : (
                  <Translations text={t(`NAV.${item.title}`)} />
                )}
              </Typography>
              {item.badgeContent ? (
                <Chip
                  label={item.badgeContent}
                  color={item.badgeColor || "primary"}
                  sx={{
                    ml: 1.25,
                    height: 20,
                    fontWeight: 500,
                    "& .MuiChip-label": {
                      px: 1.5,
                      textTransform: "capitalize",
                    },
                  }}
                />
              ) : null}
            </MenuItemTextMetaWrapper>
          </MenuNavLink>
        </Link>
      </ListItem>
    </CanViewNavLink>
  );
};

export default VerticalNavLink;
