import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const { blog } = props;
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 340,
        height: 460,
        padding: 20,
        borderRadius: 12,
        border: "1px solid #E8E8EA",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        cursor: "pointer",
      }}
      onClick={() => navigate(`/blogs/${blog.blogId}`)}
    >
      <div
        style={{
          height: 240,
          width: 340,
          border: "1px solid #E8E8EA",
          borderRadius: 6,
          backgroundImage: `url(${blog.imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 20,
          gap: 20,
        }}
      >
        <div>
          <span
            style={{
              border: "1px solid lightgrey",
              color: blog.tag.color,
              padding: 6,
              borderRadius: 4,
              fontSize: 20,
            }}
          >
            {blog.tag.name}
          </span>
        </div>
        <h2
          style={{
            height: "60px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {blog.title}
        </h2>
        {blog.createdAt &&
          blog.createdAt.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </div>
    </div>
  );
};
