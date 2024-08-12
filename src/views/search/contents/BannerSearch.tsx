import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  Box,
  useMediaQuery,
  styled,
  TextField,
  InputAdornment,
  Fab,
  FormControl,
  CircularProgress,
  Tooltip,
  Theme,
} from "@mui/material";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import DialogLanguage from "./DialogLanguage";
import { isKoreanWord, onlyLettersAndNumbers } from "@/@core/utils/helpers";

const ContentSearch = styled(Box)(({ theme }: { theme: any }) => ({
  position: "relative",
  display: "table",
  margin: "auto",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("xlc")]: {
    h2: {
      fontSize: "2.7rem",
    },
    h4: {
      fontSize: "1.7rem",
      marginBottom: "1rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    h2: {
      marginTop: "1.2rem",
      fontSize: "40px",
    },
    h4: {
      fontSize: "1rem",
      marginBottom: "0",
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "rgb(255 255 255 / 60%)",
  lineHeight: "32px",
  fontSize: "40px !important",
  fontWeight: 700,
  marginBottom: "1rem",
  marginTop: "2.1rem",
  textAlign: "center",
  textTransform: "uppercase",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: "1.6rem",
    fontSize: "35px !important",
    lineHeight: "35px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px !important",
    lineHeight: "32px",
    textAlign: "center",
  },
}));

const TextDomain = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  marginTop: "1.5rem !important",
  fontSize: "20px !important",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: "1rem !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px !important",
    lineHeight: "30px",
    textAlign: "center",
    marginBottom: "1.5rem !important",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonSearch = styled(Fab)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  color: theme.palette.common.white,
  boxShadow: "none",
  height: "45px",
  borderRadius: "60px",
  textTransform: "capitalize",
  backgroundColor: theme.palette.primary.main,
  paddingLeft: "41px",
  paddingRight: "41px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    paddingLeft: "27px",
    paddingRight: "27px",
  },
  [theme.breakpoints.down("sm")]: {
    width: 100,
    fontWeight: 500,
    fontSize: "16px",
    height: "44px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}));

const InputStyle = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "60px",
    color: "rgb(10 10 10 / 80%)",
    backgroundColor: theme.palette.common.white,
    fontSize: "20px",
    marginTop: "1.3rem",
    paddingLeft: "30px",
    paddingTop: "0",
    paddingRight: "0 !important",
    fontWeight: 700,
    border: "0",
    height: "60px",
    boxShadow: "none",
    width: "816px",
    marginLeft: "auto",
    marginRight: "auto",
    "input::placeholder": {
      color: "rgb(115 115 115 / 80%)",
      fontWeight: 500,
      opacity: 1,
    },
    "input:::-ms-input-placeholder": {
      color: "rgb(115 115 115 / 80%)",
      fontWeight: 500,
    },
    "input::-ms-input-placeholder": {
      color: "rgb(115 115 115 / 80%)",
      fontWeight: 500,
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "57px",
      width: "714px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      width: "554px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "14px",
      height: "54px",
      paddingRight: "0 !important",
      paddingLeft: "15px!important",
    },
  },
  fieldset: {
    borderColor: "transparent !important",
  },
}));

const IconImg = styled("img")(({ theme }) => ({
  marginRight: "1.4rem",
  width: 20,
  [theme.breakpoints.down("lg")]: {
    marginRight: "1rem",
    width: "18px",
  },
  [theme.breakpoints.down("md")]: {
    marginRight: "0.55rem",
    width: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0.25rem",
  },
}));

const IconLoading = styled(CircularProgress)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    marginRight: "0.55rem",
    width: "18px",
  },
  [theme.breakpoints.down("md")]: {
    width: "16px",
  },
}));

const BannerSearch = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: { search: "" },
  });

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const router = useRouter();
  const dispatch = useDispatch();
  const [openT, setOpenT] = useState(false);

  const close = () => setOpenT(false);

  const onSubmit = (data: any) => {
    if (isKoreanWord(data.search.trim())) {
      setOpenT(true);
      return;
    }

    if (!onlyLettersAndNumbers(data.search.trim())) {
      setOpenT(true);
      return;
    }

    setOpenT(false);
    router.replace({
      pathname: "/search",
      query: { q: data.search },
    });
  };

  useEffect(() => {
    if (router.query?.q) {
      setValue("search", router?.query?.q as any);
    }
  }, [router.query.q]);

  return (
    <ContentSearch>
      <Title>
        <Translations text={"Search result"} />
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Tooltip
          title={
            <h2
              style={{
                color: "lightblue",
                margin: 0,
                padding: 4,
                fontSize: 15,
              }}
            >
              검색어에 잘못된 문자가 포함되었습니다.
              <br />
              검색은 영문, 숫자 및 대시만 가능합니다.
            </h2>
          }
          open={openT}
          onClose={close}
          placement="bottom-start"
        >
          <FormControl fullWidth>
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <InputStyle
                  {...field}
                  InputProps={{
                    ...field,
                    endAdornment: (
                      <InputAdornment position="start">
                        <ButtonSearch variant="extended" type="submit">
                          <Translations text={"Search"} />
                        </ButtonSearch>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </FormControl>
        </Tooltip>
      </form>
      {isMobile ? (
        <TextDomain variant="h6" sx={{ my: 6 }}>
          .crypto │ .polygon │ .nft │ .x │ .wallet │<br /> .bitcoin │ .dao │
          .888 │ .zil │ .blockchain
        </TextDomain>
      ) : (
        <TextDomain variant="h6" sx={{ my: 6 }}>
          .crypto │ .polygon │ .nft │ .x │ .wallet │ .bitcoin │ .dao │ .888 │
          .zil │ .blockchain
        </TextDomain>
      )}
    </ContentSearch>
  );
};

export default BannerSearch;
