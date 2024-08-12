import { Zoom, styled, useScrollTrigger } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const StyleScrollTop = styled("div")(({ theme }) => ({
  zIndex: 1200,
  position: "fixed",
  right: theme.spacing(3) + "!important",
  bottom: theme.spacing(15) + "!important",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type ScrollTopProps = {
  children: ReactNode;
  className?: string;
  isPolicy?: boolean;
};

const ScrollToTop = ({ isPolicy = false, ...otherProps }: ScrollTopProps) => {
  const { children, className } = otherProps;

  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true,
  });

  const handleClick = () => {
    const anchor = document.querySelector("body");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Zoom in={trigger}>
      <StyleScrollTop
        role="presentation"
        className={className}
        onClick={handleClick}
      >
        {children}
      </StyleScrollTop>
    </Zoom>
  );
};

export default ScrollToTop