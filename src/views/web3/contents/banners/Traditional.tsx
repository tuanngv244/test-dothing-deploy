import React, { useMemo } from "react";
import {
  styled,
  Typography,
  Box,
  Card,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  tableCellClasses,
  useMediaQuery,
  Theme,
} from "@mui/material";
import ButtonLink from "@/views/assets/components/button/ButtonLink";

const CardTable = styled(TableContainer)(({ theme }) => ({
  margin: "auto",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down("xs")]: {},
}));

const TableContent = styled(Table)(({ theme }) => ({
  borderSpacing: "0 2px",
  borderCollapse: "inherit",

  "tbody:before": {
    lineHeight: "5px",
    content: "'_'",
    color: "white",
    display: "block",
  },

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    "tbody:before": {
      lineHeight: "2px",
      content: "'_'",
      color: "white",
      display: "block",
    },
  },
}));

const MuiCard = styled(Card)(({ theme }) => ({
  border: 0,
  boxShadow: "none",
  backgroundColor: theme.palette.common.white,
  borderRadius: 0,
  paddingTop: 20,
  paddingBottom: 5,
  marginBottom: 10,
  marginTop: 10,
  [theme.breakpoints.down("lg")]: {
    paddingTop: 40,
    marginBottom: 35,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 10,
    marginTop: 5,
    borderRadius: 0,
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 10,
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  lineHeight: 1,
  fontSize: "40px !important",
  fontWeight: 900,
  marginBottom: "1.5rem",
  letterSpacing: "-1px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: 80,
  //overflow: 'hidden',
  borderRadius: 5,

  [theme.breakpoints.down("xl")]: {
    lineHeight: 1,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "35px !important",
    marginBottom: "1.3rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px !important",
    marginBottom: "1.3rem",
    lineHeight: "36px",
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const TitleVS = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    width: 57,
    height: 54,
    backgroundImage: "url(/images/pages/banners/c-mobile.svg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px !important",
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
    lineHeight: "36px",
    fontWeight: 900,
    textAlign: "center",
    color: theme.palette.common.white,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const StyledTableCellHeadTwo = styled(TableCell)(({ theme }: { theme: any }) => ({
  border: "0px solid #fff",
  paddingLeft: "1.7rem !important",
  background: "#F2F2F2",
  [`&.${tableCellClasses.head}`]: {
    textAlign: "center",
    height: 80,
    borderRadius: "5px",
    padding: "14px",
    color: theme.palette.common.white,
    backgroundColor: "#66A3FF",
    fontSize: "28px",
    lineHeight: "32px",
    fontWeight: 700,
    textTransform: "initial",
  },
  [theme.breakpoints.down("lg")]: {
    [`&.${tableCellClasses.head}`]: {
      height: "100%",
      whiteSpace: "nowrap",
      padding: "10px",
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${tableCellClasses.head}`]: {
      background: theme.palette.common.brand,
      height: 50,
      whiteSpace: "nowrap",
      padding: "10px",
      fontSize: "20px",
      lineHeight: "30px",
    },
  },
}));

const StyledTableCellHeadThree = styled(TableCell)(({ theme }) => ({
  border: "0px solid #fff",
  paddingLeft: "1.7rem !important",
  background: theme.palette.primary.main,
  [`&.${tableCellClasses.head}`]: {
    textAlign: "center",
    height: 80,
    borderRadius: "5px",
    padding: "14px",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    fontSize: "28px",
    lineHeight: "32px",
    fontWeight: 700,
    textTransform: "initial",
  },
  [theme.breakpoints.down("lg")]: {
    [`&.${tableCellClasses.head}`]: {
      height: "100%",
      whiteSpace: "nowrap",
      padding: "10px",
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${tableCellClasses.head}`]: {
      height: "100%",
      whiteSpace: "nowrap",
      padding: "10px",
      fontSize: "20px",
      lineHeight: "30px",
    },
  },
}));

const StyledTableCellOneBody = styled(TableCell)(({ theme }) => ({
  border: "0px solid #fff",
  paddingLeft: "1.7rem !important",
  [`&.${tableCellClasses.body}`]: {
    height: 80,
    padding: "14px",
    color: "#0A0A0A",
    backgroundColor: "rgba(35, 211, 167, 0.15)",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 700,
    textTransform: "initial",
    textAlign: "center",
  },
  [theme.breakpoints.down("lg")]: {
    [`&.${tableCellClasses.body}`]: {
      height: "100%",
      fontSize: "24px",
      lineHeight: "32px",
      whiteSpace: "nowrap",
    },
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${tableCellClasses.body}`]: {
      lineHeight: "30px",
      height: 50,
      fontSize: "16px",
      whiteSpace: "nowrap",
    },
  },
}));

const StyledTableCellTwoBody = styled(TableCell)(({ theme }) => ({
  border: "0px solid #fff",
  [`&.${tableCellClasses.body}`]: {
    textAlign: "center",
    height: 80,
    backgroundColor: "#F2F2F2",
    color: "rgb(0 0 0 / 80%)",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 500,
    textTransform: "initial",
    borderLeft: "3px solid #fff",
    borderRight: "3px solid #fff",
  },
  [theme.breakpoints.down("lg")]: {
    [`&.${tableCellClasses.body}`]: {
      height: "100%",
      fontSize: "24px",
      lineHeight: "32px",
      whiteSpace: "nowrap",
    },
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: "#D6F0E9",
      fontWeight: 700,
      height: 50,
      fontSize: "16px",
      lineHeight: "22px",
      whiteSpace: "nowrap",
    },
  },
}));

const StyledTableCellThreeBody = styled(TableCell)(({ theme }: { theme: any }) => ({
  border: "0px solid #fff",
  [`&.${tableCellClasses.body}`]: {
    textAlign: "center",
    height: 80,
    backgroundColor: theme.palette.background.bgHeader,
    color: theme.palette.primary.main,
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 700,
    textTransform: "initial",
  },
  [theme.breakpoints.down("lg")]: {
    [`&.${tableCellClasses.body}`]: {
      height: "100%",
      fontSize: "24px",
      lineHeight: "32px",
      whiteSpace: "nowrap",
    },
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: theme.palette.background.bgHeader,
      height: 50,
      fontSize: "16px",
      lineHeight: "22px",
      whiteSpace: "nowrap",
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    //backgroundColor: theme.palette.action.hover
  },

  // hide last border
  "&:last-of-type td, &:last-of-type th": {
    //border: 0
  },
}));

const BoxLeft = styled("span")(({ theme }: { theme: any }) => ({
  background: theme.palette.common.brand,
  color: theme.palette.common.white,
  height: "100%",
  alignItems: "center",
  display: "flex",
  position: "relative",
  flex: "49%",
  borderRadius: "5px 0px 0px 5px",
  textIndent: "-7rem",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    textIndent: "-5rem",
  },
  [theme.breakpoints.down("md")]: {
    textIndent: "-3rem",
  },
}));

const BoxRight = styled("span")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: "100%",
  alignItems: "center",
  display: "flex",
  position: "relative",
  flex: "49%",
  justifyContent: "center",
  textIndent: "7rem",
  borderRadius: "0px 5px 5px 0px",
  [theme.breakpoints.down("lg")]: {
    textIndent: "5rem",
  },
  [theme.breakpoints.down("md")]: {
    textIndent: "3rem",
  },
}));

const BoxCenter = styled("span")(({ theme }) => ({
  fontSize: "84px !important",
  position: "absolute",
  zIndex: 9,
  color: theme.palette.common.white,
  fontWeight: 700,
  width: 126,
  height: 126,
  backgroundImage: "url(/images/pages/banners/circle.svg)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textIndent: "-10px",
  marginTop: "-1px",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
}));

const TableDesktop = () => {
  return (
    <CardTable sx={{ borderRadius: 0 }}>
      <TableContent>
        <TableBody>
          <StyledTableRow>
            <StyledTableCellOneBody width={510} component="th" scope="row">
              IP 주소
            </StyledTableCellOneBody>
            <StyledTableCellTwoBody width={250}>
              도메인 변경 대상
            </StyledTableCellTwoBody>
            <StyledTableCellThreeBody width={510}>
              블록체인 주소
            </StyledTableCellThreeBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellOneBody width={510} component="th" scope="row">
              레지스트리로부터 임대
            </StyledTableCellOneBody>
            <StyledTableCellTwoBody width={250}>
              관리-소유권
            </StyledTableCellTwoBody>
            <StyledTableCellThreeBody width={510}>
              등록자가 100% 소유
            </StyledTableCellThreeBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellOneBody width={510} component="th" scope="row">
              약 10~15만원 정도
            </StyledTableCellOneBody>
            <StyledTableCellTwoBody width={250}>
              이용료 총액
            </StyledTableCellTwoBody>
            <StyledTableCellThreeBody width={510}>
              20달러(약 2만 5천원)
            </StyledTableCellThreeBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellOneBody width={510} component="th" scope="row">
              있음
            </StyledTableCellOneBody>
            <StyledTableCellTwoBody width={250}>
              도메인 갱신
            </StyledTableCellTwoBody>
            <StyledTableCellThreeBody width={510}>
              없음(사업자에 따라 상이)
            </StyledTableCellThreeBody>
          </StyledTableRow>
        </TableBody>
      </TableContent>
    </CardTable>
  );
};

const TableMobile = () => {
  return (
    <CardTable sx={{ borderRadius: 0 }}>
      <TableContent>
        <TableHead>
          <TableRow>
            <StyledTableCellHeadTwo>기존 도메인</StyledTableCellHeadTwo>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCellTwoBody>IP 주소</StyledTableCellTwoBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellTwoBody>
              레지스트리로부터 임대
            </StyledTableCellTwoBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellTwoBody>약 10~15만원 정도</StyledTableCellTwoBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellTwoBody>있음</StyledTableCellTwoBody>
          </StyledTableRow>
        </TableBody>
      </TableContent>
      <TitleVS>vs</TitleVS>
      <TableContent>
        <TableHead>
          <TableRow>
            <StyledTableCellHeadThree>Web3 도메인</StyledTableCellHeadThree>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCellThreeBody>블록체인 주소</StyledTableCellThreeBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellThreeBody>
              등록자가 100% 소유
            </StyledTableCellThreeBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellThreeBody>
              20달러(약 2만 5천원)
            </StyledTableCellThreeBody>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCellThreeBody>
              없음(사업자에 따라 상이)
            </StyledTableCellThreeBody>
          </StyledTableRow>
        </TableBody>
      </TableContent>
    </CardTable>
  );
};

const Traditional = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <MuiCard>
      {isMobile ? (
        ""
      ) : (
        <Title>
          <BoxLeft>기존 도메인</BoxLeft>
          <BoxCenter>
            <span style={{ display: "block", marginTop: "-1px" }}>vs</span>
          </BoxCenter>
          <BoxRight>Web3 도메인</BoxRight>
        </Title>
      )}
      {isMobile ? <TableMobile /> : <TableDesktop />}
      <Box display={'flex'} justifyContent={'end'} sx={{ mt: 3, mr: isMobile ? 3 : 0 }}>
        <ButtonLink label={'프리미엄 도메인'} href='/web3-domain/premium/' />
      </Box>
    </MuiCard>
  );
};

export default Traditional;
