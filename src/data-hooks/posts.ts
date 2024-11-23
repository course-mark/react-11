import { useEffect, useState } from "react";
import { getPostsData } from "../services/post.services";

export const usePosts = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPostsData().then((posts) => {
      setUserDetails(posts);
      setLoading(false);
    });
  }, []);

  return [userDetails, loading];
};
