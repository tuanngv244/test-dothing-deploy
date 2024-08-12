import React from "react";
import {
  useTheme,
  Box,
  Grid,
  useMediaQuery,
  styled,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { WIDTH_MEDIUM } from "@/@core/configs";

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

const Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontWeight: 300,
    lineHeight: "16px",
  },
}));

type FooterProps = {
  settings?: any;
  footerContent?: any;
};

const FooterPolicy = (props: FooterProps) => {
  const { settings, footerContent: userFooterContent } = props;
  const theme = useTheme();
  const { skin, footer, contentWidth } = settings;
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("xlc"));

  if (footer === "hidden") {
    return null;
  }

  return (
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
                : theme.palette.primary.light,
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
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                mx: isDesktop ? [-4, -4] : [0, 0],
              }}
            >
              <Text
                variant="caption"
                sx={{ color: "#fff", textAlign: "center" }}
              >
                {`Copyright C Korea Information Certification Authority Inc. All rights Reserved.`}
              </Text>
            </Box>
          </StyleContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FooterPolicy;
