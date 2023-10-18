import {BaseButton} from "../../../button/BaseButton.tsx";
import {RouterConstantUtil} from "../../../../util/constant/RouterConstantUtil.ts";
import {useNavigate} from "react-router-dom";
import {SelectAgentCard} from "../../../card/SelectAgentCard.tsx";

export const FirstPhaseRegisterContent = () => {
    const navigate= useNavigate()
    function handleLoginNavigate() {
        navigate(RouterConstantUtil.routes.auth.login)
    }

    function handleNext() {
        navigate(RouterConstantUtil.routes.auth.secondPhaseRegister)
    }


  return(
      <>
          <h4 className={"mb-10 mt-20 text-[28px]"}>
              Register as
          </h4>
        <SelectAgentCard />
          <BaseButton title={"Next"} onClick={handleNext} containerStyle={{marginTop: 25}} />
          <p className={"text-grayColor_1 text-[18px] text-center cursor-pointer"} onClick={handleLoginNavigate}>
              Already have an account? <span className={"text-blackColor"}>Login</span>
          </p>
      </>
  )
}
