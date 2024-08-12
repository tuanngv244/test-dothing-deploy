import React, { useMemo, useEffect, useRef, useState } from "react";
import {
  styled,
  Grid,
  Typography,
  useMediaQuery,
  Theme,
  Box,
  Slide,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import CardGroupTabs from "@/views/assets/sections/CardGroupTabs";
import CardGroupFees from "@/views/assets/sections/CardGroupFees";
import { isScrolledIntoView } from "@/@core/utils/helpers";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingTop: "5rem",
    paddingBottom: "2rem",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: 1,
  fontSize: "64px !important",
  fontWeight: 900,
  marginTop: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "54px !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "50px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px !important",
    lineHeight: "32px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  lineHeight: "32px",
  fontWeight: 400,
  marginTop: "1rem",
  marginBottom: "1rem",
  fontSize: "24px !important",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "35px",
    marginBottom: 7,
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Plans = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));
  const [checked, setChecked] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const spacing = useMemo(() => {
    if (isDesktop) return 5;
    if (isTablet) return 5;
    return 12;
  }, []);

  const handleScroll = (e: any) => {
    const { isVisible } = isScrolledIntoView(".plan")
    setChecked(isVisible)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BoxStyle
      width={WIDTH_MEDIUM}
      ref={containerRef}
    >
      <Slide
        in={checked}
        container={containerRef.current}
        direction="up"
        timeout={1500}
      >
        <div>
          <Grid container spacing={spacing} alignItems={"start"}>
            <Grid item xs={12} md={12} textAlign={"center"}>
              <Title>다양한 활용방안</Title>
              {isMobile ? (
                <Subtitle>
                  Web3도메인은
                  <br />
                  가상자산 지갑주소를 대체할 뿐만 아니라
                  <br />
                  다양하게 활용 가능합니다.
                </Subtitle>
              ) : (
                <Subtitle>
                  Web3도메인은 가상자산 지갑주소를 대체할 뿐만 아니라
                  <br />
                  다양하게 활용 가능합니다.
                </Subtitle>
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              <CardGroupTabs />
            </Grid>
            <Grid item xs={12} md={12}>
              <CardGroupFees />
            </Grid>
          </Grid>
        </div>
      </Slide>
    </BoxStyle>
  );
};

export default Plans;
