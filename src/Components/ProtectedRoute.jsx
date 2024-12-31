


// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";

// const ProtectedRoute = ({ children}) => {
//   const location = useLocation();

//   return isLoggedIn ? (
//     <Component {...rest} />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} />
//   );
// };

// export default ProtectedRoute;


import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; 

const ProtectedRoute = ({ children }) => {
  const { userData } = useAuth(); // Access the login state

  // If the user is not logged in, redirect to the login page
  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the requested component
  return children;
};

export default ProtectedRoute;