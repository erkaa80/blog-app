import { Box, CircularProgress, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useTagContext, useUserContext } from "../../context";
import { DeleteTagModal, Header } from "../../components";
import HighLightOffIcon from "@mui/icons-material/HighlightOff";

export const TagsPage = () => {
  const { currentUser } = useUserContext();
  const { tags, tagLoading } = useTagContext();

  const [tag, setTag] = useState({});

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const handleOpenDeleteTag = (tag) => {
    if (currentUser) {
      setOpenDeleteTag(true);
      setTag(tag);
    } else {
      alert("User needs to be signed in!");
    }
  };
  const handleCloseDeleteTag = () => setOpenDeleteTag(false);

  if (tagLoading) {
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

  if (!tagLoading && tags.length === 0)
    return (
      <div style={{ textAlign: "center" }}>
        <Header />
        No Tag Data
      </div>
    );

  return (
    <Box>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>List of Tags</h2>
        {tags?.map((tag, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            {tag.name}

            <IconButton onClick={() => handleOpenDeleteTag(tag)}>
              <HighLightOffIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
      <DeleteTagModal
        open={openDeleteTag}
        handleClose={handleCloseDeleteTag}
        tag={tag}
      />
    </Box>
  );
};
