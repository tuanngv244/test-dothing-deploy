import React, { useMemo } from "react";
import {
  styled,
  Typography,
  Card,
  CardContent,
  Box,
  Theme,
  useMediaQuery
} from "@mui/material";
import CardImgData from "@/domains/models/CardImgData";

const MuiCard = styled(Card)(({ theme }) => ({
  border: 0,
  boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",
  marginBottom: theme.spacing(8),
  background: theme.palette.common.white,
  borderRadius: 30,
  minHeight: "472px",
  [theme.breakpoints.down("xl")]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: "420px",
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(3),
    boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",
  },
  [theme.breakpoints.down("xs")]: {},
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
    paddingLeft: "2rem !important",
    paddingRight: "2rem !important",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const ImgWrapper = styled(Box)(({ theme }) => ({
  minHeight: 280,
  paddingTop: "2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    minHeight: 245,
    paddingTop: "1rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const LabelSpec = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '40px !important',
  lineHeight: '44px',
  fontWeight: 700,
  textAlign: 'center',
  marginTop: '0.5rem',

  [theme.breakpoints.down('xl')]: {},
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px !important',
    lineHeight: '30px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '25px !important',
    lineHeight: 1
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px !important'
  },
  [theme.breakpoints.down('xs')]: {}
}))

const ImgStyle = styled("img")(
  ({ theme, width = "190px" }: { theme: Theme; width?: any }) => ({
    width: width,
    margin: "auto",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width: "190px",
    },
    [theme.breakpoints.down("md")]: {
      width: "160px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "160px",
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const CaptionWeb3Id = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '18px !important',
  lineHeight: '32px',
  fontWeight: 500,
  textAlign: 'center',
  marginTop: '1.2rem',
  
  [theme.breakpoints.down('xl')]: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  [theme.breakpoints.down('lg')]: {
    lineHeight: '25px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px !important',
    lineHeight: '20px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
    lineHeight: '32px',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  }
}))

const CardImg = (props: CardImgData) => {
  const { imgSrc, label, elementDesk, elementMobile, width} = props

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <MuiCard>
      <CardCtx>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <ImgWrapper>
            <ImgStyle src={imgSrc} width={width}/>
          </ImgWrapper>
          <LabelSpec variant='h6'>{label}</LabelSpec>
          <CaptionWeb3Id>{isMobile ? elementMobile : elementDesk}</CaptionWeb3Id>
        </Box>
      </CardCtx>
    </MuiCard>
  );
};

export default CardImg;
