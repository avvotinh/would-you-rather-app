import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path, element: Component, ...rest }) => {
  const authUser = useSelector((state) => state.authUser);

  return authUser ? (
    <Route path={path} element={<Component {...rest} />} {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
