import React, { useState } from "react";
import { Modal } from "../Modal";
import { useTagContext } from "../../../context";
import { Box, CircularProgress, MenuItem, Select } from "@mui/material";
import { TextField } from "../../textfield";
import { Button } from "../../button";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { blogsCollection } from "../../../firebase";
import { uploadImage } from "../../cloudinary";

export const UpdateBlogModal = (props) => {
  const { open, handleClose, blog } = props;

  const { tags, tagLoading } = useTagContext();
  const [blogData, setBlogData] = useState({
    ...blog,
  });

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [link, setLink] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleFileChange = async (e) => {
    setImageLoading(true);

    const previewLink = await uploadImage(e.target.files[0]);
    setLink(previewLink);

    setImageLoading(false);
  };

  const handleSubmit = async () => {
    if (
      !blogData.title ||
      !blogData.description ||
      !blogData.content ||
      !blogData.tagId
    ) {
      alert("Please fill all the fields!");
    } else {
      setLoading(true);

      await setDoc(doc(blogsCollection, blogData.blogId), {
        ...blogData,
        updatedAt: serverTimestamp(),
        imageURL: link ? link : blogData.imageURL,
      });

      setLoading(false);
      handleClose();
    }
  };

  const handleModalClose = () => {
    setBlogData({ ...blog });
    handleClose();
    setLink("");
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
            value={blogData.tagId}
            name="tagId"
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
            displayEmpty
            sx={{
              height: "37px",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            {tags?.map((tag) => (
              <MenuItem value={tag.tagId} key={tag.tagId}>
                {tag.name}
              </MenuItem>
            ))}
          </Select>

          <Box>
            {imageLoading ? (
              <Box>
                <CircularProgress size={20} />
              </Box>
            ) : (
              <img
                src={link ? link : blogData.imageURL}
                alt={blogData.title}
                height={100}
              />
            )}
          </Box>

          <input type="file" onChange={handleFileChange} />

          <Box sx={{ display: "flex", gap: "60px" }}>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Update</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};
