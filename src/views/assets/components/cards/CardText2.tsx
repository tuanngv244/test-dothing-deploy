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
  SxProps,
} from "@mui/material";
import CardImgData from "@/domains/models/CardImgData";
import Member from "@/@core/components/icons/Member";
import { WIDTH_MEDIUM } from "@/@core/configs";

const MuiCard = styled(Card)(
  ({ theme, height = "498px" }: { theme: any; height: any }) => ({
    boxShadow: "none",
    background: theme.palette.common.white,
    borderRadius: 10,
    minHeight: height,
    border: "1px solid #89939E80",
    [theme.breakpoints.down("xl")]: {
      marginBottom: theme.spacing(0),
    },
    [theme.breakpoints.down("lg")]: {
      minHeight: "300px",
      marginBottom: theme.spacing(0),
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  })
) as any;

const CardCtx = styled(CardContent)(
  ({ theme, ctxStyles }: { theme?: any; ctxStyles: any }) => ({
    paddingTop: ".5rem",
    paddingBottom: "2rem !important",
    paddingLeft: "2rem !important",
    paddingRight: "2rem !important",
    textAlign: "center",
    ...ctxStyles,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      // paddingLeft: "1.5rem !important",
      // paddingRight: "1.5rem !important",
      // paddingTop: "1rem",
      // paddingBottom: "1rem !important",
      padding: "34px 46px !important",
    },
  })
);

const LabelSpec = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.link,
  fontWeight: 700,
  textAlign: "left",
  fontSize: "22px !important",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: "28px !important",
    lineHeight: "36px",
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
    fontSize: "25px !important",
    lineHeight: "30px",
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
    fontSize: "15px !important",
    lineHeight: "20px",
  },
}));

const WrapTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "18px",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
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

const CardText2 = (props: CardImgData) => {
  const {
    imgSrc,
    label,
    elementDesk,
    elementMobile,
    width,
    height,
    eleIcon,
    ctxStyles,
  } = props;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <MuiCard height={height}>
      <CardCtx ctxStyles={ctxStyles}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <WrapTitle>
            {eleIcon ? eleIcon : <Member />}
            <LabelSpec variant="h6">{label}</LabelSpec>
          </WrapTitle>
          <CaptionWeb3Id>
            {isMobile ? elementMobile : elementDesk}
          </CaptionWeb3Id>
        </Box>
      </CardCtx>
    </MuiCard>
  );
};

export default CardText2;
