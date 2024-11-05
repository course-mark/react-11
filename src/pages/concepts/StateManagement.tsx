import { useState } from "react";

const StateManagement = () => {
  // useState
  const [state, setState] = useState(false);

  const backgroundColor = state ? "bg-black": "bg-white"

  return (
    <div className={backgroundColor}>
        <div>Hello Worlds from State management Page {`${state}`}</div>
        <button onClick={()=>{
             setState(true)
        }}>make it true</button>

        <button onClick={()=>{
             setState(false)
        }}>
            Make it false
        </button>
    </div>
  );
};

export default StateManagement;
