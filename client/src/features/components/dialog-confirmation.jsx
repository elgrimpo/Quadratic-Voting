//MUI Imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useState } from "react";

// App imports
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";

export default NiceModal.create((props) => {
  // Use a hook to manage the modal state
  const modal = useModal();
  const theme = useTheme();

  const handleAction = () => {
    props.action();
    modal.hide()
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Dialog onClose={() => modal.hide()} open={modal.visible}>
        <DialogTitle>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => modal.hide()}>Cancel</Button>
          <Button onClick={handleAction} autoFocus>
            {props.actionText}
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
});
