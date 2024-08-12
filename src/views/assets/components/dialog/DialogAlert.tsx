import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogGeneral from "@/@core/components/mui/dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

const DialogAlert = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <DialogGeneral
      headerTitle="Alert"
      open={open}
      close={close}
      component={
        <>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions className="dialog-actions-dense">
            <Button onClick={close}>Disagree</Button>
            <Button onClick={close}>Agree</Button>
          </DialogActions>
        </>
      }
    />
  );
};

export default DialogAlert;
