import React from "react";
import { Modal } from "./Modal";
import { Box } from "@mui/material";
import { TextField } from "../textfield";
import { Button } from "../button";

export const CreateBlogModal = (props) => {
  const { open, handleClose } = props;

  return (
    <Modal open={open} handleClose={handleClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h2 style={{ margin: 0 }}>Create Blog</h2>
        <TextField type="text" name="title" placeholder="Title..." />
        <TextField
          type="text"
          name="description"
          placeholder="Description..."
        />
        <TextField type="text" name="content" placeholder="Content..." />

        <Box sx={{ display: "flex", gap: "60px" }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Create</Button>
        </Box>
      </Box>
    </Modal>
  );
};
