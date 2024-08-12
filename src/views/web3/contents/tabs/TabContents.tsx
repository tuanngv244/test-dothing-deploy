import React, { useEffect, useState } from "react";
import {
  Tab,
  styled,
  Typography,
  useMediaQuery,
  Divider,
  Theme,
} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import MuiTabList from "@mui/lab/TabList";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import TabPremium from "./TabPremium";
import TabWeb3Domain from "./TabWeb3Domain";

const TabList = styled(MuiTabList)(({ theme }: { theme: any }) => ({
  marginTop: "2rem",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiTab-root": {
    minHeight: 60,
    minWidth: 320,
    borderRadius: 60,
    fontWeight: 700,
    fontSize: 28,
    lineHeight: "32px",
    textTransform: "inherit",
    backgroundColor: "#CCFAEE",
    color: "rgb(0 0 0 / 40%)",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  "& .Mui-selected": {
    backgroundColor: theme.palette.common.brand,
    color: theme.palette.common.black + `!important`,
  },
  "& .MuiTabs-centered": {
    border: "1px solid rgb(0 0 0 / 40%)",
    margin: "auto",
    borderRadius: "60px",
    display: "table",
    paddingTop: "10px",
    paddingBottom: "10px",
    "& button:first-of-type": {
      marginLeft: "13px",
    },
    "& button:last-of-type": {
      marginRight: "13px",
    },
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    "& .MuiTab-root": {
      minHeight: 50,
      minWidth: 250,
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "28px",
      marginLeft: "0.5rem",
      marginRight: "0.5em",
    },
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.8rem",
    marginLeft: -10,
    marginRight: -10,

    "& .MuiTabs-centered": {
      paddingTop: "6px",
      paddingBottom: "6px",
      paddingLeft: "8px",
      paddingRight: "8px",
      "& button:first-of-type": {
        marginLeft: "0",
      },
      "& button:last-of-type": {
        marginRight: "0",
      },
    },
    "& .MuiTab-root": {
      minHeight: 52,
      width: 160,
      minWidth: "auto",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "32px",
      marginLeft: "0.3rem",
      marginRight: "0.3em",
      whiteSpace: "nowrap",
    },
  },
}));

const TabContent = styled(TabPanel)(({ theme }) => ({
  "&.MuiTabPanel-root": {
    padding: 0,
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "36px",
  fontSize: "28px !important",
  fontWeight: 900,
  paddingRight: "15rem",
  paddingLeft: "15rem",
  textAlign: "center",
  marginTop: "3rem",
  marginBottom: "2.5rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: "2.5rem",
    paddingRight: "10rem",
    paddingLeft: "10rem",
    fontSize: "24px !important",
    lineHeight: "26px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px !important",
    lineHeight: "22px",
    paddingRight: "5rem",
    paddingLeft: "5rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingRight: "0",
    paddingLeft: "0",
    fontWeight: 900,
    fontSize: "15px !important",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

type TabContentsProps = {
  tab: string;
};

const TabContents = ({ tab }: TabContentsProps) => {
  const router = useRouter();
  const [value, setValue] = useState(tab);
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleChange = (event: React.BaseSyntheticEvent, newValue: string) => {
    if (newValue === "1") {
      router.replace({
        pathname: "/web3-domain/domain",
      });
    } else {
      router.replace({
        pathname: "/web3-domain/premium",
      });
    }

    setValue(newValue);
  };

  useEffect(() => {
    setValue(tab);
  }, [tab]);

  return (
    <TabContext value={value}>
      <TabList centered onChange={handleChange}>
        <Tab value="1" label={t("Web3 domain")} />
        <Tab value="2" label={t("Premium domain")} />
      </TabList>
      {value === "1" ? (
        isMobile ? (
          <SubTitle>
            Web3 도메인은 <br /> 다가오는 Web3 시대의 서비스 확산에 대응하여
            <br /> 편리하고 안전한 사용을 위한
            <br /> 필수적인 서비스입니다.
          </SubTitle>
        ) : (
          <SubTitle>
            Web3 도메인은 다가오는 Web3 시대의 서비스 확산에 대응하여
            <br /> 편리하고 안전한 사용을 위한 필수적인 서비스입니다.
          </SubTitle>
        )
      ) : (
        ""
      )}
      <TabContent value="1"><TabWeb3Domain /></TabContent>
      <TabContent value="2"><TabPremium /></TabContent>
    </TabContext>
  );
};

export default TabContents;
