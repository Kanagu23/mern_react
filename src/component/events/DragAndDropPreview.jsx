import React, { useState } from "react";

const colors = [
  { id: 1, label: "Red",  },
  { id: 2, label: "Green",  },
  { id: 3, label: "Blue",  },
  { id: 4, label: "Yellow",  },
];

export default function DragAndDropPreview() {
  const [droppedBox, setDroppedBox] = useState(null);

  const handleDragStart = (e, box) => {
    e.dataTransfer.setData("application/json", JSON.stringify(box));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const box = JSON.parse(e.dataTransfer.getData("application/json"));
    setDroppedBox(box);
  };

  return (
    <div className="">
      {/* Draggable boxes */}
      <div className="" style={{display:"flex", gap:"5px"}}>
        {colors.map((box) => (
          <div
            key={box.id}
            style={{
                width:100,
                height:100,
                background:box.label,
                display:"grid",
                placeContent:"center"
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, box)}
           
          >
            {box.label}
          </div>
        ))}
      </div>

      {/* Drop Zone */}
      <div
      style={{
                width:415,
                height:200,
                background:"#eee",
                display:"grid",
                placeContent:"center"
            }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className=""
      >
        {droppedBox ? (
          <div
          style={{
                width:100,
                height:100,
                background:droppedBox.label,
                display:"grid",
                placeContent:"center"
            }}
          >
            {droppedBox.label}
          </div>
        ) : (
          <span className="">Drop a box here</span>
        )}
      </div>
    </div>
  );
}
