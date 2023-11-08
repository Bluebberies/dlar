import { AuthLayout } from "../layout/AuthLayout.tsx";
import { EmailVerificationSuccessful } from "../../component/content/page/EmailVerificationSuccessful.tsx";
import { RouterConstantUtil } from "../../util/constant/RouterConstantUtil.ts";

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
      <EmailVerificationSuccessful routeUrl={routeUrl} />
    </AuthLayout>
  );
};
