import { useState } from "react";

const StateManagement = () => {
  // useState
  const [state, setState] = useState(false);

  const backgroundColor= state ? "bg-black": "bg-white"
  const textColor = state ? "text-white": "text-black"

  return (
    <div className={backgroundColor+ " border"}>
        <div className={textColor}>Hello Worlds from State management Page {`${state}`}</div>
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
