// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ isLoggedIn, Component }) => {
//   return isLoggedIn ? <Component /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ isLoggedIn, Component, componentProps }) => {
//   return isLoggedIn ? <Component {...componentProps} /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;



import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, Component, ...rest }) => {
  const location = useLocation();

  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext"; 

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useAuth(); // Access the login state

//   // If the user is not logged in, redirect to the login page
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   // If the user is logged in, render the requested component
//   return children;
// };

// export default ProtectedRoute;