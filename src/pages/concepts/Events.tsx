import React, { useState } from "react";

const Events = () => {
  const [isMouseIn, setIsMouseIn] = useState(false)

  const bgColor = isMouseIn? "bg-slate-100" : "bg-slate-900"
  
  return (
    <div className={`h-[100vh] ${bgColor} flex flex-col space-y-5 items-center justify-center ease-in duration-300`}>
      <div
        onClick={() => {
          console.log(new Date());
        }}
        className=" cursor-pointer text-4xl bg-red-300 w-96 h-96 flex items-center justify-center rounded-2xl text-white"
      >
        <div>OnClick Events</div>
      </div>
      <div
        onMouseEnter={()=>{
          console.log('mouse entered')
          setIsMouseIn(true)
        }}
        onMouseLeave={()=>{
          console.log('mouse left')
          setIsMouseIn(false)
        }}
        onMouseMove={()=>{
          console.log('mouse is moving', new Date())

        }}
        className=" cursor-pointer text-4xl bg-slate-300 w-96 h-96 flex flex-col items-center justify-center rounded-2xl text-white"
      >
        <div>Hover Events</div>
        {
          isMouseIn? (
            <> 🐁 </>
          ): (
            
            <>  </>
          )
        }
      </div>
    </div>
  );
};

export default Events;
