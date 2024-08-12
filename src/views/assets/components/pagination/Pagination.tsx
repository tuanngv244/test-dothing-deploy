import React from "react";
import MuiPagination from "@mui/material/Pagination";
import { styled } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import DoubleArrowLeft from "@/@core/components/icons/DoubleArrowLeft";
import DoubleArrowRight from "@/@core/components/icons/DoubleArrowRight";

const PaginationBox = styled(MuiPagination)(({ theme }: { theme: any }) => ({
  minHeight: "70px!important",
  marginTop: 3,
  paddingTop: "5px",
  "& .MuiPagination-ul": {
    "& .MuiButtonBase-root.MuiPaginationItem-root": {
      border: "none",
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
      fontSize: "24px",
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
        fontSize: "22px",
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
        fontSize: "20px",
        width: 45,
        height: 45,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiPagination-ul": {
      "& .MuiButtonBase-root.MuiPaginationItem-root": {
        fontSize: "20px",
        fontWeight: 500,
        width: 37,
        height: 37,
      },
    },
  },
}));

type PaginationProps = {
  page: number;
  onPageChange: any;
  className?: any;
  pageCount: number;
};

const Pagination = ({
  page = 1,
  onPageChange,
  className,
  pageCount = 1,
}: PaginationProps) => {
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
      page={page}
      onChange={(event, newPage) => {
        onPageChange(event, newPage);
        //window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      showFirstButton
      showLastButton
    />
  );
};

export default Pagination;
