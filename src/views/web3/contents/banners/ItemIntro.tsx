import React from "react";
import { Typography, styled, Box } from "@mui/material";
import Translations from "@/@core/components/translations";

const Banner = styled(Box)(({ theme }) => ({
  marginTop: 0,
  marginBottom: 65,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginBottom: 30,
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: 25,
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: 20,
  },
}));

const SubTitle = styled(Typography)(({ theme }: { theme: any }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "34px",
  fontSize: "32px !important",
  fontWeight: 900,
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "30px !important",
    lineHeight: 1,
  },
  [theme.breakpoints.down("xlc")]: {
    fontSize: "25px !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0.7rem",
    fontSize: "20px !important",
    lineHeight: "20px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

type ItemIntroProps = {
  title: string;
  label: string;
  children: React.ReactNode;
};

const ItemIntro = ({ title = "", label = "", children }: ItemIntroProps) => {
  return (
    <Banner>
      <SubTitle>
        <Translations text={title} />
      </SubTitle>
      {children}
    </Banner>
  );
};

export default ItemIntro;
