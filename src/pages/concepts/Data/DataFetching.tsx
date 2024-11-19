import React, { useEffect, useState } from "react";
import UserCard from "../../../components/UserCard";
import { getUserData } from "../../../services/user.services";

const DataFetching = () => {
  const [userDetails, setUserDetails] = useState([]);
  console.log({ userDetails });
  useEffect(() => {
    getUserData().then((users) => {
      setUserDetails(users);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3">
        {userDetails.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </div>
  );
};

export default DataFetching;
