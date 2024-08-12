import React from "react";
import {
  Box,
  Grid,
  Divider,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import ButtonLink from "@/views/assets/components/button/ButtonLink";
import PreImg from "../banners/PreImg";
import ItemIntro from "../banners/ItemIntro";

const DividerWrapper = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Content = styled(Box)(({ theme }) => ({
  marginTop: 10,
  marginBottom: 30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
  },
}));

const Caption = styled(Typography)(({ theme }) => ({
  color: "rgb(64 64 64 / 80%)",
  lineHeight: "36px",
  fontSize: "24px !important",
  fontWeight: 400,
  [theme.breakpoints.down("xl")]: {
    fontSize: "20px !important",
    lineHeight: "22px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginBottom: 25,
    fontSize: "16px !important",
    lineHeight: "30px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const TabPremium = () => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  const isDesktop = useMediaQuery((theme: any) =>
    theme.breakpoints.down("xlc")
  );

  return (
    <Content>
      <Grid container spacing={isDesktop ? 6 : 12}>
        <Grid item xs={12} md={12}>
          <PreImg />
          <ItemIntro title="기억하기 쉬운 짧은 단어로 구성" label="">
            {!isMobile ? (
              <Caption>
                프리미엄 도메인은 기억하기 쉽고 일상생활에서 사용하는 1~2개의
                단어 또는 <br />
                2~4개의 개별 문자로 짧고 간결하게 구성되어 있습니다.
              </Caption>
            ) : (
              <Caption>
                프리미엄 도메인은 기억하기 쉽고 일상생활에서 사용하는 1~2개의
                단어 또는 2~4개의 개별 문자로 짧고 간결하게 구성되어 있습니다.
              </Caption>
            )}
          </ItemIntro>
          <ItemIntro title="상징적인 단어로 구성" label="">
            {!isMobile ? (
              <Caption>
                역사상 가장 가치 있는 도메인은 대부분 일반적이고 상징적인 단어로
                구성되었습니다.
                <br />
                업계 전반의 특징을 아우르는 일반적인 이름은 시장 수요와 가치를
                증가시켜 줄 것입니다.
              </Caption>
            ) : (
              <Caption>
                역사상 가장 가치 있는 도메인은 대부분 일반적이고 상징적인 단어로
                구성되었습니다. 업계 전반의 특징을 아우르는 일반적인 이름은 시장
                수요와 가치를 증가시켜 줄 것입니다.
              </Caption>
            )}
          </ItemIntro>
          <ItemIntro title="TLD와 결합하여 가치 극대화" label="">
            {!isMobile ? (
              <Caption>
                프리미엄 도메인은 “.blockchain, .crypto, .nft, .dao” 등과
                결합하여 직관적인 메시지 전달이 가능합니다.
                <br />
                도메인명에 잠재 고객에게 전달할 수 있는 메시지를 통해 극대화된
                가치를 제공합니다.
              </Caption>
            ) : (
              <Caption>
                프리미엄 도메인은 “.blockchain, .crypto, .nft, .dao” 등과
                결합하여 직관적인 메시지 전달이 가능합니다. 도메인명에 잠재
                고객에게 전달할 수 있는 메시지를 통해 극대화된 가치를
                제공합니다.
              </Caption>
            )}
          </ItemIntro>
          <ItemIntro title="키워드 검색을 통한 브랜드 홍보에 최적화" label="">
            {!isMobile ? (
              <Caption>
                SEO는 오늘날 웹사이트 성공에 중요한 주요 열쇠입니다.
                <br />
                단순한 단어로 구성된 프리미엄 도메인은 탈중앙화된 도메인
                인덱스가 지원되면 브랜드 홍보에 도움이 될 것입니다.
              </Caption>
            ) : (
              <Caption>
                SEO(검색엔진 최적화)는 오늘날 웹사이트 성공에 중요한 주요
                열쇠입니다. 단순한 단어로 구성된 프리미엄 도메인은 탈중앙화된
                도메인 인덱스가 지원되면 브랜드 홍보에 도움이 될 것입니다.
              </Caption>
            )}
          </ItemIntro>
          <Box display={"flex"} justifyContent={"end"} sx={{ mt: 3 }}>
            <ButtonLink label={"Web3 도메인"} href="/web3-domain/domain/" />
          </Box>
        </Grid>
      </Grid>
      <DividerWrapper sx={{ borderColor: "rgb(0 0 0 / 10%)" }} />
    </Content>
  );
};

export default TabPremium;
