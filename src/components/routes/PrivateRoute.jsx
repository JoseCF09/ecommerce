import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import routes from "../../utilities/routes";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isLogin)
    return <Navigate to={routes.signin} state={{ from: location }} />;

  return children;
};

export default PrivateRoute;
