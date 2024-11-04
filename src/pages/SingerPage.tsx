import React from "react";
import { useParams } from "react-router-dom";

const SingerPage = () => {

  const params = useParams(); // {singerName: 'karan-aujla'}
  // params is an object with key value pairs
  console.log("8: the value of params object is  ",params)
  console.log("9: the value of params.singerId is  ",params.singerId)
  return (
    <div
      className="p-20 w-auto flex px-24 justify-center relative"
      id="container"
    >
     Hello world from SingerPage. this is {params.singerId}
    </div>
  );
};

export default SingerPage;
