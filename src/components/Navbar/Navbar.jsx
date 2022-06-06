import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuthorised, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (isAuthorised) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar" className={styles.navbar}>
      <Link to="/" data-cy="navbar-home-link">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleLogin} data-cy="navbar-login-logout-button">
        {isAuthorised ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
