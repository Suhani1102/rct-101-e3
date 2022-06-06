import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCred, setLoginCred] = useState({});
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCred({
      ...loginCred,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <input
        name="email"
        type="email"
        placeholder="Enter Email"
        onChange={handleChange}
        data-cy="login-email"
      />
      <input
        name="password"
        type="password"
        placeholder="Enter Password..."
        onChange={handleChange}
        data-cy="login-password"
      />
      <button onClick={handleSubmit} data-cy="login-submit">
        Login
      </button>
    </div>
  );
};

export default Login;
