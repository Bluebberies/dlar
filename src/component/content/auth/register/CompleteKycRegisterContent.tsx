
import {useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../../../util/constant/RouterConstantUtil.ts";
import {BaseInput} from "../../../input/BaseInput.tsx";
import {BaseButton} from "../../../button/BaseButton.tsx";

export const CompleteKycRegisterContent = () => {
    const navigate= useNavigate()
    function handleRegisterNavigate() {
        navigate(RouterConstantUtil.routes.auth.firstPhaseRegister)
    }

    function handleFinish() {
        navigate(RouterConstantUtil.routes.auth.successful, {
            state:{
                title: "Congratulations",
                subtitle: "You have successfully set up your marketplace, please log in to start selling properties.",

            }
        })
    }

    return(
        <>
            <BaseInput superText={"+234- "} label={"Mobile Phone Number"} />
            <BaseInput superText={"+234- "} label={"WhatsApp Number"} />
            <BaseInput superText={"Enter BVN"} label={"Password"} />
            <BaseInput superText={"NIN"} label={"Confirm Password"} />

            <BaseButton title={"Finish"} onClick={handleFinish} containerStyle={{marginTop: 25}} />
            <p className={"text-grayColor_1 text-[18px] text-center cursor-pointer"} onClick={handleRegisterNavigate}>
                Already have an account? <span className={"text-blackColor"}>Login</span>
            </p>
        </>
    )
}