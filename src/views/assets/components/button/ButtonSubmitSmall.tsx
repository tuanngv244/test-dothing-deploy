import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Theme, styled, useTheme } from "@mui/material";

const Button = styled(LoadingButton)(
  ({
    theme,
    width = 156,
    height = 44,
  }: {
    theme: Theme;
    width: number;
    height: number;
  }) => ({
    fontSize: "20px",
    fontWeight: 500,
    color: theme.palette.common.white,
    boxShadow: "none",
    height: height,
    width: width,
    borderRadius: 6,
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    paddingLeft: "37px",
    paddingRight: "37px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("lg")]: {
      width: 100,
      height: "44px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      width: 200,
    },
  })
);

type ButtonSubmitSmallProps = {
  loading?: any;
  name?: string;
  color?: any;
  fn?: any;
  submit?: boolean;
  size?: any;
  variant?: any;
  children?: React.ReactNode;
  width?: number;
  height?: number;
};

const ButtonSubmitSmall = ({
  loading,
  name = "OK",
  color = "success",
  fn,
  submit = false,
  size = "small",
  variant = "outlined",
  children,
  width = 156,
  height = 44,
}: ButtonSubmitSmallProps) => {
  const theme = useTheme();
  if (loading) {
    return (
      <Button
        size={size}
        sx={{ px: "0 !important" }}
        loading
        color={color}
        variant={variant}
        width={width}
        height={height}
        theme={theme}
      >
        Submit
      </Button>
    );
  }
  if (submit) {
    return (
      <Button
        theme={theme}
        width={width}
        height={height}
        size={size}
        color={color}
        variant={variant}
        type="submit"
      >
        {children}
        {name}
      </Button>
    );
  }
  return (
    <Button
      theme={theme}
      width={width}
      height={height}
      size={size}
      color={color}
      variant={variant}
      onClick={fn}
    >
      {children}
      {name}
    </Button>
  );
};

export default ButtonSubmitSmall;
