import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CircularProgress, IconButton } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  Card,
  Footer,
  Header,
  SlideCard,
  TrendingCard,
} from "../../components";
import { useBlogContext, useTagContext } from "../../context";

import "./HomePage.css";

export const HomePage = () => {
  const { blogs, blogsLoading } = useBlogContext();
  const { tags, tagLoading } = useTagContext();

  const [selectedTagId, setSelectedTagId] = useState("");
  const [slideCount, setSlideCount] = useState(0);

  const filteredBlogs = useMemo(() => {
    return selectedTagId
      ? blogs.filter((blog) => selectedTagId === blog.tagId)
      : blogs;
  }, [blogs, selectedTagId]);

  const trendingBlogs = [...blogs]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 4);

  if (blogsLoading || tagLoading) {
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

  return (
    <div>
      <Header />

      <div id="home-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 20,
            margin: "50px 0px",
          }}
        >
          <SlideCard blog={blogs[slideCount]} />

          <div>
            <IconButton
              onClick={() => {
                setSlideCount((prev) => prev - 1);
              }}
              disabled={slideCount <= 0}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setSlideCount((prev) => prev + 1);
              }}
              disabled={slideCount >= blogs.length - 1}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            margin: "50px 0px",
          }}
        >
          <h2>Trending</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {trendingBlogs.map((blog, index) => (
              <div key={index}>
                <TrendingCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            margin: "50px 0px",
          }}
        >
          <h2>All Blog Posts</h2>

          <div
            style={{
              display: "flex",
              gap: 10,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {tags.length === 0
              ? "No tags"
              : [{ name: "All", tagId: "" }, ...tags].map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      color: selectedTagId === tag.tagId ? "#D4A373" : "#000",
                    }}
                    onClick={() => setSelectedTagId(tag.tagId)}
                  >
                    {tag.name}
                  </div>
                ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            {filteredBlogs.map((blog, index) => (
              <div key={index}>
                <Card blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
