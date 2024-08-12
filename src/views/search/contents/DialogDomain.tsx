import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ButtonSubmitSmall from "@/views/assets/components/button/ButtonSubmitSmall";
import CloseBlue from "@/@core/components/icons/CloseBlue";
import { styleCssFromModal } from "@/@core/utils/helpers";
import {
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { searchOneDomain } from "@/app/reducers/client";
import searchDomainMapper from "@/domains/mappers/search/mapper.res-search-domain";
import Backdrop from "@mui/material/Backdrop";

const Label = styled(Typography)(({ theme }: { theme: any }) => ({
  fontSize: "20px !important",
  fontWeight: 700,
  lineHeight: "24px",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  color: theme.palette.common.caption + "!important",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px !important",
  },
}));

const SubLabel = styled(Typography)(({ theme }) => ({
  fontSize: "14px !important",
  fontWeight: 700,
  lineHeight: "24px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
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

type DialogDomainProps = {
  open: boolean;
  toggle: Function;
  domain?: any;
};

const DialogDomain = (props: DialogDomainProps) => {
  const { open, toggle, domain } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const theme: any = useTheme()

  const handleClose = () => {
    toggle();
  };

  const handelSubmit = async () => {
    setLoading(true);
    const result = await dispatch(searchOneDomain(domain?.name));
    const { isStatus } = searchDomainMapper.mapToDto(result);
    if (isStatus) {
      toggle(true);
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {toggle()}}
      className="domain-web3"
      disableScrollLock={true}
    >
      <ButtonClose onClick={() => handleClose()}>
        <CloseBlue color={theme.palette.text.sLabel} />
      </ButtonClose>
      <form style={styleCssFromModal("656px")}>
        <DialogContent sx={{ textAlign: "center" }}>
          <Label variant="h6">
            여기서부터는 Unstoppable Domains 사이트로 이동합니다.
          </Label>
          <SubLabel variant="h6">
            *사이트 이동시 Unstoppable Domains, Inc 의 약관이 적용됩니다.
          </SubLabel>
        </DialogContent>
        <DialogActions
          sx={{
            pb: { lg: 0, sm: 12.5 },
            paddingTop: "2rem !important",
            justifyContent: "center",
          }}
        >
          <ButtonSubmitSmall
            loading={loading}
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

export default DialogDomain
