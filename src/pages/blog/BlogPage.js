import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBlogContext, useUserContext } from "../../context";
import { CircularProgress } from "@mui/material";
import {
  Button,
  DeleteBlogModal,
  Footer,
  Header,
  UpdateBlogModal,
} from "../../components";
import "./BlogPage.css";

export const BlogPage = () => {
  const { currentUser } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [openDeleteBlog, setOpenDeleteBlog] = useState(false);
  const handleOpenDeleteBlog = () => setOpenDeleteBlog(true);
  const handleCloseDeleteBlog = () => setOpenDeleteBlog(false);

  const [openUpdateBlog, setOpenUpdateBlog] = useState(false);
  const handleOpenUpdateBlog = () => setOpenUpdateBlog(true);
  const handleCloseUpdateBlog = () => setOpenUpdateBlog(false);

  const { blogs, blogsLoading } = useBlogContext();

  const singleBlog = blogs.find((blog) => blog.blogId === id);

  useEffect(() => {
    if (!blogsLoading && !singleBlog) {
      navigate("/404", { replace: true });
    }
  }, [blogsLoading, singleBlog, navigate]);

  if (blogsLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div style={{ textAlign: "center", padding: "32px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Please sign in or sign up to access the details.
        </h2>

        <Link to="/sign-up" style={{ color: "black", fontSize: "18px" }}>
          Join us to explore more amazing content!
        </Link>
      </div>
    );
  }

  if (!singleBlog) return null;

  return (
    <div>
      <Header />

      <div id="blog-container">
        <h1
          style={{
            margin: "40px 0px",
            wordWrap: "break-word",
          }}
        >
          {singleBlog.title}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h3>{singleBlog.user?.displayName}</h3>
          <p>
            {singleBlog.createdAt.toDate().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <img src={singleBlog.imageURL} width={800} alt={singleBlog.title} />

        <p style={{ marginTop: "40px" }}>{singleBlog.content}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <Button
            style={{ width: "120px" }}
            onClick={handleOpenUpdateBlog}
            disabled={currentUser.uid !== singleBlog.userId}
          >
            Update
          </Button>
          <Button
            style={{ width: "120px" }}
            onClick={handleOpenDeleteBlog}
            disabled={currentUser.uid !== singleBlog.userId}
          >
            Delete
          </Button>
        </div>
      </div>

      <Footer />

      <DeleteBlogModal
        open={openDeleteBlog}
        handleClose={handleCloseDeleteBlog}
        blogId={id}
      />

      <UpdateBlogModal
        open={openUpdateBlog}
        handleClose={handleCloseUpdateBlog}
        blog={singleBlog}
      />
    </div>
  );
};
