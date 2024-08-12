import React from "react";
import Print from "@/@core/components/icons/Print";
import { Box, Typography, Stack, styled } from "@mui/material";
import { removeTagTemporary } from "@/@core/utils/helpers";
import MuiContainer from "@/@core/style-libs/mui-container";
import { WIDTH_MEDIUM } from "@/@core/configs";

const Content = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-1rem",
    marginRight: "-1rem",
  },
}));

const TitleStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "#E6F0FF",
  padding: "2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));

const BoxContent = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: "#FBFBFB",
  padding: "2rem",
  paddingBottom: "2rem",
  marginBottom: "4rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    paddingTop: "1.5rem",
    paddingBottom: "3.5rem",
    marginBottom: "1rem",
  },
}));

const BoxPrint = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    svg: {
      width: 24,
    },
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: "#000000",
  lineHeight: "32px",
  fontSize: "24px !important",
  fontWeight: 700,
  marginBottom: "0",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
    lineHeight: "22px",
    paddingRight: "1rem",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "#404040",
  lineHeight: "20px",
  fontSize: "16px !important",
  fontWeight: 500,
  "&:after": {
    content: '""',
    display: "block",
    clear: "both",
  },
  img: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type TermContentProps = {
  data?: any;
};

const TermContent = ({ data }: TermContentProps) => {
  const print = () => {
    window.print();
  };

  if (!data) return null;
  return (
    <Content>
      <TitleStack
        sx={{
          "@media print": {
            WebkitPrintColorAdjust: "exact !important",
            padding: "8mm 5mm 8mm 10mm",
          },
        }}
        display={"flex"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Label noWrap>{data.termTitle}</Label>
        <BoxPrint
          onClick={print}
          sx={{
            "@media print": {
              display: "none",
            },
          }}
        >
          <Print />
        </BoxPrint>
      </TitleStack>
      <BoxContent
        width={WIDTH_MEDIUM}
        sx={{
          "@media print": {
            WebkitPrintColorAdjust: "exact !important",
            padding: "7mm 10mm 10mm 10mm",
          },
        }}
      >
        <Text
          className="ck ck-content"
          dangerouslySetInnerHTML={{
            __html: removeTagTemporary(
              data.termContent ?? "",
              "ck-fake-selection-container"
            ),
          }}
        ></Text>
      </BoxContent>
    </Content>
  );
};

export default TermContent;
