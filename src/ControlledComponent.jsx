import React, { useState } from 'react';

const  ControlledForm=()=> {
  const [name, setName] = useState('test');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name (Controlled):</label>
      <input 
        type="text" 
        // placeholder='hi'
        value={name}
        onChange={(e) => setName(e.target.value)}
        // onChange={(e) => {
        //     alert(e.target.value)
        // }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlledForm