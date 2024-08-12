import React from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  useMediaQuery,
  styled,
  useTheme,
} from "@mui/material";
import { styleCssFromModal } from "@/@core/utils/helpers";
import CloseBlue from "@/@core/components/icons/CloseBlue";

const Label = styled(Typography)(({ theme }: { theme: any }) => ({
  fontSize: "24px !important",
  fontWeight: 500,
  lineHeight: "32px",
  color: theme.palette.common.caption + "!important",
  marginTop: "1rem",
  marginBottom: "1.5rem",

  [theme.breakpoints.down("lg")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "22px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px !important",
    lineHeight: "20px",
    marginBottom: "1rem",
  },
}));

const Modal = styled(Dialog)(({ theme }) => ({
  zIndex: 9999,
  ".MuiPaper-root": {
    maxWidth: "670px",
    borderRadius: 5,
    minHeight: "240px",
    boxShadow: "4px 3px 10px 3px #0000000D",
    border: "1px solid #0000001A",
  },
  ".MuiBackdrop-root": {
    background: "transparent",
  },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ButtonOk = styled(Button)(({ theme }: { theme: any }) => ({
  fontSize: "24px",
  fontWeight: 500,
  color: theme.palette.text.sLabel,
  boxShadow: "none",
  height: "44px",
  width: 156,
  borderRadius: "60px",
  textTransform: "capitalize",
  backgroundColor: "#fff",
  border: "1px solid rgb(0 0 0 / 40%)",
  marginLeft: "15px !important",
  "&:hover": {
    backgroundColor: "#fff",
  },
  [theme.breakpoints.down("lg")]: {
    width: 100,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

const ButtonClose = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "1rem",
  top: "1rem",
  cursor: "pointer",
  zIndex: 9999,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    top: "0.5rem",
    svg: {
      width: 24,
    },
  },
}));

type DialogThankProps = {
  open: boolean;
  toggle: Function;
};

const DialogThank = ({ toggle, open }: DialogThankProps) => {
  const theme: any = useTheme()
  const handleClose = () => {
    toggle();
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        toggle();
      }}
    >
      <ButtonClose onClick={() => handleClose()}>
        <CloseBlue color={theme.palette.common.close} />
      </ButtonClose>
      <form style={styleCssFromModal("656px")}>
        <DialogContent sx={{ textAlign: "center" }}>
          <Label variant="h6">
            고객님의 문의가 정상적으로 등록되었습니다.
            <br />
            감사합니다.
          </Label>
        </DialogContent>
        <DialogActions
          sx={{
            pb: { lg: 6, sm: 10 },
            paddingTop: "1rem !important",
            justifyContent: "center",
          }}
        >
          <ButtonOk
            variant="contained"
            onClick={() => {
              toggle();
            }}
          >
            확인
          </ButtonOk>
        </DialogActions>
      </form>
    </Modal>
  );
};

export default DialogThank;
