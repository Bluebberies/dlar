import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";
import {LoginView} from "../../view/auth/LoginView.tsx";
import {FirstPhaseRegisterView} from "../../view/auth/register/FirstPhaseRegisterView.tsx";
import {SecondPhaseRegisterView} from "../../view/auth/register/SecondPhaseRegisterView.tsx";
import {VerifyYourAccountView} from "../../view/auth/VerifyYourAccountView.tsx";
import {SuccessfulView} from "../../view/auth/SuccessfulView.tsx";
import {CompleteKycRegisterView} from "../../view/auth/register/CompleteKycRegisterView.tsx";

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
    },
    {
        component: VerifyYourAccountView,
        path: RouterConstantUtil.routes.auth.verifyYourAccount,
        meta: {
            isAuth: false,
            redirectTo: undefined
        },
        options: {},
    },
    {
        component: SuccessfulView,
        path: RouterConstantUtil.routes.auth.successful,
        meta: {
            isAuth: false,
            redirectTo: undefined
        },
        options: {},
    },
    {
        component: CompleteKycRegisterView,
        path: RouterConstantUtil.routes.auth.completeKyc,
        meta: {
            isAuth: false,
            redirectTo: undefined
        },
        options: {},
    },
]