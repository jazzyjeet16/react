import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);  // Fixed context name
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fixed: Accepting the event 'e' parameter in handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form submission
    setUser({ username, password });
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
