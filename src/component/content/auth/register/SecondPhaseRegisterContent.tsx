
import {useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../../../util/constant/RouterConstantUtil.ts";
import {BaseInput} from "../../../input/BaseInput.tsx";
import {BaseButton} from "../../../button/BaseButton.tsx";
import {ThemeUtil} from "../../../../util/ThemeUtil.ts";

export const SecondPhaseRegisterContent = () => {
    const navigate= useNavigate()
    function handleRegisterNavigate() {
        navigate(RouterConstantUtil.routes.auth.firstPhaseRegister)
    }

    function handleRegister() {
        navigate(RouterConstantUtil.routes.auth.verifyYourAccount)
    }

    return(
        <div className={"w-full"}>
            <BaseInput placeholder={"Start with first name"} label={"Full Name"} />
            <BaseInput placeholder={"Input your email address"} label={"Email"} />
            <BaseInput placeholder={"Input your password"} label={"Password"} />
            <BaseInput placeholder={"Input your password"} label={"Confirm Password"} />

            <BaseButton title={"Register"} onClick={handleRegister} containerStyle={{marginTop: 25}} />
            <p className={"text-grayColor_1 text-[20px] text-center cursor-pointer font-darkerGrotesque-medium"} onClick={handleRegisterNavigate}>
                Already have an account? <span className={"text-blackColor font-darkerGrotesque-bold"}>Login</span>
            </p>

            <p className={"text-blackColor font-darkerGrotesque-medium text-[18px] text-center mt-5 mb-5 "}>
                Or Register using
            </p>
            <div className={"flex justify-center items-center gap-5"}>
                <img src={ThemeUtil.icon.google} className={"social-icon"} alt={"google"}/>
                <img src={ThemeUtil.icon.apple} className={"social-icon"} alt={"apple"}/>
                <img src={ThemeUtil.icon.facebook} className={"social-icon"} alt={"facebook"}/>
            </div>
        </div>
    )
}