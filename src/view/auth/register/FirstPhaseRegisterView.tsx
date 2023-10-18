import {AuthLayout} from "../../layout/AuthLayout.tsx";
import {FirstPhaseRegisterContent} from "../../../component/content/auth/register/FirstPhaseRegisterContent.tsx";

export const FirstPhaseRegisterView = () => {
    document.title = "Register | Dwelar"

    return(
      <AuthLayout title={"Welcome to Dwelar"} subTitle={"Please create your account now"}>
        <FirstPhaseRegisterContent />
      </AuthLayout>
  )
}