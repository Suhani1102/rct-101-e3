import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuthorised } = useContext(AuthContext);
  if (isAuthorised) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequiredAuth;
