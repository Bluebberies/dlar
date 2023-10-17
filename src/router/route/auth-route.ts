import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";
import {LoginView} from "../../view/auth/LoginView.tsx";
import {FirstPhaseRegisterView} from "../../view/auth/register/FirstPhaseRegisterView.tsx";
import {SecondPhaseRegisterView} from "../../view/auth/register/SecondPhaseRegisterView.tsx";

export const authRoute = [
    {
        component: LoginView,
        path: RouterConstantUtil.routes.auth.login,
        meta: {
            isAuth: false,
            redirectTo: undefined
        },
        options: {},
    },
    {
        component: FirstPhaseRegisterView,
        path: RouterConstantUtil.routes.auth.firstPhaseRegister,
        meta: {
            isAuth: false,
            redirectTo: undefined        },
        options: {},
    },
    {
        component: SecondPhaseRegisterView,
        path: RouterConstantUtil.routes.auth.secondPhaseRegister,
        meta: {
            isAuth: false,
            redirectTo: undefined        },
        options: {},
    }
]