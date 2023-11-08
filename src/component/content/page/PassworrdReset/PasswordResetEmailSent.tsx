import { ThemeUtil } from "../../../../util/ThemeUtil.ts";

export const PasswordResetEmailSent = () => {
  return (
    <div className={"w-[90%] flex items-center flex-col py-10"}>
      <img src={ThemeUtil.image.mailSent} alt="emailSent" />
      <h2 className="font-darkerGrotesque-bold text-center max-[425px]:text-[38px] max-[425px]:leading-[35px] max-[425px]:mb-5 text-[48px] leading-[65px]">
        Check your mail
      </h2>
      <p
        className={`font-darkerGrotesque-medium leading-[25px] text-center text-[28px]`}
        style={{ color: ThemeUtil.color.grayColor_2 }}
      >
        We have sent a link to your mail for verification. Please click the link
        to reset your password
      </p>
    </div>
  );
};
