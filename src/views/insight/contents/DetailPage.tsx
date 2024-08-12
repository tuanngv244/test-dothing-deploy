import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Tooltip,
  Button,
  styled,
  ClickAwayListener,
} from "@mui/material";
import KeenSliderWrapper from "@/@core/style-libs/keen-slider";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import MuiContainer from "@/@core/style-libs/mui-container";
import {
  mapRouteTitle,
  mapRouteTitleProps,
} from "@/infra/navigation/router-title";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { WIDTH_MEDIUM } from "@/@core/configs";
import { format } from "date-fns";
import Translations from "@/@core/components/translations";
import LinkCopy from "@/@core/components/icons/LinkCopy";
import ButtonBackToList from "@/views/assets/components/button/ButtonBackToList";
import {
  copyToClipboard,
  removeTagTemporary,
  filterHtml,
} from "@/@core/utils/helpers";
import Featured from "./Featured";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
} from "react-share";

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "2.5rem",
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
  },
}));

const Desc = styled(Typography)(({ theme }: { theme: any }) => ({
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

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  lineHeight: 1,
  fontSize: "54px !important",
  fontWeight: 900,
  marginBottom: "3rem !important",
  marginTop: "2.5rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px !important",
    lineHeight: "50px",
    marginTop: "1.5rem",
    marginBottom: "2rem !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px !important",
    lineHeight: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontWeight: 700,
    marginTop: "0.2rem",
    fontSize: "20px !important",
    lineHeight: "32px",
    marginBottom: "0.5rem !important",
  },
}));

const DateText = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  fontWeight: 500,
  fontSize: 28,
  lineHeight: "32px",
  [theme.breakpoints.down("xl")]: {
    fontSize: 23,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    marginBottom: "0 !important",
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

const CardSNS = styled(Box)(({ theme }) => ({
  marginTop: "3rem",
  marginBottom: "0.2rem",
  [theme.breakpoints.down("xl")]: {
    marginTop: "2rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.5rem",
  },
}));

const Article = styled(Typography)(({ theme }: { theme: any }) => ({
  color: theme.palette.background.bgFour,
  fontWeight: 500,
  fontSize: 24,
  lineHeight: "42px",
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "16px",
  },
}));

const ButtonTooltip = styled(Button)(({ theme }) => ({
  padding: "0 !important",
  marginLeft: "5px !important",
  marginTop: "-5px !important",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type DetailPageProps = {
  page: string;
  category: string;
  data: any;
};

const DetailPage = ({ page, category, data }: DetailPageProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = async () => {
    await copyToClipboard(`${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/insight/latest-news/${category}/${data.id}`)
    setOpen(true)
  }

  if (!data) return null;

  return (
    <>
      <Head>
            <title>{`Web3ID - ${t(mapRouteTitle[page as mapRouteTitleProps])} - ${category} - ${data?.newsTitle}`}</title>
            <meta name='description' content={`Web3ID - ${t(mapRouteTitle[page as mapRouteTitleProps])} - ${category} - ${data?.newsTitle}`} />
            <meta name='keywords' content='web3domain' />
      </Head>
      <Wrapper bg='#fff' maxWidth={'100%'}>
        <BoxWrapper width={WIDTH_MEDIUM}>
            <ButtonBackToList
                href={`/insight/latest-news/${category}}`}
                as={`/insight/latest-news/${category}/${router.query.p ? router.query.p : ''}`} 
            />
            <CardItem>
                <CardContent sx={{ p: 0 }}>
                    <Title variant='h1' sx={{ mb: 1.75 }}>
                        {data?.newsTitle}
                    </Title>
                    <DateText variant='body2' sx={{ mb: 1.6 }}>
                        {data.orderDate ? format(new Date(data.orderDate), 'yyyy.MM.dd') : ''}
                    </DateText>
                    <Desc variant='body2' className='ck ck-content' dangerouslySetInnerHTML={{ __html: filterHtml(removeTagTemporary(data.newsContent ?? '', 'ck-fake-selection-container')) }}></Desc>
                </CardContent>
                <CardSNS>
                    <Article>
                        <Translations text={'Share this article:'} />
                    </Article>
                    <Stack display={'flex'} direction={'row'} spacing={4} alignItems={'center'}>
                        <FacebookShareButton
                            url={`${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/insight/latest-news/${category}/${data.id}`}>
                            <FacebookIcon size={44} borderRadius={15} />
                        </FacebookShareButton>
                        <LinkedinShareButton
                            url={`${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/insight/latest-news/${category}/${data.id}`}>
                            <LinkedinIcon size={44} borderRadius={15} />
                        </LinkedinShareButton>
                        <TwitterShareButton
                            url={`${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/insight/latest-news/${category}/${data.id}`}>
                            <TwitterIcon size={44} borderRadius={15} />
                        </TwitterShareButton>
                        <TelegramShareButton
                            url={`${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/insight/latest-news/${category}/${data.id}`}>
                            <TelegramIcon size={44} borderRadius={15} />
                        </TelegramShareButton>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                        <Tooltip
                            PopperProps={{
                            disablePortal: true
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title='Copied'
                        >
                            <ButtonTooltip onClick={handleTooltipOpen}>
                            <LinkCopy />
                            </ButtonTooltip>
                        </Tooltip>
                        </ClickAwayListener>
                    </Stack>
                </CardSNS>
            </CardItem>
            <DividerWrapper sx={{ borderColor: 'rgb(0 0 0 / 10%)' }} />
            <KeenSliderWrapper>
                <Featured data={data} category={category} />
            </KeenSliderWrapper>
            <DividerWrapper sx={{ borderColor: 'rgb(0 0 0 / 10%)' }} />
        </BoxWrapper>
      </Wrapper>
    </>
  )
};

export default DetailPage;
