import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  styled,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

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

const BigTitle = styled("h3")(({ theme }) => ({
  borderLeft: "4px solid #C1272D",
  display: "inline-block",
  borderColor: theme.palette.primary.main,
  padding: "5px 150px 5px 10px",
  background: "linear-gradient(to left, rgba(255,0,0,0), #f6d2d3)",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    padding: " 10px",
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

const WrapImage = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
  "& .wrap": {
    width: "1208px",
    height: "456px",
    img: {
      width: "100%",
      height: "100%",
    },
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    "& .wrap": {
      width: "100%",
      height: "auto",
      img: {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const BoxList = styled(Grid)(({ theme }) => ({
  alignItems: "stretch",
  flexWrap: "nowrap",
  gap: "40px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "20px",
  },
}));

const BoxCard = styled(Grid)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: "0px 4px 12.8px 0px #0000001A",
  flexDirection: "column",
  overflow: "hidden",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    // padding: "35px 70px",
  },
}));
const BoxCardImage = styled(Box)(({ theme }) => ({
  minHeight: "240px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F4F4F4",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const BoxCardContent = styled(Box)(({ theme }) => ({
  padding: 20,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.common.white,
  gap: 16,
  ul: {
    paddingLeft: 20,
    alignSelf: "flex-start",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const Title = styled("h6")(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "36px",
  textAlign: "center",
  color: theme.palette.primary.main,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const Description = styled("li")(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "28px",
  color: "#717171",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const BoxTop = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "60px 0",
  img: {
    maxWidth: "340px",
  },
  "& .desc": {
    marginTop: "16px",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 500,
    textAlign: "center",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0",
    img: {
      maxWidth: "250px",
    },
    "& .desc": {
      fontSize: "16px",
    },
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

  return (
    <CardItem>
      <CardContent sx={{ p: 0 }}>
        <Desc>
          <BoxTop>
            <img src="/images/logos/nebula-logo-2.png" alt="" />
            <div
              className="desc"
              dangerouslySetInnerHTML={{
                __html:
                  ["en", "ja"].includes(i18n.language) && isMobile
                    ? t("PRODUCT_PAGE.productIntroMobile")
                    : t("PRODUCT_PAGE.productIntro"),
              }}
            />
          </BoxTop>
          <BigTitle sx={{ marginBottom: { xs: "24px", md: "35px" } }}>
            {t("PRODUCT_PAGE.overallConfig")}
          </BigTitle>
          <WrapImage>
            <div className="wrap">
              {isMobile ? (
                <img src="/images/pages/products/img7-mobile.png" alt="" />
              ) : (
                <img src="/images/pages/products/img7.png" alt="" />
              )}
            </div>
          </WrapImage>
          <BigTitle
            sx={{
              marginTop: { xs: "30px", md: "60px" },
              marginBottom: { xs: "24px", md: "35px" },
            }}
          >
            {t("PRODUCT_PAGE.nebulaModule")}
          </BigTitle>
          <BoxList container>
            <BoxCard item xs={12} sm={6} md={4}>
              <BoxCardImage>
                <img src="/images/pages/products/products-nebula-img-1.png" />
              </BoxCardImage>
              <BoxCardContent>
                <Title>{t("PRODUCT_PAGE.NEBULAGateway")}</Title>
                <ul>
                  <Description>
                    {t("PRODUCT_PAGE.linkageFunctionWithWMS")}
                  </Description>
                  <Description>
                    {t("PRODUCT_PAGE.communicationAndControl")}
                  </Description>
                  <Description>
                    {t("PRODUCT_PAGE.mqttBasedProtocol")}
                  </Description>
                </ul>
              </BoxCardContent>
            </BoxCard>
            <BoxCard item xs={12} sm={6} md={4}>
              <BoxCardImage>
                <img
                  style={{ width: "285px", height: "135px" }}
                  src="/images/pages/products/products-nebula-img-2.png"
                />
              </BoxCardImage>
              <BoxCardContent>
                <Title>{t("PRODUCT_PAGE.NEBULAPickFnd")}</Title>
                <ul>
                  <Description>{t("PRODUCT_PAGE.pickToLight")}</Description>
                  <Description>
                    {t("PRODUCT_PAGE.6DigitConfiguration")}
                  </Description>
                </ul>
              </BoxCardContent>
            </BoxCard>
            <BoxCard item xs={12} sm={6} md={4}>
              <BoxCardImage>
                <img src="/images/pages/products/products-nebula-img-3.png" />
              </BoxCardImage>
              <BoxCardContent>
                <Title>{t("PRODUCT_PAGE.NEBULAPickNano")}</Title>
                <ul>
                  <Description>
                    {t("PRODUCT_PAGE.singleButtonSupports")}
                  </Description>
                  <Description>{t("PRODUCT_PAGE.noDisplayDevice")}</Description>
                </ul>
              </BoxCardContent>
            </BoxCard>
          </BoxList>
          <BoxList container sx={{ marginTop: { xs: "20px", sm: "40px" } }}>
            <BoxCard item xs={12} sm={6} md={4}>
              <BoxCardImage>
                <img src="/images/pages/products/products-nebula-img-4.png" />
              </BoxCardImage>
              <BoxCardContent>
                <Title>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: t("PRODUCT_PAGE.NEBULAPickEpd"),
                    }}
                  />
                </Title>
                <ul>
                  <Description>
                    {t("PRODUCT_PAGE.displayProductInformation")}
                  </Description>
                  <Description> {t("PRODUCT_PAGE.displayBarcode")}</Description>
                  <Description>{t("PRODUCT_PAGE.multilingual")}</Description>
                </ul>
              </BoxCardContent>
            </BoxCard>
            <BoxCard item xs={12} sm={6} md={4}>
              <BoxCardImage>
                <img src="/images/pages/products/products-nebula-img-5.png" />
              </BoxCardImage>
              <BoxCardContent>
                <Title>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: t("PRODUCT_PAGE.NEBULAPickMpd"),
                    }}
                  />
                </Title>
                <ul>
                  <Description>
                    {t("PRODUCT_PAGE.displayOrderAndProcessing")}
                  </Description>
                  <Description>{t("PRODUCT_PAGE.2RowTextProduct")}</Description>
                  <Description>
                    {t("PRODUCT_PAGE.batchConfirmationFunction")}
                  </Description>
                </ul>
              </BoxCardContent>
            </BoxCard>
            <BoxCard item xs={12} sm={6} md={4}>
              <BoxCardImage>
                <img src="/images/pages/products/products-nebula-img-6.png" />
              </BoxCardImage>
              <BoxCardContent>
                <Title>{t("PRODUCT_PAGE.NEBULAAccessory")}</Title>
                <ul>
                  <Description>{t("PRODUCT_PAGE.ledLightProduct")}</Description>
                </ul>
              </BoxCardContent>
            </BoxCard>
          </BoxList>
        </Desc>
      </CardContent>
    </CardItem>
  );
};

export default DetailPage;
