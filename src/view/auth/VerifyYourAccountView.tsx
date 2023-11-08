import {AuthLayout} from "../layout/AuthLayout.tsx";
import {VerifyYourAccountFormik} from "../../component/formik/auth/VerifyYourAccountFormik.tsx";

export const VerifyYourAccountView = () => {
    document.title = "Verify Your Account | Dwelar"

    return(
      <AuthLayout  title={"Verify your Email Address!"} subTitle={"You have successfully registered to Dwelar. \n" +
          "Please input the code sent to your mail to verify your email address."} >
          <VerifyYourAccountFormik />
      </AuthLayout>
  )
}