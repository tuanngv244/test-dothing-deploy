import React, { useMemo } from "react";
import {
  styled,
  Typography,
  Card,
  CardContent,
  Box,
  Theme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import CardImgData from "@/domains/models/CardImgData";
import Member from "@/@core/components/icons/Member";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Image from "next/image";

const MuiCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  border: "1px solid #89939E80",
  boxShadow: "none",
  background: theme.palette.common.white,
  borderRadius: 10,
  height: "224px",
  [theme.breakpoints.down("xl")]: {
    marginBottom: theme.spacing(0),
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardCtx = styled(CardContent)(({ theme }) => ({
  textAlign: "center",
  padding: "2rem !important",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CaptionWeb3Id = styled(Typography)(({ theme }) => ({
  color: "#717171",
  fontWeight: 400,
  textAlign: "center",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "18px !important",
    lineHeight: "28px",
  },
  [theme.breakpoints.down("lg")]: {
    lineHeight: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px !important",
    lineHeight: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
    lineHeight: "28px",
  },
}));

const StackStyle = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ImgStyle = styled("img")(({ theme }: { theme: Theme }) => ({
  maxWidth: "100%",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardText3 = (props: CardImgData) => {
  const { imgSrc, label, elementDesk, elementMobile, width, height, title } =
    props;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <MuiCard>
      <CardCtx>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StackStyle
            display={"flex"}
            flexDirection={imgSrc && (title || label) ? "column" : "row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {imgSrc ? (
              <ImgStyle
                alt=""
                width={width}
                height={height || "auto"}
                src={imgSrc}
              />
            ) : (
              ""
            )}
            {title || label ? title ?? label : ""}
          </StackStyle>
          <CaptionWeb3Id>
            {isMobile ? elementMobile : elementDesk}
          </CaptionWeb3Id>
        </Box>
      </CardCtx>
    </MuiCard>
  );
};

export default CardText3;
