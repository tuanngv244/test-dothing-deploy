import React, { useState, useEffect, useMemo, useRef, forwardRef } from "react";
import Link from "next/link";
import Translations from "@/@core/components/translations";
import PaginationDomain from "@/views/assets/components/pagination/PaginationDomain";
import NoRows from "@/views/assets/components/no-empty/NoRows";
import dynamic from "next/dynamic";
import {
  styled,
  Skeleton,
  Card,
  Grid,
  Typography,
  Button,
  Box,
  useMediaQuery,
  alpha,
  Stack,
  Theme,
  useTheme,
} from "@mui/material";
import { DataGrid, GridPagination, gridClasses } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import { WIDTH_MEDIUM, DEFAULT_OPTIONS } from "@/@core/configs";
import { useRouter } from "next/router";
import { capitalizedInput, truncateStr } from "@/@core/utils/helpers";
import { getAnnounces } from "@/app/reducers/client";
import { format, addDays } from "date-fns";
import announcesInfoMapper from "@/domains/mappers/support/mapper.support";
import MuiContainer from "@/@core/style-libs/mui-container";
import HeadAnnounce from "./HeadAnnounce";

// export const Loading = dynamic(() => import('@/@core/components/icons/IconLoading').then(module => module.default));

const statusObj = {
  event: "#3B82F6",
  notification: "#000000",
};

type statusObjProps = keyof typeof statusObj;

const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({ theme }: { theme: any }) => ({
  "& .MuiDataGrid-footerContainer": {
    justifyContent: "center",
    paddingTop: "3rem",
    paddingBottom: "4rem",
    marginBottom: "2.5rem",
  },
  "& .MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel, .MuiInputBase-colorPrimary":
    {
      display: "none !important",
    },
  "& .MuiTablePagination-root": {
    overflow: "visible",
  },
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
    backgroundColor: theme.palette.common.trOdd,
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
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    "& .MuiDataGrid-footerContainer": {
      paddingTop: "2rem",
      paddingBottom: "3rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiDataGrid-footerContainer": {
      paddingTop: "1.5rem",
      paddingBottom: "0.5rem",
    },
    "& .MuiTablePagination-actions": {
      marginLeft: "0 !important",
    },
  },
  [theme.breakpoints.down("sm")]: {},
}));

const BoxWrapper = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  position: "relative",
  marginTop: "2rem",

  ".MuiDataGrid-columnSeparator": {
    display: "none !important",
  },
  ".MuiDataGrid-columnHeaders": {
    background: theme.palette.background.bgHeader,
    borderRadius: 0,
    color: theme.palette.common.black,
    maxHeight: " 80px !important",
    minHeight: "80px !important",
    borderBottom: "0 !important",
  },
  ".MuiDataGrid-columnHeaderTitle": {
    fontSize: "24px !important",
    fontWeight: 700,
    textTransform: "capitalize",
  },
  ".MuiDataGrid-virtualScroller": {
    marginTop: "0px!important",
  },
  ".MuiDataGrid-virtualScrollerRenderZone": {
    ".MuiDataGrid-cell, .MuiDataGrid-row": {
      borderBottom: "0 !important",
      maxHeight: "80px !important",
      minHeight: "80px !important",
    },
  },
  ".MuiTablePagination-toolbar": {
    paddingLeft: 0,
    marginLeft: 0,
  },
  ".MuiDataGrid-footerContainer": {
    borderTop: "0 !important",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: "3rem",

    ".MuiDataGrid-columnHeaders": {
      background: theme.palette.background.bgHeader,
      borderRadius: 0,
      color: theme.palette.common.black,
      maxHeight: "64px !important",
      minHeight: "64px !important",
      borderBottom: "0 !important",
    },
    ".MuiDataGrid-columnHeaderTitle": {
      fontSize: "18px !important",
    },
    ".MuiDataGrid-virtualScroller": {
      marginTop: "0px !important",
    },
    ".MuiDataGrid-virtualScrollerRenderZone": {
      ".MuiDataGrid-cell, .MuiDataGrid-row": {
        maxHeight: "70px !important",
        minHeight: "70px !important",
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
      fontSize: "14px !important",
    },
    ".MuiDataGrid-virtualScrollerRenderZone": {
      ".MuiDataGrid-cell, .MuiDataGrid-row": {
        maxHeight: "80px !important",
        minHeight: "80px !important",
        paddingTop: "0.6rem",
        paddingBottom: "0.6rem",
      },
      ".MuiDataGrid-row": {
        alignItems: "center",
      },
      '.MuiDataGrid-cell[data-field="announceType"]': {
        // paddingTop: 34,
        // marginTop: -8
      },
    },
    '.MuiDataGrid-cell[data-field="notiContent"]': {
      paddingLeft: "0 !important",
      paddingRight: "1rem !important",
      textAlign: "left",
      whiteSpace: "normal",
      width: "100%",
    },
    ".MuiDataGrid-footerContainer": {
      marginLeft: "1rem",
      marginRight: "1rem",
      marginBottom: "2rem",
    },
    ".MuiDataGrid-virtualScrollerContent": {
      maxHeight: "100% !important",
      minHeight: "7rem !important",
    },
    ".MuiButton-root": {
      marginBottom: 0,
    },
  },
}));

const LastLabel = styled(Typography)(({ theme }: { theme: any }) => ({
  textAlign: "center",
  fontSize: "18px !important",
  color: theme.palette.text.sLabel + " !important",
  fontWeight: 400,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    fontSize: "16px !important",
    whiteSpace: "normal",
    lineHeight: 1,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px !important",
    fontWeight: 300,
    lineHeight: "25px",
    color: theme.palette.text.sLabel + " !important",
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "60px",
  fontSize: "48px !important",
  fontWeight: 700,
  marginBottom: "1.5rem",
  marginTop: "1.1rem",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "46px !important",
    lineHeight: "46px",
    marginTop: ".1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "36px !important",
    lineHeight: "36px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    fontSize: "28px !important",
    lineHeight: "28px",
    marginBottom: "1rem",
  },
}));

const Badge = styled(Button)(({ theme }: { theme: any }) => ({
  textAlign: "center",
  fontSize: "14px !important",
  lineHeight: "30px",
  fontWeight: 700,
  borderRadius: 60,
  width: 64,
  height: 28,
  textTransform: "uppercase",
  color: "#fff",
  backgroundColor: theme.palette.background.bgFour,
  cursor: "default",

  [theme.breakpoints.down("xl")]: {
    fontSize: "13px !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "11px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px !important",
    width: 50,
    minWidth: 50,
    height: 20,
    marginBottom: 8,
  },
}));

const Domain = styled(Typography)(({ theme }) => ({
  fontSize: "24px !important",
  lineHeight: "30px",
  fontWeight: 500,
  color: theme.palette.common.black,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px !important",
    marginLeft: "1rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0",
  },
}));

const DomainCol = styled(Box)(({ theme }) => ({
  alignItems: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    ".box": {
      marginLeft: "1rem",
      textAlign: "left",
    },
    svg: {
      marginTop: 5,
    },
  },
}));

const StatusText = styled(Typography)(
  ({ theme, status_color }: { theme: Theme; status_color: string }) => ({
    fontSize: "20px !important",
    lineHeight: "30px",
    fontWeight: 500,
    color: status_color,
    textTransform: "capitalize",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px !important",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px !important",
      lineHeight: 1,
    },
  })
);

const Des = styled(Typography)(({ theme }: { theme: any }) => ({
  fontSize: "20px !important",
  lineHeight: "32px",
  fontWeight: 400,
  color: theme.palette.common.caption,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "18px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px !important",
    lineHeight: "18px",
    fontWeight: 500,
    textAlign: "left",
    whiteSpace: "break-spaces",
  },
}));

const StatusBody = styled(Typography)(
  ({ theme, status }: { theme: Theme; status: string }) => ({
    fontWeight: status === "expired" ? 400 : 500,
    textTransform: "capitalize",
    color:
      status === "expired"
        ? "#737373"
        : status === "hot"
        ? "#EF4444"
        : "#4ADE80",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      fontSize: "14px",
      lineHeight: 1,
    },
  })
);

const StackContent = styled(Stack)(
  ({ theme, type }: { theme: Theme; type: string }) => ({
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginTop: type === "mobile" ? -25 : -8,
    },
  })
);

const CustomPagination = (props: any) => {
  return <GridPagination ActionsComponent={PaginationDomain} {...props} />;
};

const checkNew = (createdAt: string) => {
  if (!createdAt) return false;

  const dayStr = format(new Date(createdAt), "yyyy-MM-dd");
  const newDays = format(addDays(new Date(dayStr), 30), "yyyy-MM-dd");
  const today = format(new Date(), "yyyy-MM-dd");

  return new Date(today).getTime() <= new Date(newDays).getTime();
};

const renderColumns = (
    isMobile: boolean,
    t: Function,
    page: number,
    pageSize: number,
    category: string | number,
    currentPage: string | number,
    theme: Theme) => {
  return [
    {
      flex: 0.05,
      field: "index",
      headerName: t("No."),
      headerAlign: "center",
      sortable: false,
      resizable: false,
      minWidth: 100,
      maxWidth: 100,
      align: "center",
      renderCell: (props: any) => {
        
        return (
          <DomainCol sx={{ display: "flex" }}>
            {isMobile ? (
              <Box className="box">
                <Domain>{props.row.domain}</Domain>
                <StatusBody
                  variant="h6"
                  theme={theme}
                  status={
                    props.row?.announceType === "Announcement"
                      ? "notification"
                      : props.row?.announceType?.toLowerCase()
                  }
                >
                  {t(
                    props.row?.announceType === "Announcement"
                      ? "notification"
                      : props.row?.announceType?.toLowerCase()
                  )}
                </StatusBody>
              </Box>
            ) : (
              <Domain>{props.row.order}</Domain>
            )}
          </DomainCol>
        );
      },
    },
    {
      flex: isMobile ? 0.15 : 0.2,
      sortable: false,
      resizable: false,
      headerAlign: "center",
      align: "center",
      field: "announceType",
      minWidth: isMobile ? 120 : 200,
      maxWidth: isMobile ? 120 : 200,
      renderHeader: () => (
        <>
          {isMobile ? (
            <>
              <strong
                style={{
                  lineHeight: 1,
                  display: "block",
                  textAlign: "left",
                  fontSize: "18px",
                }}
              >
                {t("항목")}
              </strong>
            </>
          ) : (
            <LastLabel
              sx={{
                fontWeight: 700,
                fontSize: "24px !important",
                color: "#000 !important",
              }}
              noWrap
            >
              {t("항목")}
            </LastLabel>
          )}
        </>
      ),
      renderCell: ({ row }: { row: any }) => {
        return (
          <Link
            href={`/customer-support/announcement/${category}/${row.id}/?p=${currentPage}`}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <StatusText
                theme={theme}
                status_color={
                  statusObj[
                    row?.announceType === "Announcement"
                      ? "notification"
                      : (row?.announceType?.toLowerCase() as statusObjProps)
                  ]
                }
              >
                {row?.announceType === "Announcement"
                  ? t(mapRouteTitle["announcement"])
                  : t(
                      mapRouteTitle[
                        row?.announceType?.toLowerCase() as mapRouteTitleProps
                      ]
                    )}
              </StatusText>
            </Box>
          </Link>
        );
      },
    },
    {
      flex: 0.2,
      field: "announceTitle",
      headerAlign: "center",
      renderHeader: () => (
        <>
          {isMobile ? (
            <strong
              style={{
                lineHeight: 1,
                display: "block",
                textAlign: "left",
                fontSize: "18px",
              }}
            >
              {t("제목")}
            </strong>
          ) : (
            <LastLabel
              sx={{
                fontWeight: 700,
                fontSize: "24px !important",
                color: "#000 !important",
              }}
              noWrap
            >
              {t("제목")}
            </LastLabel>
          )}
        </>
      ),
      sortable: false,
      resizable: false,
      className: "status",
      minWidth: 250,
      renderCell: ({ row }: { row: any }) => {
        return (
          <StackContent
            direction={"column"}
            display={isMobile ? "flex" : "inherit"}
            sx={{ width: "100%" }}
            theme={theme}
            type={isMobile && row.announceTitle?.length < 25 ? "mobile" : ""}
          >
            {isMobile ? (
              row.isView === "Y" ? (
                <Stack
                  direction={"row"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  {checkNew(row.createdAt) ? (
                    <Box sx={{ width: "100%", textAlign: "left" }}>
                      <Badge>New</Badge>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: "100%",
                        textAlign: "left",
                        visibility: "hidden",
                      }}
                    >
                      <Badge>New</Badge>
                    </Box>
                  )}

                  <Box sx={{ width: "100%", textAlign: "right" }}>
                    <LastLabel sx={{ textAlign: "right" }}>
                      {row.createdAt
                        ? format(new Date(row.createdAt), "yyyy.MM.dd")
                        : ""}
                    </LastLabel>
                  </Box>
                </Stack>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <Link
              href={`/customer-support/announcement/${category}/${row.id}/?p=${currentPage}`}
              style={{ textDecoration: "none" }}
              passHref
            >
              <Des noWrap={isMobile ? false : true} variant="h6">
                {truncateStr(row.announceTitle)}
              </Des>
            </Link>
          </StackContent>
        );
      },
    },
    {
      flex: 0.1,
      field: "isView",
      headerName: "",
      sortable: false,
      resizable: false,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      maxWidth: 200,
      renderCell: ({ row }: { row: any }) => {
        return <>{checkNew(row.createdAt) ? <Badge>New</Badge> : ""}</>;
      },
    },
    {
      flex: 0.1,
      field: "createdAt",
      sortable: false,
      resizable: false,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      maxWidth: 150,
      headerName: t("일자"),
      renderCell: ({ row }: { row: any }) => {
        return (
          <LastLabel>
            {row.createdAt ? format(new Date(row.createdAt), "yyyy.MM.dd") : ""}
          </LastLabel>
        );
      },
    },
  ];
};

type AnnounceProps = {
  apiData: any;
  page: string;
  category: string;
  categories: Array<any>;
};

const Announce = (
  { apiData, page, category, categories }: AnnounceProps,
  ref: any
) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(apiData?.totalItems);
  const router = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.client);
  const [pageSize, setPageSize] = useState(store.per_page);
  const refCategory = useRef(category);
  const refPageChange = useRef(false);

  const newPage = useMemo(() => {
    if (router.query?.slug && !isNaN(Number(router.query.slug[1]))) {
      return Number(router.query.slug[1]);
    }
    return 1;
  }, []);

  const refPage = useRef(newPage);
  const [cateSelected, setSelectedCategory] = useState(category);
  const preLoadValue = useRef(false);

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [paginationModel, setPaginationModel] = useState({
    pageSize: store.per_page,
    page: refPage.current - 1,
  });

  const { t } = useTranslation();

  const theme = useTheme()

  const heightRow = useMemo(() => {
    if (isDesktop) return 80;
    if (isTablet) return 80;
    return 70;
  }, []);

  const handleFilter = (val: any) => {
    setValue(val.search);
  };

  const getDataList = async (page: any, per_page: any, category: string) => {
    let newCategory =
      category === "notification" ? "Announcement" : capitalizedInput(category);
    setLoading(true);

    let params: any = {
      pageNo: page,
      pageSize: per_page,
      sortBy: "createdAt",
      sortDirection: "DESC",
      announceType: newCategory,
      keyword: value.trim(),
    };

    if (!params.keyword) delete params.keyword;
    if (params.announceType === "all" || category === "all")
      delete params.announceType;

    const result = await dispatch(getAnnounces(params));
    const { isStatus, dataResponse } = announcesInfoMapper.mapToDto(result);

    if (!isStatus) {
      setRows([]);
      setLoading(false);
      return;
    }

    let contents = dataResponse.contents?.map((row: any, index: number) => {
      let newItem = { ...row };
      return newItem;
    });

    setTotal(dataResponse.totalItems);
    setRows(contents);
    setLoading(false);

    if (refPageChange.current) window.scrollTo({ top: ref?.current?.offsetTop, left: 0 })
    refPageChange.current = false

    if (page > 1) {
        window.history.pushState({ urlPath: `/customer-support/announcement/${category}/${page}` },
        '', `/customer-support/announcement/${category}/${page}`)
    } else {
        window.history.pushState(
        { urlPath: `/customer-support/announcement/${category}` },
        '', `/customer-support/announcement/${category}`)
    }
  };

  const changePage = async (newPage: number) => {
    if (newPage === 0 && refCategory.current !== cateSelected)

    refPageChange.current = true

    await getDataList(newPage + 1, store.per_page, cateSelected)
    refPage.current = newPage + 1

    refCategory.current = cateSelected
  }

  const getPreContentList = (data: any) => {
    let contents = data?.contents.map((row: any, index: number) => {
      let newItem = { ...row }
      return newItem
    })

    setTotal(data.totalItems)
    setRows(contents)
  }

  const filterCategory = async (category: string, page: number) => {

    await getDataList(store.page + 1, store.per_page, category)

    refPage.current = 1

    refPageChange.current = false

    setSelectedCategory(category)

    window.history.pushState(
      { urlPath: `/customer-support/${page}/${category}` },
      '',
      `/customer-support/${page}/${category}`)
  }

  useEffect(() => {
    !apiData ? getDataList(store.page + 1, store.per_page, category) : getPreContentList(apiData)
  }, [apiData])

  useEffect(() => {
    if (!preLoadValue.current) {
      preLoadValue.current = true
      return
    }
    getDataList(store.page + 1, store.per_page, cateSelected)
  }, [value])

  return (
    <BoxWrapper width={WIDTH_MEDIUM}>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Label variant={'h6'}>
                  <Translations text={mapRouteTitle[page as mapRouteTitleProps]} />
                </Label>
            </Grid>
            <Grid item xs={12} sx={{ pt: '5px !important' }}>
                <Card sx={{ boxShadow: 'none' }}>
                    <HeadAnnounce 
                      handleFilter={handleFilter}
                      page={page}
                      category={category}
                      categories={categories}
                      setCategory={filterCategory}
                    />
                    { rows.length ? (
                        <StripedDataGrid
                            autoHeight
                            rows={rows}
                            rowHeight={heightRow}
                            columns={
                                renderColumns(isMobile, t, refPage.current, store.per_page, cateSelected, refPage.current, theme) as any
                            }
                            disableColumnMenu
                            pageSizeOptions={DEFAULT_OPTIONS}
                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            loading={loading}
                            rowCount={total}
                            columnVisibilityModel={{
                                index: isMobile ? false : true,
                                createdAt: isMobile ? false : true,
                                isView: isMobile ? false : true
                            }}
                            disableRowSelectionOnClick
                            paginationMode='server'
                            slots={{
                                pagination: () => <CustomPagination />,
                                noRowsOverlay: () => <NoRows />,
                                noResultsOverlay: () => <NoRows />
                            }}
                            getRowClassName={params => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
                        />
                    ): ''}
                </Card>
            </Grid>
        </Grid>
    </BoxWrapper>
  )
};

export default forwardRef(Announce);
