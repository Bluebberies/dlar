import {useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../../util/constant/RouterConstantUtil.ts";
import {BaseButton} from "../../button/BaseButton.tsx";
import {ThemeUtil} from "../../../util/ThemeUtil.ts";

export const SuccessfulContent = () => {
    const navigate = useNavigate()

    function handleLogin() {
        navigate(RouterConstantUtil.routes.auth.login)
    }

  return(
      <div className={"mt-[10px] flex flex-col items-center"}>
          <img src={ThemeUtil.image.celebration} className={"h-[200px] w-[200px]"} alt={"celebration"} />
          <h2 className={"text-[48px] leading-[65px] mt-[30px] font-darkerGrotesque-bold"}>
              Email Address Verified!
          </h2>
          <p className={"text-grayColor_2 text-[28px] mb-[20px] leading-[25px]"}>
              You have successfully verified your email address,
              Please login to your account to get started.
          </p>
          <BaseButton title={"Login"} onClick={handleLogin}  />
      </div>
  )
}