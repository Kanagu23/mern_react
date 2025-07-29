import React, { useState } from 'react';

function FormWithValidation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = 'Name must contain only letters.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Form submitted:\nName: ${name}\nEmail: ${email}`);
      setName('');
      setEmail('');
      setErrors({});
    }
  };

  const inputStyle = {
    padding: '8px',
    width: '250px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '5px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.9em',
    marginBottom: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Name:</label>
        <input
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}
      </div>

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

export default FormWithValidation;
