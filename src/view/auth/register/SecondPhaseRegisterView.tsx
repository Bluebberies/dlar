import { AuthLayout } from "../../layout/AuthLayout.tsx";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import {SecondPhaseRegisterFormik} from "../../../component/formik/auth/register/SecondPhaseRegisterFormik.tsx";

export const SecondPhaseRegisterView = () => {
  document.title = "Register | Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.login

  return (
    <AuthLayout
      // title={`Welcome to Dwelar`}
      title={"Welcome to <span class='uppercase text-[#18ACE8]'>D</span>welar"}
      subTitle={"Please create your account now"}
      style={{
      marginTop: '30px',
        // width: "50%",
        // borderWidth: 2,
        // borderColor: "black",
        // paddingLeft: 10,
        // paddingRight: 10,
        // padding: '0 100px'
      }}
      footerNextRouteType="login"
      routeUrl={routeUrl}
    >
      <SecondPhaseRegisterFormik/>
      {/* routeUrl={routeUrl} */}
    </AuthLayout>
  );
};
