import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, Component }) => {
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
