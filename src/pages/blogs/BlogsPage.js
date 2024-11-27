import React, { useState } from "react";
import {
  Button,
  CreateBlogModal,
  CreateTagModal,
  Header,
} from "../../components";
import "./BlogsPage.css";

export const BlogsPage = () => {
  const [openBlog, setOpenBlog] = useState(false);
  const [openTag, setOpenTag] = useState(false);

  const handleOpenBlog = () => setOpenBlog(true);
  const handleCloseBlog = () => setOpenBlog(false);

  const handleOpenTag = () => setOpenTag(true);
  const handleCloseTag = () => setOpenTag(false);

  return (
    <div>
      <Header />

      <div id="blogs-container">
        <div id="create-blog">
          <Button style={{ width: "120px" }} onClick={handleOpenTag}>
            Create Tag
          </Button>
          <Button style={{ width: "120px" }} onClick={handleOpenBlog}>
            Create Blog
          </Button>
        </div>
      </div>
      <CreateBlogModal open={openBlog} handleClose={handleCloseBlog} />
      <CreateTagModal open={openTag} handleClose={handleCloseTag} />
    </div>
  );
};
