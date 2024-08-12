import React from "react";
import { styled, Box, Typography, useTheme, Fab, Theme } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

const FormStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: "5px",
    h6: {
      marginTop: "-10px !important",
    },
  },
}));

const InputStyle = styled(TextField)(({ theme, type }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "6px",
    color: "initial",
    backgroundColor: theme.palette.common.white,
    fontSize: "16px",
    paddingLeft: "10px",
    paddingRight: 0,
    fontWeight: 500,
    border: "0",
    height: "64px",
    boxShadow: "0px 8px 10px rgba(0, 102, 255, 0.1)",
    width: "391px",
    letterSpacing: type === "en" ? "0px" : "-1px",
    [theme.breakpoints.down("xl")]: {
      height: "54px",
      width: "291px",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      height: "64px",
      marginBottom: "2rem",

      input: {
        paddingLeft: 0,
      },
    },
  },
  fieldset: {
    borderColor: "transparent !important",
  },
}));

const ButtonSearch = styled(Fab)(
  ({ theme, language }: { theme: Theme; language: string }) => ({
    fontSize: "16px",
    fontWeight: 500,
    color: theme.palette.common.white,
    boxShadow: "none",
    height: "64px",
    borderRadius: "6px",
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    paddingLeft: language === "en" ? "35px" : "22px",
    paddingRight: language === "en" ? "36px" : "23px",

    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    [theme.breakpoints.down("xl")]: {
      height: "54px",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "35px",
      paddingRight: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      paddingLeft: language === "en" ? "35px" : "22px",
      paddingRight: language === "en" ? "36px" : "23px",
    },
  })
);

const CardSubscription = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = (data: any) => {};

  const theme = useTheme();

  const { t, i18n } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputStyle
              {...field}
              type={i18n.language}
              theme={theme}
              placeholder="Your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start" sx={{ mr: 0 }}>
                    <ButtonSearch
                      variant="extended"
                      type="submit"
                      theme={theme}
                      language={i18n.language}
                    ></ButtonSearch>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </FormControl>
    </form>
  );
};

export default CardSubscription;
