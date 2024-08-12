/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useMemo } from "react";
import Security from "@/@core/components/icons/Security";
import Expired from "@/@core/components/icons/Expired";
import Good from "@/@core/components/icons/Good";
import MuiContainer from "@/@core/style-libs/mui-container";
import Translations from "@/@core/components/translations";
import { useRouter } from "next/router";
import {
  Card,
  Grid,
  Typography,
  Button,
  Box,
  styled,
  alpha,
  useMediaQuery,
  Theme,
  useTheme,
} from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { WIDTH_MEDIUM, DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@/@core/configs";
import DialogDomain from "./DialogDomain";
import { SearchAllDomainProps } from "@/domains/dto/search/DtoResSearchAllDomain";
import {
  searchAll,
  setPerPage,
  setPage,
  setTotal,
} from "@/app/reducers/client";
import searchAllDomainMapper from "@/domains/mappers/search/mapper.res-search-all-domain";
import { uuidv4, formatPoint, sleepAsync, checkDomainGo } from "@/@core/utils/helpers";
import SuggestionDomain from "./SuggestionDomain";

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

const BoxWrapper = styled(MuiContainer)(
  ({ theme, is_result, hrows }: { theme: any; is_result: any, hrows: string | number }) => ({
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
      height: is_result ? hrows + "px!important" : "auto",
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
      marginBottom: 30,
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
      ".MuiDataGrid-virtualScroller": {},
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
        marginLeft: "0",
        marginRight: "0",
        borderBottom: "0 solid rgba(0, 0, 0, 0.1) !important",
        marginBottom: 10,
      },
      ".MuiDataGrid-virtualScroller": {
        height: is_result ? hrows + "px!important" : "auto",
      },
    },
  })
);

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

const Label = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "32px !important",
  lineHeight: "32px",
  fontWeight: 400,
  marginBottom: 60,

  [theme.breakpoints.down("lg")]: {
    marginTop: 58,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
    marginBottom: "1rem",
    marginTop: 10,
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
    color: status !== "AVAILABLE" ? theme.palette.common.black : theme.palette.primary.main,

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

const Hint = styled(Typography)(({ theme }) => ({
  fontSize: "18px !important",
  lineHeight: "32px",
  fontWeight: 400,
  color: "#0A0A0A",
  marginTop: "0",
  marginBottom: "0.5rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px !important",
    textAlign: "left",
    lineHeight: "14px",
    padding: "0.8rem",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    margin: "1rem",
    marginTop: 0,
    marginBottom: 0,
  },
}));

const TextSecurity = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "rgb(115 115 115 / 80%)",
  fontWeight: 700,
  textAlign: "center",
  borderRadius: 60,
  width: 145,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#F1F1F1",
  span: {
    paddingLeft: 5,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 5,
    fontSize: "11px",
    width: 100,
    height: 30,

    svg: {
      width: 20,
      height: 20,
      marginTop: "0 !important",
    },
  },
}));

type DmListProps = {
  page?: number;
  per_page?: number;
  q?: any;
};

const Domains = ({ data }: { data?: any }) => {
  const theme: any = useTheme();

  const [value, setValue] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(data ? [...data.contents] : []);
  const [open, setOpen] = useState(false);
  const [domain, setDomain] = useState<any>({});
  const [result, setResult] = useState<any>(null);

  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const store = useSelector((state: any) => state.client);
  const [pageSize, setPageSize] = useState(store.per_page);
  const [hRows, sethRows] = useState(1000)

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("xl"));
  const isTablet = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  const heightRow = useMemo(() => {
    if (isDesktop) return 80;
    if (isTablet) return 70;
    return 100;
  }, []);

  const isDomainGo = useMemo(() => {
    return checkDomainGo(router.query?.q as any) 
  }, [router.query?.q])

  const renderColumns = (
    togglePurchase: Function,
    isMobile: boolean,
    t: Function,
    theme: any,
    isDomainGo: boolean
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
                    <TextSecurity>
                      <Security />
                      <span>Protected</span>
                    </TextSecurity>
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
                <TextSecurity>
                  <Security />
                  <span>Protected</span>
                </TextSecurity>
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
          if (isDomainGo) return ''
          return (
            <>
              {row.status !== "AVAILABLE" ? (
                <Unpurchasable variant="h6" sx={{ color: theme.palette.text.sLabel }}>
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

  const getDmList = async (props: DmListProps) => {
    setLoading(true);

    const result = await dispatch(searchAll({ keyword: props.q }));
    const { isStatus, ...otherResult }: SearchAllDomainProps =
      searchAllDomainMapper.mapToDto(result);

    if (!isStatus) {
      setResult(null);
      setRows([]);
      setLoading(false);
      return;
    }

    setResult(otherResult);

    let contents =
      otherResult?.items?.map((row: any) => {
        let newItem = { ...row };

        if (newItem?.availability?.status === "AVAILABLE") {
          newItem.usdFormat =
            newItem?.availability?.price?.subTotal?.usdCents / 100 || 0;
        } else {
          newItem.usdFormat = "N/A";
        }
        newItem.id = uuidv4();
        newItem.status = newItem?.availability?.status;
        newItem.usd =
          newItem?.availability?.price?.subTotal?.usdCents / 100 || 0;
        newItem.krw =
          (result.payload.exchange *
            newItem?.availability?.price?.subTotal?.usdCents) /
          100;
        newItem.krwFormat = formatPoint(newItem.krw || 0);
        newItem.usdFormat = formatPoint(newItem.usdFormat || 0);
        newItem.krw = newItem.krw || 0;

        return newItem;
      }) ?? [];

    let newResult = contents.length > 100 ? contents.slice(0, 100) : contents;

    setLoading(false);
    dispatch(setTotal(contents.length));
    //dispatch(setPerPage(newResult.length));
    setRows(contents);
    sethRows((contents.length * 80) + 5)
    await sleepAsync(100);
    setPageSize(newResult.length);
  };

  const resetList = () => {
    dispatch(setPage(DEFAULT_PAGE));
    dispatch(setPerPage(DEFAULT_PER_PAGE));
  };

  const resetPopup = () => {
    setDomain({});
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

  useEffect(() => {
    if (router.query?.q) {
      setValue(router?.query?.q);
    }

    getDmList({
      page: store.page,
      per_page: store.per_page,
      q: router.query?.q,
    });

    return () => {
      resetList();
    };
  }, [router.query]);

  return (
    <BoxWrapper
      width={WIDTH_MEDIUM}
      theme={theme}
      is_result={result ? "is_result" : ""}
      hrows={hRows}
    >
      <Grid container spacing={6}>
        <Grid item xs={12}>
          {i18n.language === "en" ? (
            <Label variant={"h6"}>
              Showing results for{" "}
              <span style={{ fontWeight: 700 }}>"{router.query?.q}"</span>
            </Label>
          ) : (
            <Label variant={"h6"}>
              <span style={{ fontWeight: 700 }}>{router.query?.q}</span>{" "}
              <Translations text={"Showing results for"} />
            </Label>
          )}
        </Grid>
        <Grid item xs={12} sx={{ pt: "5px !important" }}>
          <StripedDataGrid
            autoHeight
            rows={rows}
            rowCount={store.total}
            rowHeight={heightRow}
            columns={renderColumns(togglePurchase, isMobile, t, theme, isDomainGo) as any}
            disableColumnMenu
            hideFooterPagination
            loading={loading}
            rowSelection={false}
            columnVisibilityModel={{
              usd: isMobile ? false : true,
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
          {result && <SuggestionDomain data={result} />}
          <Hint variant="h6">
            <Translations
              text={
                "※ The displayed price is adjustable. The exchange rate is applied as of 00:00 on the day. In general, Web3 domain prices do not change rapidly, but may fluctuate depending on market conditions such as exchange rates. Please check the policy of the card company you use for the exchange rate at the time of payment."
              }
            />
          </Hint>
        </Grid>
      </Grid>
      <DialogDomain open={open} toggle={togglePurchase} domain={domain} />
    </BoxWrapper>
  );
};

export default Domains;
