import { BaseInput } from "../../input/BaseInput.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import { BaseButton } from "../../button/BaseButton.tsx";
import { RouterConstantUtil } from "../../../util/constants/RouterConstantUtil.ts";
import { useNavigate } from "react-router-dom";
import Google from "../../../assets/icon/google.svg";
import Apple from "../../../assets/icon/apple.svg";
import Facebook from "../../../assets/icon/facebook.svg";
import { FilterCheckbox } from "../../checkbox/FilterCheckbox.tsx";
import { useDispatch } from "react-redux";
import { auth } from "@/store/module/auth.ts";

// import useHandleRouteNavigate from "../../../util/customhooks/useHandleRouteNavigate.tsx";
// import { useEffect } from "react";

// export interface LoginContentProps{
//   routeUrl: string
// }

// {routeUrl}: LoginContentProps
export const LoginFormik = () => {
  const navigate = useNavigate();
  const { updateAuthState } = auth.mutation;

  function handleRegisterNavigate() {
    navigate(RouterConstantUtil.routes.auth.firstPhaseRegister);
  }

  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(updateAuthState());
    navigate(RouterConstantUtil.routes.page.home);
  }

  return (
    <div className="max-[700px]:w-full w-[70%] mt-[1rem] my-6">
      <BaseInput
        placeholder={"Input your email address"}
        label={"Email"}
        labelStyle={{ fontSize: "20px" }}
        type="email"
      />
      <BaseInput
        placeholder={"Input your password"}
        label={"Password"}
        labelStyle={{ fontSize: "20px" }}
        type="password"
      />
      <div className={"login-checkbox-forgot-password"}>
        {/* <div className={"login-checkbox-dev"}>
          <BaseInput
            type={"checkbox"}
            className={"login-checkbox bg-inherit"}
            style={{ border: 1, borderColor: ThemeUtil.color.primaryColor }}
            containerStyle={{ height: 0 }}
            inputStyle={{ backgroundColor: "inherit" }}
          />
          <span
            style={{
              color: ThemeUtil.color.grayColor_1,
              fontSize: 20,
            }}
          >
            Remember me
          </span>
        </div> */}
        <FilterCheckbox label="Remember me" />
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
          "text-blackColor text-[18px] text-center max-[425px]:mt-6 mt-5 mb-5 font-darkerGrotesque-medium"
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
        className={
          " max-[425px]:hidden text-grayColor_1 text-[18px] text-center mt-4 cursor-pointer"
        }
        onClick={handleRegisterNavigate}
      >
        Don&quot;t have an account yet?{" "}
        <span
          className={"text-blackColor font-darkerGrotesque-bold"}
          // onClick={useHandleRouteNavigate(routeUrl)}
        >
          Register
        </span>
      </p>
    </div>
  );
};
