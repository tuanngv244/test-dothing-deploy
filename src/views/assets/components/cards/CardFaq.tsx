import React, { useState } from "react";
import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import ButtonLink from "../button/ButtonLink";
import { Faqs } from "@/domains/types/faqs.type";
import AccordionFaq from "../accordions/AccordionFaq";
import { useTranslation } from "react-i18next";
import { WIDTH_MEDIUM } from "@/@core/configs";

const FaqContent = styled(Box)(({ theme }: { theme: any }) => ({
  width: "100%",
  h3: {
    fontSize: "64px",
    fontWeight: 900,
    lineHeight: "72px",
    marginBottom: "0rem",
    color: "rgb(10 10 10 / 80%)",
  },
  h4: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 400,
    color: "rgb(64 64 64 / 80%)",
    marginBottom: "0.2rem",
  },
  ".summary": {
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  ".body": {
    color: "rgb(64 64 64 / 100%)",
    marginBottom: "0.5rem",
  },
  [theme.breakpoints.down("xl")]: {
    h3: {
      lineHeight: 1.1,
    },
  },
  [theme.breakpoints.down("lg")]: {
    h3: {
      fontSize: "2rem",
      lineHeight: 1,
    },
    h4: {
      fontSize: "20px",
      lineHeight: "25px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    width: "100%",
    h3: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      fontSize: "40px",
      lineHeight: 1,
      textAlign: "center",
    },
    h4: {
      fontSize: "16px",
      lineHeight: "18px",
      textAlign: "center",
      marginBottom: "10px",
    },
    ".summary": {
      marginBottom: 0,
      paddingRight: 0,
      textAlign: "left",
    },
  },
}));

const Detail = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    marginTop: 5,
  },
}));

const CardFaq = ({ faqs }: { faqs: Faqs }) => {
  const { t } = useTranslation();
  return (
    <FaqContent>
      <Typography
        variant="h3"
        sx={{
          mb: 3,
          textAlign: "center",
          [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
            fontSize: "54px !important",
          },
        }}
      >
        FAQ
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
            fontSize: "20px !important",
          },
        }}
      >
        자주 묻는 질문에 대한 답변을 찾아보세요
      </Typography>
      <Detail sx={{ mt: 0 }}>
        <AccordionFaq faqs={faqs} />
      </Detail>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <ButtonLink label={t("See more")} href="/customer-support/faq" />
      </Box>
    </FaqContent>
  );
};

export default CardFaq;
