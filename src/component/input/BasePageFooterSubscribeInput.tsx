import { BaseButton } from "../button/BaseButton.tsx";

export const BasePageFooterSubscribeInput = () => {
  return (
    <div
      className={
        "h-[70px] p-1 pl-5 rounded-2xl max-[1100px]:w-[500px] max-[1440px]:w-[600px] w-[700px] flex items-center gap-2 bg-white overflow-hidden "
      }
    >
      <input
        placeholder={"Please enter your email address..."}
        className={
          "w-full h-full focus:outline-0 text-grayColor_2 text-[20px] font-darkerGrotesque-bold"
        }
        type="email"
      />
      <BaseButton
        title={"Subscribe"}
        containerStyle={{
          width: 200,
          height: 60,
        }}
      />
    </div>
  );
};
