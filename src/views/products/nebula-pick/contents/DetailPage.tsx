import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  styled,
  Box,
  Stack,
  Grid,
  Divider,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FontAwesome } from "mdi-material-ui";
import { renderImage } from "@/@core/utils/transform";

const Desc = styled(Box)(({ theme }: { theme: any }) => ({
  color: theme.palette.common.caption,
  fontWeight: 400,
  fontSize: 24,
  lineHeight: "42px",
  whiteSpace: "normal",
  img: {
    maxWidth: "100%",
  },
  "&:after": {
    content: '""',
    display: "block",
    clear: "both",
  },
  [theme.breakpoints.down("xl")]: {
    lineHeight: "35px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    color: "rgba(58, 53, 65, 0.87)",
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 400,
  },
}));

const CardItem = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  minHeight: 470,
  position: "relative",
  boxShadow: "none",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Title = styled("h3")(({ theme }) => ({
  borderLeft: "4px solid #C1272D",
  display: "inline-block",
  borderColor: theme.palette.primary.main,
  padding: "5px 150px 5px 10px",
  background: "linear-gradient(to left, rgba(255,0,0,0), #f6d2d3)",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    padding: "5px 10px",
  },
}));
const DashContent = styled(Box)(({ theme }) => ({
  border: "1px dashed #C1272D",
  padding: "24px 125px",
  borderRadius: "10px",
  marginTop: "1.5rem",
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: 16,
  },
}));
const DashDescription = styled("p")(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.common.black,
  lineHeight: "24px",
  fontWeight: 400,
}));

const DashInstructor = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gridTemplateRows: "185px 310px",
  gap: 20,
  marginTop: "20px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
  },
}));
const DashInstructorItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: 16,
  height: "100%",
  backgroundColor: "#F4F4F4",
  borderRadius: 10,
  "& .label": {
    marginTop: "12px",
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.palette.common.black,
    textAlign: "center",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const DashInstructorGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const GridContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  gap: "2rem",
  marginTop: "3rem",
  [theme.breakpoints.down("md")]: {
    overflowX: "auto",
    marginTop: "2.5rem",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const GridLeft = styled(Grid)(({ theme }) => ({
  width: "100%",
  ul: {
    li: {
      fontSize: "16px",
      lineHeight: "20px",
      color: theme.palette.common.black,
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
  },
}));

const GridHead = styled(Grid)(({ theme }) => ({
  backgroundColor: "#f6d1d2",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: 600,
  padding: "10px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
  },
}));
const GridBody = styled(Grid)(({ theme }) => ({
  padding: "1.5rem",
  backgroundColor: "#f2f2f2",
  label: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "bold",
    color: theme.palette.common.black,
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "14px",
    justifyContent: "flex-start",
    padding: "12px 12px 12px 30px",
    label: {},
  },
}));
const PickContent = styled(Box)(({ theme }) => ({
  marginTop: "3rem",
  maxWidth: "100%",
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2.5rem",
  },
}));
const PickItem = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "stretch",
  width: "fit-content",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const PickDivider = styled(Divider)(({ theme }) => ({
  height: "550px",
  margin: "0",
  borderWidth: "1px",
  borderStyle: "dashed",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    img: {
      width: "100%",
    },
  },
}));

const PickImage = styled("img")(({ theme }) => ({
  height: "550px",
  "&.img-1, &.img-3": {
    width: "380px",
    maxWidth: "380px",
  },
  "&.img-2, &.img-4": {
    width: "780px",
    maxWidth: "780px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "100%  !important",
    maxWidth: "100%  !important",
  },
}));

type DetailPageProps = {
  page: string;
  category: string;
  data: any;
};

const DetailPage = () => {
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const TableDesktop = (
    <>
      <GridHead item xs={2} sm={2}></GridHead>
      <GridHead item xs={3} sm={3}>
        3 Button
      </GridHead>
      <GridHead item xs={3} sm={3}>
        3+3 Digits
      </GridHead>
      <GridHead item xs={4} sm={4}>
        1 Button
      </GridHead>
      <GridBody item xs={2} sm={2} sx={{ margin: "10px 0" }}>
        <label>{t("NEBULA_PICK_PAGE.usage")}</label>
      </GridBody>
      <GridBody item xs={3} sm={3} sx={{ margin: "10px 0" }}>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.menuSelectCancel")}</li>
          <li>{t("NEBULA_PICK_PAGE.quantityControlPrevious")}</li>
        </ul>
      </GridBody>
      <GridBody item xs={3} sm={3} sx={{ margin: "10px 0" }}>
        <ul>
          <li>
            <div
              dangerouslySetInnerHTML={{
                __html: t("NEBULA_PICK_PAGE.locationIdItemNumberQuantity"),
              }}
            />
          </li>
        </ul>
      </GridBody>
      <GridBody item xs={4} sm={4} sx={{ margin: "10px 0" }}>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.doneOk")}</li>
        </ul>
      </GridBody>
      <GridBody item xs={2} sm={2}>
        <label>{t("NEBULA_PICK_PAGE.feature")}</label>
      </GridBody>
      <GridBody item xs={3} sm={3}>
        <ul>
          <li>
            <div
              dangerouslySetInnerHTML={{
                __html: t("NEBULA_PICK_PAGE.canApplyFunctionsSuitable"),
              }}
            />
          </li>
        </ul>
      </GridBody>
      <GridBody item xs={3} sm={3}>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.improvedUsabilityAndRecognition")}</li>
        </ul>
      </GridBody>
      <GridBody item xs={4} sm={4}>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.4ColorRgby")}</li>
          <li>{t("NEBULA_PICK_PAGE.improvedDurabilityWithNonContact")}</li>
        </ul>
      </GridBody>
    </>
  );
  const TableMobile = (
    <>
      <GridHead item xs={2}>
        3 Button
      </GridHead>
      <GridBody item xs={5}>
        <label>{t("NEBULA_PICK_PAGE.usage")}</label>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.menuSelectCancel")}</li>
          <li>{t("NEBULA_PICK_PAGE.quantityControlPrevious")}</li>
        </ul>
      </GridBody>
      <GridBody item xs={5}>
        <label>{t("NEBULA_PICK_PAGE.feature")}</label>
        <ul>
          <li>
            <div
              dangerouslySetInnerHTML={{
                __html: t("NEBULA_PICK_PAGE.canApplyFunctionsSuitable"),
              }}
            />
          </li>
        </ul>
      </GridBody>
      <GridHead item xs={2}>
        3+3 Digits
      </GridHead>
      <GridBody item xs={5}>
        <ul>
          <li>
            <div
              dangerouslySetInnerHTML={{
                __html: t(
                  "NEBULA_PICK_PAGE.locationIdItemNumberQuantityMobile"
                ),
              }}
            />
          </li>
        </ul>
      </GridBody>
      <GridBody item xs={5}>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.improvedUsabilityAndRecognition")}</li>
        </ul>
      </GridBody>
      <GridHead item xs={2}>
        1 Button
      </GridHead>
      <GridBody item xs={5}>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.doneOk")}</li>
        </ul>
      </GridBody>
      <GridBody item xs={5}>
        <ul>
          <li>{t("NEBULA_PICK_PAGE.4ColorRgby")}</li>
          <li>{t("NEBULA_PICK_PAGE.improvedDurabilityWithNonContact")}</li>
        </ul>
      </GridBody>
    </>
  );

  return (
    <CardItem>
      <CardContent sx={{ p: 0 }}>
        <Desc>
          <Title>{t("NEBULA_PICK_PAGE.NEBULAPick")}</Title>
          <DashContent>
            <DashDescription>
              {t("NEBULA_PICK_PAGE.subGHzBandAFrequencyBankOfMHZ")}
            </DashDescription>

            <DashInstructor>
              <DashInstructorItem>
                <img src="/images/pages/products/products-nebula-pick-img-1.png" />
                <p className="label">
                  NEBULA PICK – FND <br /> 6 digit – 7 seg.
                </p>
              </DashInstructorItem>
              <DashInstructorItem>
                <img src="/images/pages/products/products-nebula-pick-img-2.png" />
                <p className="label">
                  NEBULA PICK – FND <br /> 6 digit – 14seg.
                </p>
              </DashInstructorItem>
              <DashInstructorGridItem container spacing={5}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    img: {
                      height: {
                        xs: "44px",
                        sm: "44px",
                        md: "60px",
                      },
                    },
                  }}
                >
                  <DashInstructorItem>
                    <img src="/images/pages/products/products-nebula-pick-img-3.png" />
                    <p className="label">NEBULA PICK – ePD</p>
                  </DashInstructorItem>
                </Grid>
                <Grid item xs={6}>
                  <DashInstructorItem
                    sx={{
                      img: {
                        height: {
                          xs: "44px",
                          sm: "44px",
                          md: "60px",
                        },
                      },
                    }}
                  >
                    <img src="/images/pages/products/products-nebula-pick-img-4.png" />
                    <p className="label">NEBULA PICK – NANO</p>
                  </DashInstructorItem>
                </Grid>
                <Grid item xs={12}>
                  <DashInstructorItem>
                    <img src="/images/pages/products/products-nebula-pick-img-5.png" />
                    <p className="label">NEBULA PICK – MPD</p>
                  </DashInstructorItem>
                </Grid>
              </DashInstructorGridItem>
              <DashInstructorItem>
                <img src="/images/pages/products/products-nebula-pick-img-6.png" />
                <p className="label">NEBULA Accessory – LED Light</p>
              </DashInstructorItem>
            </DashInstructor>
          </DashContent>
          <Title sx={{ marginTop: "3rem" }}>
            {t("NEBULA_PICK_PAGE.indicatorDesignAndConfiguration")}
          </Title>
          <GridContent>
            <GridLeft container>
              {isMobile ? TableMobile : TableDesktop}
            </GridLeft>
          </GridContent>

          <Title sx={{ marginTop: "3rem" }}>
            {t("NEBULA_PICK_PAGE.pickToLightFeatures")}
          </Title>
          <PickContent>
            <PickItem>
              <PickImage
                className="img-1"
                src={renderImage({
                  isMobile,
                  i18n,
                  suffixPath: "/images/pages/products/pick-to-light-img-",
                  desktopKr: "1.png",
                  mobileKr: "1-mobile.png",
                  desktopEn: "1-en.png",
                  mobileEn: "1-en-mobile.png",
                  desktopJa: "1-ja.png",
                  mobileJa: "1-ja-mobile.png",
                })}
              />
              <PickDivider orientation="vertical" />
              <PickImage
                className="img-2"
                src={renderImage({
                  isMobile,
                  i18n,
                  suffixPath: "/images/pages/products/pick-to-light-img-",
                  desktopKr: "2.png",
                  mobileKr: "2-mobile.png",
                  desktopEn: "2-en.png",
                  mobileEn: "2-en-mobile.png",
                  desktopJa: "2-ja.png",
                  mobileJa: "2-ja-mobile.png",
                })}
              />
            </PickItem>
            <PickItem sx={{ marginTop: "22px" }}>
              <PickImage
                className="img-3"
                src={renderImage({
                  isMobile,
                  i18n,
                  suffixPath: "/images/pages/products/pick-to-light-img-",
                  desktopKr: "3.png",
                  mobileKr: "3-mobile.png",
                  desktopEn: "3-en.png",
                  mobileEn: "3-en-mobile.png",
                  desktopJa: "3-ja.png",
                  mobileJa: "3-ja-mobile.png",
                })}
              />
              <PickDivider orientation="vertical" />
              <PickImage
                className="img-4"
                src={renderImage({
                  isMobile,
                  i18n,
                  suffixPath: "/images/pages/products/pick-to-light-img-",
                  desktopKr: "4.png",
                  mobileKr: "4-mobile.png",
                  desktopEn: "4-en.png",
                  mobileEn: "4-en-mobile.png",
                  desktopJa: "4-ja.png",
                  mobileJa: "4-ja-mobile.png",
                })}
              />
            </PickItem>
          </PickContent>
        </Desc>
      </CardContent>
    </CardItem>
  );
};

export default DetailPage;
