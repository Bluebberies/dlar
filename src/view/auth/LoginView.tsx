import {AuthLayout} from "../layout/AuthLayout.tsx";
import {LoginContent} from "../../component/content/auth/LoginContent.tsx";

export const LoginView = () => {
    document.title = "Login | Dwelar"

  return(
    <AuthLayout style={{
        marginTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        width: "50%"
    }}>
      <LoginContent />
    </AuthLayout>
  )
}
