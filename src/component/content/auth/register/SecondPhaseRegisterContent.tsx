
import {useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../../../util/constant/RouterConstantUtil.ts";
import {BaseInput} from "../../../input/BaseInput.tsx";
import {BaseButton} from "../../../button/BaseButton.tsx";

export const SecondPhaseRegisterContent = () => {
    const navigate= useNavigate()
    function handleRegisterNavigate() {
        navigate(RouterConstantUtil.routes.auth.firstPhaseRegister)
    }

    function handleRegister() {
        navigate(RouterConstantUtil.routes.auth.verifyYourAccount)
    }

    return(
        <>
            <BaseInput placeholder={"Start with first name"} label={"Full Name"} />
            <BaseInput placeholder={"Input your email address"} label={"Email"} />
            <BaseInput placeholder={"Input your password"} label={"Password"} />
            <BaseInput placeholder={"Input your password"} label={"Confirm Password"} />

            <BaseButton title={"Register"} onClick={handleRegister} containerStyle={{marginTop: 25}} />
            <p className={"text-grayColor_1 text-[18px] text-center cursor-pointer"} onClick={handleRegisterNavigate}>
                Already have an account? <span className={"text-blackColor"}>Login</span>
            </p>

            <p className={"text-grayColor_1 text-[18px] text-center mt-5 mb-5"}>
                Or Register using
            </p>
            <div className={"flex justify-center items-center gap-5"}>
                <img src={"/src/assets/icon/google.svg"} className={"social-icon"} alt={"google"}/>
                <img src={"/src/assets/icon/apple.svg"} className={"social-icon"} alt={"apple"}/>
                <img src={"/src/assets/icon/facebook.svg"} className={"social-icon"} alt={"facebook"}/>
            </div>
        </>
    )
}