import React, { useState } from "react";
import { blogsCollection, tagsCollection } from "../../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { Modal } from "../Modal";
import { Box, CircularProgress } from "@mui/material";
import { Button } from "../../button";
import { useBlogContext } from "../../../context";

export const DeleteTagModal = (props) => {
  const { open, handleClose, tag } = props;

  const [loading, setLoading] = useState(false);
  const { blogs, blogsLoading } = useBlogContext();

  const deleteBlogs = async (blogsToDelete) => {
    const deletePromises = blogsToDelete.map((blog) => {
      const blogRef = doc(blogsCollection, blog.blogId);
      return deleteDoc(blogRef);
    });
    await Promise.all(deletePromises);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const blogsToDelete = blogs.filter((blog) => blog.tagId === tag.tagId);
      await deleteBlogs(blogsToDelete);

      const tagRef = doc(tagsCollection, tag.tagId);
      await deleteDoc(tagRef);
    } catch (error) {
      console.error("Error deleting tag and blogs:", error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      {loading || blogsLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            padding: 2,
          }}
        >
          <p style={{ textAlign: "center" }}>
            Are you sure you want to delete this tag and its related blogs?
          </p>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleSubmit}>Yes</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};
