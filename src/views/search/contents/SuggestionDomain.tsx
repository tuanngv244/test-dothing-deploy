import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import { DataGrid, GridPagination, gridClasses } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Card,
  Grid,
  Divider,
  Typography,
  Button,
  Box,
  useMediaQuery,
  styled,
  alpha,
  Theme,
  useTheme,
} from "@mui/material";
import { formatPoint, uuidv4 } from "@/@core/utils/helpers";
import { setPerPage, setPage, setTotal } from "@/app/reducers/client";
import {
  WIDTH_MEDIUM,
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  DEFAULT_OPTIONS,
} from "@/@core/configs";
import DialogDomain from "./DialogDomain";
import Good from "@/@core/components/icons/Good";
import Expired from "@/@core/components/icons/Expired";
import MuiContainer from "@/@core/style-libs/mui-container";
import PaginationDomain from "@/views/assets/components/pagination/PaginationDomain";
import { SearchAllDomainProps } from "@/domains/dto/search/DtoResSearchAllDomain";
import FilterSuggestion from "./FilterSuggestion";
import NoRows from "@/views/assets/components/no-empty/NoRows";

const statusObj = {
  PROTECTED: <Expired />,
  DISALLOWED: <Expired />,
  REGISTERED: <Expired />,
  RESERVED: <Expired />,
  HOT: <Good />,
  AVAILABLE: <Good />,
};

type statusObjTypes =
  | "PROTECTED"
  | "DISALLOWED"
  | "REGISTERED"
  | "RESERVED"
  | "HOT"
  | "AVAILABLE";

const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: "rgb(255 255 255 / 10%)",
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: "rgb(230 240 255 / 30%)",
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

const BoxWrapper = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  position: "relative",
  marginTop: "3rem",

  ".MuiDataGrid-columnSeparator": {
    display: "none !important",
  },
  ".MuiDataGrid-columnHeaders": {
    background: theme.palette.background.bgHeader,
    borderRadius: 0,
    color: theme.palette.common.black,
    maxHeight: "60px !important",
    minHeight: "60px !important",
    borderBottom: "0 !important",
  },
  ".MuiDataGrid-columnHeaderTitle": {
    fontSize: "24px !important",
    fontWeight: 700,
    textTransform: "capitalize",
  },
  ".MuiDataGrid-virtualScroller": {
    marginTop: "0px!important",
    overflow: "inherit !important",
    height: "800px!important",
  },
  ".MuiDataGrid-virtualScrollerRenderZone": {
    ".MuiDataGrid-cell, .MuiDataGrid-row": {
      borderBottom: "0 !important",
      maxHeight: "80px !important",
      minHeight: "80px !important",
    },
  },
  ".MuiDataGrid-footerContainer": {
    borderTop: "0 !important",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    marginTop: "1rem",
    paddingBottom: "2rem",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: "3rem",

    ".MuiDataGrid-columnHeaders": {
      borderRadius: 0,
      color: theme.palette.common.black,
      maxHeight: "58px !important",
      minHeight: "58px !important",
      borderBottom: "0 !important",
    },
    ".MuiDataGrid-columnHeaderTitle": {
      fontSize: "20px !important",
    },
    ".MuiDataGrid-virtualScroller": {
      marginTop: "0px !important",
    },
    ".MuiDataGrid-virtualScrollerRenderZone": {
      ".MuiDataGrid-cell, .MuiDataGrid-row": {
        maxHeight: "65px !important",
        minHeight: "65px !important",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0",
    paddingRight: "0",
    marginTop: "2rem",
    ".MuiDataGrid-columnHeaderTitle": {
      fontSize: "16px !important",
    },
    ".MuiDataGrid-virtualScrollerRenderZone": {
      ".MuiDataGrid-cell, .MuiDataGrid-row": {
        overflowX: "auto",
        maxHeight: "100px!important",
        minHeight: "100px!important",
      },
    },
    ".MuiDataGrid-virtualScrollerContent": {
      maxHeight: "100% !important",
      minHeight: "7rem !important",
    },
    ".MuiDataGrid-footerContainer": {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    ".MuiTablePagination-actions": {
      marginLeft: "0 !important",
    },
    ".MuiDataGrid-virtualScroller": {
      height: "1000px!important",
    },
  },
}));

const LastLabel = styled(Typography)(({ theme }: { theme: any }) => ({
  textAlign: "center",
  fontSize: "24px !important",
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

const ButtonStyle = styled(Button)(({ theme }) => ({
  textAlign: "center",
  fontSize: "20px !important",
  lineHeight: "32px",
  fontWeight: 700,
  borderRadius: 60,
  height: 40,
  width: 160,
  textTransform: "capitalize",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px !important",
    height: 38,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
    width: 110,
    height: 40,
  },
}));

const Unpurchasable = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
  },
}));

const DomainStyle = styled(Typography)(
  ({ theme, status }: { theme: any; status: string }) => ({
    fontSize: "24px !important",
    lineHeight: "32px",
    fontWeight: 700,
    marginLeft: "3rem",
    color:
      status !== "AVAILABLE"
        ? theme.palette.common.black
        : theme.palette.primary.main,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("xlc")]: {
      fontSize: "20px !important",
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  })
);

const DomainCol = styled(Box)(({ theme }) => ({
  alignItems: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    width: 400,
    alignItems: "start",
    ".box": {
      marginLeft: "1rem",
      textAlign: "left",
    },
    svg: {
      marginTop: 10,
    },
  },
}));

const Price = styled(Typography)(({ theme }: { theme: any }) => ({
  fontSize: "24px !important",
  lineHeight: "32px",
  fontWeight: 400,
  color: theme.palette.common.black,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    whiteSpace: "nowrap",
    fontWeight: 700,
    fontSize: "16px !important",
    lineHeight: 1,
  },
}));

const CustomPagination = (props: any) => {
  return <GridPagination ActionsComponent={PaginationDomain} {...props} />;
};

const SuggestionDomain = ({ data }: { data: SearchAllDomainProps }) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [domain, setDomain] = useState<any>({});

  const store = useSelector((state: any) => state.client);
  const [pageSize, setPageSize] = useState(store.per_page);

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { t } = useTranslation();

  const refPage = useRef(DEFAULT_PAGE);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: store.per_page,
    page: refPage.current,
  });

  const heightRow = useMemo(() => {
    if (isDesktop) return 80;

    if (isTablet) return 70;

    return 70;
  }, []);

  const getDataList = async () => {
    setLoading(true);

    let contents =
      data?.suggestions?.map((row, index) => {
        let newItem = { ...row };

        newItem.usdFormat = newItem?.price?.subTotal?.usdCents / 100 || 0;
        newItem.id = uuidv4();

        newItem.status = "AVAILABLE";
        newItem.usd = newItem?.price?.subTotal?.usdCents / 100 || 0;
        newItem.krw =
          (data?.exchange * newItem?.price?.subTotal?.usdCents) / 100;
        newItem.krwFormat = formatPoint(newItem.krw || 0);
        newItem.usdFormat = formatPoint(newItem.usdFormat || 0);
        newItem.krw = newItem.krw || 0;

        return newItem;
      }) ?? [];

    setLoading(false);
    dispatch(setTotal(contents.length));
    setRows(contents);
  };

  const renderColumns = (
    togglePurchase: Function,
    isMobile: boolean,
    t: Function,
    theme: any
  ) => {
    return [
      {
        flex: isMobile ? 0.2 : 0.25,
        field: "name",
        headerName: t("Domain"),
        headerAlign: "center",
        sortable: false,
        minWidth: isMobile ? 250 : 430,
        renderCell: ({ row }: { row: any }) => {
          return (
            <DomainCol sx={{ display: "flex" }}>
              {statusObj[row.status as statusObjTypes]}

              {isMobile ? (
                <Box className="box">
                  <DomainStyle theme={theme} status={row.status}>
                    {row.name}
                  </DomainStyle>
                  {row.usd ? (
                    <Price>
                      ${row.usdFormat} USD{" "}
                      <span style={{ whiteSpace: "nowrap" }}>
                        ({row.krwFormat} 원)
                      </span>
                    </Price>
                  ) : (
                    ""
                  )}
                </Box>
              ) : (
                <DomainStyle theme={theme} status={row.status}>
                  {row.name}
                </DomainStyle>
              )}
            </DomainCol>
          );
        },
      },
      {
        flex: 0.25,
        headerName: t("Price"),
        resizable: false,
        headerAlign: "center",
        align: "center",
        field: "usd",
        minWidth: 200,
        renderCell: ({ row }: { row: any }) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              {row.usd ? (
                <Price>
                  <span style={{ fontWeight: 700 }}>
                    ${row.usdFormat} USD ({row.krwFormat} 원)
                  </span>
                </Price>
              ) : (
                ""
              )}
            </Box>
          );
        },
      },
      {
        flex: 0.15,
        field: "status",
        sortable: false,
        resizable: false,
        headerAlign: "center",
        align: "center",
        minWidth: isMobile ? 100 : 150,
        renderHeader: () => (
          <>
            {isMobile ? (
              <strong
                style={{
                  lineHeight: 1,
                  display: "block",
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                상태
              </strong>
            ) : (
              <LastLabel noWrap>{t("Purchase/ Unpurchasable")}</LastLabel>
            )}
          </>
        ),
        renderCell: ({ row }: { row: any }) => {
          return (
            <>
              {row.status !== "AVAILABLE" ? (
                <Unpurchasable
                  variant="h6"
                  sx={{ color: theme.palette.text.sLabel }}
                >
                  {t("Unpurchasable")}
                </Unpurchasable>
              ) : (
                <ButtonStyle
                  variant="contained"
                  size="small"
                  onClick={() => togglePurchase(row)}
                >
                  {t("Purchase")}
                </ButtonStyle>
              )}
            </>
          );
        },
      },
    ];
  };

  const handleFilter = (val: any) => {
    changePageSize(val);
  };

  const togglePurchase = (row: any) => {
    setOpen(!open);

    if (typeof row === "boolean" && row === true) {
      window.open(
        `${process.env.NEXT_PUBLIC_BASE_URL_WALLET}${domain?.name}&ref=KICA&tab=relevant`,
        "_blank"
      );
      setDomain({});
      return;
    }

    setDomain(row);
  };

  const changePageSize = (newPageSize: any) => {
    setPageSize(newPageSize);
  };

  const resetList = () => {
    dispatch(setPage(DEFAULT_PAGE));
    dispatch(setPerPage(DEFAULT_PER_PAGE));
  };

  const handleChangePage = (data: any) => {
    setPaginationModel(data);
  };

  useEffect(() => {
    if (router.query?.q) {
      setValue(router.query?.q as any);
    }

    getDataList();
    setPaginationModel({ page: 0, pageSize: DEFAULT_PER_PAGE });

    return () => {
      resetList();
    };
  }, [data]);

  if (!data) return null;

  return (
    <BoxWrapper width={WIDTH_MEDIUM}>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ pt: "5px !important" }}>
          <Card sx={{ boxShadow: "none" }}>
            <FilterSuggestion pageSize={pageSize} handleFilter={handleFilter} />
            <StripedDataGrid
              autoHeight
              rows={rows}
              rowCount={store.total}
              rowHeight={heightRow}
              columns={renderColumns(togglePurchase, isMobile, t, theme) as any}
              disableColumnMenu
              loading={loading}
              columnVisibilityModel={{
                usd: isMobile ? false : true,
              }}
              rowSelection={false}
              pageSizeOptions={DEFAULT_OPTIONS}
              paginationModel={paginationModel}
              onPaginationModelChange={handleChangePage}
              slots={{
                pagination: () => <CustomPagination />,
                noRowsOverlay: () => <NoRows />,
                noResultsOverlay: () => <NoRows />,
              }}
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
              }
              sx={{
                ".MuiDataGrid-footerContainer": {
                  justifyContent: "center",
                  py: "1rem",
                },
                ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel, .MuiInputBase-colorPrimary":
                  {
                    display: "none !important",
                  },
              }}
            />
          </Card>
        </Grid>
      </Grid>
      <DialogDomain toggle={togglePurchase} open={open} domain={domain} />
    </BoxWrapper>
  );
};

export default SuggestionDomain;
