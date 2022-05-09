//MUI Imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ThemeProvider, useTheme } from "@mui/material/styles";

// App imports
import { lightTheme } from "../../styles/themeProvider";

// TODO: Needs to be adjusted for creating a Community

export default NiceModal.create((props) => {
  const modal = useModal();

  const handleAction = () => {
    props.action();
    modal.remove()
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
