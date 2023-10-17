import {BaseInput} from "../input/BaseInput.tsx";
import {ThemeUtil} from "../../util/ThemeUtil.ts";
import {BaseButton} from "../button/BaseButton.tsx";
import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";
import {useNavigate} from "react-router-dom";

export const LoginContent = () => {
    const navigate= useNavigate()
    function handleRegisterNavigate() {
        navigate(RouterConstantUtil.routes.auth.firstPhaseRegister)
    }
  return(
      <>
          <BaseInput placeholder={"Input your email address"} label={"Email"} />
          <BaseInput placeholder={"Input your password"} label={"Password"} />
          <div className={"login-checkbox-forgot-password"}>
              <div className={"login-checkbox-dev"}>
                  <BaseInput  type={"checkbox"} className={"login-checkbox"} style={{border: 1, borderColor: ThemeUtil.color.primaryColor}}  />
                  <span style={{
                      color: ThemeUtil.color.grayColor_1,
                      fontSize: 20
                  }}>Remember me</span>
              </div>
              <span className={"text-[16px]"}>Forgot Password</span>
          </div>
          <BaseButton title={"Login"} containerStyle={{marginTop: 25}} />
          <p className={"text-grayColor_1 text-[18px] text-center cursor-pointer"} onClick={handleRegisterNavigate}>
              Don’t have an account yet? <span className={"text-blackColor"}>Register</span>
          </p>

          <p className={"text-grayColor_1 text-[18px] text-center mt-10 mb-10"}>
              Or Login using
          </p>
          <div className={"flex justify-center items-center gap-5"}>
              <img src={"/src/assets/icon/google.svg"} className={"social-icon"} alt={"google"}/>
              <img src={"/src/assets/icon/apple.svg"} className={"social-icon"} alt={"apple"}/>
              <img src={"/src/assets/icon/facebook.svg"} className={"social-icon"} alt={"facebook"}/>
          </div>
      </>
  )
}