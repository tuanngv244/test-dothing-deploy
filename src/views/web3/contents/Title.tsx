import React from "react";
import { Theme, Typography, styled, useMediaQuery } from "@mui/material";

const TitleStyle = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "64px",
  fontSize: "40px !important",
  fontWeight: 900,
  marginBottom: "0rem",
  marginTop: "2rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: "1.1rem",
    fontSize: "45px !important",
    lineHeight: "45px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px !important",
    lineHeight: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.1rem",
    fontSize: "32px !important",
    lineHeight: "45px",
  },
}));

const Title = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      {isMobile ? (
        <TitleStyle>
          성장하는 Web3 글로벌
          <br /> 네트워크에 참여해 보세요
        </TitleStyle>
      ) : (
        <TitleStyle>성장하는 Web3 글로벌 네트워크에 참여해 보세요</TitleStyle>
      )}
    </>
  );
};

export default Title;
