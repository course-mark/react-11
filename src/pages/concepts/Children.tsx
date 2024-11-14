import React from "react";

const Children = () => {
  return (
    <div>
      <Component1>
        <div>Hello world from children of component 21</div>
      </Component1>
    </div>
  );
};

const Component1 = (props) => {
  return <div>{props.children}</div>;
};

export default Children;
