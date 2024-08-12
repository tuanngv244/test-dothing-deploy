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
  border: 0,
  boxShadow: "0px 16px 32px 0px #ABBED14D",
  background: theme.palette.common.white,
  borderRadius: 10,
  minHeight: "374px",
  [theme.breakpoints.down("xl")]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: "300px",
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
  },
}));

const CardCtx = styled(CardContent)(({ theme }) => ({
  paddingTop: ".5rem",
  paddingBottom: "2rem !important",
  paddingLeft: "2rem !important",
  paddingRight: "2rem !important",
  textAlign: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "35px 28px !important",
  },
}));

const LabelSpec = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 700,
  marginLeft: "0.5rem",
  textAlign: "left",
  fontSize: "22px !important",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "28px !important",
    lineHeight: "36px",
    marginLeft: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px !important",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px !important",
    lineHeight: 1,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
    lineHeight: "24px",
  },
}));

const CaptionWeb3Id = styled(Box)(({ theme }) => ({
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
    p: {
      fontSize: "16px !important",
      lineHeight: "24px",
    },
  },
}));

const StackStyle = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "1rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardText = (props: CardImgData) => {
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
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Member />
            <LabelSpec variant="h6">{label}</LabelSpec>
          </StackStyle>
          <CaptionWeb3Id>
            {isMobile ? elementMobile : elementDesk}
          </CaptionWeb3Id>
        </Box>
      </CardCtx>
    </MuiCard>
  );
};

export default CardText;
