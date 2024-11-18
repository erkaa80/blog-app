import React, { useState } from "react";
import { Modal } from "./Modal";
import { Box, CircularProgress, MenuItem, Select } from "@mui/material";
import { TextField } from "../textfield";
import { Button } from "../button";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { blogsCollection } from "../../firebase";
import { useTagContext, useUserContext } from "../../context";

export const CreateBlogModal = (props) => {
  const { open, handleClose } = props;
  const { currentUser } = useUserContext();
  const { tags, tagLoading } = useTagContext();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    content: "",
    tag: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      blogData.content === "" ||
      blogData.description === "" ||
      blogData.title === "" ||
      blogData.tag === ""
    ) {
      alert("Please fill all the fields!");
    } else {
      setLoading(true);

      await addDoc(blogsCollection, {
        title: blogData.title,
        description: blogData.description,
        content: blogData.content,
        createdAt: serverTimestamp(),
        userId: currentUser.uid,
        tagId: blogData.tag,
      });

      setBlogData({
        title: "",
        description: "",
        content: "",
        tag: "",
      });

      handleClose();
      setLoading(false);
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      {tagLoading || loading ? (
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
          <h2 style={{ margin: 0 }}>Create Blog</h2>
          <TextField
            type="text"
            name="title"
            placeholder="Title..."
            value={blogData.title}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="description"
            placeholder="Description..."
            value={blogData.description}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="content"
            placeholder="Content..."
            value={blogData.content}
            onChange={handleChange}
          />

          <Select
            value={blogData.tag}
            name="tag"
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
            displayEmpty
            sx={{
              height: "37px",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            <MenuItem value="">
              {tags.length === 0 ? "No Tag" : "Choose Tag..."}
            </MenuItem>

            {tags?.map((tag) => (
              <MenuItem value={tag.tagId} key={tag.tagId}>
                {tag.name}
              </MenuItem>
            ))}
          </Select>

          <Box sx={{ display: "flex", gap: "60px" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Create</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};
