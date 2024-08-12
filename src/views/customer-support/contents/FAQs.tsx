import Translations from "@/@core/components/translations";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import { filterData } from "@/@core/utils/helpers";
import { getDataFaqs } from "@/app/reducers/client";
import faqsInfoMapper from "@/domains/mappers/support/mapper.faqs";
import {
  Box,
  Card,
  Divider,
  Grid,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { forwardRef, use, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFAQ from "../cards/CardFAQ";
import HeadFAQ from "./HeadFAQ";
import { useTranslation } from "react-i18next";
import { TemperatureCelsius } from "mdi-material-ui";

const BoxWrapper = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  position: "relative",
  marginTop: "2rem",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    marginTop: "3rem",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0",
    paddingRight: "0",
    marginTop: "2rem",
  },
}));

const BoxWrapperDivider = styled(Box)(({ theme }) => ({
  marginBottom: "2rem",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Label = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "60px",
  fontSize: "48px !important",
  fontWeight: 700,
  marginBottom: "2rem",
  marginTop: "1.1rem",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "46px !important",
    lineHeight: "46px",
    marginTop: ".1rem",
    marginBottom: "3.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "36px !important",
    lineHeight: "36px",
    marginBottom: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontWeight: 900,
    marginTop: "0rem",
    fontSize: "28px !important",
    lineHeight: "28px",
    marginBottom: "1rem",
  },
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type FAQsProps = {
  apiData: any;
  page: any;
  category: string;
  categories: Array<any>;
};

const FAQs = ({ apiData, page, category, categories }: FAQsProps, ref: any) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<any>([]);
  const [total, setTotal] = useState(apiData?.total);
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const store = useSelector((state: any) => state.client);
  const { i18n } = useTranslation();

  const handleFilter = (val: any) => {
    setValue(val.search);
  };

  const genCategories = useMemo(
    () => [...new Set(categories)],
    [JSON.stringify(categories)]
  );

  const genRows = (categoryName?: string) => {
    const cate = categoryName || currentCategory;
    const mapList = [...apiData]
      ?.map((item: any) => {
        return {
          ...item,
          question:
            i18n.language === "en"
              ? item?.questionEn
              : i18n.language === "kr"
              ? item?.question
              : item?.questionJp,
          answer:
            i18n.language === "en"
              ? item?.answerEn
              : i18n.language === "kr"
              ? item?.answer
              : item?.answerJp,
        };
      })
      ?.filter((item) =>
        !cate || cate === "all" ? item : cate === item?.categoryFaqName
      );
    setRows(mapList);
  };

  const getPreContentList = (data: any) => {
    setTotal(data.totalItems);
    genRows();
  };

  const filterCategory = (category: string) => {
    setCurrentCategory(category);
    genRows(category);
  };

  const getDataList = async (page: number, per_page: number) => {
    setLoading(true);

    let params: any = {
      pageSize: per_page,
      pageNo: page,
      category: category,
      sortBy: "displayOrder",
      sortDirection: "ASC",
    };

    if (params.category === "all" || category === "all") delete params.category;

    const result = await dispatch(getDataFaqs(params));

    const { isStatus, dataResponse } = faqsInfoMapper.mapToDto(result);
    if (!isStatus) {
      setRows([]);
      setLoading(false);
      return;
    }

    let contents = dataResponse.contents?.map((row: any, index: number) => {
      let newItem = { ...row };
      return newItem;
    });

    const list = [...(contents || [])]?.filter((item) => item?.useYn === "Y");

    setTotal(dataResponse.totalItems);
    setRows([...rows, ...list]);
    setLoading(false);
  };

  const loadMoreFAQ = (newPage: number) => {
    getDataList(newPage + 1, store.per_page);
  };

  useEffect(() => {
    !apiData
      ? getDataList(store.page + 1, store.per_page)
      : getPreContentList(apiData);
  }, [JSON.stringify(apiData), i18n.language]);
  if (!apiData) return null;

  return (
    <>
      <BoxWrapper width={WIDTH_MEDIUM} ref={ref}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Label variant={"h6"}>
              <Translations text={"FAQ"} />
            </Label>
          </Grid>
          <Grid item xs={12} sx={{ pt: "5px !important" }}>
            <Card sx={{ boxShadow: "none" }}>
              <HeadFAQ
                categories={genCategories}
                setCategory={filterCategory}
              />
              <CardFAQ apiData={rows} total={total} loadMoreFAQ={loadMoreFAQ} />
            </Card>
          </Grid>
        </Grid>
      </BoxWrapper>
      <BoxWrapperDivider
        sx={{
          mx: "auto",
          [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
            width: WIDTH_MEDIUM + "px !important",
            maxWidth: "none !important",
          },
        }}
      >
        <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
      </BoxWrapperDivider>
    </>
  );
};

export default forwardRef(FAQs);
