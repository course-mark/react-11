import React, { useState } from "react";
import HelloWorld from "../../../components/HelloWorld";

const UseEffectHook = () => {
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [text, setText] = useState("");
  const bgColor = isMouseIn ? "bg-slate-100" : "bg-slate-900";

  const [visible, setVisible] = useState(false);
  return (
    <div
      className={`h-[100vh] text-white text-3xl ${bgColor} flex flex-col space-y-5 items-center justify-center ease-in duration-300`}
    >
      {
        visible ? <HelloWorld /> : <div/>
      }

      <button
        onClick={() => {
          setVisible(true);
        }}
        className="text-black"
      >
        visible
      </button>
      <button
        onClick={() => {
          setVisible(false);
        }}
        className="text-black"
      >
        hide
      </button>
    </div>
  );
};

export default UseEffectHook;
