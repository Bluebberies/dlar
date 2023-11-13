import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../../util/constant/RouterConstantUtil.ts";
import { BaseButton } from "../../../button/BaseButton.tsx";
import { ThemeUtil } from "../../../../util/ThemeUtil.ts";

function PasswordResetSuccessful() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate(RouterConstantUtil.routes.auth.login);
  }

  return (
    <div className={"mt-[10px] flex flex-col items-center p-10"}>
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
        You have successfully reset your password You can now login to your
        account with the new password.
      </p>
      <BaseButton
        title={"Continue"}
        onClick={handleLogin}
        containerClassName={`w-[3rem]`}
        containerStyle={{ width: "70%" }}
      />
    </div>
  );
}

export default PasswordResetSuccessful;
