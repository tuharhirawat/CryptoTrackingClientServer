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
