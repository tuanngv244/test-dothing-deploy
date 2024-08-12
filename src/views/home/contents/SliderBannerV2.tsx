//@ts-nocheck
import { WIDTH_LARGE, WIDTH_MEDIUM } from "@/@core/configs";
import KeenSliderWrapper from "@/@core/style-libs/keen-slider";
import MuiContainer from "@/@core/style-libs/mui-container";
import authConfig from "@/infra/configs/auth";
import { getUserLanguage } from "@/infra/configs/i18n";
import { Box, Button, styled, Theme, useMediaQuery } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Splitting from "splitting";
import "splitting/dist/splitting-cells.css";
import "splitting/dist/splitting.css";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  marginTop: "2rem",
  overflow: "hidden",
  borderRadius: "15px",
  //   marginBottom: "2.5rem",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
    overflow: "hidden",
    borderRadius: "15px",
    marginTop: 0,
  },
}));

const Navigator = styled(Box)(({ theme }) => ({
  marginTop: "-1.5rem !important",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    "& .MuiBadge-root": {
      span: {
        backgroundColor: `#d9d9d9 !important`,
      },
      "&.active": {
        span: {
          backgroundColor: `${theme.palette.primary.main} !important`,
        },
      },
    },
  },
}));

const NavigationWrapper = styled(Box)(({ theme }) => ({
  // border: "1px solid #D4D6D7",
  // borderRadius: 10,

  [`@media (min-width: ${WIDTH_LARGE}px)`]: {
    marginLeft: "0 !important",
    marginRight: "0 !important",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    width: "100%",
    height: "100%",
    marginLeft: 20,
    marginRight: 20,
  },
  [theme.breakpoints.down("sm")]: {
    border: "0px solid #D4D6D7",
    borderRadius: "15px",
    overflow: "hidden",
    backgroundColor: theme.palette.common.white,
  },
}));

const BtnPrev = styled(Button)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    left: "-33px !important",
  },
  [theme.breakpoints.down("lg")]: {
    left: "-25px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const BtnNext = styled(Button)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    right: "-33px !important",
  },
  [theme.breakpoints.down("lg")]: {
    right: "-25px !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Banner = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transform: "translate3d(0, 0, 0)",
  willChange: "transform",
  "&:after": {
    content: `""`,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "rgba(00,00,00,.45)",
    zIndex: 2,
  },
  img: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    borderRadius: "15px",
  },
}));
const Content = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "90px",
  left: "90px",
  zIndex: 5,
  maxWidth: "700px",
  h4: {
    lineHeight: 1,
    fontSize: "60px",
    fontWeight: 700,
    color: "white",
    span: {
      fontSize: "60px",
      fontWeight: 700,
      lineHeight: 1,
      color: "white",
    },
    "&.splitting .char": {
      lineHeight: 1.5,
    },
  },
  p: {
    marginTop: "10px",
    fontSize: "28px",
    lineHeight: "44px",
    fontWeight: 500,
    color: "lightgray",
    span: {
      fontSize: "28px",
      lineHeight: "44px",
      fontWeight: 500,
      color: "lightgray",
      "&:before": {
        color: "lightgray !important",
      },
    },
    "&.splitting .char": {
      lineHeight: 1.5,
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    maxWidth: "350px",
    top: "70px",
    left: "20px",
    right: "20px",
    h4: {
      fontSize: "36px",
      lineHeight: "42px",
      fontWeight: 700,
      color: "white",
      span: {
        fontSize: "36px",
        lineHeight: "42px",
        fontWeight: 700,
        color: "white",
      },
    },
    p: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 500,
      color: "lightgray",
      span: {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: 500,
        color: "lightgray",
      },
    },
  },
}));
const WrapperKeenSlider = styled(Box)(({ theme }) => ({
  height: "500px !important",
  borderRadius: "15px",
  overflow: "hidden",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    height: "340px !important",
    borderRadius: "15px",
    overflow: "hidden",
  },
}));

type BannerData = {
  image: string;
  imageMobile: string;
  imageJp: string;
  imageJpMobile: string;
  imageEn: string;
  imageEnMobile: string;
  titleEn: string;
  titleJp: string;
  titleKr: string;
  descJp: string;
  descEn: string;
  descKr: string;
};

const SliderBanner2 = ({
  direction = "rtl",
  bannerData,
}: {
  direction?: string;
  bannerData?: BannerData[];
}) => {
  const cachedLang = localStorage.getItem(authConfig.i18nextLng);
  const defaultlang = cachedLang || getUserLanguage() || "en";

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const { i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentLang, setCurrentLang] = useState();
  const [data, setData] = useState<BannerData[]>([]);
  const [forUpdate, setForUpdate] = useState({});

  const renderImage = (banner: BannerData) => {
    const {
      image,
      imageEn,
      imageEnMobile,
      imageJp,
      imageJpMobile,
      imageMobile,
    } = banner;
    let path = process.env.NEXT_PUBLIC_BASE_URL;
    if (i18n.language === "kr") {
      if (!isMobile) {
        path += image?.replace("/api", "");
      } else {
        path += imageMobile?.replace("/api", "");
      }
    } else if (i18n.language === "en") {
      if (!isMobile) {
        path += imageEn?.replace("/api", "");
      } else {
        path += imageEnMobile?.replace("/api", "");
      }
    } else {
      if (!isMobile) {
        path += imageJp?.replace("/api", "");
      } else {
        path += imageJpMobile?.replace("/api", "");
      }
    }
    return path;
  };

  const WheelControls = (slider: any) => {
    let touchTimeout;
    let position;
    let wheelActive;

    function dispatch(e, name) {
      position.x -= e.deltaX;
      position.y -= e.deltaY;
      slider.container.dispatchEvent(
        new CustomEvent(name, {
          detail: {
            x: position.x,
            y: position.y,
          },
        })
      );
    }

    function wheelStart(e) {
      position = {
        x: e.pageX,
        y: e.pageY,
      };
      dispatch(e, "ksDragStart");
    }

    function wheel(e) {
      dispatch(e, "ksDrag");
    }

    function wheelEnd(e) {
      dispatch(e, "ksDragEnd");
    }

    function eventWheel(e) {
      e.preventDefault();
      if (!wheelActive) {
        wheelStart(e);
        wheelActive = true;
      }
      wheel(e);
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        wheelActive = false;
        wheelEnd(e);
      }, 100);
    }

    slider.on("created", () => {
      slider.container.addEventListener("wheel", eventWheel, {
        passive: false,
      });
    });
  };

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 1,
        spacing: 0,
      },
      autoPlay: true,
      loop: true,
      rubberband: false,
      vertical: true,
      slideChanged(slider: any) {
        setCurrentSlide(slider.track.details.rel);
        const list = slider.slides;
        const currentSlide = list[slider.track.details.rel];
        list.forEach((item) => {
          const title = item.querySelector(".content_title");
          const desc = item.querySelector(".content_desc");
          title?.classList.remove("active");
          desc?.classList.remove("active");
        });
        const curtitle = currentSlide.querySelector(".content_title");
        const curDesc = currentSlide.querySelector(".content_desc");
        curtitle?.classList.add("active");
        curDesc?.classList.add("active");
      },
      created: (slider) => {
        const list = slider.slides;
        const currentSlide = list[0];
        const curtitle = currentSlide?.querySelector(".content_title");
        const curDesc = currentSlide?.querySelector(".content_desc");
        curtitle?.classList.add("active");
        curDesc?.classList.add("active");
        slider.container.addEventListener("mousemove", (event) => {
          const width = slider.container.clientWidth;
          const x =
            event.clientX - slider.container.getBoundingClientRect().left;
          const move = (x - width / 2) / (width / 2);
          slider.slides.forEach((slide) => {
            slide.style.backgroundPosition = `${50 + move * 10}% center`;
          });
        });
      },
    },
    [WheelControls]
  );

  const modifyListData = useMemo(
    () =>
      bannerData?.map((item) => {
        const title =
          currentLang === "kr"
            ? item?.titleKr
            : currentLang === "en"
            ? item?.titleEn
            : item?.titleJp;
        const desc =
          currentLang === "kr"
            ? item?.descKr
            : currentLang === "en"
            ? item?.descEn
            : item?.descJp;
        return {
          ...item,
          img: renderImage(item),
          title,
          desc,
        };
      }),
    [data, currentLang]
  );

  useEffect(() => {
    if (modifyListData) {
      setTimeout(() => {
        Splitting({
          target: "[data-splitting]",
          by: "chars",
          whitespace: true,
        });
        return () => {
          Splitting({ by: "lines" }).forEach((s) => {
            Splitting({
              target: s.el,
              by: "chars",
              force: true,
              whitespace: true,
            });
          });
        };
      }, 100);
    }
  }, [modifyListData]);

  useEffect(() => {
    if (!!bannerData?.length) {
      setData(bannerData);
    }
  }, [JSON.stringify(bannerData)]);

  useEffect(() => {
    if (!instanceRef) return;
    const interval = setInterval(() => {
      instanceRef?.current.next();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [instanceRef]);

  useEffect(() => {
    setCurrentLang(defaultlang);
  }, [defaultlang]);

  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      <KeenSliderWrapper className="aaaa">
        <NavigationWrapper className="navigation-wrapper">
          {modifyListData && (
            <WrapperKeenSlider ref={sliderRef} className="keen-slider">
              {modifyListData?.map((item, index) => {
                return (
                  <Banner
                    key={index}
                    style={{
                      backgroundImage: `url(${item?.img})`,
                    }}
                    className="keen-slider__slide"
                  >
                    <Content className="content">
                      <h4
                        className="slide-vertical content_title"
                        data-splitting
                      >
                        {item?.title}
                      </h4>
                      <p className="slide-vertical content_desc" data-splitting>
                        {item?.desc}
                      </p>
                    </Content>
                  </Banner>
                );
              })}
            </WrapperKeenSlider>
          )}
        </NavigationWrapper>
      </KeenSliderWrapper>
    </BoxStyle>
  );
};

export default SliderBanner2;
