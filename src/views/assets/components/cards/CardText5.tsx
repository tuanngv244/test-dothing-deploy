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

const MuiCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  background: theme.palette.common.white,
  borderRadius: 10,
  
  minHeight: "235px",
  border: "1px solid #89939E80",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    minHeight: "255px",
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(0),
    minHeight: "200px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(3),
  },
}));

const CardCtx = styled(CardContent)(({ theme }) => ({
  paddingTop: ".5rem",
  paddingBottom: "1rem !important",
  paddingLeft: "1.5rem !important",
  paddingRight: "1.5rem !important",
  textAlign: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem !important",
    paddingRight: "2rem !important",
  },
}));

const LabelSpec = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 700,
  textAlign: "left",
  fontSize: "25px !important",
  marginTop: "0.5rem",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "28px !important",
    lineHeight: "36px",
    marginTop: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px !important",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px !important",
    lineHeight: 1,
  },
}));

const CaptionWeb3Id = styled(Typography)(({ theme }) => ({
  color: "#717171",
  fontSize: "18px !important",
  fontWeight: 400,
  textAlign: "left",
  marginTop: "1rem",

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
  },
}));

const CardText5 = (props: CardImgData) => {
  const { imgSrc, label, elementDesk, elementMobile, width, eleIcon } = props;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <MuiCard>
      <CardCtx>
        <Box sx={{ display: "flex", flexDirection: "column", paddingTop: '1rem' }}>
          {eleIcon}
          <LabelSpec variant="h6">{label}</LabelSpec>
          <CaptionWeb3Id>
            {isMobile ? elementMobile : elementDesk}
          </CaptionWeb3Id>
        </Box>
      </CardCtx>
    </MuiCard>
  );
};

export default CardText5;
