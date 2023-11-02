// Register.js
import React, { useState } from 'react';
import './form.css';

const Register = ({ existingUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (existingUsers.includes(username)) {
      setErrorMessage('User already exists. Please choose a different username.');
    } else {
      // Implement your registration logic here
      // Example: Register the user in a database or an authentication service
      console.log(`Registered user: ${username}`);
      setErrorMessage('');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
