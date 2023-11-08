
import {useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../../../util/constant/RouterConstantUtil.ts";
import {BaseInput} from "../../../input/BaseInput.tsx";
import {BaseButton} from "../../../button/BaseButton.tsx";

export const CompleteKycRegisterContent = () => {
    const navigate= useNavigate()
    function handleRegisterNavigate() {
        // navigate(RouterConstantUtil.routes.auth.firstPhaseRegister)
    }

    function handleFinish() {
        navigate(RouterConstantUtil.routes.page.home, {
            state:{
                title: "Congratulations",
                subtitle: "You have successfully set up your marketplace, please log in to start selling properties.",

            }
        })
    }

    return(
        <div className={"w-[90%] mt-[1rem]"}>
            <BaseInput superText={"+234- "} label={"Mobile Phone Number"} labelStyle={{ fontSize: "20px" }} superTextPosition="left"/>
            <BaseInput superText={"+234- "} label={"WhatsApp Number"} labelStyle={{ fontSize: "20px" }} superTextPosition="left"/>
            <BaseInput superText={"BVN"} label={"Enter BVN"} labelStyle={{ fontSize: "20px" }} type="password" superTextPosition="left"/>
            <BaseInput superText={"NIN"} label={"Enter your NIN"} labelStyle={{ fontSize: "20px" }} superTextPosition="left"/>

            <BaseButton title={"Finish"} onClick={handleFinish} containerStyle={{marginTop: 25}} />
            <p className={"max-[425px]:hidden text-grayColor_1 text-[18px] text-center cursor-pointer"} onClick={handleRegisterNavigate}>
                Already have an account? <span className={"text-blackColor"}>Login</span>
            </p>
        </div>
    )
}