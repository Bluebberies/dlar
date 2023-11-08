import {AuthLayout} from "../layout/AuthLayout.tsx";
import {LoginFormik} from "../../component/formik/auth/LoginFormik.tsx";

export const LoginView = () => {
    document.title = "Login | Dwelar"

  return(
    <AuthLayout style={{
        marginTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        width: "50%"
    }}>
      <LoginFormik />
    </AuthLayout>
  )
}
