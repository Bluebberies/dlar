import { RouterConstantUtil } from "../../util/constant/RouterConstantUtil.ts";
import { OverviewView } from "../../view/pages/OverviewView.tsx";
import { NoPageFoundView } from "../../view/pages/NoPageFoundView.tsx";
import { HomeView } from "../../view/pages/HomeView.tsx";
import { LoginView } from "../../view/auth/LoginView.tsx";
import { SearchResultView } from "../../view/pages/SearchResultView.tsx";
import { PropertyDetailsView } from "../../view/pages/PropertyDetailsView.tsx";
import { BookmarkView } from "../../view/pages/BookmarkView.tsx";
import { EmailVerificationSuccessfulView } from "../../view/pages/EmailVerificationSuccessfulView.tsx";
import { RegistrationCompletedView } from "../../view/pages/RegistrationCompleted.tsx";
import { ResetPasswordView } from "../../view/pages/passwordReset/ResetPasswordView.tsx";
import { PasswordResetEmailSentView } from "../../view/pages/passwordReset/PasswordResetEmailSentView.tsx";
import { PasswordResetSuccessfulView } from "../../view/pages/passwordReset/PasswordResetSuccessful.tsx";
import ReferralsView from "../../view/pages/ReferralsView.tsx";

export const pageRoute = [
  {
    component: OverviewView,
    path: RouterConstantUtil.routes.page.overview,
    meta: {
      isAuth: true,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: LoginView,
    path: "/",
    meta: {
      isAuth: false,
      redirectTo: RouterConstantUtil.routes.auth.login,
    },
    options: {},
  },
  {
    component: NoPageFoundView,
    path: "*",
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: HomeView,
    path: RouterConstantUtil.routes.page.home,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: SearchResultView,
    path: RouterConstantUtil.routes.page.searchResult,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: PropertyDetailsView,
    path: RouterConstantUtil.routes.page.propertyDetails,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: BookmarkView,
    path: RouterConstantUtil.routes.page.bookmark,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: EmailVerificationSuccessfulView,
    path: RouterConstantUtil.routes.page.emailVerificationSuccessful,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: RegistrationCompletedView,
    path: RouterConstantUtil.routes.page.registrationCompleted,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ResetPasswordView,
    path: RouterConstantUtil.routes.page.basePasswordReset,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ResetPasswordView,
    path: RouterConstantUtil.routes.page.passwordReset,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: PasswordResetEmailSentView,
    path: RouterConstantUtil.routes.page.passwordResetEmailSent,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: PasswordResetSuccessfulView,
    path: RouterConstantUtil.routes.page.passwordResetSuccessful,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ReferralsView,
    path: RouterConstantUtil.routes.page.referrals,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
];
