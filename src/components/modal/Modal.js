import React from "react";
import { Box, Modal as MuiModal } from "@mui/material";

const style = {
  position: "absolute",
  top: "25%",
  left: "40%",
  width: "600px",
  height: "300px",
  borderRadius: "8px",
  bgcolor: "background.paper",
  p: 4,
  outline: "none",
};

export const Modal = (props) => {
  const { open, handleClose, children } = props;
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      area-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </MuiModal>
  );
};
