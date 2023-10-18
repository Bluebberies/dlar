import {AuthLayout} from "../../layout/AuthLayout.tsx";
import {SecondPhaseRegisterContent} from "../../../component/content/auth/register/SecondPhaseRegisterContent.tsx";

export const SecondPhaseRegisterView = () => {
    document.title = "Register | Dwelar"

    return(
      <AuthLayout title={"Welcome to Dwelar"} subTitle={"Please create your account now"} style={{
          marginTop: 0
      }}>
        <SecondPhaseRegisterContent />
      </AuthLayout>
  )
}