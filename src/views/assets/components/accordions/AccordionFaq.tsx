import React, { useState } from "react";
import {
  styled,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  useTheme,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Plus from "@/@core/components/icons/Plus";
import Minus from "@/@core/components/icons/Minus";
import { convertToHtml } from "@/@core/utils/helpers";
import { Faqs } from "@/domains/types/faqs.type";
import Faq from "@/domains/models/Faq";

const MuiAccordion = styled(Accordion)(({ theme }: { theme: any }) => ({
  borderRadius: "5px !important",
  background: theme.palette.background.bgHeader,
  marginTop: 35,
  "&:before": {
    height: 0,
  },
  "&.Mui-expanded": {
    boxShadow: "none",
    marginTop: "35px !important",
  },
  [theme.breakpoints.down("xl")]: {},
  [`@media (max-width: 1279px)`]: {
    marginTop: 15,
    "&.Mui-expanded": {
      marginTop: "15px !important",
    },
  },
  [theme.breakpoints.down("lg")]: {
    svg: {
      width: 26,
    },
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    "&.Mui-expanded": {
      marginTop: "10px !important",
      marginBottom: "10px !important",
    },
  },
}));

const Summary = styled(AccordionSummary)(({ theme }) => ({
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingTop: 0,
  paddingBottom: 0,
  minHeight: 80,
  ".Mui-expanded": {
    margin: "10px 0 0 !important",
  },
  ".summary": {
    fontSize: 20,
  },
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {
    minHeight: 60,
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    minHeight: 56,
    paddingTop: "0",
    paddingBottom: "0",
    ".Mui-expanded": {
      margin: "0px 0 0 !important",
    },
    ".summary": {
      fontSize: 16,
    },
  },
}));

const Detail = styled(AccordionDetails)(({ theme }) => ({
  paddingLeft: "2rem",
  paddingRight: "2rem",
  overflow: "auto",
  img: {
    maxWidth: "100% !important",
  },
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
    h4: {
      textAlign: "left",
    },
  },
}));

const ContentHtml = styled(Box)(({ theme }) => ({
  img: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
}));

const AccordionFaq = ({ faqs }: { faqs: Faqs }) => {
  const [expanded, setExpanded] = useState<any>(false);

  const handleChange =
    (panel: any) => (event: React.BaseSyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useTheme();

  return (
    <>
      {faqs.map((faq: Faq, index: number) => {
        return (
          <MuiAccordion
            key={index}
            elevation={0}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <Summary
              expandIcon={
                expanded === index ? (
                  <Minus color={theme.palette.primary.main} />
                ) : (
                  <Plus color={theme.palette.primary.main} />
                )
              }
              id={`faq-accordion-${index}-header`}
              aria-controls={`faq-accordion-${index}-content`}
            >
              <Typography className="summary" variant="h4">
                {faq.title}
              </Typography>
            </Summary>
            <Detail>
              <ContentHtml
                className="ck ck-content"
                dangerouslySetInnerHTML={{
                  __html: convertToHtml(faq.content ?? ""),
                }}
              />
            </Detail>
          </MuiAccordion>
        );
      })}
    </>
  );
};

export default AccordionFaq;
