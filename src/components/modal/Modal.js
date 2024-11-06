import React from "react";
import { Box, Modal as MuiModal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50% )",
  width: "400",
  borderRadius: "8px",
  bgcolor: "background.paper",
  p: 4,
  outline: "none",
  fontSize: "14",
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
