import { AuthLayout } from "../layout/AuthLayout.tsx";
import { RouterConstantUtil } from "../../util/constant/RouterConstantUtil.ts";
import RegistrationComplete from "../../component/content/page/RegistrationComplete.tsx";

export const RegistrationCompletedView = () => {
  document.title = "Registration Completed | Dwelar";

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
      <RegistrationComplete routeUrl={routeUrl} />
    </AuthLayout>
  );
};
