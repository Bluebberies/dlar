import {AuthLayout} from "../../layout/AuthLayout.tsx";
import {CompleteKycRegisterContent} from "../../../component/content/auth/register/CompleteKycRegisterContent.tsx";

export const CompleteKycRegisterView = () => {
    document.title = "Register | Dwelar"

    return(
      <AuthLayout title={"Complete KYC"} subTitle={"We will be needing some information to help us know you better"} style={{
          marginTop: 0
      }}>
        <CompleteKycRegisterContent />
      </AuthLayout>
  )
}