import { convertToSlug } from "@/@core/utils/helpers";
import { mapRouteTitle } from "@/infra/navigation/router-title";
import TabContext from "@mui/lab/TabContext";
import MuiTabList from "@mui/lab/TabList";
import {
  Box,
  OutlinedInput,
  Stack,
  styled,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const InputStyle = styled(OutlinedInput)(({ theme }: { theme: any }) => ({
  borderRadius: "40px",
  color: theme.palette.text.sLabel,
  backgroundColor: theme.palette.common.brand,
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
    color: "rgb(0 0 0 / 60%)",
    fontWeight: 500,
    opacity: 1,
  },
  "input:::-ms-input-placeholder": {
    color: "rgb(0 0 0 / 60%)",
    fontWeight: 500,
  },
  "input::-ms-input-placeholder": {
    color: "rgb(0 0 0 / 60%)",
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
    fontWeight: 400,
    borderRadius: 30,
    backgroundColor: "#fdf6f6",
    color: "rgb(0 0 0 / 40%)",
    textDecoration: "none",
    minWidth: 120,
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
    "& .MuiTab-root": {},
  },
}));

type HeadFAQProps = {
  categories: Array<any>;
  setCategory: Function;
};

const HeadFAQ = ({ categories, setCategory }: HeadFAQProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [value, setValue] = useState("all");

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
    setCategory(newValue);
  };

  return (
    <Box
      sx={{
        pb: isMobile ? 0 : 5,
        pt: isMobile ? 5 : 0,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        px: isMobile ? 4 : 0,
        overflowX: "auto",
      }}
    >
      <Stack direction={"row"} width={"100%"} alignItems={"center"} spacing={3}>
        <TabContext value={value}>
          <TabLinks
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons
            onChange={handleChange}
          >
            <Tab value={convertToSlug("all")} label={t("COMMON.all")} />
            {categories?.map((item, idx) => {
              return <Tab value={item} key={idx} label={item} />;
            })}
          </TabLinks>
        </TabContext>
      </Stack>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        &nbsp;
      </Box>
    </Box>
  );
};

export default HeadFAQ;
