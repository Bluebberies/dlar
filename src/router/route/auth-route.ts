import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
import { LoginView } from "@/view/auth/LoginView.tsx";
import { VerifyYourAccountView } from "@/view/auth/VerifyYourAccountView.tsx";
import { CompleteKycRegisterView } from "@/view/auth/register/CompleteKycRegisterView.tsx";
import RegistrationPhases from "@/view/auth/register/RegistrationPhases.tsx";

export const authRoute = [
  {
    component: LoginView,
    path: RouterConstantUtil.routes.auth.login,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  // {
  //     component: FirstPhaseRegisterView,
  //     path: RouterConstantUtil.routes.auth.firstPhaseRegister,
  //     meta: {
  //         isAuth: false,
  //         redirectTo: undefined        },
  //     options: {},
  // },
  // {
  //     component: SecondPhaseRegisterView,
  //     path: RouterConstantUtil.routes.auth.secondPhaseRegister,
  //     meta: {
  //         isAuth: false,
  //         redirectTo: undefined        },
  //     options: {},
  // },
  // {
  //   component: FirstPhaseRegisterView,
  //   path: RouterConstantUtil.routes.auth.firstPhaseRegister,
  //   meta: {
  //     isAuth: false,
  //     redirectTo: undefined,
  //   },
  //   options: {},
  // },
  {
    component: RegistrationPhases,
    path: RouterConstantUtil.routes.auth.registrationPhases,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },

  {
    component: VerifyYourAccountView,
    path: RouterConstantUtil.routes.auth.verifyUserAccount,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: CompleteKycRegisterView,
    path: RouterConstantUtil.routes.auth.completeKyc,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
];
