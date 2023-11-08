import { RouterConstantUtil } from "../../util/constant/RouterConstantUtil.ts";
import { LoginView } from "../../view/auth/LoginView.tsx";
// import {FirstPhaseRegisterView} from "../../view/auth/register/FirstPhaseRegisterView.tsx";
// import {SecondPhaseRegisterView} from "../../view/auth/register/SecondPhaseRegisterView.tsx";
import { VerifyYourAccountView } from "../../view/auth/VerifyYourAccountView.tsx";
// import { SuccessfulView } from "../../view/auth/EmailVerificationSuccessfulView.tsx";
// import { CompleteKycRegisterView } from "../../view/auth/register/CompleteKycRegisterView.tsx";
import RegistrationPhases from "../../view/auth/register/RegistrationPhases.tsx";
import { FirstPhaseRegisterView } from "../../view/auth/register/FirstPhaseRegisterView.tsx";
// import { EmailVerificationSuccessful } from "./../../component/content/auth/EmailVerificationSuccessful";
// import { EmailVerificationSuccessfulView } from "./../../view/auth/EmailVerificationSuccessfulView";
// import { RegistrationCompletedView } from "../../view/auth/RegistrationCompleted.tsx";
// import RegistrationComplete from './../../component/content/auth/RegistrationComplete';

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
  {
    component: FirstPhaseRegisterView,
    path: RouterConstantUtil.routes.auth.baseRegisterRoute,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: RegistrationPhases,
    path: RouterConstantUtil.routes.auth.registrationPhases,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },

  // {
  //   component: VerifyYourAccountView,
  //   path: RouterConstantUtil.routes.auth.verifyYourAccount,
  //   meta: {
  //     isAuth: false,
  //     redirectTo: undefined,
  //   },
  //   options: {},
  // },
  //   {
  //     component: CompleteKycRegisterView,
  //     path: RouterConstantUtil.routes.auth.completeKyc,
  //     meta: {
  //       isAuth: false,
  //       redirectTo: undefined,
  //     },
  //     options: {},
  //   },
];
