import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const { index, blog } = props;

  const navigate = useNavigate();

  return (
    <div
      key={index}
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
          backgroundImage:
            "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/665fa9bf-e939-4ad5-82fb-f50ddaf3be07/dglqy6m-77a304bf-8522-4125-9139-c3315bbcf63d.jpg/v1/fill/w_1024,h_683,q_75,strp/absolute_reality__stunning_and_authentic_nature_by_uar05uba06_dglqy6m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2NWZhOWJmLWU5MzktNGFkNS04MmZiLWY1MGRkYWYzYmUwN1wvZGdscXk2bS03N2EzMDRiZi04NTIyLTQxMjUtOTEzOS1jMzMxNWJiY2Y2M2QuanBnIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC82NjVmYTliZi1lOTM5LTRhZDUtODJmYi1mNTBkZGFmM2JlMDdcL3VhcjA1dWJhMDYtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.F9WlzH0_apC1xNwWHeQ7jfUzmL75emHIRie_NBbGms0)",
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
              backgroundColor: "#D3D3D3",
              color: blog.tag.name,
              padding: 6,
              borderRadius: 4,
              fontSize: 20,
            }}
          >
            {blog.tag.name}
          </span>
        </div>
        <h1 style={{ overflow: "hidden" }}>{blog.title}</h1>
        {blog.createdAt.toDate().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};
