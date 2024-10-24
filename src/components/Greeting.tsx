import React from "react";

const Greeting = (properties) => {
  return (
    <div>
      
      {properties.greetingName} guyz ({properties.language})
    </div>
  );
};

export default Greeting;
