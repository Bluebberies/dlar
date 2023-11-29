import { RouterConstantUtil } from "../../util/constants/RouterConstantUtil.ts";
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
import AboutPageView from "@/view/pages/About.tsx";
import ContactPageView from "@/view/pages/Contact.tsx";
import { AgentProfileView } from "@/view/pages/AgentProfileView.tsx";
import CompleteBookingsView from "@/view/pages/CompleteBookingView.tsx";
import ProfileView from "@/view/pages/profile/ProfileView.tsx";
import ProfileSettingsView from "@/view/pages/profile/ProfileSettingsView.tsx";
import NotificationsView from "@/view/pages/NotificationsView.tsx";
import ChatsView from "@/view/pages/ChatsView.tsx";

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
  // {
  //   component: LoginView,
  //   path: "/",
  //   meta: {
  //     isAuth: false,
  //     redirectTo: RouterConstantUtil.routes.auth.login,
  //   },
  //   options: {},
  // },
  {
    component: LoginView,
    path: RouterConstantUtil.routes.auth.login,
    meta: {
      isAuth: false,
      redirectTo: RouterConstantUtil.routes.auth.login,
    },
    options: {},
  },
  {
    component: HomeView,
    path: "/",
    meta: {
      isAuth: false,
      redirectTo: RouterConstantUtil.routes.page.home,
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
    component: SearchResultView,
    path: RouterConstantUtil.routes.page.recentlyUploaded,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: SearchResultView,
    path: RouterConstantUtil.routes.page.nearYou,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: SearchResultView,
    path: RouterConstantUtil.routes.page.recommended,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: SearchResultView,
    path: RouterConstantUtil.routes.page.forYou,
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
  {
    component: AboutPageView,
    path: RouterConstantUtil.routes.page.aboutPage,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ContactPageView,
    path: RouterConstantUtil.routes.page.contactPage,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: AgentProfileView,
    path: RouterConstantUtil.routes.page.agentProfile,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: CompleteBookingsView,
    path: RouterConstantUtil.routes.page.completeBookings,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ProfileView,
    path: RouterConstantUtil.routes.page.profile,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ProfileSettingsView,
    path: RouterConstantUtil.routes.page.profileSettings,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: NotificationsView,
    path: RouterConstantUtil.routes.page.notifications,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ChatsView,
    path: RouterConstantUtil.routes.page.chat,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
  {
    component: ChatsView,
    path: RouterConstantUtil.routes.page.chatGroup,
    meta: {
      isAuth: false,
      redirectTo: undefined,
    },
    options: {},
  },
];
