import { useAtom } from "jotai";
import React, { useState } from "react";
import { bouncingAtom, searchTextAtom } from "../../store/atoms";

export const ComponentThree = () => {
  const [isBouncing] = useAtom(bouncingAtom)
  const [searchText] = useAtom(searchTextAtom)

  return (
    <div
      className={`bg-slate-200 p-10 rounded-xl ${
        isBouncing ? "animate-bounce" : ""
      } mt-10`}
    >
      Hello world from ComponentThree. {searchText}
      <br />
    </div>
  );
};

export const ComponentTwo = () => {

  return (
    <div className="bg-blue-200 p-10 rounded-xl">
      Hello world from ComponentTwo. My child name is Component Three
      <br />
      
      <ComponentThree />
    </div>
  );
};

function ComponentOne() {

  return (
    <div className="bg-red-200 p-10 rounded-xl">
      Hello world from ComponentOne. I have one child named ComponentTwo
      <br />
      <ComponentTwo/>
    </div>
  );
}

const GlobalState = () => {
    const [isBouncing, setIsBouncing] = useAtom(bouncingAtom);

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
        <button onClick={() => {
          setIsBouncing(!isBouncing);
        }}>Toggle</button>
      <ComponentOne />
    </div>
  );
};

export default GlobalState;


{/* <ComponentThree />
<ComponentTwo />
<ComponentOne /> */}
