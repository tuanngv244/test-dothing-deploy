import { useRouter } from "next/router";
import {
  Box,
  useTheme,
  styled,
  Grid,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Wrapper from "../sections/wrapper-section";
import FooterContent from "./FooterContent";
import FooterLinks from "./FooterLinks";
import FooterSearch from "@/views/assets/components/search/FooterSearch";

const StyleContext = styled(Box)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  [`@media (max-width: 1279px)`]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    marginTop: "20px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "5px !important",
    marginBottom: "40px !important",
    marginLeft: "-16px",
    marginRight: "-16px",
  },
}));

type FooterProps = {
  settings?: any;
  footerContent?: any;
};

const Footer = (props: FooterProps) => {
  const { settings, footerContent: userFooterContent } = props;
  const theme = useTheme();
  const router = useRouter();
  const { skin, footer, contentWidth } = settings;

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  if (footer === "hidden") {
    return null;
  }

  return (
    <>
      {/* <Wrapper maxWidth={"100%"}>
        <FooterSearch type={router.asPath} />
      </Wrapper> */}
      <Wrapper maxWidth={"100%"} bg={theme.palette.common.bgGray}>
        <FooterLinks />
      </Wrapper>
      <Grid container>
        <Grid xs={12} item>
          <Box
            component="footer"
            className="layout-footer"
            sx={{
              zIndex: 10,
              minHeight: `40px`,
              backgroundColor: (theme: any) =>
                theme.palette.mode === "dark"
                  ? theme.palette.primary.dark
                  : theme.palette.common.bgGray,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...(footer === "fixed" && {
                bottom: 0,
                px: [4, 6],
                position: "sticky",
              }),
            }}
          >
            <StyleContext
              className="footer-content-container"
              sx={{
                py: 2,
                width: "100%",
                ...(contentWidth === "boxed" && {
                  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
                    px: 0,
                    width: WIDTH_MEDIUM + "px !important",
                    maxWidth: "none !important",
                  },
                }),
                ...(footer === "fixed" && {
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: theme.shadows[skin === "bordered" ? 0 : 4],
                  ...(contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                      maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`,
                    },
                  }),
                  ...(skin === "bordered"
                    ? {
                        border: `1px solid ${theme.palette.divider}`,
                        borderBottomWidth: 0,
                      }
                    : {
                        boxShadow: `0 -4px 8px -2px rgba(${
                          theme.palette.mode === "light"
                            ? theme.palette.primary.main
                            : "19, 17, 32"
                        }, ${theme.palette.mode === "light" ? 0.2 : 0.42})`,
                      }),
                }),
              }}
            >
              {!isMobile && (
                <DividerWrapper sx={{ mb: 4, borderColor: "#BDBDBD" }} />
              )}

              {userFooterContent ? userFooterContent(props) : <FooterContent />}
            </StyleContext>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
