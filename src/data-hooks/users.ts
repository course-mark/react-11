import { useEffect, useState } from "react";
import { getUserData } from "../services/user.services";

export const useUsers = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log({ userDetails });
  useEffect(() => {
    setLoading(true);
    getUserData().then((users) => {
      setUserDetails(users);
      setLoading(false);
    });
  }, []);

  return [userDetails, loading];
};
