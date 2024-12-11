// created by raman

import { useEffect, useState } from "react";

const Home = () => {
  console.log('Rerendering Home')
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // alert("Hello World from Home")
    setTimeout(() => {
      setVisible(!visible);
    }, 2000);
    return () => {
      alert("Bye Bye")
    };
  }, []);

  const [text, setText] = useState("");

  useEffect(()=>{
    console.log("yoyo")
  },[text])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {text.length % 2 ? "Hello world from Home Page" : ""}
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default Home;
