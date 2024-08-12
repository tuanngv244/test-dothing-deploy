import React from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  useMediaQuery,
  styled,
  Theme,
} from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import { format } from "date-fns";
import { truncateStr } from "@/@core/utils/helpers";
import ButtonGoToFeatures from "@/views/assets/components/button/ButtonGoToFeatures";

const CardFeatured = styled(Card)(({ theme }: { theme: any }) => ({
  borderRadius: 0,
  boxShadow: "none",

  ".MuiCardHeader-root": {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: "2.5rem",
    marginBottom: "1.2rem",
    "& .MuiCardHeader-title": {
      color: theme.palette.common.black,
      fontSize: 40,
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: 0,
    },
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    ".MuiCardHeader-root": {
      marginTop: "1.5rem",
      marginBottom: "1rem",

      "& .MuiCardHeader-title": {
        fontSize: 35,
      },
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    ".MuiCardHeader-root": {
      marginTop: "0rem",
      marginBottom: "0rem",

      "& .MuiCardHeader-title": {
        fontSize: 24,
      },
    },
  },
}));

const CardFeatureContent = styled(CardContent)(({ theme }) => ({
  padding: "0 !important",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const BoxItem = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  boxShadow: "none",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardImg = styled('img')(({ theme }) => ({
  height: "180px !important",
  borderRadius: 10,
  marginBottom: "1.2rem",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    maxWidth: "140px !important",
    width: "140px",
    height: "96px !important",
    marginRight: 10,
  },
}));

const Title = styled(Typography)(({ theme }: { theme: any }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "28px",
  fontSize: "24px !important",
  fontWeight: 700,
  marginBottom: "1.1rem !important",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("xlc")]: {
    fontSize: "22px !important",
    marginBottom: "1rem !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
    lineHeight: "24px",
    marginBottom: "0.5rem !important",
    whiteSpace: "normal !important",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
  },
}));

const DateText = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "24px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    lineHeight: "16px",
  },
}));

type FeaturedProps = {
  direction?: string;
  data: any;
  category?: string;
};

const FeaturedDesktop = ({ direction = "rtl", data }: FeaturedProps) => {
  const [ref] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: direction === "rtl",
    slides: {
      spacing: 10,
    },
    breakpoints: {
      "(orientation: portrait) and (min-width: 500px)": {
        loop: false,
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 992px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          perView: 4,
          spacing: 53,
        },
      },
    },
  });

  return (
    <Box ref={ref} className="keen-slider">
      {data?.relatedNews.map((item: any) => {
        return (
          <Box className="keen-slider__slide" key={item.id}>
            <BoxItem>
              <Link
                passHref
                href={`/insight/latest-news/[category]/[...slug]`}
                as={`/insight/latest-news/${item.newsType.toLowerCase()}/${
                  item.id
                }`}
              >
                <CardImg
                  style={{ maxWidth: "100%" }}
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
              </Link>
              <CardContent sx={{ p: 0 }}>
                <Link
                  passHref
                  href={`/insight/latest-news/[category]/[...slug]`}
                  as={`/insight/latest-news/${item.newsType.toLowerCase()}/${
                    item.id
                  }`}
                >
                  <Title variant="h1" sx={{ mb: 1.75 }}>
                    {truncateStr(item.newsTitle, 30)}
                  </Title>
                </Link>
                <DateText variant="body2" sx={{ mb: 1.6 }}>
                  {item.orderDate
                    ? format(new Date(item.orderDate), "yyyy.MM.dd")
                    : ""}
                </DateText>
              </CardContent>
            </BoxItem>
          </Box>
        );
      })}
    </Box>
  );
};

const FeaturedMobile = ({ direction = "rtl", data }: FeaturedProps) => {
  const [ref] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: direction === "rtl",
    slides: {
      spacing: 10,
    },
    breakpoints: {
      "(orientation: portrait) and (min-width: 500px)": {
        loop: false,
        slides: {
          perView: 1,
        },
      },
      "(min-width: 992px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          perView: 4,
          spacing: 60,
        },
      },
    },
  });

  return (
    <Box ref={ref} className="keen-slider">
      <Box className="keen-slider__slide">
        {data?.relatedNews.map((item: any) => {
          return (
            <BoxItem sx={{ display: "flex" }} key={item.id}>
              <Link
                passHref
                href={`/insight/latest-news/[category]/[...slug]`}
                as={`/insight/latest-news/${item.newsType.toLowerCase()}/${
                  item.id
                }`}
              >
                <CardImg
                  sx={{ maxWidth: "100%" }}
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
              </Link>
              <CardContent sx={{ p: 0 }}>
                <Link
                  passHref
                  href={`/insight/latest-news/[category]/[...slug]`}
                  as={`/insight/latest-news/${item.newsType.toLowerCase()}/${
                    item.id
                  }`}
                >
                  <Title noWrap variant="h1" sx={{ mb: 1.75 }}>
                    {truncateStr(item.newsTitle, 30)}
                  </Title>
                </Link>
                <DateText variant="body2" sx={{ mb: 1.6 }}>
                  {item.orderDate
                    ? format(new Date(item.orderDate), "yyyy.MM.dd")
                    : ""}
                </DateText>
              </CardContent>
            </BoxItem>
          );
        })}
      </Box>
    </Box>
  );
};

const Featured = ({ direction = "rtl", data, category }: FeaturedProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <CardFeatured>
      <CardHeader
        title="다른 게시물"
        action={
          <ButtonGoToFeatures
            href={`/insight/latest-news`}
            as={`/insight/latest-news`}
          />
        }
      />
      <CardFeatureContent>
        {isMobile ? (
          <FeaturedMobile data={data} direction={direction} />
        ) : (
          <FeaturedDesktop data={data} direction={direction} />
        )}
      </CardFeatureContent>
    </CardFeatured>
  );
};

export default Featured;
