import React from "react";
import { useParams } from "react-router-dom";

export const BlogPage = () => {
  const { id } = useParams();

  console.log(id);

  return <div>BlogPage</div>;
};
