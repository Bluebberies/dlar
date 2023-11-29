import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil.ts";
import { BaseButton } from "../../../button/BaseButton.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { BaseInput } from "../../../input/BaseInput.tsx";

export const ResetPassword = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate(RouterConstantUtil.routes.auth.login);
  }

  return (
    <div className={"w-[90%] mt-[1rem]"}>
      <BaseInput
        label={"Email address"}
        labelStyle={{ fontSize: "20px" }}
        placeholder="Input your email address"
        type="email"
      />

      <BaseButton
        title={"Reset Password"}
        onClick={handleLogin}
        // buttonStyle={{fontSize: '20px'}}
        // containerClassName={`w-[3rem]`}
        // containerStyle={{ width: "70%" }}
      />
      <BaseButton
        title={"Back"}
        onClick={handleLogin}
        buttonStyle={{
          backgroundColor: "transparent",
          color: ThemeUtil.color.blackColor,
        }}
        // containerClassName={`w-[3rem]`}
      />
    </div>
  );
};
