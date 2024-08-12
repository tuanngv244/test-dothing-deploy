import React from "react";
import {
  Box,
  styled,
  useMediaQuery,
  Theme,
} from "@mui/material";

const Content = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-1rem",
    marginRight: "-1rem",
  },
}));

const BoxContent = styled(Box)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.background.bgSecondary,
  padding: "2rem",
  marginBottom: "0rem",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    paddingTop: "1.5rem",
    paddingBottom: "2.5rem",
    marginBottom: "0",
  },
}));

const Text = styled('div')(({ theme }: { theme: any }) => ({
  color: theme.palette.common.caption,
  lineHeight: "20px",
  fontSize: "16px !important",
  fontWeight: 500,

  img: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CardContactUs = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Content>
      <BoxContent
        sx={{
          "@media print": {
            WebkitPrintColorAdjust: "exact !important",
            padding: "7mm 10mm 10mm 10mm",
          },
        }}
      >
        <Text>
          <p
            style={{
              textAlign: "left",
              margin: "0cm 0cm 8pt",
              lineHeight: "107%",
              wordBreak: "break-all",
              fontSize: "10pt",
              fontFamily: '"맑은 고딕"',
            }}
          >
            <span style={{ fontSize: "12pt" }}>&nbsp;</span>
          </p>
          <p
            style={{
              textAlign: "left",
              margin: "0cm 0cm 8pt",
              lineHeight: "107%",
              wordBreak: "break-all",
              fontSize: "10pt",
              fontFamily: '"맑은 고딕"',
            }}
          >
            <span lang="KO" style={{ fontSize: "12pt" }}>
              한국정보인증㈜은{" "}
            </span>
            <span style={{ fontSize: "12pt" }}>WEB3ID </span>
            <span lang="KO" style={{ fontSize: "12pt" }}>
              서비스 문의를 위하여 아래와 같이 개인정보를 수집
            </span>
            <span lang="KO" style={{ fontSize: "12pt" }}>
              ∙
            </span>
            <span lang="KO" style={{ fontSize: "12pt" }}>
              이용하고자 합니다
            </span>
            <span style={{ fontSize: "12pt" }}>. </span>
            <span lang="KO" style={{ fontSize: "12pt" }}>
              내용을 자세히 읽으신 후 동의 여부를 결정하여 주십시오
            </span>
            <span style={{ fontSize: "12pt" }}>.</span>
          </p>
          <p
            style={{
              textAlign: "left",
              margin: "0cm 0cm 8pt",
              lineHeight: "107%",
              wordBreak: "break-all",
              fontSize: "10pt",
              fontFamily: '"맑은 고딕"',
            }}
          >
            <span style={{ fontSize: "12pt" }}>&nbsp;</span>

            <span style={{ fontSize: "10pt", textAlign: "justify" }}>
              &nbsp;
            </span>
          </p>
          <table
            border={1}
            cellSpacing={0}
            cellPadding={0}
            style={{
              borderCollapse: "collapse",
              border: "none",
              textAlign: "justify",
              fontSize: "10pt",
              fontFamily: '"맑은 고딕"',
              display: "table",
              margin: isMobile ? "0" : "auto",
            }}
          >
            <tbody>
              <tr>
                <td
                  width={113}
                  valign="top"
                  style={{
                    width: "84.8pt",
                    border: "solid windowtext 1.0pt",
                    background: "#F2F2F2",
                    padding: "0cm 5.4pt 0cm 5.4pt",
                  }}
                >
                  <p
                    style={{
                      margin: "0cm",
                      textAlign: "center",
                      lineHeight: "normal",
                      wordBreak: "break-all",
                      fontSize: "10pt",
                      fontFamily: '"맑은 고딕"',
                    }}
                  >
                    <b>
                      <span lang="KO" style={{ fontSize: "12pt" }}>
                        항목
                      </span>
                    </b>
                  </p>
                  <span style={{ fontSize: "12pt" }}></span>
                </td>
                <td
                  width={236}
                  valign="top"
                  style={{
                    width: "177.2pt",
                    border: "solid windowtext 1.0pt",
                    borderLeft: "none",
                    background: "#F2F2F2",
                    padding: "0cm 5.4pt 0cm 5.4pt",
                  }}
                >
                  <span style={{ fontSize: "12pt" }}></span>
                  <p
                    style={{
                      margin: "0cm",
                      textAlign: "center",
                      lineHeight: "normal",
                      wordBreak: "break-all",
                      fontSize: "10pt",
                      fontFamily: '"맑은 고딕"',
                    }}
                  >
                    <b>
                      <span style={{ fontSize: "12pt" }}>수집</span>
                    </b>
                    <b>
                      <span lang="KO" style={{ fontSize: "12pt" }}>
                        ∙
                      </span>
                      <span lang="KO" style={{ fontSize: "12pt" }}>
                        이용 목적
                      </span>
                    </b>
                  </p>
                  <span style={{ fontSize: "12pt" }}></span>
                </td>
                <td
                  width={359}
                  valign="top"
                  style={{
                    width: "269.35pt",
                    border: "solid windowtext 1.0pt",
                    borderLeft: "none",
                    background: "#F2F2F2",
                    padding: "0cm 5.4pt 0cm 5.4pt",
                  }}
                >
                  <span style={{ fontSize: "12pt" }}></span>
                  <p
                    style={{
                      margin: "0cm",
                      textAlign: "center",
                      lineHeight: "normal",
                      wordBreak: "break-all",
                      fontSize: "10pt",
                      fontFamily: '"맑은 고딕"',
                    }}
                  >
                    <b>
                      <span style={{ fontSize: "12pt" }}>보유</span>
                    </b>
                    <b>
                      <span lang="KO" style={{ fontSize: "12pt" }}>
                        ∙
                      </span>
                      <span lang="KO" style={{ fontSize: "12pt" }}>
                        이용기간
                      </span>
                    </b>
                  </p>
                  <span style={{ fontSize: "12pt" }}></span>
                </td>
              </tr>
              <tr>
                <td
                  width={113}
                  valign="top"
                  style={{
                    width: "84.8pt",
                    border: "solid windowtext 1.0pt",
                    borderTop: "none",
                    padding: "0cm 5.4pt 0cm 5.4pt",
                  }}
                >
                  <span style={{ fontSize: "12pt" }}></span>
                  <p
                    style={{
                      margin: "0cm",
                      lineHeight: "normal",
                      textAlign: "justify",
                      wordBreak: "break-all",
                      fontSize: "10pt",
                      fontFamily: '"맑은 고딕"',
                    }}
                  >
                    <span lang="KO" style={{ fontSize: "12pt" }}>
                      이름
                    </span>
                    <span style={{ fontSize: "12pt" }}>, </span>
                    <span lang="KO" style={{ fontSize: "12pt" }}>
                      이메일
                    </span>
                  </p>
                  <span style={{ fontSize: "12pt" }}></span>
                </td>
                <td
                  width={236}
                  valign="top"
                  style={{
                    width: "177.2pt",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "solid windowtext 1.0pt",
                    borderRight: "solid windowtext 1.0pt",
                    padding: "0cm 5.4pt 0cm 5.4pt",
                  }}
                >
                  <span style={{ fontSize: "12pt" }}></span>
                  <p
                    style={{
                      margin: "0cm",
                      lineHeight: "normal",
                      textAlign: "justify",
                      wordBreak: "break-all",
                      fontSize: "10pt",
                      fontFamily: '"맑은 고딕"',
                    }}
                  >
                    <span style={{ fontSize: "12pt" }}>WEB3ID </span>
                    <span lang="KO" style={{ fontSize: "12pt" }}>
                      서비스 문의 게시판 이용 및 문의사항 답변
                    </span>
                  </p>
                  <span style={{ fontSize: "12pt" }}></span>
                </td>
                <td
                  width={359}
                  valign="top"
                  style={{
                    width: "269.35pt",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "solid windowtext 1.0pt",
                    borderRight: "solid windowtext 1.0pt",
                    padding: "0cm 5.4pt 0cm 5.4pt",
                  }}
                >
                  <span style={{ fontSize: "12pt" }}>
                    <b></b>
                  </span>
                  <p
                    style={{
                      margin: "0cm",
                      lineHeight: "normal",
                      textAlign: "justify",
                      wordBreak: "break-all",
                      fontSize: "10pt",
                      fontFamily: '"맑은 고딕"',
                    }}
                  >
                    <b>
                      <a>
                        <u>
                          <span lang="KO" style={{ fontSize: "14pt" }}>
                            전자상거래 등에서의 소비자보호에 관한 법률에 따라
                          </span>
                        </u>
                      </a>
                      <u>
                        <span style={{ fontSize: "14pt" }}>
                          {" "}
                          3
                          <span lang="KO" style={{ fontSize: "14pt" }}>
                            년간 보관
                          </span>
                        </span>
                      </u>
                    </b>
                  </p>
                  <span style={{ fontSize: "12pt" }}></span>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              margin: "0cm 0cm 8pt",
              textAlign: "justify",
              lineHeight: "107%",
              wordBreak: "break-all",
              fontSize: "10pt",
              fontFamily: '"맑은 고딕"',
            }}
          >
            <span style={{ fontSize: "12pt" }}>&nbsp;</span>
          </p>
          <p
            style={{
              margin: "0cm 0cm 8pt",
              textAlign: "justify",
              lineHeight: "107%",
              wordBreak: "break-all",
              fontSize: "10pt",
              fontFamily: '"맑은 고딕"',
            }}
          >
            <span lang="KO" style={{ fontSize: "12pt" }}>
              ※ 위의 개인정보 수집
            </span>
            <span lang="KO" style={{ fontSize: "12pt" }}>
              ∙
            </span>
            <span lang="KO" style={{ fontSize: "12pt" }}>
              이용에 대한 동의를 거부할 권리가 있습니다
              <span style={{ color: "rgb(58, 50, 195)" }}>﻿</span>
            </span>
            <span style={{ fontSize: "12pt" }}>. </span>
            <span lang="KO" style={{ fontSize: "12pt" }}>
              그러나 동의를 거부할 경우 문의게시판 이용에 제한을 받을 수
              있습니다.&nbsp;
            </span>
            <span style={{ fontSize: "12pt" }} />
          </p>
          <p />
        </Text>
      </BoxContent>
    </Content>
  );
};

export default CardContactUs;
