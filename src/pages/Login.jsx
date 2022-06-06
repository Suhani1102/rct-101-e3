import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [loginCred, setLoginCred] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
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
    login(loginCred.email, loginCred.password);
    console.log(loginCred);
  };

  return (
    <div className={styles.content}>
      <p>Login</p>
      <input
        name="email"
        type="email"
        placeholder="Enter Email"
        value={loginCred.email}
        onChange={handleChange}
        data-cy="login-email"
      />
      <input
        name="password"
        type="password"
        placeholder="Enter Password..."
        value={loginCred.password}
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
