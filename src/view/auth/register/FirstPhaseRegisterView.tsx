import {AuthLayout} from "../../layout/AuthLayout.tsx";
import {FirstPhaseRegisterFormik} from "../../../component/formik/auth/register/FirstPhaseRegisterFormik.tsx";

export const FirstPhaseRegisterView = () => {
    document.title = "Register | Dwelar"

    return(
      <AuthLayout title={"Welcome to Dwelar"} subTitle={"Please create your account now"} style={{
          width:"40%"
      }}>
        <FirstPhaseRegisterFormik />
      </AuthLayout>
  )
}