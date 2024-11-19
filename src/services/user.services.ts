import axios from "axios";

export const getUserData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = response.data;
  return users;
};
