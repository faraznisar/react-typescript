import React from "react";

const EventComponent = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <div>
      <input type='text' onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
