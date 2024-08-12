import Next from "@/@core/components/icons/Next";
import Previous from "@/@core/components/icons/Previous";
import { WIDTH_LARGE, WIDTH_MEDIUM } from "@/@core/configs";
import KeenSliderWrapper from "@/@core/style-libs/keen-slider";
import MuiContainer from "@/@core/style-libs/mui-container";
import { Badge, Box, Button, styled } from "@mui/material";
import clsx from "clsx";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import BannerIoT from "./banners/BannerIoT";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  marginTop: "2rem",
  marginBottom: "2.5rem",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginBottom: "3.5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "0",
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
    height: 567,
    marginLeft: 20,
    marginRight: 20,
  },
  [theme.breakpoints.down("sm")]: {
    border: "0px solid #D4D6D7",
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    marginLeft: -15,
    marginRight: -15,
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

type BannerData = {
  image: string;
  imageMobile: string;
  imageJp: string;
  imageJpMobile: string;
  imageEn: string;
  imageEnMobile: string;
};

const SliderBanner = ({
  direction = "rtl",
  bannerData,
}: {
  direction?: string;
  bannerData: BannerData[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <BoxStyle width={WIDTH_MEDIUM}>
      {!!bannerData?.length && (
        <KeenSliderWrapper>
          <NavigationWrapper className="navigation-wrapper">
            <Box ref={sliderRef} className="keen-slider">
              {!!bannerData?.length &&
                bannerData?.map((item, index) => (
                  <Box key={index} className="keen-slider__slide">
                    <BannerIoT data={item} />
                  </Box>
                ))}
            </Box>
            {loaded && instanceRef.current && (
              <>
                <BtnPrev
                  className={clsx("arrow arrow-left", {
                    "arrow-disabled": currentSlide === 0,
                  })}
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  variant="text"
                >
                  <Previous />
                </BtnPrev>

                <BtnNext
                  className={clsx("arrow arrow-right", {
                    "arrow-disabled":
                      currentSlide ===
                      instanceRef.current.track.details.slides?.length - 1,
                  })}
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  variant="text"
                >
                  <Next />
                </BtnNext>
              </>
            )}
          </NavigationWrapper>
          {loaded && instanceRef.current && (
            <Navigator className="swiper-dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides?.length
                ).keys(),
              ].map((idx) => {
                return (
                  <Badge
                    key={idx}
                    variant="dot"
                    component="div"
                    className={clsx({
                      active: currentSlide === idx,
                    })}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                  ></Badge>
                );
              })}
            </Navigator>
          )}
        </KeenSliderWrapper>
      )}
    </BoxStyle>
  );
};

export default SliderBanner;
