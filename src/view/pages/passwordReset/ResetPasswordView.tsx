import { useParams } from "react-router-dom";
import { AuthLayout } from "../../layout/AuthLayout.tsx";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import { ResetPassword } from "../../../component/content/page/PassworrdReset/ResetPassword.tsx";
import { useEffect, useState } from "react";
import { NoPageFoundView } from "../NoPageFoundView.tsx";
import { ResetPasswordWithToken } from "../../../component/content/page/PassworrdReset/ResetPasswordWithToken.tsx";

export const ResetPasswordView = () => {
  const [tokenStatus, setTokenStatus] = useState("");
  const { token } = useParams();

  document.title = "Forgot Password | Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.login;

  useEffect(() => {
    if (token) {
      setTokenStatus("valid");
    }
  }, [token]);

  if (tokenStatus == "valid") {
    return (
      <AuthLayout
        title={"Change your password"}
        subTitle={"reset your password to access your account"}
        style={{
          marginTop: "50px",
          padding: "10px 0",
        }}
        routeUrl={""}
      >
        <ResetPasswordWithToken />
      </AuthLayout>
    );
  }

  if (tokenStatus == "invalid") {
    return <NoPageFoundView />;
  }

  return (
    <AuthLayout
      title={"Forgot Password"}
      subTitle={"Let’s help you reset your password"}
      style={{
        marginTop: "50px",
        padding: "10px 0",
      }}
      routeUrl={routeUrl}
    >
      <ResetPassword />
    </AuthLayout>
  );
};
