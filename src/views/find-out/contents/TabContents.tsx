import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Divider,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { pages, pagesProps } from "@/infra/navigation/router-title";

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Content = styled(Box)(({ theme }) => ({
  marginTop: 10,
  marginBottom: 30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
  },
}));

const BoxContent = styled(Box)(({ theme }) => ({
  marginTop: 0,
  marginBottom: 30,
  paddingLeft: "3rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "1.5rem",
  backgroundColor: "#FAFAFA",
  borderRadius: 20,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1rem",
    paddingTop: 10,
  },
  [theme.breakpoints.down("sm")]: {},
}));

const BoxWrapper = styled(Box)(({ theme }: { theme: any }) => ({
  paddingRight: "2rem",
  overflow: "auto",
  maxHeight: 700,

  img: {
    maxWidth: "100%",
  },
  "::-webkit-scrollbar-track": {
    WebkitBoxShadow: "none",
    borderRadius: "30px",
    backgroundColor: "#EAEAEA",
  },
  "::-webkit-scrollbar": {
    width: "16px",
    backgroundColor: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: "30px",
    WebkitBoxShadow: "none",
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    "::-webkit-scrollbar": {
      width: "10px",
      height: "10px",
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    "::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },
  },
}));

const TabContentCategory = ({ ...props }) => {
  try {
    const Tab = require(`./${props.page}/Tab${props.tab}`).default;
    return <Tab {...props} />;
  } catch (error) {
    return null;
  }
};

type TabContentsProps = {
    category: string,
    page: string
}

const TabContents = ({ category, page }: TabContentsProps) => {
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.down('xlc'))
  const [tab, setCurrentTab] = useState<any>(1)

  useEffect(() => {
    const currentIdex = pages[page as pagesProps].findIndex(item => item === category)
    setCurrentTab(currentIdex+1)
  }, [category])

  return (
    <Content>
      <BoxContent>
        <BoxWrapper>{TabContentCategory({ page, tab })}</BoxWrapper>
      </BoxContent>
      <DividerWrapper sx={{ borderColor: 'rgb(0 0 0 / 10%)' }} />
    </Content>
  )
};

export default TabContents;
