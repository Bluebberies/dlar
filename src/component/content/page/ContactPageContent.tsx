// import React from "react";
import { BaseButton } from "@/component/button/BaseButton";
import { BaseInput } from "@/component/input/BaseInput";
import { ThemeUtil } from "@/util/ThemeUtil";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
import { useNavigate } from "react-router-dom";

const ContactPageContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-[700px]:hidden flex px-[10px] pt-[9rem] items-center flex-col justify-center gap-20">
        <div className="flex w-[90%] gap-[16px] bg-transparent rounded-[20px]  px-[1px] flex-col items-center justify-center">
          <p className="flex flex-row gap-[16px] items-center text-[24px] sm:text-[28px] leading-[20px] tracking-[-0.6px] sm:tracking-[-0.56px] text-[#111110] font-darkerGrotesque-bold">
            Contact
          </p>

          <h3 className="flex mt-6 text-[#111110] flex-row gap-[16px] items-center text-[20px] sm:text-[28px] leading-[24px] sm:leading-[44px] tracking-[-0.6px] sm:tracking-[-0.56px] font-darkerGrotesque-bold">
            Have any questions or concerns?
          </h3>
          <p className="text-center justify-center w-full text-[#606060] flex-row gap-[16px] items-center text-[16px] leading-[20px] tracking-[-0.32px]  font-darkerGrotesque-medium">
            Contact us by filling the form below.<br></br> Don’t forget to also
            check out our{" "}
            <span
              onClick={() => navigate(RouterConstantUtil.routes.page.aboutPage)}
              className="text-[#18ACE8]"
            >
              {" "}
              About us
            </span>{" "}
            Page!
          </p>
          <BaseInput
            type="email"
            placeholder="Input your email address"
            containerStyle={{
              display: "flex",
              minHeight: "0",
              width: "100%",
              height: "auto",
              marginTop: "10px",
            }}
            inputStyle={{
              // width: "90%",
              height: "46px",
              borderRadius: "10px",
            }}
            inputContainerStyle={{
              width: "100%",
              // width: "auto",
              height: "auto",
            }}
          />
          <BaseInput
            placeholder="Type a message"
            containerStyle={{
              display: "flex",
              minHeight: "0",
              width: "100%",
              height: "auto",
              marginTop: "-10px",
            }}
            inputStyle={{
              // width: "90%",
              height: "90px",
              borderRadius: "10px",
            }}
            inputContainerStyle={{
              width: "100%",
              // width: "auto",
              height: "auto",
            }}
          />
          <BaseButton
            buttonStyle={{
              fontSize: 20,
              // backgroundColor: "#fff",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px 32px ",
            }}
            hoverScale={1.1}
            hoverOpacity={0.7}
            containerStyle={{
              width: "auto",
              height: "auto",
            }}
          >
            <span className="flex items-center justify-center gap-3">
              Send
              <img src={ThemeUtil.icon.sendMessageIcon} alt="wallet" />
            </span>
          </BaseButton>
        </div>

        <div className="flex justify-start gap-[24px] items-start flex-col ">
          <p className="flex flex-row gap-[16px] items-center text-[24px] sm:text-[28px] leading-[23px] sm:leading-[44px] tracking-[-0.6px] sm:tracking-[-0.56px] text-[#111110] font-darkerGrotesque-bold">
            Contact us:
          </p>

          <p className="flex flex-row gap-[16px] items-center text-[16px] sm:text-[20px] leading-[16px] sm:leading-[36px] tracking-[-0.32px] sm:tracking-[-0.4px] text-[#111110] font-darkerGrotesque-medium sm:font-darkerGrotesque-normal">
            <img src={ThemeUtil.image.blue_pin_icon} alt="icon" />
            Lagos, Nigeria
          </p>
          <p className="flex flex-row gap-[16px] items-center text-[16px] sm:text-[20px] leading-[16px] sm:leading-[36px] tracking-[-0.32px] sm:tracking-[-0.4px] text-[#111110] font-darkerGrotesque-medium sm:font-darkerGrotesque-normal">
            <img src={ThemeUtil.image.blue_mail_icon} alt="icon" />
            dwelar.help@gmail.com
          </p>
          <p className="flex flex-row gap-[16px] items-center text-[16px] sm:text-[20px] leading-[16px] sm:leading-[36px] tracking-[-0.32px] sm:tracking-[-0.4px] text-[#111110] font-darkerGrotesque-medium sm:font-darkerGrotesque-normal">
            <img src={ThemeUtil.image.blue_call_icon} alt="icon" />
            +234-803-884-8947
          </p>
        </div>
      </div>
      <div className="max-[700px]:hidden w-full flex px-[50px] md:px-[100px] lg:px-[200px] pt-[10rem] items-start flex-row justify-center gap-20">
        <div className="flex justify-start gap-[24px] items-start flex-col ">
          <p className="flex flex-row gap-[16px] items-center text-[20px] sm:text-[28px] leading-[24px] sm:leading-[44px] tracking-[-0.6px] sm:tracking-[-0.56px] text-[#111110] font-darkerGrotesque-medium sm:font-darkerGrotesque-bold">
            Contact us:
          </p>
          <p className="flex flex-row gap-[16px] items-center text-[16px] sm:text-[20px] leading-[16px] sm:leading-[36px] tracking-[-0.32px] sm:tracking-[-0.4px] text-[#111110] font-darkerGrotesque-medium sm:font-darkerGrotesque-normal">
            <img src={ThemeUtil.image.blue_pin_icon} alt="icon" />
            Lagos, Nigeria
          </p>
          <p className="flex flex-row gap-[16px] items-center text-[16px] sm:text-[20px] leading-[16px] sm:leading-[36px] tracking-[-0.32px] sm:tracking-[-0.4px] text-[#111110] font-darkerGrotesque-medium sm:font-darkerGrotesque-normal">
            <img src={ThemeUtil.image.blue_mail_icon} alt="icon" />
            dwelar.help@gmail.com
          </p>
          <p className="flex flex-row gap-[16px] items-center text-[16px] sm:text-[20px] leading-[16px] sm:leading-[36px] tracking-[-0.32px] sm:tracking-[-0.4px] text-[#111110] font-darkerGrotesque-medium sm:font-darkerGrotesque-normal">
            <img src={ThemeUtil.image.blue_call_icon} alt="icon" />
            +234-803-884-8947
          </p>
        </div>
        <div className="flex gap-[16px] bg-[#18ACE8] rounded-[20px] py-[10px] px-[1px] flex-col items-center justify-center">
          <h3 className="flex text-[#fff] flex-row gap-[16px] items-center text-[20px] sm:text-[28px] leading-[24px] sm:leading-[44px] tracking-[-0.6px] sm:tracking-[-0.56px] font-darkerGrotesque-medium sm:font-darkerGrotesque-bold">
            Have any questions or concerns?
          </h3>
          <p className="flex w-[80%] text-[#fff] flex-row gap-[16px] items-center text-[24px] leading-[36px] sm:tracking-[-0.48px]  font-darkerGrotesque-medium">
            Contact us by filling the form below. Don’t forget to also check out
            our FAQ Page!
          </p>
          <BaseInput
            type="email"
            placeholder="Input your email address"
            containerStyle={{
              display: "flex",
              minHeight: "0",
              width: "80%",
              height: "auto",
              marginTop: "-10px",
            }}
            inputStyle={{
              // width: "90%",
              height: "46px",
              borderRadius: "10px",
            }}
            inputContainerStyle={{
              width: "100%",
              // width: "auto",
              height: "auto",
            }}
          />
          <BaseInput
            placeholder="Type a message"
            containerStyle={{
              display: "flex",
              minHeight: "0",
              width: "80%",
              height: "auto",
              marginTop: "-10px",
            }}
            inputStyle={{
              // width: "90%",
              height: "90px",
              borderRadius: "10px",
            }}
            inputContainerStyle={{
              width: "100%",
              // width: "auto",
              height: "auto",
            }}
          />
          <BaseButton
            buttonStyle={{
              fontSize: 20,
              backgroundColor: "#fff",
              color: "#111110",
              borderRadius: "10px",
              padding: "10px 32px ",
            }}
            hoverScale={1.1}
            hoverOpacity={0.7}
            containerStyle={{
              width: "auto",
              height: "auto",
            }}
          >
            <span className="flex items-center justify-center gap-3">
              <img src={ThemeUtil.image.white_sendMessage_icon} alt="wallet" />
              Send
              {/* <img src={ThemeUtil.icon.sendMessageIcon} alt="wallet" /> */}
            </span>
          </BaseButton>
        </div>
      </div>
    </>
  );
};

export default ContactPageContent;
