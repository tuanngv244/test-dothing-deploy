import React, { useState, useRef, useMemo, useEffect } from "react";
import Link from "next/link";
import TabContext from "@mui/lab/TabContext";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Divider,
  styled,
  MenuItem,
  Select,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import AlertCircleOutline from "mdi-material-ui/AlertCircleOutline";
import InformationOutline from "mdi-material-ui/InformationOutline";
import {
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Pagination from "@/views/assets/components/pagination/Pagination";
import ButtonReadMore from "@/views/assets/components/button/ButtonReadMore";
import { convertToSlug, exposeStr, truncateStr } from "@/@core/utils/helpers";
import { getLatestsNews } from "@/app/reducers/client";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import MuiContainer from "@/@core/style-libs/mui-container";
import latestInfoMapper from "@/domains/mappers/insight/mapper.latest-news";
import IconDown from "@/@core/components/icons/IconDown";
import Zoom from "@mui/material/Zoom";

const TabLinks = styled(TabList)(({ theme }: { theme: any }) => ({
  marginTop: "2.5rem",
  borderRadius: 0,
  boxShadow: "none",
  border: "0",

  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },

  "& .MuiTabs-flexContainer": {
    height: "100%",
    alignItems: "center",
    paddingLeft: 0,
  },

  "& .MuiTab-root": {
    overflow: "visible",
    height: 40,
    minHeight: 40,
    minWidth: 100,
    borderRadius: 60,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 32,
    textTransform: "capitalize",
    display: "block",
    flex: "none",
    marginRight: 20,
    backgroundColor: theme.palette.background.bgHeader,
    color: "rgb(0 0 0 / 40%)",

    "&:nth-child(1)": {},
    "&:nth-child(2)": {},
    "&:nth-child(3)": {
      marginRight: 0,
    },
  },

  "& .Mui-selected": {
    backgroundColor: theme.palette.primary.main + " !important",
    color: `#fff !important`,
    borderColor: theme.palette.primary.main,
  },

  "& .MuiTabs-centered": {
    "& button:first-of-type": {},
    "& button:last-of-type": {},
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    "& .MuiTab-root": {},
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.3rem",
    marginBottom: "0.5rem",

    "& .MuiTabs-flexContainer": {
      height: 44,
      paddingLeft: 10,
    },

    "& .MuiTab-root": {
      width: 52,
      minWidth: 52,
      height: 23,
      minHeight: 23,
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      marginRight: 15,
    },

    "& .MuiTabs-centered": {
      "& button:first-of-type": {
        marginLeft: "0",
      },
      "& button:last-of-type": {
        marginRight: "0",
      },
    },
    "& .Mui-selected": {},
  },
}));

const ContentList = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-container": {
    marginTop: "-1.5rem",
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    "&.MuiGrid-container": {
      marginTop: "0.5rem",
    },
    ".MuiGrid-item": {
      paddingTop: "1rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    ".MuiGrid-item": {
      paddingBottom: "1rem",
    },
  },
}));

const PaginationBox = styled(Box)(({ theme }: { theme: any }) => ({
  marginTop: "4.5rem",
  [theme.breakpoints.down("xlc")]: {
    marginTop: "3.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
  },
}));

const StyledLink = styled("span")(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.main,
  fontSize: 16,
  fontWeight: 500,
}));

const Desc = styled(Typography)(({ theme }: { theme: any }) => ({
  color: theme.palette.common.caption,
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "20px",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    textAlign: "left",
  },
  [theme.breakpoints.down("sm")]: {
    WebkitLineClamp: "4",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 700,
  fontSize: 20,
  lineHeight: "24px",
}));

const DateText = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "24px",
}));

const CardItem = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  minHeight: 470,
  maxHeight: 470,
  position: "relative",
  boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    minHeight: 470,
    maxHeight: 470,
  },
}));

const MuiCardMedia = styled('img')(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
  },
}));

const CardLink = styled(CardActions)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
}));

const DividerWrapper = styled(Divider)(({ theme }: { theme: any }) => ({
  marginTop: "4rem",
  [theme.breakpoints.down("xlc")]: {
    marginTop: "3rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
  },
}));

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({
  marginBottom: "1rem",
  paddingBottom: '2rem'
}));

const Label = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "64px",
  fontSize: "48px !important",
  fontWeight: 700,
  marginBottom: "0",
  marginTop: "2.1rem",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px !important",
    lineHeight: "50px",
    marginTop: ".1rem",
    marginBottom: "0rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px !important",
    lineHeight: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.5rem",
    fontSize: "32px !important",
    lineHeight: "32px",
    marginBottom: "1rem",
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
    a: {
      color: "#fff !important",
    },
    span: {
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
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    "& .MuiMenu-list ": {
      display: "none",
    },
    marginRight: 16,
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

type ListArticlePageProps = {
  category: string;
  apiData: any;
  categories: Array<any>;
};

const ListArticlePage = ({ category, apiData, categories }: ListArticlePageProps) => {
  const router = useRouter();
  const [data, setData] = useState(apiData);
  const [value, setValue] = useState(category);
  const [currentPage, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const refCategory = useRef(category);
  const refList = useRef<any>(null);
  const refPageChange = useRef(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [checked, setChecked] = useState(true);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const newPage = useMemo(() => {
    if (router.query?.slug && !isNaN(Number(router.query.slug[1]))) {
      return Number(router.query.slug[1]);
    }
    return 1;
  }, []);

  const pageCount = useMemo(() => {
    return Math.ceil(data?.totalItems / perPage);
  }, [data]);

  const renderNoResult = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 20,
      }}
    >
      <AlertCircleOutline sx={{ mr: 2 }} />
      <Typography variant="h6">No Results Found!</Typography>
    </Box>
  );

  const handleChangeCate = async (event: any, newValue: any) => {
    let value = newValue;
    refPageChange.current = false;
    if (newValue?.props?.value) {
      value = newValue.props.value;
    }
    refCategory.current = value;
    setValue(value);
    await getDataList(1, perPage, value);
    setPage(1);
  };

  const onPageChange = async (event: any, page: number) => {
    setPage(page);
    refPageChange.current = true;
    await getDataList(page, perPage, refCategory.current);
  };

  const getDataList = async (
    page: number,
    perPage: number,
    category: string
  ) => {
    let params = {
      pageNo: page,
      pageSize: perPage,
      sortBy: "orderDate",
      sortDirection: "DESC",
      category: category.toUpperCase(),
    } as Partial<any>;

    if (params.category === "ALL" || category.toUpperCase() === "ALL")
      delete params.category;

    const result = await dispatch(getLatestsNews(params));
    const { isStatus, dataResponse } = latestInfoMapper.mapToDto(result);

    if (!isStatus) {
      setData(null);
      return;
    }

    setData(dataResponse);

    if (refPageChange.current)
      window.scrollTo({
        top: (refList?.current?.offsetTop as number) - 30,
        left: 0,
      });
    refPageChange.current = false;

    if (page > 1) {
      window.history.pushState(
        { urlPath: `/insight/latest-news/${category}/${page}` },
        "",
        `/insight/latest-news/${category}/${page}`
      );
    } else {
      window.history.pushState(
        { urlPath: `/insight/latest-news/${category}` },
        "",
        `/insight/latest-news/${category}`
      );
    }
  };

  const renderGrid = () => {
    if (data?.contents !== null && Array.isArray(data?.contents)) {
      return data?.contents.map((item: any, index: number) => (
        <Zoom
          in={checked}
          key={index}
          style={{
            transitionDelay:
              checked && index !== 0 ? `${index * 2}00ms` : "0ms",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <CardItem>
              <Link
                passHref
                href={`/insight/latest-news/[category]/[...slug]`}
                as={`/insight/latest-news/${refCategory.current.toLowerCase()}/${
                  item.id
                }/?cat=${category}&p=${currentPage}`}
              >
                <StyledLink>
                  <MuiCardMedia
                    style={{ height: 240, objectFit: "cover", maxWidth: "100%" }}
                    src={
                      item.fileBase64 ??
                      item.attachFileUrl ??
                      "/images/pages/large-img.jpg"
                    }
                    onError={({ currentTarget }: { currentTarget: any }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/images/pages/large-img.jpg";
                    }}
                  />
                </StyledLink>
              </Link>
              <CardContent>
                <DateText variant="body2" sx={{ mb: 1.6 }}>
                  {item.orderDate
                    ? format(new Date(item.orderDate), "yyyy.MM.dd")
                    : ""}
                </DateText>
                <Link
                  passHref
                  href={`/insight/latest-news/[category]/[...slug]`}
                  as={`/insight/latest-news/${refCategory.current.toLowerCase()}/${
                    item.id
                  }/?cat=${category}&p=${currentPage}`}
                >
                  <StyledLink>
                    {isMobile ? (
                      <Title variant="h6" sx={{ mb: 1.75 }}>
                        {truncateStr(item.newsTitle, 40)}
                      </Title>
                    ) : (
                      <Title variant="h6" sx={{ mb: 1.75 }}>
                        {truncateStr(item.newsTitle, 45)}
                      </Title>
                    )}
                  </StyledLink>
                </Link>

                <Desc
                  noWrap
                  variant="body2"
                  dangerouslySetInnerHTML={{
                    __html: truncateStr(
                      exposeStr(item.newsContent || item.newsContentSummary),
                      200
                    ),
                  }}
                ></Desc>
              </CardContent>
              <CardLink>
                <ButtonReadMore
                  href={`/insight/latest-news/[category]/[...slug]`}
                  as={`/insight/latest-news/${refCategory.current.toLowerCase()}/${
                    item.id
                  }/?cat=${category}&p=${currentPage}`}
                />
              </CardLink>
            </CardItem>
          </Grid>
        </Zoom>
      ));
    } else {
      return (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InformationOutline sx={{ mr: 2 }} />
            <Typography variant="h6">Data is not an array!</Typography>
          </Box>
        </Grid>
      );
    }
  };

  useEffect(() => {
    setData(apiData);
    setPage(newPage);

    return () => {
      setTimeout(() => {
        setValue(refCategory.current);
      });
    };
  }, [category, apiData]);

  return (
    <Wrapper bg="#fff" maxWidth={"100%"}>
      <BoxWrapper width={WIDTH_MEDIUM} ref={refList}>
        <Label variant={"h6"}>최신 뉴스</Label>
        {isMobile ? (
          <DropDown
            size="small"
            IconComponent={IconDown}
            value={value}
            onChange={handleChangeCate}
          >
            <MenuItem value={"all"}>
              <LinkMobile>{t(mapRouteTitle["all"])}</LinkMobile>
            </MenuItem>
            {categories.map((el, index) => {
              return (
                <MenuItem
                  className="link"
                  value={convertToSlug(el)}
                  key={index}
                >
                  <LinkMobile>
                    {t(mapRouteTitle[el as mapRouteTitleProps] || el)}
                  </LinkMobile>
                </MenuItem>
              );
            })}
          </DropDown>
        ) : (
          <TabContext value={value}>
            <TabLinks
              scrollButtons
              variant="fullWidth"
              onChange={handleChangeCate}
            >
              {["all", ...categories].map((item, index) => {
                return (
                  <Tab
                    value={convertToSlug(item)}
                    key={index}
                    label={t(mapRouteTitle[item as mapRouteTitleProps] || item)}
                  />
                );
              })}
            </TabLinks>
          </TabContext>
        )}

        {data?.contents !== null ? (
          <ContentList
            container
            rowSpacing={{ md: 15, xl: 15 }}
            columnSpacing={10}
            className="match-height"
          >
            {renderGrid()}
          </ContentList>
        ) : (
          renderNoResult
        )}

        {pageCount > 1 ? (
          <PaginationBox justifyContent={"center"} display={"flex"}>
            <Pagination
              onPageChange={onPageChange}
              pageCount={pageCount}
              page={currentPage}
            />
          </PaginationBox>
        ) : (
          ""
        )}
      </BoxWrapper>
    </Wrapper>
  );
};

export default ListArticlePage;
