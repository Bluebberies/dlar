import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import { BaseButton } from "../../button/BaseButton.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import useHandleRouteNavigate from "../../../util/customhooks/useHandleRouteNavigate.tsx";
import { LoginContentProps } from "../auth/LoginContent.tsx";
import React from "react";

function RegistrationComplete({ routeUrl }: LoginContentProps) {
  const navigate = useNavigate();

  function handleLogin() {
    navigate(RouterConstantUtil.routes.auth.login);
  }

  return (
    <div className={"mt-[10px] flex flex-col items-center"}>
      <img
        src={ThemeUtil.image.celebration}
        className={"h-[200px] w-[200px]"}
        alt={"celebration"}
      />
      <h2
        className={
          "text-[48px] max-[425px]:leading-[45px] mb-2 leading-[65px] mt-[30px] text-center font-darkerGrotesque-bold"
        }
      >
        Congratulations
      </h2>
      <p
        className={
          "text-grayColor_2 text-[28px] text-center mb-[20px] leading-[25px]"
        }
      >
        You have successfully set up your marketplace, please log in to start
        selling properties.
      </p>
      <BaseButton
        title={"Login"}
        onClick={handleLogin}
        containerClassName={`w-[3rem]`}
        containerStyle={{ width: "70%" }}
      />
      <p
        className={
          "text-grayColor_1 text-[20px] text-center max-[425px]:hidden cursor-pointer font-darkerGrotesque-medium"
        }
        onClick={useHandleRouteNavigate(routeUrl)}
      >
        Already have an account?{" "}
        <span className={"text-blackColor font-darkerGrotesque-bold"}>
          Login
        </span>
      </p>
    </div>
  );
}

export default RegistrationComplete;
