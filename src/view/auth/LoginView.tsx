import {AuthLayout} from "../layout/AuthLayout.tsx";
import {LoginContent} from "../../component/content/auth/LoginContent.tsx";

export const LoginView = () => {
    document.title = "Login | Dwelar"

  return(
    <AuthLayout>
      <LoginContent />
    </AuthLayout>
  )
}
