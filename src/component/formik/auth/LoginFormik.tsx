import { BaseInput } from "../../input/BaseInput.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import { BaseButton } from "../../button/BaseButton.tsx";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import {useNavigate } from "react-router-dom";
import Google from "../../../assets/icon/google.svg";
import Apple from "../../../assets/icon/apple.svg";
import Facebook from "../../../assets/icon/facebook.svg";
// import useHandleRouteNavigate from "../../../util/customhooks/useHandleRouteNavigate.tsx";
// import { useEffect } from "react";

// export interface LoginContentProps{
//   routeUrl: string
// }

// {routeUrl}: LoginContentProps
export const LoginFormik = () => {
  const navigate = useNavigate();

  function handleRegisterNavigate() {
      navigate(RouterConstantUtil.routes.auth.firstPhaseRegister)
  }

  function handleLogin() {
    navigate(RouterConstantUtil.routes.page.home);
  }

  return (
    <div className="w-[90%] mt-[1rem]">
      <BaseInput placeholder={"Input your email address"} label={"Email"} labelStyle={{ fontSize: "20px" }} type="email"/>
      <BaseInput placeholder={"Input your password"} label={"Password"} labelStyle={{ fontSize: "20px" }} />
      <div className={"login-checkbox-forgot-password"}>
        <div className={"login-checkbox-dev"}>
          <BaseInput
            type={"checkbox"}
            className={"login-checkbox"}
            style={{ border: 1, borderColor: ThemeUtil.color.primaryColor }}
            containerStyle={{ height: 0 }}
          />
          <span
            style={{
              color: ThemeUtil.color.grayColor_1,
              fontSize: 20,
            }}
          >
            Remember me
          </span>
        </div>
        <span className={"text-[16px] font-darkerGrotesque-bold"}>
          Forgot Password?
        </span>
      </div>
      <BaseButton
        title={"Login"}
        onClick={handleLogin}
        containerStyle={{ marginTop: 25 }}
      />

      <p
        className={
          "text-blackColor text-[18px] text-center max-[425px]:mt-6 mt-10 mb-5 font-darkerGrotesque-medium"
        }
      >
        Or Login using
      </p>
      <div className={"flex justify-center items-center gap-5"}>
        <img src={Google} className={"social-icon"} alt={"google"} />
        <img src={Apple} className={"social-icon"} alt={"apple"} />
        <img src={Facebook} className={"social-icon"} alt={"facebook"} />
      </div>
      <p
        className={" max-[425px]:hidden text-grayColor_1 text-[18px] text-center mt-4 cursor-pointer"}
        onClick={handleRegisterNavigate}
      >
        Don&quot;t have an account yet?{" "}
        <span className={"text-blackColor font-darkerGrotesque-bold"} 
        // onClick={useHandleRouteNavigate(routeUrl)}
        >
          Register
        </span>
      </p>
    </div>
  );
};
