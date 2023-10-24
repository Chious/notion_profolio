"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Thanks for your submisson"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ textAlign: "center" }}
          >
            We would contract you soon!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", display: "flex" }}>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{
              width: 150,
              borderBottom: 5,
              borderRadius: 0,
              borderColor: "#4EE1A0",
              color: "rgb(36 36 36)",
            }}
          >
            All right!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
