import React, { useRef, useState } from "react";
import { List, Box, useTheme } from "@mui/material";

import PerfectScrollbar from "react-perfect-scrollbar";
import themeConfig from "@/infra/configs/themeConfig";
import Drawer from "../Drawer";
import VerticalNavItems from "../VerticalNavItems";
import VerticalNavHeader from "../VerticalNavHeader";

import { useAuth } from "@/infra/hooks/useAuth";

type NavigationProps = {
  hidden?: any;
  settings?: any;
  afterVerticalNavMenuContent?: any;
  beforeVerticalNavMenuContent?: any;
  verticalNavMenuContent?: any;
  navHover?: any;
  navWidth?: any;
  navVisible?: any;
  setNavHover?: any;
  setNavVisible?: any;
  collapsedNavWidth?: any;
  toggleNavVisibility?: any;
  navigationBorderWidth?: any;
};

const Navigation = (props: NavigationProps, ref: any) => {
  const {
    hidden,
    settings,
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent,
  } = props;

  const [groupActive, setGroupActive] = useState([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState([]);
  const { logout } = useAuth();

  const shadowRef = useRef<any>(null);
  const theme = useTheme();
  const { skin } = settings;
  const {
    afterVerticalNavMenuContentPosition,
    beforeVerticalNavMenuContentPosition,
  } = themeConfig;

  const ScrollWrapper: any = hidden ? Box : PerfectScrollbar;

  const handleInfiniteScroll = (ref: any) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect;
      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect();

        return { ...original, height: Math.floor(original.height) };
      };
    }
  };

  const scrollMenu = (container: any) => {
    if (
      beforeVerticalNavMenuContentPosition === "static" ||
      !beforeVerticalNavMenuContent
    ) {
      container = hidden ? container.target : container;
      if (shadowRef && container.scrollTop > 0) {
        // @ts-ignore
        if (!shadowRef?.current?.classList.contains("d-block")) {
          // @ts-ignore
          shadowRef.current?.classList &&
            shadowRef.current.classList.add("d-block");
        }
      } else {
        // @ts-ignore
        shadowRef.current?.classList &&
          shadowRef.current.classList.remove("d-block");
      }
    }
  };

  return (
    <Drawer {...props}>
      <VerticalNavHeader {...props} />
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "#fff",
          ".MuiTypography-root, .MuiListItemIcon-root": {
            color: "rgb(0 0 0 / 80%)",
            fontWeight: 700,
            fontSize: "20px",
          },
        }}
      >
        <ScrollWrapper
          ref={(ref: any) => handleInfiniteScroll(ref)}
          {...(hidden
            ? {
                onScroll: (container: any) => scrollMenu(container),
                sx: { height: "100%", overflowY: "auto", overflowX: "hidden" },
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: (container: any) => scrollMenu(container),
              })}
        >
          {beforeVerticalNavMenuContent &&
          beforeVerticalNavMenuContentPosition === "static"
            ? beforeVerticalNavMenuContent(props)
            : null}
          {userVerticalNavMenuContent ? (
            userVerticalNavMenuContent(props)
          ) : (
            <List
              className="nav-items"
              sx={{
                pt: 0,
                transition: "padding .25s ease",
                "& > :first-child": { mt: "0" },
              }}
            >
              <VerticalNavItems
                groupActive={groupActive}
                setGroupActive={setGroupActive}
                currentActiveGroup={currentActiveGroup}
                setCurrentActiveGroup={setCurrentActiveGroup}
                {...props}
              />
            </List>
          )}

          {afterVerticalNavMenuContent &&
          afterVerticalNavMenuContentPosition === "static"
            ? afterVerticalNavMenuContent(props)
            : null}
        </ScrollWrapper>
      </Box>
    </Drawer>
  );
};

export default React.forwardRef(Navigation);
