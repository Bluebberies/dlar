import { BaseButton } from "../../../button/BaseButton";
import { ThemeUtil } from "../../../../util/ThemeUtil";
import { BaseInput } from "../../../input/BaseInput";
import CopyIcon from "../../../../assets/icon/file_copy.svg";

export default function DesktopReferral() {
  return (
    <div className="min-h-screen w-full py-[50px] px-[70px] bg-[#F1F1F1]">
      <div className="flex flex-col lg:flex-row gap-16 ">
        <div className=" flex flex-col gap-5 w-[100%] lg:w-[60%]">
          <h1 className="font-darkerGrotesque-bold font-[700] text-[48px] leading-[50px] tracking-[1.44px] text-[#111110]">
            Earn <span className="text-[#18ACE8]">500 Naira</span> for every
            sign ups
          </h1>
          <h3 className="font-darkerGrotesque-bold font-[500] text-[20px] leading-[20px] text-[#111110] w-[auto]">
            Invite your friends to Dwelar, you get{" "}
            <span className="text-[#18ACE8]">500 Naira </span> when they sign up
            and additional <span className="text-[#18ACE8]">1500 Naira</span>{" "}
            when they use dwelar.
          </h3>
          <div className="bg-[#fff] rounded-[15px] gap-[10px] mt-[20px] flex flex-col items-start justify-start py-9 px-5 w-auto h-auto">
            <h3 className="font-darkerGrotesque-bold font-[700] text-[20px] leading-[20px] tracking-[0.6px] text-[#111110]">
              Share your referral link
            </h3>
            <p className="font-darkerGrotesque-bold font-[500] text-[18px] leading-[17px] tracking-[0.54px] text-[#606060]">
              Share your referral link to start earning.
            </p>
            <div className="mt-[20px] flex-wrap flex flex-row items-center gap-7 w-full justify-start">
              <BaseInput
                superText={`<img src='${CopyIcon}' alt="wallet" /> copy link`}
                superTextPosition="right"
                superTextStyles={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#E8F8FF",
                  borderRadius: "14px",
                  color: "#111110",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "16px",
                  padding: "17px 13px",
                  cursor: "pointer",
                  width: "30%",
                  border: "none",
                }}
                placeholder={"www.dwelar.com/hgsbbju"}
                containerStyle={{
                  marginTop: 0,
                  display: "flex",
                  minHeight: "0",
                  marginBottom: 0,
                }}
                inputStyle={{
                  borderRadius: "15px",
                  paddingLeft: "0px",
                  padding: "20px",
                }}
                inputContainerClassName={" xl:w-[565px] w-[465px]"}
                inputContainerStyle={{
                  paddingRight: 0,
                  height: "55px",
                  flexDirection: "row-reverse",
                }}
              />
              <BaseButton
                buttonStyle={{
                  fontSize: 20,
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "164px",
                  height: "55px",
                }}
              >
                <span className="flex items-center justify-center gap-3">
                  <img src={ThemeUtil.icon.shareIcon} alt="wallet" />
                  Share
                </span>
              </BaseButton>
            </div>
          </div>
          <div className="bg-[#fff] rounded-[15px] gap-[10px] flex flex-col items-start justify-start py-9 px-5 w-auto h-auto">
            <h3 className="font-darkerGrotesque-bold font-[700] text-[20px] leading-[20px] tracking-[0.6px] text-[#111110]">
              Invite with email
            </h3>
            <p className="font-darkerGrotesque-bold font-[500] text-[18px] leading-[17px] tracking-[0.54px] text-[#606060]">
              Send an invite to your friends to join dwelar using their email
              address.
            </p>

            <div className="mt-[20px] flex-wrap flex flex-row items-center gap-7 w-full justify-start">
              <BaseInput
                placeholder={"@ Email address"}
                containerStyle={{
                  marginTop: 0,
                  display: "flex",
                  minHeight: "0",
                  marginBottom: 0,
                }}
                inputStyle={{
                  borderRadius: "15px",
                  paddingLeft: "0px",
                  padding: "20px",
                }}
                inputContainerClassName={" xl:w-[565px] w-[465px]"}
                inputContainerStyle={{
                  paddingRight: 0,
                  height: "55px",
                  flexDirection: "row-reverse",
                }}
              />
              <BaseButton
                buttonStyle={{
                  fontSize: 20,
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "164px",
                  height: "55px",
                }}
              >
                <span className="flex items-center justify-center gap-3">
                  Send Invite
                  <img src={ThemeUtil.icon.sendMessageIcon} alt="wallet" />
                </span>
              </BaseButton>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 w-full mt-10">
            <h1 className="font-darkerGrotesque-bold font-[700] text-[36px] leading-[25px] text-[#111110] tracking-[1.08px]">
              How it works
            </h1>
            <div className="flex flex-wrap items-center gap-[20px] w-full h-auto">
              <div className="flex flex-col items-center justify-center gap-3 bg-[#E8F8FF] rounded-[15px] p-[30px] shadow-[0px_3px_24px_0px_rgba(0,0,0,0.10)]">
                <h3 className="flex items-center justify-center w-[55px] h-[55px] rounded-[55px] bg-[#CCEFFF] font-darkerGrotesque-bold font-[700] text-[36px] leading-[30px] text-[#606060]">
                  1
                </h3>
                <h4 className="font-darkerGrotesque-bold font-[700] text-[20px] leading-[20px] text-[#111110] tracking-[0.6px]">
                  Send an invite
                </h4>
                <p className="w-[189px] font-darkerGrotesque-bold font-[500] text-[16px] leading-[17px] text-[#606060] tracking-[1.08px]">
                  Send an invite to your friends to join dwelar using their
                  email address.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 bg-[#E8F8FF] rounded-[15px] p-[30px] shadow-[0px_3px_24px_0px_rgba(0,0,0,0.10)]">
                <h3 className="flex items-center justify-center w-[55px] h-[55px] rounded-[55px] bg-[#CCEFFF] font-darkerGrotesque-bold font-[700] text-[36px] leading-[30px] text-[#606060]">
                  2
                </h3>
                <h4 className="font-darkerGrotesque-bold font-[700] text-[20px] leading-[20px] text-[#111110] tracking-[0.6px]">
                  They Sign Up
                </h4>
                <p className="w-[189px] font-darkerGrotesque-bold font-[500] text-[16px] leading-[17px] text-[#606060] tracking-[1.08px]">
                  Let them sign up to Dwelar using your referral link,
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 bg-[#E8F8FF] rounded-[15px] p-[30px] shadow-[0px_3px_24px_0px_rgba(0,0,0,0.10)]">
                <h3 className="flex items-center justify-center w-[55px] h-[55px] rounded-[55px] bg-[#CCEFFF] font-darkerGrotesque-bold font-[700] text-[36px] leading-[30px] text-[#606060]">
                  3
                </h3>
                <h4 className="font-darkerGrotesque-bold font-[700] text-[20px] leading-[20px] text-[#111110] tracking-[0.6px]">
                  Get Rewarded
                </h4>
                <p className="w-[189px] font-darkerGrotesque-bold font-[500] text-[16px] leading-[17px] text-[#606060] tracking-[1.08px]">
                  You get rewarded 500 Naira for every sign ups with your
                  referral link and 1500 Naira when they use our services.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[40%] lg:w-[30%] px-[25px] gap-2 h-auto pt-[40px] pb-[40px] lg:pb-[300px] rounded-[20px] flex items-center flex-col bg-[#fff]">
          <div className="flex flex-row items-center">
            <img src={ThemeUtil.icon.wallet} alt="wallet" />
            <h1 className="font-darkerGrotesque-bold font-[700] text-[24px] leading-[23px] tracking-[0.72px] text-[#111110]">
              Dwr Rfr. Wallet
            </h1>
          </div>
          <div className="w-[90%] h-[auto] flex gao-30 items-center justify-center flex-col rounded-[12px] bg-[#fff6a4]">
            <div className="flex flex-wrap flex-row items-center justify-between w-[90%] p-5">
              <p className="font-darkerGrotesque-bold font-[700] text-[24px] leading-[23px] tracking-[0.72px] text-[#111110]">
                Balance
              </p>
              <h3 className="break-all flex items-center justify-end flex-row font-darkerGrotesque-bold font-[800] text-[40px] leading-[40px] tracking-[1.2px] text-[#111110]">
                <img src={ThemeUtil.icon.naira} alt="wallet" />
                5000
              </h3>
            </div>
            <BaseButton
              title={"Cancel"}
              buttonStyle={{
                backgroundColor: "white",
                color: ThemeUtil.color.blackColor,
                fontSize: 20,
                // lineHeight: 20
              }}
              containerStyle={{
                width: 200,
                height: 60,
              }}
            />
          </div>
          <div className="w-[95%] mt-[90px] flex items-center justify-center flex-col gap-[28px]">
            <h1 className="font-darkerGrotesque-bold font-[700] text-[24px] leading-[23px] tracking-[0.72px] text-[#111110]">
              Your Referral Stats
            </h1>
            <div className="w-[100%] gap-5 flex flex-col h-auto p-[26px] justify-between bg-[#E8F8FF] rounded-[12px]">
              <div className="flex items-center flex-wrap gap-1 justify-between">
                <p className="font-darkerGrotesque-bold font-[500] text-[20px] leading-[20px] text-[#606060]">
                  Minimum for withdrawal
                </p>
                <h3 className=" font-darkerGrotesque-bold font-[800] text-[20px] leading-[20px] text-[#111110]">
                  4000
                </h3>
              </div>
              <div className="flex items-center flex-wrap justify-between">
                <p className="font-darkerGrotesque-bold font-[500] text-[20px] leading-[20px] text-[#606060]">
                  Successful sign ups
                </p>
                <h3 className=" font-darkerGrotesque-bold font-[800] text-[20px] leading-[20px] text-[#111110]">
                  25
                </h3>
              </div>
              <div className="flex items-center flex-wrap justify-between">
                <p className="font-darkerGrotesque-bold font-[500] text-[20px] leading-[20px] text-[#606060]">
                  Completed transaction
                </p>
                <h3 className=" font-darkerGrotesque-bold font-[800] text-[20px] leading-[20px] text-[#111110]">
                  5
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
