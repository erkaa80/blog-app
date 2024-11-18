import React, { useState } from "react";
import { Modal } from "./Modal";
import { Box, CircularProgress } from "@mui/material";
import { TextField } from "../textfield";
import { Button } from "../button";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { tagsCollection } from "../../firebase";

export const CreateTagModal = (props) => {
  const { open, handleClose } = props;
  const [tagData, setTagData] = useState({
    name: "",
    description: "",
    color: "#26E6FF",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTagData({ ...tagData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      tagData.name === "" ||
      tagData.description === "" ||
      tagData.color === ""
    ) {
      alert("Please fill all the fields!");
    } else {
      setLoading(true);

      await addDoc(tagsCollection, {
        name: tagData.name,
        description: tagData.description,
        color: tagData.color,
        createdAt: serverTimestamp(),
      });

      setTagData({
        name: "",
        description: "",
        color: "",
      });

      handleClose();
      setLoading(false);
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2 style={{ margin: 0 }}>Create Tag</h2>
          <TextField
            type="text"
            name="name"
            placeholder="Name..."
            value={tagData.name}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="description"
            placeholder="Description..."
            value={tagData.description}
            onChange={handleChange}
          />

          <input
            type="color"
            name="color"
            value={tagData.color}
            onChange={handleChange}
          />

          <Box sx={{ display: "flex", gap: "60px" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Create</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};
