import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../../util/constants/RouterConstantUtil.ts";
import { BaseButton } from "../../../button/BaseButton.tsx";
// import useHandleRouteNavigate from "../../../../util/customhooks/useHandleRouteNavigate.tsx";
// import { LoginContentProps } from "../LoginContent.tsx";
import { SelectAgentCard } from "../../../card/SelectAgentCard.tsx";

// { routeUrl }: LoginContentProps
export const FirstPhaseRegisterFormik = () => {
  const navigate = useNavigate();

  function handleLoginNavigate() {
    navigate(RouterConstantUtil.routes.auth.login);
  }

  function handleNext() {
    navigate(RouterConstantUtil.routes.auth.secondPhaseRegister);
  }

  return (
    <>
      <h4
        className={
          "mb-2 mt-10 max-[425px]:mt-5 text-[28px] font-darkerGrotesque-semiBold"
        }
      >
        Register as
      </h4>
      <SelectAgentCard />
      <BaseButton
        title={"Next"}
        onClick={handleNext}
        containerClassName={`max-[790px]:w-full w-[500px]`}
        containerStyle={{ marginTop: 25, width: "70%" }}
      />
      <p
        className={
          "text-grayColor_1 text-[20px] text-center max-[425px]:hidden cursor-pointer font-darkerGrotesque-medium"
        }
        // onClick={useHandleRouteNavigate(routeUrl)}
        onClick={handleLoginNavigate}
      >
        Already have an account?{" "}
        <span className={"text-blackColor font-darkerGrotesque-bold"}>
          Login
        </span>
      </p>
    </>
  );
};
