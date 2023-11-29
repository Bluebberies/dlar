import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../util/constants/RouterConstantUtil.ts";
import { BaseButton } from "../../button/BaseButton.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import useHandleRouteNavigate from "../../../util/customhooks/useHandleRouteNavigate.tsx";

type EmailVerificationSuccessfulContentProps = {
  routeUrl: string;
};
export const EmailVerificationSuccessfulContent = ({
  routeUrl,
}: EmailVerificationSuccessfulContentProps) => {
  const navigate = useNavigate();

  function handleLogin() {
    const userId = "iowh89y4u9buhru9";

    navigate(`${RouterConstantUtil.routes.auth.baseCompleteKyc}/${userId}`);
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
          "text-[48px] text-[#111110] max-[425px]:leading-[45px] mb-2 leading-[65px] mt-[30px] text-center font-darkerGrotesque-bold"
        }
      >
        Email Address Verified!
      </h2>
      <p
        className={
          "text-grayColor_2 font-semibold  font-medium text-[28px] text-center mb-[20px] leading-[25px]"
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
