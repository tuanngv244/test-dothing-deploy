import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Stack,
  styled,
  MenuItem,
  Select,
  useMediaQuery,
  Theme,
  SelectChangeEvent
} from "@mui/material";
import Tab from "@mui/material/Tab";
import MuiTabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Search from "@/@core/components/icons/Search";
import { useForm, Controller, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import IconDown from "@/@core/components/icons/IconDown";
import { convertToSlug } from "@/@core/utils/helpers";
import {
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import Fade from '@mui/material/Fade'

const InputStyle = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: "40px",
  color: "#fff",
  backgroundColor: theme.palette.primary.main,
  fontSize: "18px",
  marginTop: "0",
  paddingLeft: "10px",
  paddingRight: "27px",
  fontWeight: 500,
  border: "0",
  height: "40px",
  boxShadow: "none",
  width: "296px",
  marginRight: "auto",
  marginLeft: "auto",

  "input::placeholder": {
    color: "#fff",
    fontWeight: 500,
    opacity: 1,
  },
  "input:::-ms-input-placeholder": {
    color: "#fff",
    fontWeight: 500,
  },
  "input::-ms-input-placeholder": {
    color: "#fff",
    fontWeight: 500,
  },
  [theme.breakpoints.down("xl")]: {
    width: "300px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0",
    paddingRight: "20px",
    fontSize: "14px",
    height: "36px",
    width: "194px",
    svg: {
      width: 20,
    },
  },
  fieldset: {
    borderColor: "transparent !important",
  },
}));

const LinkMobile = styled("span")(({ theme }: { theme: any }) => ({
  color: theme.palette.common.caption,
  fontSize: "18px",
  lineHeight: "36px",
  fontWeight: 400,
  borderRadius: 0,
  textDecoration: "none",
  textAlign: "center",
  paddingLeft: "1rem",
  paddingRight: "1rem",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const DropDown = styled(Select)(({ theme }: { theme: any }) => ({
  color: theme.palette.common.caption,
  fontSize: "18px",
  fontWeight: 400,
  background: theme.palette.primary.main,
  borderRadius: 60,
  padding: "0",
  border: "none",
  height: "36px",
  lineHeight: "25px",
  width: "100px",
  textIndent: "0px",
  ".MuiSelect-select": {
    position: "relative",
    zIndex: 999,
    'span': {
      color: "#fff !important",
    },
    'a': {
      color: "#fff !important",
    },
  },
  "& fieldset": {
    borderColor: "transparent !important",
  },
  svg: {
    left: "4.3rem",
    position: "absolute",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    textIndent: "-50px",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiMenu-list ": {
      display: "none",
    },
    marginRight: 16,
  },
}));

const TabLinks = styled(MuiTabList)(({ theme }: { theme: any }) => ({
  minHeight: "36px !important",
  "& .MuiTabs-scroller": {
    width: "100%",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiTabs-root": {},
  "& .MuiTab-root": {
    fontSize: "20px",
    lineHeight: "36px",
    fontWeight: 700,
    borderRadius: 30,
    backgroundColor: theme.palette.background.bgHeader,
    color: "rgb(0 0 0 / 40%)",
    textDecoration: "none",
    minWidth: 86,
    minHeight: "36px !important",
    textAlign: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginRight: 15,
    paddingTop: 0,
    paddingBottom: 0,

    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("sm")]: {
    "& .MuiTab-root": {
    },
  },
}));

type SelectOptionsProps = {
  handleFilter: Function;
};
const SelectOptions = ({ handleFilter }: SelectOptionsProps) => {
  const { control, setValue, handleSubmit, reset } = useForm({
    defaultValues: { search: "" },
  });

  const store = useSelector((state: any) => state.client);

  const form = useWatch({ control });

  const onSubmit = async (data: any) => {
    handleFilter(data);
  };

  const handleClickSubmit = () => {
    handleFilter({ search: form.search });
  };

  useEffect(() => {
    if (store.isResetPaging) {
      reset();
      handleFilter({ search: "" });
    }
  }, [store.isResetPaging]);

  return (
    <Stack direction={"row"} justifyItems={"center"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <InputStyle
              {...field}
              size="small"
              placeholder="공지사항 검색"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickSubmit}
                    edge="end"
                    sx={{ cursor: "default" }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
      </form>
    </Stack>
  );
};

type HeadAnnounceProps = {
  handleFilter: Function;
  page: string;
  category: string;
  categories: Array<any>;
  setCategory: Function;
};
const HeadAnnounce = ({
  handleFilter,
  page,
  category,
  categories,
  setCategory,
}: HeadAnnounceProps) => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [cateMobile, setCateMobile] = useState(category);
  const [value, setValue] = useState(category !== "all" ? category : "all");

  let cats = categories.map((cat) => {
    return convertToSlug(cat);
  });

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
    setCategory(newValue, page);
  };

  const handleChangeMobile = (
    event: SelectChangeEvent<any>
  ) => {
    setValue(event.target.value);
    setCategory(event.target.value, page);
    setCateMobile(event.target.value);
  };

  return (
    <Box
      sx={{
        pb: isMobile ? 3 : 5,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        px: 0,
      }}
    >
      {isMobile ? (
        <DropDown
          onChange={handleChangeMobile}
          size="small"
          IconComponent={IconDown}
          value={cateMobile}
        >
          <MenuItem value={"all"}>
            <LinkMobile>{t(mapRouteTitle["all"])}</LinkMobile>
          </MenuItem>
          {categories.map((el, index) => {
            let link =
              convertToSlug(el) === "announcement"
                ? "notification"
                : convertToSlug(el);
            return (
              <MenuItem className="link" value={link} key={index}>
                <LinkMobile>
                  {t(mapRouteTitle[el.toLowerCase() as mapRouteTitleProps])}
                </LinkMobile>
              </MenuItem>
            );
          })}
        </DropDown>
      ) : (
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <TabContext value={value}>
            <TabLinks
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons
              onChange={handleChange}
            >
              <Tab
                value={convertToSlug("all")}
                label={t(mapRouteTitle["all"])}
              />
              {cats.map((item, idx) => {
                let link = item === "announcement" ? "notification" : item;
                return (
                  <Tab value={link} key={idx} label={t(mapRouteTitle[link as mapRouteTitleProps])} />
                );
              })}
            </TabLinks>
          </TabContext>
        </Stack>
      )}
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <SelectOptions handleFilter={handleFilter} />
      </Box>
    </Box>
  );
};

export default HeadAnnounce;
