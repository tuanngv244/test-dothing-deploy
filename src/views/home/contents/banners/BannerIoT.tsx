import React from "react";
import Link from "next/link";
import {
  styled,
  Box,
  Typography,
  Button,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Gear from "@/@core/components/icons/Gear";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useTranslation } from "react-i18next";

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "50px",
  width: "100%",
  height: "100%",
  position: "relative",
  padding: "40px 60px",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    padding: "40px 60px",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "40px 60px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "40px 50px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "16px",
  },
}));

const BoxContent = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    height: "fit-content",
  },
}));

const GearStyle = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: "8px 16px",
  "& > *": {
    verticalAlign: "middle",
  },
  backgroundColor: hexToRGBA(theme.palette.primary.main, 0.2),
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 18,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontWeight: 400,
    display: "flex",
    padding: "15px",
    fontSize: 14,
    lineHeight: "28px",
    backgroundColor: "#f2d4d4",
    alignItems: "center",
    span: {
      paddingLeft: 10,
      color: theme.palette.common.black,
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontSize: "80px !important",
  marginTop: 100,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontWeight: 600,
    fontSize: 80,
    lineHeight: "100px",
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: 40,
    fontSize: "55px !important",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    fontSize: `40px !important`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
    lineHeight: "44px",
    fontWeight: "bold",
    color: theme.palette.common.black,
    marginTop: 40,
  },
}));

const BannerImage = styled(Box)(({ theme }) => ({
  img: {
    width: "100%",
    height: "100%",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    position: "relative",
    transform: "none",
    top: 0,
    right: 0,
    paddingBottom: "30px",
  },
}));

type BannerIoTProps = {
  data: {
    image: string;
    imageMobile: string;
    imageJp: string;
    imageJpMobile: string;
    imageEn: string;
    imageEnMobile: string;
  };
};

const BannerIoT: React.FC<BannerIoTProps> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const { image, imageMobile, imageEn, imageJp, imageJpMobile, imageEnMobile } =
    data;

  const renderImg =
    process.env.NEXT_PUBLIC_BASE_URL + image?.replace("/api", "");

  const renderImage = () => {
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

  return (
    <BoxStyle>
      <BannerImage>
        <img src={renderImage()} />
      </BannerImage>
    </BoxStyle>
  );
};

export default BannerIoT;
