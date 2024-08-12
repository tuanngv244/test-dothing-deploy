import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  styled,
  Stack,
} from "@mui/material";
import Magnify from "mdi-material-ui/Magnify";
import { useForm, Controller, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import DropdownMenu from "@/views/assets/components/dropdown/DropdownMenu";

const LastLabel = styled(Typography)(({ theme }: { theme: any }) => ({
  textAlign: "center",
  fontSize: "28px !important",
  color: theme.palette.common.black + "!important",
  fontWeight: 700,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    fontSize: "20px !important",
    whiteSpace: "normal",
    lineHeight: 1,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
  },
}));

const BoxLabel = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: 30,
    marginRight: 15,
  },
}));

type FilterSuggestionProps = {
  handleFilter?: Function;
  pageSize: number;
};

const FilterSuggestion = ({
  pageSize,
  handleFilter,
}: FilterSuggestionProps) => {
  const store = useSelector((state: any) => state.client);
  const [perPage, setPerPage] = useState(pageSize);

  const handleChangeRowsPerPages = (e: React.BaseSyntheticEvent) => {
    setPerPage(e.target.value);
    handleFilter && handleFilter(e.target.value);
  };

  return (
    <BoxLabel
      sx={{
        pb: 3,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <LastLabel>추천 도메인</LastLabel>
      </Box>
      <Box sx={{ display: "none", flexWrap: "wrap", alignItems: "center" }}>
        <DropdownMenu
          perPage={perPage}
          handleChangeRowsPerPages={handleChangeRowsPerPages}
        ></DropdownMenu>
      </Box>
    </BoxLabel>
  );
};

export default FilterSuggestion;
