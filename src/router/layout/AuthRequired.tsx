import {Navigate, Outlet} from "react-router-dom";
import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";

type AuthRequiredProps={
    isAuth: boolean
}
export const AuthRequired = ({isAuth}:AuthRequiredProps) => {
    // const auth: boolean = true
    if (isAuth){
        return <Navigate to={RouterConstantUtil.routes.auth.login} />
    }
  return <Outlet />
}