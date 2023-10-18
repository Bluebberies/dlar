import {BaseInput} from "../../input/BaseInput.tsx";
import {BaseButton} from "../../button/BaseButton.tsx";
import {useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../../util/constant/RouterConstantUtil.ts";

export const VerifyYourAccountContent = () => {
    const navigate = useNavigate()
    function handleVerify() {
        navigate(RouterConstantUtil.routes.auth.successful)
    }
  return(
      <div className={"mt-[250px]"}>
        <BaseInput  />
          <BaseButton title={"Verify email address"} onClick={handleVerify}  />
      </div>
  )
}