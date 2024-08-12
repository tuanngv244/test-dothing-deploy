import React, { useState, useRef, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  styled,
  useMediaQuery,
  Theme,
  Button,
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
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import MuiContainer from "@/@core/style-libs/mui-container";
import latestInfoMapper from "@/domains/mappers/insight/mapper.latest-news";
import ArrowDown from "@/@core/components/icons/ArrowDown";

const ContentList = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-container": {
    marginTop: "0.5rem",
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    "&.MuiGrid-container": {
      marginTop: "0.5rem",
    },
    ".MuiGrid-item": {
      paddingTop: "0.5rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    ".MuiGrid-item": {},
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
  color: "#717171",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "18px",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  textAlign: "left",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingBottom: 15,
  },
  [theme.breakpoints.down("lg")]: {
    textAlign: "left",
  },
  [theme.breakpoints.down("sm")]: {
    WebkitLineClamp: "4",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 700,
  fontSize: 20,
  lineHeight: "30px",
  marginBottom: "0.6rem !important",
}));

const DateText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 600,
  fontSize: 14,
  lineHeight: "28px",
}));

const CardItem = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  position: "relative",
  boxShadow: "none",
  borderBottom: "1px solid #0000001A",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingBottom: "1rem",
    paddingTop: "1.1rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const MuiCardMedia = styled("img")(({ theme }) => ({
  height: "100%",
  maxWidth: "100%",
  objectFit: "cover",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    height: "122px",
    maxWidth: "160px",
  },
}));

const CardContentStyle = styled(CardContent)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    padding: "0 !important",
    marginLeft: -15,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "0 !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
  },
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  fontSize: 16,
  color: "#000",
  borderRadius: 0,
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 58,
  border: "1px solid #89939E80",
  backgroundColor: "#fff",
  marginTop: 5,
  span: {
    paddingRight: 5,
  },
  "&:hover": {
    span: {
      color: "#fff",
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({
  marginBottom: "1rem",
  paddingBottom: "2rem",
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-item:last-child": {
    ".MuiPaper-root": {
      borderBottom: 0,
    },
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  lineHeight: "36px",
  fontSize: "28px !important",
  fontWeight: 700,
  marginBottom: "0",
  marginTop: "1.5rem",
  paddingBottom: 10,
  borderBottom: "1px solid #00000033",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "26px !important",
    lineHeight: "30px",
    marginBottom: "0rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "25px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.5rem",
    lineHeight: "32px",
    marginBottom: "1rem",
  },
}));

type ListPageProps = {
  category: string;
  apiData: any;
  categories: Array<any>;
};

const ListPage = ({ category, apiData, categories }: ListPageProps) => {
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
        <GridStyle key={index} item xs={12} sm={12} md={12}>
          <CardItem>
            <Grid container>
              <Grid item sm={3} md={2}>
                <Link
                  passHref
                  href={`/insight/latest-news/[category]/[...slug]`}
                  as={`/insight/latest-news/${refCategory.current.toLowerCase()}/${
                    item.id
                  }/?cat=${category}&p=${currentPage}`}
                >
                  <StyledLink>
                    <MuiCardMedia
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
              </Grid>
              <Grid item sm={9} md={10}>
                <CardContentStyle>
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
                  <DateText variant="body2">
                    입력
                    {item.orderDate
                      ? format(new Date(item.orderDate), "yyyy.MM.dd")
                      : ""}
                    . 오전 9:32
                  </DateText>
                </CardContentStyle>
              </Grid>
            </Grid>
          </CardItem>
        </GridStyle>
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

        {data?.contents !== null ? (
          <ContentList container className="match-height">
            {renderGrid()}
          </ContentList>
        ) : (
          renderNoResult
        )}

        <ButtonStyle variant="contained">
          <span>더 보기</span>
          <ArrowDown />
        </ButtonStyle>

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

export default ListPage;
