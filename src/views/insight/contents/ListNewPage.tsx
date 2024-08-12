import Left from "@/@core/components/icons/Left";
import Right from "@/@core/components/icons/Right";
import { WIDTH_MEDIUM } from "@/@core/configs";
import KeenSliderWrapper from "@/@core/style-libs/keen-slider";
import MuiContainer from "@/@core/style-libs/mui-container";
import {
  filterHtml,
  removeImageTagTemporary,
  replaceHTMLDisplay,
} from "@/@core/utils/helpers";
import { truncDateFromServer } from "@/@core/utils/transform";
import { getLatestsNews } from "@/app/reducers/client";
import { getLatestsNewDetailService } from "@/app/services/client";
import latestInfoMapper from "@/domains/mappers/insight/mapper.latest-news";
import {
  Box,
  Divider,
  Grid,
  Stack,
  styled,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import dynamic from "next/dynamic";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const Loading = dynamic(() =>
  import("@/@core/components/icons/IconLoading").then(
    (module) => module.default
  )
);

const BoxWrapper = styled(MuiContainer)(({ theme }: { theme: any }) => ({
  position: "relative",
  marginTop: "1.5rem",
  paddingBottom: "2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "28px !important",
  fontWeight: 700,
  marginBottom: "0",
  marginTop: "0",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px !important",
    marginBottom: "0rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "23px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    fontSize: "20px !important",
  },
}));

const SubLabel = styled(Typography)(({ theme }) => ({
  fontSize: "18px !important",
  fontWeight: 400,
  marginBottom: "0",
  marginTop: "0",
  lineHeight: 1,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "17px !important",
    marginBottom: "0rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
    fontSize: "18px !important",
    marginBottom: "1.5rem",
  },
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingTop: "2.5rem !important",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StackStyle = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Article = styled(Box)(({ theme }) => ({
  opacity: "1 !important",
  border: "1px solid #89939E80",
  borderRadius: 10,
  padding: 10,
  paddingTop: 20,
  paddingBottom: 20,
  minHeight: 200,
  "&.active": {
    background:
      "linear-gradient(0deg, #F5F7FA, #F5F7FA),linear-gradient(0deg, rgba(137, 147, 158, 0.5), rgba(137, 147, 158, 0.5))",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 20,
    lineHeight: "30px",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DateTime = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  paddingTop: 10,
  paddingBottom: 7,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 14,
    lineHeight: "28px",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const TitleDetail = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#000",
  fontSize: "25px !important",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "36px !important",
    lineHeight: "44px",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DateTimeDetail = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  paddingTop: 10,
  paddingBottom: 7,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 14,
    lineHeight: "28px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Desc = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: "#717171",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 16,
    lineHeight: "18px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Paging = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const NumberPage = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "21px",
  span: {
    color: "#89939E",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const PrevBtn = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  marginLeft: 4,
  lineHeight: 1,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const NextBtn = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  marginLeft: 2,
  lineHeight: 1,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DetailArticle = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(0deg, #F5F7FA, #F5F7FA), linear-gradient(0deg, rgba(137, 147, 158, 0.5), rgba(137, 147, 158, 0.5))",
  border: "1px solid #89939E80",
  borderRadius: 10,
  padding: 40,
  paddingTop: 30,
  marginTop: 20,
  textAlign: "left",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: 30,
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
  },
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "5px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "5px !important",
    marginBottom: "40px !important",
  },
}));

const DescDetail = styled(Box)(({ theme }) => ({
  color: "#000000",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "20px",
  whiteSpace: "normal",
  img: {
    maxWidth: "100%",
  },
  "&:after": {
    content: '""',
    display: "block",
    clear: "both",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    color: "rgba(58, 53, 65, 0.87)",
    fontWeight: 400,
  },
}));

type ListNewPageProps = {
  page?: string;
  direction?: string;
};

const languages = {
  en: "EN",
  kr: "KR",
  ja: "JP",
};

const ListNewPage = (
  { page, direction = "ltr" }: ListNewPageProps,
  ref: any
) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articles, setArticles] = useState<Array<any>>([]);
  const [detailArticle, setDetailArticle] = useState<any>(null);
  const [currentPage, setPage] = useState(1);
  const [currentLang, setCurrentLang] = useState("");
  const [perPage, setPerPage] = useState(100);
  const [loading, setLoading] = useState(false);
  const actClick = useRef(false);
  const { t, i18n } = useTranslation();
  const isSafari =
    /safari/i.test(navigator.userAgent) && /apple/i.test(navigator.vendor);

  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const dispatch = useDispatch();

  const handleSlide = async (slider: any, idx: number) => {
    await getDetailArticle(slider.slides[idx].id);
  };

  const thumbnailPlugin = (mainRef: any) => {
    return (slider: any) => {
      const observer = new ResizeObserver(function () {
        slider.update();
      });
      function addActive(idx: number) {
        slider.slides[idx].classList.add("active");
      }
      slider.on("created", () => {
        addActive(slider.track.details.rel);
        observer.observe(slider.container);
      });
      slider.on("destroyed", () => {
        observer.unobserve(slider.container);
      });
    };
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: direction === "rtl",
    slides: {
      spacing: 3,
    },
    initial: 0,
  });

  const [thumbnailRef, thumbnailInstanceRef] = useKeenSlider(
    {
      rtl: direction === "rtl",
      slideChanged(slider) {
        setTimeout(() => {
          if (!actClick.current && !loading) {
            addActiveSlide(slider, slider.track.details.rel);
          }
        }, 200);
      },
      breakpoints: {
        [`(min-width: 600px)`]: {
          slides: { perView: 2, spacing: 20 },
        },
        [`(min-width: 990px)`]: {
          slides: { perView: 3, spacing: 30 },
        },
        [`(min-width: ${WIDTH_MEDIUM}px)`]: {
          slides: { perView: 4, spacing: 38 },
        },
      },
      slides: {
        perView: 1,
        spacing: 8,
      },
      initial: 0,
    },
    [thumbnailPlugin(instanceRef)]
  );

  const addActiveSlide = async (refThumbnail: any, idx: number) => {
    refThumbnail.slides.forEach((slide: any) => {
      slide.classList.remove("active");
    });
    setCurrentSlide(idx);
    refThumbnail.slides[idx].classList.add("active");

    if (actClick.current) {
      thumbnailInstanceRef.current?.moveToIdx(idx);
    }

    await handleSlide(refThumbnail, idx);
  };

  const getDataList = async (page: number, perPage: number) => {
    let params = {
      pageNo: page,
      pageSize: perPage,
      sortBy: "releaseDt",
      sortDirection: "DESC",
      useYn: "Y",
      lang: languages[(i18n.language as keyof typeof languages) || "kr"],
    } as Partial<any>;

    const result = await dispatch(getLatestsNews(params));

    const { isStatus, dataResponse } = latestInfoMapper.mapToDto(result);

    if (!isStatus) {
      setArticles([]);
      return;
    }

    setArticles(dataResponse?.data);

    if (!!!dataResponse?.data?.length) return;

    await getDetailArticle(dataResponse?.data?.[0].id);
  };

  const getDetailArticle = async (id: string) => {
    setLoading(true);
    const result = await getLatestsNewDetailService(id);

    setLoading(false);
    if (result) {
      let newData = { ...result.data };
      newData.newsContent = filterHtml(newData.newsContent);
      setDetailArticle(newData);
    }
    actClick.current = false;
  };

  const handleSlideAction = async (e: any, action: string) => {
    e.stopPropagation();
    actClick.current = true;

    if (action === "prev") {
      if (currentSlide === 0) return;

      thumbnailInstanceRef.current.prev();
      addActiveSlide(thumbnailInstanceRef.current, currentSlide - 1);
    } else {
      if (currentSlide === articles.length - 1) return;

      thumbnailInstanceRef.current.next();
      addActiveSlide(thumbnailInstanceRef.current, currentSlide + 1);
    }
  };

  useEffect(() => {
    setArticles([]);
    getDataList(currentPage, perPage);
    setCurrentSlide(0);
  }, [i18n.language]);

  useEffect(() => {
    if (!isSafari) return;
    if (!currentLang) {
      setCurrentLang(i18n.language);
    }
    if (i18n.language !== currentLang && currentLang) {
      window.location.reload();
    }
  }, [i18n.language, isSafari]);

  if (!articles?.length) return null;

  return (
    <BoxWrapper ref={ref} width={WIDTH_MEDIUM}>
      <Grid container>
        <Grid item xs={12}>
          <Label variant={"h6"}>
            {t("NEWS_PAGE.breakingIndustryNewsFromDOTHING")}
          </Label>
          <SubLabel>{t("NEWS_PAGE.usefulInformationIsEasyToFind")}</SubLabel>
        </Grid>
        <GridStyle item xs={12}>
          <KeenSliderWrapper>
            <StackStyle direction={"column"}>
              <Box sx={{ position: "relative" }}>
                {loading && (
                  <Loading
                    width={30}
                    height={30}
                    color={theme.palette.primary.main}
                  />
                )}
                <Paging
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <NumberPage>
                    {currentSlide + 1}
                    <span>/{articles?.length}</span>
                  </NumberPage>
                  <PrevBtn onClick={(e: any) => handleSlideAction(e, "prev")}>
                    <Left />
                  </PrevBtn>
                  <NextBtn onClick={(e: any) => handleSlideAction(e, "next")}>
                    <Right />
                  </NextBtn>
                </Paging>
                <Box
                  sx={{ mt: 4, mb: 2 }}
                  ref={thumbnailRef}
                  className="keen-slider thumbnail"
                >
                  {articles?.map((article: any, idx: number) => {
                    return (
                      <Article
                        key={article.id}
                        className="keen-slider__slide"
                        id={article.id}
                        onClick={() => {
                          addActiveSlide(thumbnailInstanceRef.current, idx);
                        }}
                      >
                        <Title>{article.postTitle}</Title>
                        <DateTime>
                          {article?.releaseDt
                            ? truncDateFromServer(article?.releaseDt)
                            : ""}
                        </DateTime>
                        <Desc>
                          {
                            <div
                              dangerouslySetInnerHTML={{
                                __html: removeImageTagTemporary(
                                  article?.postContent ?? ""
                                ),
                              }}
                            />
                          }
                        </Desc>
                      </Article>
                    );
                  })}
                </Box>
              </Box>
              <Box ref={sliderRef} className="keen-fader">
                <DetailArticle className="fader__slide">
                  <TitleDetail variant="h1">
                    {detailArticle?.postTitle}
                  </TitleDetail>
                  <DateTimeDetail>
                    {detailArticle?.releaseDt
                      ? truncDateFromServer(detailArticle?.releaseDt)
                      : ""}
                  </DateTimeDetail>
                  <DividerWrapper sx={{ mb: 6, borderColor: "#0000001A" }} />
                  <DescDetail
                    className="ck ck-content"
                    dangerouslySetInnerHTML={{
                      __html: replaceHTMLDisplay(detailArticle?.postContent),
                    }}
                  ></DescDetail>
                </DetailArticle>
              </Box>
            </StackStyle>
          </KeenSliderWrapper>
        </GridStyle>
      </Grid>
    </BoxWrapper>
  );
};

export default forwardRef(ListNewPage);
