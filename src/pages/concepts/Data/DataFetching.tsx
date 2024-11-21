import React, { useEffect, useState } from "react";
import UserCard from "../../../components/UserCard";
import { getUserData } from "../../../services/user.services";

const DataFetching = () => {
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
  return (
    <div>
      {loading && <div>Loading...</div>}
      <div className="grid grid-cols-3">
        {userDetails.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </div>
  );
};

export default DataFetching;
