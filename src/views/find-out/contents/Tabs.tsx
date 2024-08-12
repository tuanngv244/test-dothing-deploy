import React, { useEffect, useRef, useState } from "react";
import {
  Divider,
  styled,
  Tab,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useTranslation } from "react-i18next";
import {
  pages,
  mapRouteTitle,
  mapRouteTitleProps,
  pagesProps,
} from "@/infra/navigation/router-title";
import TabContents from "./TabContents";

const TabBasic = styled(TabList)(
  ({ theme, page }: { theme: any; page: string }) => ({
    margin: "auto",
    paddingLeft: "0",
    background: theme.palette.background.bgSection,
    borderRadius: 5,
    minHeight: 80,
    display: "flex",
    alignItems: "center",

    "& .MuiTabs-scroller": {
      width: "100%",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent",
    },
    "& .MuiTab-root": {
      marginRight: "1.5rem",
      fontWeight: 700,
      fontSize: page === "utilize-the-domain" ? 23 : 24,
      lineHeight: "30px",
      textTransform: "inherit",
      color: "rgb(0 0 0 / 40%)",
      position: "relative",
      overflow: "visible",
      whiteSpace: "nowrap",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      borderRadius: 30,
      height: 44,
      minHeight: 44,

      "&:last-of-type": {
        "&:after": {
          display: "none",
        },
      },
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main,
        color: `#fff !important`,
        borderColor: theme.palette.primary.main,
        padding: "11px 19px",
        "&:nth-child(1)": {
          marginLeft: "0rem",
        },
        "&:after": {
          right: -16,
        },
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: -16,
      marginRight: -16,
      paddingLeft: 10,
      paddingRight: 10,
      "& .MuiTab-root": {
        lineHeight: "30px",
        marginRight: "0.5rem",
        fontSize: 18,
      },
    },
  })
);

const TabContent = styled(TabPanel)(({ theme }) => ({
  "&.MuiTabPanel-root": {
    padding: 0,
    paddingTop: 16,
  },
  [theme.breakpoints.down("sm")]: {
    "&.MuiTabPanel-root": {
      paddingTop: 10,
    },
  },
}));

type TabsProps = {
  tabs: Array<any>;
  category: string;
  page: string;
};

const Tabs = ({ tabs, category, page }: TabsProps) => {
  const [value, setValue] = useState(
    category !== "0"
      ? pages[page as pagesProps]
          .findIndex((item) => item === category)
          .toString()
      : category
  );
  const { t } = useTranslation();

  const theme = useTheme()

  const handleChange = (event: any, newValue: any) => {
    let newCat = pages[page as pagesProps][newValue]
    window.history.pushState({ urlPath: `/find-out/${page}/${newCat}` }, '', `/find-out/${page}/${newCat}`)
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabBasic variant={'scrollable'} scrollButtons onChange={handleChange} page={page} theme={theme}>
        {tabs.map((item, idx) => {
          return <Tab value={idx.toString()} key={item} label={t(mapRouteTitle[item as mapRouteTitleProps])} />
        })}
      </TabBasic>
      {tabs.map((item, index) => {
        return (
          <TabContent value={index.toString()} key={item}>
            <TabContents category={item} page={page} />
          </TabContent>
        )
      })}
    </TabContext>
  )
};

export default Tabs;
