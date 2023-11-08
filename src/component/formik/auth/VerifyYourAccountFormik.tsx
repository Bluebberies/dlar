import {BaseButton} from "../../button/BaseButton.tsx";
import {useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../../util/constant/RouterConstantUtil.ts";
import {OtpInput} from "../../input/OtpInput.tsx";
import {useState} from "react";

export const VerifyYourAccountFormik = () => {
    const [otp, setOtp] = useState<string>("")
    const navigate = useNavigate()
    function handleVerify() {
        navigate(RouterConstantUtil.routes.page.emailVerificationSuccessful)
    }

    console.log(otp)
  return(
      <div className={"mt-[40px] w-[90%] py-4"}>
          <OtpInput onChangeText={setOtp} />
          <BaseButton title={"Verify email address"} onClick={handleVerify}  />
          <div className={"w-full flex items-center justify-end"}>
              <p className={"text-grayColor_1 text-[16px] leading-[20px] text-center cursor-pointer"} >
                  Code expires <span className={"text-blackColor font-darkerGrotesque-bold"}>00:58 mins</span>
              </p>
          </div>


          <p className={"text-blackColor mt-10 text-[20px] leading-[20px] text-center cursor-pointer font-darkerGrotesque-bold"} >
              Click here <span className={"text-grayColor_1 font-darkerGrotesque-medium"}>if you didn’t get the code</span>
          </p>
      </div>
  )
}
