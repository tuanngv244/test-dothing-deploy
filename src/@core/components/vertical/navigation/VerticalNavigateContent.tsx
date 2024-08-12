import {
  Box,
  Button,
  List,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";

import themeConfig from "@/infra/configs/themeConfig";
import PerfectScrollbar from "react-perfect-scrollbar";
import VerticalNavItems from "./VerticalNavItems";

import { WIDTH_MEDIUM } from "@/@core/configs";
import { useAuth } from "@/infra/hooks/useAuth";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ButtonStyle = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  boxShadow: "none",
  textTransform: "initial",
  whiteSpace: "nowrap",
  width: "calc(100% - 2.750rem)",
  margin: "2rem 1.375rem 0 1.375rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "25px",
    padding: "0.46875rem 1.53rem",
    marginLeft: "2.5rem",
    marginRight: "0.8rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
  },
}));

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

const VerticalNavigateContent = (props: NavigationProps) => {
  const {
    hidden,
    settings,
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent,
    setNavVisible,
  } = props;

  const { t } = useTranslation();

  const [groupActive, setGroupActive] = useState([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState([]);
  const { logout } = useAuth();

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("xl"));

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
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "#4c1012",
        height: "calc(100vh - 120px)",
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
            {!isDesktop && (
              <Link href="/insight/contact-us/" passHref>
                <ButtonStyle
                  onClick={() => setNavVisible(false)}
                  variant="contained"
                >
                  {t("COMMON.contactUs")}
                </ButtonStyle>
              </Link>
            )}
          </List>
        )}

        {afterVerticalNavMenuContent &&
        afterVerticalNavMenuContentPosition === "static"
          ? afterVerticalNavMenuContent(props)
          : null}
      </ScrollWrapper>
    </Box>
  );
};

export default VerticalNavigateContent;
