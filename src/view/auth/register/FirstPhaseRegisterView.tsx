import { AuthLayout } from "../../layout/AuthLayout.tsx";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import {FirstPhaseRegisterFormik} from "../../../component/formik/auth/register/FirstPhaseRegisterFormik.tsx";

export const FirstPhaseRegisterView = () => {
  document.title = "Register | Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.login;
  return (
    <AuthLayout
    title={"Welcome to Dwelar"}
    subTitle={"Please create your account now"}
    style={{
        // width: "40%",
        marginTop: 0,
      }}
      footerNextRouteType="login"
      routeUrl={routeUrl}
    >
      <FirstPhaseRegisterFormik  />
      {/* routeUrl={routeUrl} */}
    </AuthLayout>
  );
};
