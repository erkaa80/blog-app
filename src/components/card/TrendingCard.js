import React from "react";
import { useNavigate } from "react-router-dom";

export const TrendingCard = (props) => {
  const { blog } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogs/${blog.blogId}`)}
      style={{
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "280px",
          height: "320px",
          borderRadius: "12px",
          backgroundImage: `url(${blog.imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(60%)",
        }}
      />

      <div
        style={{
          color: "white",
          position: "absolute",
          left: 25,
          top: 200,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "230px",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "#4B6BFB",
              borderRadius: "6px",
              padding: "4px 10px",
            }}
          >
            {blog.tag.name}
          </span>
        </div>

        <div
          style={{
            height: "70px",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {blog.title}
          </h2>
        </div>
      </div>
    </div>
  );
};
