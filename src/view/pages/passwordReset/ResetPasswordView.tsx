import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
import { AuthLayout } from "@/view/layout/AuthLayout.tsx";
import { ResetPasswordWithToken } from "@/component/content/page/PassworrdReset/ResetPasswordWithToken.tsx";
import { NoPageFoundView } from "@/view/pages/NoPageFoundView.tsx";
import { ResetPassword } from "@/component/content/page/PassworrdReset/ResetPassword.tsx";
import { ThemeUtil } from "@/util/ThemeUtil";

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
        paddingBottom: "5rem",
      }}
      routeUrl={routeUrl}
      bgImage={ThemeUtil.image.bedroom}
    >
      <ResetPassword />
    </AuthLayout>
  );
};
