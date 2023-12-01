export const RouterConstantUtil = {
  routes: {
    auth: {
      login: "/auth/login",
      // baseRegisterRoute: "/auth/register",
      registrationPhases: "/auth/register/:phase",
      firstPhaseRegister: "/auth/register/user",
      secondPhaseRegister: "/auth/register/info",
      baseCompleteKyc: "/auth/completeKyc",
      completeKyc: "/auth/completeKyc/:id",
      // successful: "/auth/successful",
      baseAcountVerification: "/auth/verifyYourAccount",
      verifyUserAccount: "/auth/verifyYourAccount/:id",
      forgetPassword: "/auth/forgetPassword",
      completeForgetPassword: "/auth/completeForgetPassword",
      changeNewPassword: "/auth/changeNewPassword",
    },
    page: {
      baseEmailVerificationSuccessful: "/emailVerificationSuccessful",
      emailVerificationSuccessful: "/emailVerificationSuccessful/:token",
      registrationCompleted: "/registrationCompleted",
      basePasswordReset: "/resetPassword",
      passwordReset: "/resetPassword/:token",
      passwordResetEmailSent: "/resetEmailSent",
      passwordResetSuccessful: "/resetPasswordSuccess",
      overview: "/page/overview",
      noPageFound: "/page/noPageFound",
      home: "/page/home",
      baseFilteredPage: "/page/property/",
      searchResult: "/page/property/search-result",
      recentlyUploaded: "/page/property/recentlyUploaded",
      nearYou: "/page/property/nearYou",
      forYou: "/page/property/forYou",
      recommended: "/page/property/recommended",
      bookmark: "/page/bookmark",
      basePropertyDetails: "/page/property/details/",
      propertyDetails: "/page/property/details/:id",
      baseAgentProfile: "/page/agent/profile/",
      agentProfile: "/page/agent/profile/:id",
      referrals: "/page/referrals",
      aboutPage: "/page/aboutus",
      contactPage: "/page/contactus",
      baseCompleteBookings: "/page/completeBookings/",
      completeBookings: "/page/completeBookings/:propertyid",
      profile: "/profile",
      profileSettings: "/profile/settings",
      notifications: "/notifications",
      chat: "/chat",
      chatGroup: "/chat/:id",
      payForProperty: "/property/:propertyid/pay",
    },
  },
};
