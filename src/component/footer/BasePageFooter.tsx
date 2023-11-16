import { BasePageFooterSubscribeInput } from "../input/BasePageFooterSubscribeInput.tsx";
import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import { ThemeUtil } from "../../util/ThemeUtil.ts";
import { motion } from "framer-motion";

export const BasePageFooter = () => {
  return (
    //   <div className={"h-[800px] w-full mt-40"}>
    // absolute bottom-0 left-0
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 , delay: .5}}
      viewport={{ once: true }}
    >
      <div className={"h-full w-full flex flex-col mt-40"}>
        <div
          className={
            "h-[30%] w-full max-[940px]:flex-wrap flex items-center max-[940px]:justify-end max-[940px]:gap-4 justify-between py-[75px] px-[116px] max-[1440px]:px-10 max-[1440px]:py-30 max-[1100px]:py-20"
          }
          style={{
            backgroundColor: "#cffdfd",
          }}
        >
          <p
            className={
              "text-[#111110] text-[48px] max-[1100px]:text-[33px] max-[1100px]:leading-[30px] leading-[50px] w-[360px] font-darkerGrotesque-bold"
            }
          >
            Be the first to hear about our Updates
          </p>
          <BasePageFooterSubscribeInput />
        </div>
        {/* <div className={"h-[60%] w-full border bg-primaryColor flex items-center justify-center p-16 "} > */}
        <div
          className={
            "h-auto w-full border max-[560px]:flex max-[560px]:flex-col max-[1000px]:grid grid-cols-2 bg-primaryColor flex max-[1480px]:gap-[50px]  gap-[102px] justify-between p-16 max-[700px]:p-4 "
          }
        >
          <div className={" h-full "}>
            <BaseAvatar
              isActive={true}
              containerStyle={{
                width: 200,
                height: 70,
              }}
            >
              <div className={"flex items-center justify-center"}>
                <img
                  src={ThemeUtil.image.logo}
                  alt={"logo"}
                  className={"w-[135px] h-[40px]"}
                />
              </div>
            </BaseAvatar>
            <h1
              className={
                "text-[28px] leading-[35px] text-white mt-5 mb-5 font-darkerGrotesque-bold"
              }
            >
              About Us
            </h1>
            <p
              className={
                "text-[20px] leading-[35px] text-white w-[380px] max-[1000px]:w-full"
              }
            >
              Dwelar is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution see more...
            </p>
          </div>
          <div className={" h-full w-full"}>
            <h1
              className={
                "text-[28px]  leading-[35px] text-white font-darkerGrotesque-bold"
              }
            >
              Useful Links
            </h1>
            <div
              className={
                "flex justify-start max-[1200px]:flex-wrap max-[560px]:flex-nowrap max-[1376px]:gap-10 gap-20 h-full items-start"
              }
            >
              <div className={" h-[auto]"}>
                <ul
                  className={
                    "text-[20px] text-white leading-[35px] font-darkerGrotesque-bold"
                  }
                >
                  <li className="cursor-pointer">Agent</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Contact</li>
                  <li className="cursor-pointer">Advertise</li>
                </ul>
              </div>
              <div
                className={
                  " h-[80%] w-full self-center font-darkerGrotesque-bold"
                }
              >
                <ul className={"text-[20px]  text-white leading-[35px]"}>
                  <li className="cursor-pointer">Properties Nearby</li>
                  <li className="cursor-pointer">Feature Property</li>
                  <li className="cursor-pointer">Become an Ambassador</li>
                  <li className="cursor-pointer">Campaign Programs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={"  h-full w-full"}>
            <h1
              className={
                "text-[28px] leading-[35px] text-white font-darkerGrotesque-bold"
              }
            >
              Follow us on our socials
            </h1>
            <div className={"flex gap-5 mt-5 flex-wrap"}>
              <img src={ThemeUtil.icon.whiteFacebook} alt={"facebook"} />
              <img src={ThemeUtil.icon.whiteTwitter} alt={"twitter"} />
              <img src={ThemeUtil.icon.whiteInstagram} alt={"instagram"} />
              <img src={ThemeUtil.icon.whiteLinkIn} alt={"linkin"} />
            </div>

            <h1
              className={
                "text-[28px] leading-[35px] text-white font-darkerGrotesque-bold mt-10"
              }
            >
              Contact us
            </h1>

            <div className={"flex gap-2 mt-1"}>
              <img src={ThemeUtil.icon.whiteCall} alt={"call"} />
              <span className={"text-[20px]  text-white leading-[27px]"}>
                +234 803 884 8947
              </span>
            </div>

            <div className={"flex gap-2 mt-1"}>
              <img src={ThemeUtil.icon.whiteMessage} alt={"call"} />
              <span className={"text-[20px]  text-white leading-[27px]"}>
                Info@dwelar.com
              </span>
            </div>
          </div>
        </div>
        <div className={"h-[10%] flex items-center text-black justify-center mb-2"}>
          <span>2023 Dwelar. All Rights Reserved</span>
        </div>
      </div>
    </motion.div>
  );
};
