import {AuthLayout} from "../../layout/AuthLayout.tsx";
import {SecondPhaseRegisterFormik} from "../../../component/formik/auth/register/SecondPhaseRegisterFormik.tsx";

export const SecondPhaseRegisterView = () => {
    document.title = "Register | Dwelar"

    return(
      <AuthLayout title={"Welcome to Dwelar"} subTitle={"Please create your account now"} style={{
          marginTop: 0,
          width: "50%",
          borderWidth: 2,
          borderColor: "black",
          paddingRight: 0,
          paddingLeft: 0
      }}>
        <SecondPhaseRegisterFormik />
      </AuthLayout>
  )
}