import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../../util/constant/RouterConstantUtil.ts";
import { BaseInput } from "../../../input/BaseInput.tsx";
import { BaseButton } from "../../../button/BaseButton.tsx";
import { ThemeUtil } from "../../../../util/ThemeUtil.ts";
import useHandleRouteNavigate from "../../../../util/customhooks/useHandleRouteNavigate.tsx";
import { LoginContentProps } from "../LoginContent.tsx";

export const FirstPhaseRegisterContent = ({ routeUrl }: LoginContentProps) => {
  const navigate = useNavigate();

  function handleRegister() {
    navigate(RouterConstantUtil.routes.page.emailVerificationSuccessful);
  }

  return (
    <div className={"w-[90%]"}>
      <BaseInput
        placeholder={"Start with first name"}
        label={"Full Name"}
        labelStyle={{ fontSize: "20px" }}
      />
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
      <BaseInput
        placeholder={"Input your password"}
        label={"Confirm Password"}
        labelStyle={{ fontSize: "20px" }}
        type="password"
      />
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
        title={"Register"}
        onClick={handleRegister}
        containerStyle={{ marginTop: 25 }}
      />
      <p
        className={
          "text-grayColor_1 text-[20px] max-[425px]:hidden text-center cursor-pointer font-darkerGrotesque-medium"
        }
        // onClick={handleRegisterNavigate}
      >
        Already have an account?{" "}
        <span
          onClick={useHandleRouteNavigate(routeUrl)}
          className={"text-blackColor font-darkerGrotesque-bold"}
        >
          Login
        </span>
      </p>

      <p
        className={
          "text-blackColor font-darkerGrotesque-bold text-[18px] text-center mt-5 mb-5 "
        }
      >
        Or Login using
      </p>
      <div className={"flex justify-center items-center gap-5"}>
        <img
          src={ThemeUtil.icon.google}
          className={"social-icon"}
          alt={"google"}
        />
        <img
          src={ThemeUtil.icon.apple}
          className={"social-icon"}
          alt={"apple"}
        />
        <img
          src={ThemeUtil.icon.facebook}
          className={"social-icon"}
          alt={"facebook"}
        />
      </div>
    </div>
  );
};
