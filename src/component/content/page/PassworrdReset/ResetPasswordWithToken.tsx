import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../../util/constants/RouterConstantUtil.ts";
import { BaseButton } from "../../../button/BaseButton.tsx";
import { BaseInput } from "../../../input/BaseInput.tsx";

export const ResetPasswordWithToken = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate(RouterConstantUtil.routes.auth.login);
  }

  return (
    <div className={"w-[90%] mt-[1rem]"}>
      <BaseInput
        label={"Confirm Password"}
        labelStyle={{ fontSize: "20px" }}
        placeholder="Please confirm your new password"
        type="password"
      />

      <BaseInput
        label={"New Password"}
        labelStyle={{ fontSize: "20px" }}
        placeholder="Input password"
        type="password"
      />

      <BaseButton
        title={"Change Password"}
        onClick={handleLogin}
        // buttonStyle={{fontSize: '20px'}}
        // containerClassName={`w-[3rem]`}
        // containerStyle={{ width: "70%" }}
      />
    </div>
  );
};
