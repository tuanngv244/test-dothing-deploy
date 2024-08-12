import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  styled,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ButtonLink from "@/views/assets/components/button/ButtonLink";
import Plus from "@/@core/components/icons/Plus";
import Minus from "@/@core/components/icons/Minus";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { convertToHtml, removeTagTemporary } from "@/@core/utils/helpers";

const FaqContent = styled(Box)(({ theme }: { theme: any }) => ({
  paddingTop: "1.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "4rem",
  paddingRight: "4rem",
  border: "1px solid rgb(0 0 0 / 10%)",
  borderRadius: 10,
  marginBottom: "2.5rem",
  marginTop: "0.5rem",
  h3: {
    fontSize: "60px",
    fontWeight: 900,
    lineHeight: "72px",
    marginBottom: "1rem",
    color: "rgb(10 10 10 / 80%)",
  },
  h4: {
    fontSize: "24px",
    lineHeight: "30px",
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
    fontSize: "18px",
  },
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginBottom: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    h3: {
      fontSize: "2rem",
      lineHeight: 1,
    },
    h4: {
      fontSize: "24px !important",
      lineHeight: "30px",
    },
  },
  [theme.breakpoints.down("md")]: {
    h3: {
      fontSize: "1.2rem",
      lineHeight: 1,
    },
    h4: {
      fontSize: "20px !important",
      lineHeight: "21px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
    borderRadius: 0,
    border: "none",
    paddingLeft: "0",
    paddingRight: "0",
    marginBottom: "0",
    paddingTop: "0",

    h3: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      fontSize: "36px",
      lineHeight: 1,
      textAlign: "center",
    },
    h4: {
      fontSize: "16px !important",
      lineHeight: "20px",
      textAlign: "left",
      marginBottom: "10px",
    },
    ".summary": {
      marginBottom: 0,
      textAlign: "left",
      paddingRight: "10px",
    },
  },
}));

const MuiAccordion = styled(Accordion)(({ theme }: { theme: any }) => ({
  marginTop: 20,
  borderRadius: "5px !important",
  background: "#fdf6f6",
  "&:before": {
    height: 0,
  },
  "&.Mui-expanded": {
    boxShadow: "none",
    marginTop: "20px !important",
  },
  [theme.breakpoints.down("xl")]: {
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
  paddingTop: "0.8rem",
  paddingBottom: "0.8rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  ".Mui-expanded": {
    margin: "10px 0 0 !important",
  },
  [theme.breakpoints.down("xl")]: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0.1rem",
    paddingBottom: "0.1rem",
    ".Mui-expanded": {
      margin: "0px 0 0 !important",
    },
  },
}));

const Detail = styled(AccordionDetails)(({ theme }) => ({
  paddingLeft: "2rem",
  paddingRight: "2rem",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    overflow: "auto",
    "& > *, & > * *": {
      lineHeight: "21px !important",
    },
    h4: {
      textAlign: "left",
    },
  },
}));

const BoxDetail = styled(Box)(({ theme }) => ({
  marginTop: 10,
  paddingBottom: 20,
  [theme.breakpoints.down("xl")]: {
    marginTop: 15,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingBottom: 10,
  },
}));

const ContentHtml = styled(Box)(({ theme }) => ({
  img: {
    maxWidth: "100%",
  },
  color: "rgb(64, 64, 64)",
  [theme.breakpoints.down("xl")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const TypographyHTML = styled(Typography)(({ theme }) => ({
  color: "rgb(64, 64, 64)",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const IconPlus = styled(Plus)(({ theme }) => ({}));

const IconMinus = styled(Minus)(({ theme }) => ({}));

type CardFAQProps = {
  apiData: any;
  total: number;
  loadMoreFAQ: Function;
};

const CardFAQ = ({ apiData, total, loadMoreFAQ }: CardFAQProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isLoadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [perPageDefault, setPerPageDefault] = useState(10);
  const [rows, setRows] = useState([]);
  const refRows = useRef(1);

  const { t } = useTranslation();
  const router = useRouter();
  const theme = useTheme();

  const handleChange = (panel: any) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleLoadData = (apiData: any) => {
    let data =
      apiData && apiData.length > 5
        ? apiData.slice((refRows.current - 1) * size, refRows.current * size)
        : apiData;

    setRows(data);
  };

  const handleLoadMore = () => {
    if (total === apiData.length) {
      setRows(apiData);
      setLoadMore(true);
      refRows.current = 1;
      return;
    }

    refRows.current += 1;

    if (total <= perPageDefault) {
      setRows(apiData);
      refRows.current = 1;
      return;
    }

    setTimeout(async () => {
      if (total > size * refRows.current) {
        setRows(apiData);
        await loadMoreFAQ(refRows.current - 1);
      }
    });
  };

  const renderAccordion = () => {
    return rows.map((item: any) => {
      return (
        <MuiAccordion
          key={item.id}
          elevation={0}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <Summary
            expandIcon={
              expanded === item.id ? (
                <IconMinus color={theme.palette.primary.main} />
              ) : (
                <IconPlus color={theme.palette.primary.main} />
              )
            }
            id={`faq-accordion-${item.id}-header`}
            aria-controls={`faq-accordion-${item.id}-content`}
          >
            <Typography className="summary" variant="h4">
              <Translations text={t(item.question)} />
            </Typography>
          </Summary>
          <Detail>
            {item.useHtmlYn === "Y" ? (
              <ContentHtml
                className="ck ck-content"
                dangerouslySetInnerHTML={{
                  __html: removeTagTemporary(
                    convertToHtml(item.answer) ?? "",
                    "ck-fake-selection-container"
                  ),
                }}
              />
            ) : (
              <TypographyHTML variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                {item.answer}
              </TypographyHTML>
            )}
          </Detail>
        </MuiAccordion>
      );
    });
  };

  useEffect(() => {
    handleLoadData(apiData);
    setLoadMore(false);
    setExpanded(false);
  }, [apiData]);

  useEffect(() => {
    setRows([]);
    refRows.current = 1;
  }, [router.query?.category]);

  return (
    <FaqContent>
      <BoxDetail sx={{ display: "flex" }}>
        <Box sx={{ width: "100%" }}>{renderAccordion()}</Box>
      </BoxDetail>
      {!isLoadMore && apiData?.length > rows?.length ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ButtonLink
            click={true}
            label={t("See more")}
            handleLoadMore={handleLoadMore}
          />
        </Box>
      ) : (
        ""
      )}
    </FaqContent>
  );
};

export default CardFAQ;
