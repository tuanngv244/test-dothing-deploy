import { styled, useTheme, SwipeableDrawer } from "@mui/material";
import { ReactNode } from "react";

const MuiSwippleDrawer = styled(SwipeableDrawer)(({ theme, open }) => {
  return {
    overflowX: "hidden",
    transition: "width .25s ease-in-out",
    "& ul": {
      listStyle: "none",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: 4,
      paddingRight: 4,
    },
    "& .MuiDrawer-paper": {
      left: "unset",
      right: "unset",
      overflowX: "hidden",
      transition: "width .25s ease-in-out, box-shadow .25s ease-in-out",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      ".Mui-selected": {
        borderRadius: 0,
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiDrawer-paper": {
        height: open ? "auto" : 0,
        transform: "translateY(-0.1rem) !important",
        top: ((theme: any) => theme.mixins.header.vertical.minHeight + 5)(theme),
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",

        "> .MuiBox-root": {
          paddingTop: "0",
          paddingBottom: "0",
          transition: "all .1s ease-in-out",
          height: open ? "100%" : 0,
        },
      },
      "& .MuiBackdrop-root": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
  };
});

type DrawerProps = {
  hidden?: any;
  children?: ReactNode;
  navHover?: any;
  navWidth?: any;
  settings?: any;
  navVisible?: any;
  setNavHover?: any;
  setNavVisible?: any;
  collapsedNavWidth?: any;
  navigationBorderWidth?: any;
};

const Drawer = (props: DrawerProps) => {
  const {
    hidden,
    children,
    navHover,
    navWidth,
    settings,
    navVisible,
    setNavHover,
    setNavVisible,
    collapsedNavWidth,
    navigationBorderWidth,
  } = props;

  const theme = useTheme();

  const { skin, navCollapsed } = settings;

  const drawerColor = () => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return {
        "& .MuiTypography-root, & .MuiSvgIcon-root": {
          color: `rgba(${theme.palette.primary.dark}, 0.87)`,
        },
      };
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return {
        "& .MuiTypography-root, & .MuiSvgIcon-root": {
          color: `rgba(${theme.palette.primary.light}, 0.87)`,
        },
      };
    } else return {};
  };

  const drawerBgColor = () => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return {
        backgroundColor: theme.palette.primary.dark,
      };
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return {
        backgroundColor: theme.palette.primary.light,
      };
    } else {
      return {
        backgroundColor: theme.palette.background.default,
      };
    }
  };

  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true, // Better open performance on mobile.
    },
  };

  // Drawer Props for Desktop screens
  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null,
    onMouseEnter: () => {
      setNavHover(true);
    },
    onMouseLeave: () => {
      setNavHover(false);
    },
  };

  return (
    <MuiSwippleDrawer
      anchor="top"
      className="layout-vertical-nav"
      variant={hidden ? "temporary" : "persistent"}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{
        sx: { width: navCollapsed && !navHover ? collapsedNavWidth : navWidth },
      }}
      sx={{
        width: navCollapsed ? collapsedNavWidth : navWidth,
        "& .MuiDrawer-paper": {
          ...drawerColor(),
          ...drawerBgColor(),
          ...(!hidden && navCollapsed && navHover ? { boxShadow: 9 } : {}),
          borderRight:
            navigationBorderWidth === 0
              ? 0
              : `${navigationBorderWidth}px solid ${theme.palette.divider}`,
          background: "#fff",
        },
      }}
    >
      {children}
    </MuiSwippleDrawer>
    
  );
};

export default Drawer;
