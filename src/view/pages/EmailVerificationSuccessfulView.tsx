import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
import { AuthLayout } from "@/view/layout/AuthLayout.tsx";
import { EmailVerificationSuccessfulContent } from "@/component/content/page/EmailVerificationSuccessfulContent.tsx";
import { ThemeUtil } from "@/util/ThemeUtil";

export const EmailVerificationSuccessfulView = () => {
  document.title = "Email verified 🎉| Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.login;

  return (
    <AuthLayout
      title={""}
      subTitle={""}
      style={{
        marginTop: "20px",
        padding: "10px 0",
        paddingBottom: "3rem",
      }}
      footerNextRouteType="login"
      routeUrl={routeUrl}
      bgImage={ThemeUtil.image.pool_view1}
    >
      <EmailVerificationSuccessfulContent routeUrl={routeUrl} />
    </AuthLayout>
  );
};
