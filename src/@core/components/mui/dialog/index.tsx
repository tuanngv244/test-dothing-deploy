import React from "react";
import { Dialog, Typography, IconButton, DialogTitle } from "@mui/material";
import Close from "mdi-material-ui/Close";

type DialogGeneralProps = {
  open: boolean;
  headerTitle?: string;
  close: () => void;
  handleConfirm?: Function;
  component?: React.ReactNode;
};

const DialogGeneral = ({
  open,
  close,
  component,
  headerTitle = "Simple Title",
}: DialogGeneralProps) => {
  return (
    <Dialog onClose={close} open={open} disableScrollLock={true}>
      <DialogTitle id="customized-dialog-title" sx={{ p: 4 }}>
        <Typography variant="h6" component="span">
          {headerTitle}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            top: 10,
            right: 10,
            position: "absolute",
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      {component}
    </Dialog>
  );
};

export default DialogGeneral;
