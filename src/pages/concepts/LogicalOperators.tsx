import React, { useState } from "react";
/**
 * flag false => !flag true => !!flag false
 * str "" => !str true => !!str false
 *
 * flag true => !flag false => !!flag true
 * str "qe" => !str false => !!str true
 *
 * flag false => !flag true => !!flag false
 * num 0 => !num true => !!num false
 *
 * flag true => !flag false => !!flag true
 * num -10 => !num false => !!num true
 *
 */
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

      {/* and operator (&&) */}
      {flag1 && <div> Hello world from And Operator flag 1 is on </div>}

      {/* And Operator chaining (&&) */}
      {flag2 && flag3 && flag4 && flag1 && (
        <div> Hello world from And Operator </div>
      )}
      {/* or operator (||) */}
      {flag2 || flag3 || flag4 || flag1 || (
        <div> Hello world from Or Operator </div>
      )}
      {"[LEFT SIDE]" || (
        <div> [RIGHT SIDE]Hello world from op Operator 123 </div>
      )}
      <br />
      {undefined ?? <div> Hello world from nullish Operator 1</div>}
      {null ?? <div> Hello world from nullish Operator 2</div>}
      <br />
      {null ?? <div> Hello world from nullish Operator 3</div>}
    </div>
  );
};

export default LogicalOperators;
