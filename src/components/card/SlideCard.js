import React from "react";

export const SlideCard = (props) => {
  const { blog } = props;

  if (!blog) return null;

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <div
        style={{
          width: "1200px",
          height: "600px",
          borderRadius: "12px",
          backgroundImage: blog.imageURL
            ? `url(${blog.imageURL})`
            : "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/665fa9bf-e939-4ad5-82fb-f50ddaf3be07/dglqy6m-77a304bf-8522-4125-9139-c3315bbcf63d.jpg/v1/fill/w_1024,h_683,q_75,strp/absolute_reality__stunning_and_authentic_nature_by_uar05uba06_dglqy6m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2NWZhOWJmLWU5MzktNGFkNS04MmZiLWY1MGRkYWYzYmUwN1wvZGdscXk2bS03N2EzMDRiZi04NTIyLTQxMjUtOTEzOS1jMzMxNWJiY2Y2M2QuanBnIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC82NjVmYTliZi1lOTM5LTRhZDUtODJmYi1mNTBkZGFmM2JlMDdcL3VhcjA1dWJhMDYtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.F9WlzH0_apC1xNwWHeQ7jfUzmL75emHIRie_NBbGms0)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(80%)",
        }}
      />

      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          padding: 40,
          borderRadius: "12px",
          left: 25,
          bottom: 25,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "520px",
          height: "170px",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "#4B6BFB",
              borderRadius: "6px",
              padding: "4px 10px",
              color: "white",
            }}
          >
            {blog.tag.name}
          </span>
        </div>

        <div
          style={{
            height: "100px",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {blog.title}
          </h2>
        </div>

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
