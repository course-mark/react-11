import axios from "axios";
import React from "react";

export const getPostsData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = response.data;
  return posts;
};
