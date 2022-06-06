import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    if (username == "eve.holt@reqres.in" && password == "cityslicka") {
      setIsAuthorised(true);
      navigate("/");
    }
  };

  const logout = () => {
    setIsAuthorised(false);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ isAuthorised, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
