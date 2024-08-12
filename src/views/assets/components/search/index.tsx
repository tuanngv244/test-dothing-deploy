import { useState, useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import {
  styled,
  Fab,
  FormControl,
  TextField,
  InputAdornment,
  Tooltip,
  CircularProgress,
  useTheme,
  Theme,
} from "@mui/material";
import {
  isKoreanWord,
  onlyLettersAndNumbers,
} from "@/@core/utils/helpers";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { useRouter } from "next/router";
import Translations from "@/@core/components/translations";
import { useTranslation } from "react-i18next";

const ButtonSearchStyle = styled(Fab)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  color: theme.palette.common.white,
  boxShadow: "none",
  height: "64px",
  borderRadius: "60px",
  textTransform: "capitalize",
  backgroundColor: theme.palette.primary.main,
  paddingLeft: "37px",
  paddingRight: "37px",
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    minWidth: 200,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    height: "44px",
    paddingLeft: "27px",
    paddingRight: "27px",
  },
  [theme.breakpoints.down("sm")]: {
    fontWeight: 500,
    fontSize: "16px",
    height: "44px",
    paddingLeft: "22px",
    paddingRight: "22px",
  },
}));

const InputStyle = styled(TextField)(({ theme }: { theme: Theme}) => ({
  "& .MuiInputBase-root": {
    borderRadius: "60px",
    color: "rgb(115 115 115 / 100%)",
    backgroundColor: theme.palette.common.white,
    fontSize: "18px",
    marginTop: "1.3rem",
    paddingRight: "5px !important",
    fontWeight: 500,
    border: "0",
    height: "84px",
    boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",

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
    [theme.breakpoints.down("xl")]: {},
    [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
      paddingLeft: "40px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "64px",
      width: "754px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      fontSize: "14px",
      height: "54px",
      paddingRight: "0 !important",
    },
  },
  fieldset: {
    borderColor: "transparent !important",
  },
}));

const IconImgStyle = styled("img")(({ theme }: { theme: any }) => ({
  marginRight: "2rem",
  [theme.breakpoints.down("xlc")]: {
    marginRight: "1rem",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginRight: "2.1rem",
  },
  [theme.breakpoints.down("lg")]: {
    marginRight: "0.55rem",
    width: "25px",
  },
  [theme.breakpoints.down("md")]: {
    width: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0.25rem",
  },
}));

const IconLoadingStyle = styled(CircularProgress)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    marginRight: "0.55rem",
    width: "25px",
  },
  [theme.breakpoints.down("md")]: {
    width: "20px",
  },
}));

const Search = ({width = '763px'}: { width?: string}) => {
  const router = useRouter();
  const [openTooltip, setOpenTooltip] = useState(false);

  const { t } = useTranslation();

  const theme = useTheme()

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: { search: "" },
  });

  const close = () => {
    setOpenTooltip(false);
  };

  const onSubmit = (data: any) => {
    if (isKoreanWord(data.search.trim())) {
      setOpenTooltip(true)
      return
    }

    if (!onlyLettersAndNumbers(data.search.trim())) {
      setOpenTooltip(true)
      return
    }

    router.replace({
      pathname: '/search',
      query: { q: data.search }
    })

    setOpenTooltip(false)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Tooltip
        leaveDelay={5000}
        placement="bottom-start"
        open={openTooltip}
        onClose={close}
        title={
          <h2
            style={{ color: "lightblue", margin: 0, padding: 4, fontSize: 15 }}
          >
            검색어에 잘못된 문자가 포함되었습니다.
            <br />
            검색은 영문, 숫자 및 대시만 가능합니다.
          </h2>
        }
      >
        <FormControl fullWidth>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <InputStyle
                {...field}
                sx={{
                  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
                    width: width
                  },
                }}
                placeholder={t("Find Your Domain")}
                InputProps={{
                  ...field,
                  endAdornment: (
                    <InputAdornment position="start">
                      <ButtonSearchStyle variant="extended" type="submit">
                        <IconImgStyle src="/images/icons/search.svg" />
                        <Translations text={"Search"} />
                      </ButtonSearchStyle>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </FormControl>
      </Tooltip>
    </form>
  );
};

export default Search;
