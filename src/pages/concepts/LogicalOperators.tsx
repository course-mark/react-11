import React, { useState } from "react";

const LogicalOperators = () => {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setFlag1(!flag1);
        }}
      >
        toggle ({flag1 ? "on" : "off"})
      </button>
      <button
        onClick={() => {
          setFlag2(!flag2);
        }}
      >
        toggle ({flag2 ? "on" : "off"})
      </button>
      <button
        onClick={() => {
          setFlag3(!flag3);
        }}
      >
        toggle ({flag3 ? "on" : "off"})
      </button>
      <button
        onClick={() => {
          setFlag4(!flag4);
        }}
      >
        toggle ({flag4 ? "on" : "off"})
      </button>
      {/* (boolean condition) ? (display on true) : (display on false) */}
      {flag1 ? (
        <div>hello world from ternary operator (on)</div>
      ) : (
        <div>hello world from ternary operator (off)</div>
      )}

      {/* not operator (!) */}
      {!flag1 && <div> Hello world from And Operator flag 1 is off </div>}

      {/* And Operator (&&) */}
      {flag2 && flag3 && flag4 && flag1 && (
        <div> Hello world from And Operator </div>
      )}
      {/* or operator (||) */}
      {flag2 || flag3 || flag4 || flag1 || (
        <div> Hello world from Or Operator </div>
      )}
      {"" || <div> Hello world from op Operator 123 </div>}
      {undefined ?? <div> Hello world from nullish Operator </div>}
    </div>
  );
};

export default LogicalOperators;
