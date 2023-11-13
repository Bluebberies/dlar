import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil.ts";
import {AuthLayout} from "@/view/layout/AuthLayout.tsx";
import RegistrationCompleteContent from "@/component/content/page/RegistrationCompleteContent.tsx";

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
      <RegistrationCompleteContent routeUrl={routeUrl} />
    </AuthLayout>
  );
};
