import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil.ts";
import {AuthLayout} from "@/view/layout/AuthLayout.tsx";
import {EmailVerificationSuccessfulContent} from "@/component/content/page/EmailVerificationSuccessfulContent.tsx";

export const EmailVerificationSuccessfulView = () => {
  document.title = "Email verified 🎉| Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.login;

  return (
    <AuthLayout
      title={""}
      subTitle={""}
      style={{
        marginTop: "50px",
        padding: "10px 0",
      }}
      footerNextRouteType="login"
      routeUrl={routeUrl}
    >
      <EmailVerificationSuccessfulContent routeUrl={routeUrl} />
    </AuthLayout>
  );
};
