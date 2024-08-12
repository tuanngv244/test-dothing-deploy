import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  styled,
} from "@mui/material";
import { styleCssFromModal } from "@/@core/utils/helpers";
import ButtonSubmitSmall from "@/views/assets/components/button/ButtonSubmitSmall";

const Label = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  fontSize: "18px",
  fontWeight: 700,
  lineHeight: "24px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Modal = styled(Dialog)(({ theme }) => ({
  zIndex: 9999,
  ".MuiPaper-root": {
    borderRadius: 15,
  },
  ".MuiBackdrop-root": {
    background: "rgb(0 77 191 / 80%)",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type DialogLanguageProps = {
  open: boolean;
  toggle: Function;
};

const DialogLanguage = ({ open, toggle }: DialogLanguageProps) => {
  const handelSubmit = async () => {
    toggle(true);
  };
  return (
    <Modal
      open={open}
      disableScrollLock={true}
      onClose={() => {
        toggle();
      }}
    >
      <form style={styleCssFromModal("600px")}>
        <DialogContent sx={{ textAlign: "center" }}>
          <Label variant="h6">
            검색어에 잘못된 문자가 포함되었습니다.
            <br />
            검색은 영문, 숫자 및 대시만 가능합니다.
          </Label>
        </DialogContent>
        <DialogActions
          sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: "center" }}
        >
          <ButtonSubmitSmall
            variant="contained"
            fn={handelSubmit}
            color="primary"
            name="OK"
          />
        </DialogActions>
      </form>
    </Modal>
  );
};

export default DialogLanguage;
