import { AuthLayout } from "../../layout/AuthLayout.tsx";
import { PasswordResetEmailSent } from "../../../component/content/page/PassworrdReset/PasswordResetEmailSent.tsx";

export const PasswordResetEmailSentView = () => {
  document.title = "Reset Email Sent | Dwelar";

  return (
    <AuthLayout
      title={""}
      subTitle={""}
      style={{
        marginTop: "50px",
      }}
    >
      <PasswordResetEmailSent />
    </AuthLayout>
  );
};
