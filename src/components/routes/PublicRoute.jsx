import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import routes from "../../utilities/routes";

const PublicRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);

  console.log(isLogin);

  if (isLogin) return <Navigate to={routes.account} />;

  return children;
};

export default PublicRoute;
