import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export default interface CardImgData {
  imgSrc?: string;
  label: string | ReactNode;
  elementDesk?: ReactNode;
  eleIcon?: ReactNode;
  elementMobile?: ReactNode;
  width?: any;
  title?: ReactNode;
  height?: string;
  ctxStyles?: SxProps;
}
