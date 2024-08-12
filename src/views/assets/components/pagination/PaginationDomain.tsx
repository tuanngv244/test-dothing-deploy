import React, { useEffect } from "react";
import {
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import MuiPagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import PaginationItem from "@mui/material/PaginationItem";
import { useSelector, useDispatch } from "react-redux";
import { resetPaging } from "@/app/reducers/client";
import DoubleArrowLeft from "@/@core/components/icons/DoubleArrowLeft";
import DoubleArrowRight from "@/@core/components/icons/DoubleArrowRight";

const PaginationBox = styled(MuiPagination)(({ theme }: {theme: any}) => ({
  minHeight: "70px!important",
  marginTop: 3,
  paddingTop: "5px",
  "& .MuiPagination-ul": {
    "& .MuiButtonBase-root.MuiPaginationItem-root": {
      border: "none",
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
      fontSize: "22px",
      fontWeight: 700,
      boxShadow: "0px 4px 16px 5px rgba(0, 102, 255, 0.1)",
      borderRadius: "5px",
      width: 54,
      height: 54,
    },
    "& > li": {
      marginLeft: "3px",
      marginRight: "3px",
    },

    "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    "& .MuiPagination-ul": {
      "& .MuiButtonBase-root.MuiPaginationItem-root": {
        fontSize: "20px",
        width: 50,
        height: 50,
      },
      "& > li": {
        marginLeft: "0px",
        marginRight: "0px",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiPagination-ul": {
      "& .MuiButtonBase-root.MuiPaginationItem-root": {
        fontSize: "18px",
        width: 45,
        height: 45,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiPagination-ul": {
      "& .MuiButtonBase-root.MuiPaginationItem-root": {
        fontSize: "16px",
        width: 40,
        height: 40,
      },
    },
  },
}));

type PaginationDomain = {
    page: number,
    onPageChange: Function,
    className: string
}

const PaginationDomain = ({ page, onPageChange, className }: PaginationDomain) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const store = useSelector((state: any) => state.client);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.isResetPaging) {
      apiRef.current.setPage(0);
      dispatch(resetPaging(false));
    }
  }, [store?.isResetPaging]);

  return (
    <PaginationBox
      color="primary"
      shape="rounded"
      variant="outlined"
      size={"large"}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          components={{
            last: DoubleArrowRight,
            first: DoubleArrowLeft,
          }}
        />
      )}
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1, apiRef);
      }}
      showFirstButton
      showLastButton
    />
  );
};

export default PaginationDomain;
