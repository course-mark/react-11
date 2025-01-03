import axios from "axios";

export const getUserData = async () => {
  const response = await axios.get(
    "http://localhost:4000/users"
  );
  const users = response.data;
  return users;
};
