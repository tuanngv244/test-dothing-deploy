import React, { useRef, useEffect } from "react";
import {
  styled,
  Grid,
  useMediaQuery,
  Theme,
  useTheme,
  Slide,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import MuiContainer from "@/@core/style-libs/mui-container";
import { Faqs } from "@/domains/types/faqs.type";
import CardFaq from "@/views/assets/components/cards/CardFaq";
import { isScrolledIntoView } from "@/@core/utils/helpers";

const BoxStyle = styled(MuiContainer)(({ theme }) => ({}));

const GridStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {},
}));

const ImgStyle = styled("img")(
  ({ theme, isData = false }: { theme: Theme; isData: any }) => ({
    position: "relative",
    marginTop: isData ? "17rem" : "",
    marginLeft: "8rem",
    width: "425px",
    [theme.breakpoints.down("xl")]: {},
    [`@media (max-width: 1279px)`]: {
      width: "100%",
      marginTop: "12rem",
      marginLeft: "2rem",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      width: "88%",
      marginLeft: "0rem",
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const GridContainer = styled(Grid)(({ theme }) => ({
  paddingTop: "4rem",
  paddingBottom: "17rem",
  [theme.breakpoints.down("xl")]: {
    paddingBottom: "10rem",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "1rem",
    paddingBottom: "9rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "3.5rem",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const FaqsCard = ({ faqList = [] }: { faqList?: Faqs }) => {
  const [checked, setChecked] = React.useState(true);
  const containerRef = React.useRef<HTMLElement>(null);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const theme = useTheme();

  const handleScroll = (e: any) => {
    const { visible } = isScrolledIntoView(".faqs");

    if (isMobile && checked) {
      return;
    }

    setChecked(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BoxStyle width={WIDTH_MEDIUM} ref={containerRef}>
      <Slide
        in={checked}
        container={containerRef.current}
        direction="up"
        timeout={1500}
      >
        <div>
          <GridContainer container spacing={5} alignItems={"start"}>
            <GridStyle item xs={12} sm={7}>
              <CardFaq faqs={faqList} />
            </GridStyle>
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                pt: "0 !important",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <ImgStyle
                alt="avatar"
                src="/images/pages/banners/banner4_4.svg"
                theme={theme}
                isData={faqList?.length ? "data" : ""}
              />
            </Grid>
          </GridContainer>
        </div>
      </Slide>
    </BoxStyle>
  );
};

export default FaqsCard;
