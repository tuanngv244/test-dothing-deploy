import React, { useState, useEffect, useRef } from "react";
import { Tab, Box, styled, useMediaQuery, Theme } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import MuiContainer from "@/@core/style-libs/mui-container";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { setLinkTab } from "@/app/reducers/client";
import {
  pages,
  mapRouteTitle,
  tabsPage,
  tabsPageValue,
  tabsPageProps,
  tabsPageValueProps,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import Tabs from "./contents/Tabs";

const TabBasic = styled(TabList)(({ theme }: { theme: any }) => ({
  marginTop: "2.5rem",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

  "& .MuiTabs-flexContainer": {
    justifyContent: "space-between",
  },
  "& .MuiTabs-indicator": {
    //backgroundColor: 'transparent'
  },
  "& .MuiTab-root": {
    border: "0px solid #BEBEBE",
    minHeight: 64,
    minWidth: "auto !important",
    width: 260,
    borderRadius: 0,
    fontWeight: 700,
    fontSize: 28,
    lineHeight: "32px",
    textTransform: "inherit",
    color: "rgb(0 0 0 / 40%)",
    flex: "initial",
    position: "relative",
    overflow: "visible",
    whiteSpace: "nowrap",

    "&:after": {
      content: `''`,
      display: "block",
      position: "absolute",
      right: -67,
      zIndex: 9,
      width: 44,
      height: 44,
      backgroundImage: `url(/images/icons/chevrons-right.svg)`,
      backgroundRepeat: "no-repeat",
    },

    "&:nth-child(4)": {
      "&:after": {
        display: "none",
      },
    },
  },
  "& .Mui-selected": {
    color: theme.palette.primary.main + ` !important`,
    borderColor: theme.palette.common.brand + " !important",
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    "& .MuiTab-root": {
      width: 200,
      fontSize: 24,
      "&:after": {
        display: "none",
        right: "-60px",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiTab-root": {
      width: 150,
      minHeight: "44px",
      fontSize: 18,

      "&:after": {
        right: "-46px",
        backgroundSize: "70%",
        top: "12px",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.5rem !important",
    marginLeft: -16,
    marginRight: -16,
    paddingLeft: 10,
    paddingRight: 10,
    "& .MuiTab-root": {
      width: 200,
      fontSize: 24,
      minHeight: "54px",
      marginRight: "3.5rem",

      "&:after": {
        display: "block",
        right: "-44px",
        backgroundSize: 30,
        width: 30,
        height: 30,
      },
    },
  },
}));

const TabContent = styled(TabPanel)(({ theme }) => ({
  "&.MuiTabPanel-root": {
    padding: 0,
  },
}));

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({}));

type FindOutContentProps = {
  page: string;
  category: string;
};

const FindOutContent = ({ page, category }: FindOutContentProps) => {
  const [value, setValue] = useState<any>('1')
  const refPage = useRef(page)
  const ctxWrapper = useRef(null)
  const refCate = useRef(category)
  const { t } = useTranslation()
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const dispatch = useDispatch()

  const handleChange = (event: any, newValue: number | string) => {
    setValue(newValue)
    refPage.current = tabsPage[newValue as tabsPageProps]
    refCate.current = '0'
    dispatch(setLinkTab(tabsPage[newValue as tabsPageProps]))
    window.history.pushState({ urlPath: `/find-out/${tabsPage[newValue as tabsPageProps]}` },'',`/find-out/${tabsPage[newValue as tabsPageProps]}`)
  }

  useEffect(() => {
    setValue(tabsPageValue[page as tabsPageValueProps])
    refPage.current = page

    return () => {
      dispatch(setLinkTab(''))
    }
  }, [page])

  return (
    <Wrapper bg='#fff' maxWidth={'100%'}>
      <BoxWrapper ref={ctxWrapper} width={WIDTH_MEDIUM}>
        <TabContext value={value}>
          <TabBasic scrollButtons variant={isMobile ? 'scrollable' : 'fullWidth'} onChange={handleChange}>
            {Object.entries(pages).map((item, index) => {
              let newIndex = index + 1
              return <Tab value={newIndex.toString()} key={index} label={t(mapRouteTitle[item[0] as mapRouteTitleProps])} />
            })}
          </TabBasic>
          {Object.entries(pages).map((item, index) => {
            let newIndex = index + 1
            return (
              <TabContent value={newIndex.toString()} key={item[0]}>
                <Tabs category={refCate.current} page={refPage.current} tabs={item[1]} />
              </TabContent>
            )
          })}
        </TabContext>
      </BoxWrapper>
    </Wrapper>
  )
}

export default FindOutContent