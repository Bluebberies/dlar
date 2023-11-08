import { AuthLayout } from "../../layout/AuthLayout.tsx";
import { FirstPhaseRegisterContent } from "../../../component/content/auth/register/FirstPhaseRegisterContent.tsx";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";

export const FirstPhaseRegisterView = () => {
  document.title = "Register | Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.login;
  return (
    <AuthLayout
    title={"Welcome back!"}
    subTitle={"Please create your account now"}
    style={{
        // width: "40%",
        marginTop: 0,
      }}
      footerNextRouteType="login"
      routeUrl={routeUrl}
    >
      <FirstPhaseRegisterContent routeUrl={routeUrl} />
    </AuthLayout>
  );
};
