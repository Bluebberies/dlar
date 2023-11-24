import PasswordResetSuccessful from "@/component/content/page/PassworrdReset/PasswordResetSuccessful.tsx";
import { ThemeUtil } from "@/util/ThemeUtil";
import {AuthLayout} from "@/view/layout/AuthLayout.tsx";

export const PasswordResetSuccessfulView = () => {

    document.title = "Reset Email Sent | Dwelar";

    return (
      <AuthLayout
        title={""}
        subTitle={""}
        style={{
          marginTop: "50px",
        }}
        bgImage={ThemeUtil.image.pool_view1}
      >
        <PasswordResetSuccessful />
      </AuthLayout>
    );
  };
