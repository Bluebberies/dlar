import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import { BaseButton } from "../../button/BaseButton.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import useHandleRouteNavigate from "../../../util/customhooks/useHandleRouteNavigate.tsx";
import { LoginContentProps } from "../auth/LoginContent.tsx";

export const EmailVerificationSuccessful = ({
  routeUrl,
}: LoginContentProps) => {
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
        Email Address Verified!
      </h2>
      <p
        className={
          "text-grayColor_2 text-[28px] text-center mb-[20px] leading-[25px]"
        }
      >
        {/* You have successfully verified your email address, Please login to your
        account to get started. */}
        You have successfully verified your email address, Please proceed to get
        started.
      </p>
      <BaseButton
        title={"Proceed"}
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
};
