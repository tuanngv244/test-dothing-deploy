import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Tab, MenuItem, Select, Divider, styled, Stack } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import MuiTabList from "@mui/lab/TabList";
import IconDownX from "@/@core/components/icons/IconDownX";
import { convertToSlug } from "@/@core/utils/helpers";

const TabList = styled(MuiTabList)(({ theme }) => ({
  marginTop: "0",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiTab-root": {
    minHeight: 54,
    minWidth: 150,
    borderRadius: 30,
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "24px",
    textTransform: "inherit",
    backgroundColor: "#fdf6f6",
    color: "rgb(0 0 0 / 40%)",
    marginLeft: "0.9rem",
    marginRight: "0.9rem",
    letterSpacing: "-1px",
  },
  "& .Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: `#fff !important`,
  },
  "& .MuiTabs-centered": {
    margin: "auto",
    display: "table",
    "& button:first-of-type": {
      marginLeft: "0",
    },
    "& button:last-of-type": {
      marginRight: "0",
    },
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    "& .MuiTab-root": {
      minHeight: 54,
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "20px",
      marginLeft: "0.5rem",
      marginRight: "0.5em",
      minWidth: 200,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiTab-root": {
      minHeight: 45,
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0.5rem",
    marginLeft: -10,
    marginRight: -10,

    "& .MuiTabs-centered": {
      paddingTop: "7px",
      paddingBottom: "7px",
      paddingLeft: "2px",
      paddingRight: "2px",
      "& button:first-of-type": {
        marginLeft: "0",
      },
      "& button:last-of-type": {
        marginRight: "0",
      },
    },
    "& .MuiTab-root": {
      minHeight: 36,
      minWidth: "auto",
      fontWeight: 700,
      fontSize: 20,
      paddingTop: "0",
      paddingBottom: "0",
      paddingLeft: "1.3rem",
      paddingRight: "1.3rem",
      lineHeight: "32px",
      marginLeft: "0.3rem",
      marginRight: "0.3em",
      whiteSpace: "nowrap",
    },
  },
}));

const TabStack = styled(Stack)(({ theme }) => ({
  marginTop: "3.5rem",
  "&.print": {
    "@media print": {
      display: "none",
    },
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "0.7rem",
    marginLeft: "5px",
    marginRight: "5px",
    flexDirection: "column",
    alignItems: "flex-start",
    "@media print": {
      backgroundColor: "red",
    },
  },
}));

const DropDown = styled(Select)(({ theme }) => ({
  color: "#404040",
  fontSize: "24px",
  fontWeight: 500,
  background: "#fff",
  borderRadius: 60,
  padding: "0",
  paddingLeft: "1.5rem",
  border: "none",
  height: "54px",
  lineHeight: "38px",
  width: "269px",
  textIndent: "0px",
  textAlign: "left",
  ".MuiSelect-select": {
    position: "relative",
    zIndex: 9999,
  },
  "& fieldset": {
    border: `2px solid ${theme.palette.primary.main} !important`,
  },
  svg: {
    right: "1rem",
    position: "absolute",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    width: "220px",
    height: "45px",
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    width: "200px",
    textIndent: "0px",
    height: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    svg: {
      right: "1.5rem",
      width: 24,
    },
    marginTop: 5,
    background: "transparent",
    marginLeft: -5,
    paddingLeft: "1rem",
    width: "11rem",
    height: "36px",
    marginRight: 0,
    ".MuiSelect-select": {
      paddingLeft: 0,
      paddingRight: 0,
      minWidth: "5rem !important",
    },
  },
}));

const DropDownMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 18,
  lineHeight: "32px",
  fontWeight: 500,
  color: "rgb(0 0 0 / 80%)",
  backgroundColor: "transparent",
  textOverflow: "ellipsis",
  display: "block",
  overflow: "hidden",
  maxWidth: "20rem",
  "&:hover": {
    color: "rgb(0 102 255 / 80%)",
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DividerWrapper = styled(Divider)(({ theme }: { theme: any }) => ({
  marginTop: 25,
  marginBottom: "3.5rem",
  [theme.breakpoints.down("xl")]: {
    marginBottom: "2.5rem",
  },
  [theme.breakpoints.down("xlc")]: {
    marginTop: 35,
    marginBottom: 40,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0",
    marginRight: "0",
    marginTop: 10,
    marginBottom: 25,
  },
}));

type TabLinksProps = {
  tab: string;
  apiData?: any;
  selectedItem?: string;
  categories?: any;
  handleSelectData?: (value: string) => void;
};

const TabLink = ({
  tab,
  apiData,
  selectedItem,
  categories,
  handleSelectData,
}: TabLinksProps) => {
  const [value, setValue] = useState(tab);
  const [selected, setSelected] = useState<any>(selectedItem);

  const router = useRouter();

  const { t } = useTranslation();

  const handleChange = (event: any, newValue: string) => {
    router.replace({
      pathname: "/" + convertToSlug(categories[newValue as any]),
    });
    setValue(newValue);
  };

  const handleChangeDropdown = (e: any) => {
    setSelected(e.target.value);
    handleSelectData && handleSelectData(e.target.value);
  };

  if (!selectedItem) return null;

  return (
    <>
      <TabContext value={value}>
        <TabStack
          display={"flex"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="print"
        >
          <TabList centered onChange={handleChange}>
            {categories.map((item: any, index: number) => {
              return <Tab key={index} value={`${index}`} label={t(item)} />;
            })}
          </TabList>
          <DropDown
            size="small"
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            }}
            value={selected || selectedItem}
            onChange={handleChangeDropdown}
            IconComponent={IconDownX}
            className="menu"
          >
            {apiData?.contents?.map((item: any) => {
              return (
                <DropDownMenuItem value={item.id} key={item.id}>
                  {item.termVersion ? item.termVersion : item.termTitle}
                </DropDownMenuItem>
              );
            })}
          </DropDown>
        </TabStack>
      </TabContext>
      <DividerWrapper
        sx={{
          borderColor: "rgb(0 0 0 / 10%)",
          "@media print": {
            display: "none",
          },
        }}
      />
    </>
  );
};

export default TabLink;
