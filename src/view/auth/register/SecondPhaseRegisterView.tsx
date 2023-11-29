import { AuthLayout } from "../../layout/AuthLayout.tsx";
import { RouterConstantUtil } from "../../../util/constants/RouterConstantUtil.ts";
import { SecondPhaseRegisterFormik } from "../../../component/formik/auth/register/SecondPhaseRegisterFormik.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";

export const SecondPhaseRegisterView = () => {
  document.title = "Register | Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.login;

  return (
    <AuthLayout
      // title={`Welcome to Dwelar`}
      title={"Welcome to <span class='uppercase text-[#18ACE8]'>D</span>welar"}
      subTitle={"Please create your account now"}
      style={{
        marginTop: "30px",
        // width: "50%",
        // borderWidth: 2,
        // borderColor: "black",
        // paddingLeft: 10,
        // paddingRight: 10,
        // padding: '0 100px'
      }}
      footerNextRouteType="login"
      routeUrl={routeUrl}
      bgImage={ThemeUtil.image.pool_view1}
    >
      <SecondPhaseRegisterFormik />
      {/* routeUrl={routeUrl} */}
    </AuthLayout>
  );
};
