import React from "react";
import "./UpvoteDialog.css";
import { Dialog, DialogContent } from "@mui/material";
const UpvoteDialog = ({open,handleClose}) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: {
          width: "100%",
          borderRadius: 5,
          m: 4,
          minHeight: "50vh",
          overflowY: "hidden",
        },
      }}
      slotProps={{
        backdrop: {
          style: {
            opacity: 0.5,
            background: "linear-gradient(to right, #5f1806, #6d0d42)",
          },
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent
        sx={{ "&::-webkit-scrollbar": { display: "none" }, padding: 0 }}
      ></DialogContent>
    </Dialog>
  );
};

export default UpvoteDialog;
