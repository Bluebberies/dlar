import {AuthLayout} from "../layout/AuthLayout.tsx";
import {SuccessfulContent} from "../../component/content/auth/SuccessfulContent.tsx";

export const SuccessfulView = () => {
    document.title = "Verify Your Account | Dwelar"

    return(
      <AuthLayout  title={""} subTitle={""}>
          <SuccessfulContent />
      </AuthLayout>
  )
}