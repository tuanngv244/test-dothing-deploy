import React from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
  styled,
  Link,
  useMediaQuery,
} from "@mui/material";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import { useTranslation } from "react-i18next";
import MuiContainer from "@/@core/style-libs/mui-container";
import { format } from "date-fns";
import { useRouter } from "next/router";
import {
  downloadUrlFile,
  removeTagTemporary,
  filterHtml,
} from "@/@core/utils/helpers";
import Translations from "@/@core/components/translations";
import ButtonBackToList from "@/views/assets/components/button/ButtonBackToList";
import {
  mapRouteTitleProps,
  mapRouteTitle,
} from "@/infra/navigation/router-title";
import { WIDTH_MEDIUM } from "@/@core/configs";

type DetailPageProps = {
  page: string;
  category?: string;
  data: any;
};

const TitleStack = styled(Stack)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.background.bgHeader,
  padding: "2rem",
  marginTop: "1.5rem",
  [theme.breakpoints.down("xl")]: {
    marginTop: "1rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  [theme.breakpoints.down("xlc")]: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "0.7rem",
    padding: "1rem",
    paddingTop: "0.9rem",
    paddingBottom: "0.9rem",
  },
}));

const Content = styled(CardContent)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "0 !important",
  },
}));

const TitleNotice = styled(Typography)(({ theme }: { theme: any }) => ({
  color: theme.palette.common.black,
  lineHeight: "32px",
  fontSize: "32px !important",
  fontWeight: 500,
  marginBottom: "0",
  [theme.breakpoints.down("xl")]: {
    fontSize: "30px !important",
  },
  [theme.breakpoints.down("xlc")]: {
    fontSize: "25px !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontWeight: 400,
    color: theme.palette.common.caption,
    fontSize: "16px !important",
    lineHeight: "16px",
    paddingRight: "0",
    paddingLeft: "2rem",
  },
}));

const Type = styled(Typography)(({ theme }: { theme: any }) => ({
  color: theme.palette.common.black,
  lineHeight: "32px",
  fontSize: "24px !important",
  fontWeight: 500,
  marginBottom: "0",
  paddingRight: "2rem",
  [theme.breakpoints.down("xl")]: {
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("xlc")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px !important",
    lineHeight: "22px",
    paddingRight: "0",
  },
}));

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({
  marginBottom: "2.5rem",
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
  },
}));

const Desc = styled('div')(({ theme }: { theme: any }) => ({
  color: theme.palette.common.caption,
  fontWeight: 400,
  fontSize: 24,
  lineHeight: "42px",
  whiteSpace: "normal",
  padding: "2rem",
  paddingBottom: "4rem",
  marginBottom: "0.5rem",
  backgroundColor: theme.palette.background.bgSecondary,
  img: {
    maxWidth: "100%",
  },
  "&:after": {
    content: '""',
    display: "block",
    clear: "both",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: 22,
    lineHeight: "35px",
    paddingBottom: "3rem",
  },
  [theme.breakpoints.down("xlc")]: {
    fontSize: 20,
    lineHeight: "28px",
    paddingBottom: "2rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    paddingTop: "1.5rem",
    fontSize: 16,
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
  [theme.breakpoints.down("sm")]: {
    marginLeft: -16,
    marginRight: -16,
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: "rgb(0 0 0 / 80%)",
  lineHeight: "64px",
  fontSize: "48px !important",
  fontWeight: 700,
  marginBottom: "1.5rem",
  marginTop: "4.1rem",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginBottom: "0",
    fontSize: "50px !important",
    lineHeight: "50px",
    marginTop: "3.1rem",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "2.1rem",
    fontSize: "40px !important",
    lineHeight: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    fontSize: "32px !important",
    lineHeight: "32px",
    marginBottom: "0.5rem",
  },
}));

const DateText = styled(Typography)(({ theme }: { theme: any }) => ({
  color: theme.palette.text.sLabel + " !important",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "32px",
  paddingRight: "1.5rem",
  [theme.breakpoints.down("xl")]: {
    paddingRight: "1rem",
    fontSize: 18,
  },
  [theme.breakpoints.down("lg")]: {
    paddingRight: "0",
  },
  [theme.breakpoints.down("sm")]: {
    paddingRight: "0",
    fontSize: 14,
    marginBottom: "0 !important",
    lineHeight: 1,
  },
}));

const StyleLink = styled(Link)(({ theme }: { theme: any }) => ({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: 500,
  color: theme.palette.common.black,
  textDecoration: "underline",
  marginTop: "2rem",
  display: "block",
  cursor: "pointer",
  [theme.breakpoints.down("xl")]: {
    fontSize: 22,
  },
  [theme.breakpoints.down("xlc")]: {
    fontWeight: 400,
    marginTop: "1rem",
    fontSize: 20,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const ContentHtml = styled(Box)(({ theme }) => ({
  "> *": {
    backgroundColor: "transparent !important",
    float: "none !important",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DetailPage = ({ page, data }: DetailPageProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const router: any = useRouter();

  return (
    <>
      <Head>
        <title>{`Web3ID - ${t(mapRouteTitle[page as mapRouteTitleProps])} - ${
          data?.announceTitle
        }`}</title>
        <meta
          name="description"
          content={`Web3ID - ${t(
            mapRouteTitle[page as mapRouteTitleProps]
          )} - ${data?.announceTitle}`}
        />
        <meta name="keywords" content="crm, dki, platform" />
      </Head>
      <Wrapper bg="#fff" maxWidth={"100%"}>
        <BoxWrapper width={WIDTH_MEDIUM}>
          <Label variant={"h6"}>
            <Translations text={data.announceTitle} />
          </Label>
          <ButtonBackToList
            href={`/customer-support/announcement/${router.query?.slug[0]}/${router?.query.p}`}
            as={`/customer-support/announcement/${router.query?.slug[0]}/${router?.query.p}`}
          />
          <CardItem>
            <Content sx={{ p: 0 }}>
              <TitleStack
                display={"flex"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Box component={"div"}>
                    <Type>
                      {data.announceType === "Announcement"
                        ? t("Announcement")
                        : t(data.announceType)}
                    </Type>
                    {isMobile ? (
                      <DateText variant="body2">
                        {data.createdAt
                          ? format(new Date(data.createdAt), "yyyy.MM.dd")
                          : ""}
                      </DateText>
                    ) : (
                      ""
                    )}
                  </Box>
                  <TitleNotice>{data?.title}</TitleNotice>
                </Box>
                {isMobile ? (
                  ""
                ) : (
                  <DateText variant="body2">
                    {" "}
                    {data.createdAt
                      ? format(new Date(data.createdAt), "yyyy.MM.dd")
                      : ""}
                  </DateText>
                )}
              </TitleStack>
              <Desc>
                <ContentHtml
                  className="ck ck-content"
                  dangerouslySetInnerHTML={{
                    __html: filterHtml(
                      removeTagTemporary(
                        data.announceContent ?? "",
                        "ck-fake-selection-container"
                      )
                    ),
                  }}
                ></ContentHtml>
                {data.fileName && (
                  <Box>
                    <StyleLink
                      underline={"hover"}
                      color="inherit"
                      onClick={() =>
                        downloadUrlFile(
                          data.fileUrl ?? data.fileBase64,
                          data.fileName
                        )
                      }
                    >
                      {data.fileName}
                    </StyleLink>
                  </Box>
                )}
              </Desc>
            </Content>
          </CardItem>
          <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

export default DetailPage;
