import { AuthLayout } from "../../layout/AuthLayout.tsx";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import {CompleteKycRegisterFormik} from "../../../component/formik/auth/register/CompleteKycRegisterFormik.tsx";

export const CompleteKycRegisterView = () => {
  document.title = "Register | Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.baseRegisterRoute + '/2'
  return (
    <AuthLayout
      title={"Complete KYC"}
      subTitle={
        "We will be needing some information to help us know you better"
      }
      style={{
        marginTop: 0,
      }}
      footerNextRouteType="register"
      routeUrl={routeUrl}
    >
      <CompleteKycRegisterFormik />
    </AuthLayout>
  );
};
