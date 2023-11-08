import PasswordResetSuccessfull from "../../../component/content/page/PassworrdReset/PasswordResetSuccessfull.tsx";
import { AuthLayout } from "../../layout/AuthLayout.tsx";

export const PasswordResetSuccessfullView = () => {

    document.title = "Reset Email Sent | Dwelar";

    return (
      <AuthLayout
        title={""}
        subTitle={""}
        style={{
          marginTop: "50px",
        }}
      >
        <PasswordResetSuccessfull />
      </AuthLayout>
    );
  };
