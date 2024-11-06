import React from "react";

const Events = () => {
  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col space-y-5 items-center justify-center">
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
        }}
        onMouseLeave={()=>{
          console.log('mouse left')
        }}
        onMouseMove={()=>{
          console.log('mouse is moving', new Date())

        }}
        className=" cursor-pointer text-4xl bg-slate-300 w-96 h-96 flex items-center justify-center rounded-2xl text-white"
      >
        <div>Hover Events</div>
      </div>
    </div>
  );
};

export default Events;
