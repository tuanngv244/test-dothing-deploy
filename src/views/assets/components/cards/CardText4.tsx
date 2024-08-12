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

const MuiCard = styled(Card)(({ theme }) => ({
  border: "0",
  boxShadow: "none",
  background: theme.palette.common.white,
  borderRadius: 0,
  minHeight: "200px",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    minHeight: "240px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(3),
  },
}));

const CardCtx = styled(CardContent)(({ theme }) => ({
  paddingTop: ".5rem",
  paddingBottom: "1rem !important",
  textAlign: "center",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem !important",
    paddingRight: "2rem !important",
  },
}));

const CaptionWeb3Id = styled(Typography)(({ theme }) => ({
  color: "#717171",
  fontWeight: 400,
  textAlign: "center",
  marginTop: "1rem",

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "18px !important",
    lineHeight: "28px",
    marginTop: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    lineHeight: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px !important",
    lineHeight: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    fontSize: "18px !important",
    lineHeight: "28px",
  },
}));

const StackStyle = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "0",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ImgStyle = styled("img")(({ theme }: { theme: Theme; width?: any }) => ({
  maxWidth: "100%",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardText4 = (props: CardImgData) => {
  const { imgSrc, label, elementDesk, elementMobile, width } = props;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <MuiCard>
      <CardCtx>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StackStyle
            display={"flex"}
            flexDirection={imgSrc && label ? "column" : "row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ImgStyle alt="" src={imgSrc} width={width}/>
            { label ? <Box sx={{fontWeight: 600}}>{label}</Box> : '' }
          </StackStyle>
          <CaptionWeb3Id>
            {isMobile ? elementMobile : elementDesk}
          </CaptionWeb3Id>
        </Box>
      </CardCtx>
    </MuiCard>
  );
};

export default CardText4;
