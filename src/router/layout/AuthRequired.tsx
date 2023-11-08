import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RouterConstantUtil } from "../../util/constant/RouterConstantUtil.ts";

type AuthRequiredProps = {
  isAuth: boolean;
  elem: React.JSX.Element;
};
export const AuthRequired = ({ isAuth, elem }: AuthRequiredProps) => {
  // const auth: boolean = true
  // const location = useLocation()

  if (isAuth) {
    return <Navigate to={RouterConstantUtil.routes.auth.login} />;
  }

  //   return <Outlet />
  return elem;
};
