import React, { useState } from "react";

export const ComponentThree = ({ isBouncing, setIsBouncing }) => {
  return (
    <div
      className={`bg-slate-200 p-10 rounded-xl ${
        isBouncing ? "animate-bounce" : ""
      } mt-10`}
    >
      Hello world from ComponentThree.
      <br />
      <button
        onClick={() => {
          setIsBouncing(!isBouncing);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export const ComponentTwo = ({setIsBouncing, isBouncing}) => {

  return (
    <div className="bg-blue-200 p-10 rounded-xl">
      Hello world from ComponentTwo. My child name is Component Three
      <br />
      <button
        onClick={() => {
          setIsBouncing(!isBouncing);
        }}
      >
        Toggle
      </button>
      <ComponentThree isBouncing={isBouncing} setIsBouncing={setIsBouncing} />
    </div>
  );
};

function ComponentOne({isBouncing, setIsBouncing}) {

  return (
    <div className="bg-red-200 p-10 rounded-xl">
      Hello world from ComponentOne. I have one child named ComponentTwo
      <br />
      <button onClick={() => {
          setIsBouncing(!isBouncing);
        }}>Toggle</button>
      <ComponentTwo isBouncing={isBouncing} setIsBouncing={setIsBouncing}/>
    </div>
  );
}

const PropDrilling = () => {
    const [isBouncing, setIsBouncing] = useState(false);

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
        <button onClick={() => {
          setIsBouncing(!isBouncing);
        }}>Toggle</button>
      <ComponentOne isBouncing={isBouncing} setIsBouncing={setIsBouncing} />
    </div>
  );
};

export default PropDrilling;


{/* <ComponentThree />
<ComponentTwo />
<ComponentOne /> */}
