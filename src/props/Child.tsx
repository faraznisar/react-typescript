import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}
const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <hr />
      <button onClick={onClick}>Click me</button>
      <hr />
      {children}
    </div>
  );
};

export default Child;
