import React, { useState } from "react";

export default function AllEvents() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => setMessage("Button Clicked!");
  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Form Submitted with value: ${inputValue}`);
    setInputValue("");
  };
  const handleKeyDown = (e) => e.key === "Enter" && setMessage("Pressed Enter!");
  const handleMouseEnter = () => setMessage("Mouse Entered!");
  const handleMouseLeave = () => setMessage("Mouse Left!");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Events Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClick}>Click Me</button>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: 200, height: 100, background: "#ddd", marginTop: 20 }}
      >
        Hover Here
      </div>
      <p>{message}</p>
    </div>
  );
}
