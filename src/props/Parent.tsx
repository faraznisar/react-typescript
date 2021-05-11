import React from "react";

import Child from "./Child";

const Parent: React.FC = () => {
  return (
    <Child color='red' onClick={() => console.log("clicked")}>
      Hello from props children
    </Child>
  );
};

export default Parent;
