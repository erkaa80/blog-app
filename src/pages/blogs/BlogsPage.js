import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  CreateBlogModal,
  CreateTagModal,
  Footer,
  Header,
} from "../../components";
import "./BlogsPage.css";
import { useBlogContext, useUserContext } from "../../context";
import { SearchIcon } from "../../assets";

export const BlogsPage = () => {
  const { currentUser } = useUserContext();
  const { blogs } = useBlogContext();

  const [openBlog, setOpenBlog] = useState(false);
  const [openTag, setOpenTag] = useState(false);
  const [search, setSearch] = useState("");

  const handleOpenBlog = () => {
    currentUser ? setOpenBlog(true) : alert("User needs to be signed in!");
  };
  const handleCloseBlog = () => setOpenBlog(false);

  const handleOpenTag = () => {
    currentUser ? setOpenTag(true) : alert("User needs to be signed in!");
  };
  const handleCloseTag = () => setOpenTag(false);

  const filteredBlogs = useMemo(() => {
    return search
      ? blogs.filter((blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase())
        )
      : blogs;
  }, [blogs, search]);

  return (
    <div>
      <Header />
      <div id="blogs-container">
        <div id="create-blog">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className="search-icon">
              <SearchIcon />
            </div>
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            <Button style={{ width: "120px" }} onClick={handleOpenTag}>
              Create Tag
            </Button>
            <Button style={{ width: "120px" }} onClick={handleOpenBlog}>
              Create Blog
            </Button>
          </div>
        </div>

        {filteredBlogs.length !== 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginTop: "60px",
            }}
          >
            {filteredBlogs.map((blog, index) => (
              <div key={index}>
                <Card blog={blog} />
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              margin: "20px 0px",
            }}
          >
            No Blog Data
          </div>
        )}
      </div>

      <Footer />

      <CreateBlogModal open={openBlog} handleClose={handleCloseBlog} />
      <CreateTagModal open={openTag} handleClose={handleCloseTag} />
    </div>
  );
};
