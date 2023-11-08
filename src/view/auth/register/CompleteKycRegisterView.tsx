import {AuthLayout} from "../../layout/AuthLayout.tsx";
import {CompleteKycRegisterFormik} from "../../../component/formik/auth/register/CompleteKycRegisterFormik.tsx";

export const CompleteKycRegisterView = () => {
    document.title = "Register | Dwelar"

    return(
      <AuthLayout title={"Complete KYC"} subTitle={"We will be needing some information to help us know you better"} style={{
          marginTop: 0
      }}>
        <CompleteKycRegisterFormik />
      </AuthLayout>
  )
}