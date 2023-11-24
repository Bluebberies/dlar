import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import React from "react";
import heroImage from "../../assets/image/hero-image.jpg";
import hero1 from "../../assets/image/hero1.jpg";
import WhiteChevronArrow from "../../assets/icon/white-chevron-round.svg";
import { cutSentence } from "./../../util/helper";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { useState } from "react";
import { BaseInput } from "@/component/input/BaseInput";
import { BaseButton } from "../button/BaseButton.tsx";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

export const HomeHero = () => {
  const [activeTab, setActiveTab] = useState("hotels");

  function handleTabClick(tab: string) {
    setActiveTab(tab);
  }

  return (
    <div className={"relative"}>
      <div
        className={
          "relative h-[555px] lg:mb-[10rem] max-[700px]:h-[400px] w-full mt-0 overflow-hidden"
        }
        style={{
          // backgroundColor: "rgba(17, 17, 16, .85)",
          backgroundColor: "black",
        }}
      >
        <img
          src={ThemeUtil.image.man_in_bath}
          className={
            "absolute max-[415px]:scale-[2] w-full max-[1100px]:top-[-60%] max-[1440px]:top-[-80%] max-[900px]:top-[-40%] max-[800px]:top-[-20%] max-[500px]:top-[0%] top-[-100%] bg-center bg-no-repeat opacity-[.3]"
          }
          alt={"hero image"}
        />
        <div
          // bottom-10
          className={
            "z-[999] translate-x-[-50%] w-full absolute  gap-4 flex flex-col justify-center items-center left-[50%] bottom-[3rem] lg:bottom-[9rem]"
          }
        >
          <h1
            className={
              "max-[700px]:text-[40px] text-[56px] max-[700px]:leading-[38px] leading-[35px] font-black text-white font-darkerGrotesque-bold text-center"
            }
          >
            {cutSentence("Hospitality Highlights")}
          </h1>
          <p
            className={
              "max-[700px]:text-[20px] text-[32px] max-[700px]:leading-[20px] leading-[35px] text-white font-medium font-darkerGrotesque-bold text-center"
            }
          >
            Getaway options just for you
          </p>
          <BaseAvatar
            containerStyle={{
              // width: 240,
              borderRadius: 12,
              // height: 60,
              backgroundColor: "rgba(250, 250, 250, 0.4)",
            }}
            containerCLassName="w-[240px] max-[700px]:w-[150px] h-[60px] max-[768px]:w-suto max-[768px]:h-[48px]"
            hoverScale={1.04}
            hoverOpacity={0.7}
          >
            <div
              className={
                "flex select-none items-center justify-center gap-5 h-full"
              }
            >
              <span
                className={
                  "text-white text-[20px] leading-[35px] font-darkerGrotesque-bold"
                }
              >
                Explore
              </span>
              {/*<ChevronRoundArrowSvg className={"-scale-x-[1] "} stroke={"white"} />*/}
              <img
                src={WhiteChevronArrow}
                className={"w-[25px] h-[25px]"}
                alt={"chevron round"}
              />
            </div>
          </BaseAvatar>
          <div className="flex items-center flex-wrap justify-center flex-row gap-3 mt-[12px]">
            <p
              style={{
                borderBottom: activeTab == "hotels" ? "2px solid #18ACE8" : "",
              }}
              onClick={() => handleTabClick("hotels")}
              className="flex items-center justify-center p-[10px] w-[90px] text-[16px] leading-[14px] text-white font-bold font-darkerGrotesque-bold text-center"
            >
              Hotels
            </p>
            <p
              style={{
                borderBottom: activeTab == "lodges" ? "2px solid #18ACE8" : "",
              }}
              onClick={() => handleTabClick("lodges")}
              className="flex items-center justify-center p-[10px] w-[90px] text-[16px] leading-[14px] text-white font-bold font-darkerGrotesque-bold text-center"
            >
              Lodges
            </p>
            <p
              style={{
                borderBottom:
                  activeTab == "apartments" ? "2px solid #18ACE8" : "",
              }}
              onClick={() => handleTabClick("apartments")}
              className="flex items-center justify-center p-[10px] w-[90px] text-[16px] leading-[14px] text-white font-bold font-darkerGrotesque-bold text-center"
            >
              Apartments
            </p>
          </div>
        </div>
      </div>
      <div
          className="lg:hidden mb-[160px] max-[290px]:h-[350px] max-[375px]:h-[230px] h-[130px] md:h-[100px]"
        style={{
          // height: "300px",
          backgroundColor: "rgba(17, 17, 16, .85)",
        }}
      ></div>
      <div className="z-10 flex flex-wrap items-center flex-row justify-between rounded-[20px] shadow-[0px_1px_16px_0px_rgba(24,172,232,0.30)] max-[644px]:bottom-[2rem] bottom-[6rem] absolute bg-[#FFF] py-[15px] lg:py-[35px] px-[10px] lg:px-[75px] max-w-[1200px] max-[1315px]:w-[95%] max-[1500px]:w-[90%] w-[80%] left-[50%] translate-x-[-50%]">
        <div>
          <BaseInput
            label={`
                  <img src=${ThemeUtil.icon.light_gray_pin} alt="" />
                  Location
              `}
            labelStyle={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "#111110",
              // gap: "10px",
              // fontSize: "3vw",
              fontFamily: "darkerGrotesque-normal, sans-serif",
              fontWeight: 400,
            }}
            containerStyle={{
              display: "flex",
              flexDirection: "column",
              minHeight: "0",
              // width: "175px",
              // marginTop: "-10px",
              width: "fit-content",
              height: "auto",
              // padding: "10px",
            }}
            inputStyle={{
              // width: "auto",
              borderRadius: "10px",
              // padding: "10px",
              background: "rgba(232, 248, 255, 0.85)",
            }}
            labelClassName={
              "gap-[10px] max-[1000px]:gap-[5px] text-[3vw] sm:text-[1vw]"
            }
            inputClassName={
              "py-[10px] max-[1000px]:px-[1px] w-[8rem] h-[36px] text-[3vw] sm:text-[1vw] sm:h-auto lg:w-auto px-[1px]"
            }
            inputContainerStyle={{
              width: "fit-content",
              paddingRight: 0,
              height: "auto",
            }}
          />
        </div>
        <div>
          <BaseInput
            label={`
                  <img src=${ThemeUtil.icon.light_gray_person_icon} alt="" />
                  Guests
              `}
            labelStyle={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "#111110",
              // gap: "10px",
              // fontSize: "3vw",
              fontFamily: "darkerGrotesque-normal, sans-serif",
              fontWeight: 400,
            }}
            containerStyle={{
              display: "flex",
              flexDirection: "column",
              minHeight: "0",
              // width: "175px",
              // marginTop: "-10px",
              width: "fit-content",
              height: "auto",
              // padding: "10px",
            }}
            inputStyle={{
              // width: "auto",
              borderRadius: "10px",
              // padding: "10px",
              background: "rgba(232, 248, 255, 0.85)",
            }}
            labelClassName={
              "gap-[10px] max-[1000px]:gap-[5px] text-[3vw] sm:text-[1vw]"
            }
            inputClassName={
              "py-[10px] max-[1000px]:px-[1px] w-[8rem] h-[36px] text-[3vw] sm:text-[1vw] sm:h-auto lg:w-auto px-[1px]"
            }
            inputContainerStyle={{
              width: "fit-content",
              paddingRight: 0,
              height: "auto",
            }}
          />
        </div>
        <div>
          <BaseInput
            label={`
                  <img src=${ThemeUtil.icon.light_gray_checkin} alt="" />
                  Check-in
              `}
            labelStyle={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "#111110",
              // gap: "10px",
              // fontSize: "3vw",
              fontFamily: "darkerGrotesque-normal, sans-serif",
              fontWeight: 400,
            }}
            containerStyle={{
              display: "flex",
              flexDirection: "column",
              minHeight: "0",
              // width: "175px",
              // marginTop: "-10px",
              width: "fit-content",
              height: "auto",
              // padding: "10px",
            }}
            inputStyle={{
              // width: "auto",
              borderRadius: "10px",
              // padding: "10px",
              background: "rgba(232, 248, 255, 0.85)",
            }}
            labelClassName={
              "gap-[10px] max-[1000px]:gap-[5px] text-[3vw] sm:text-[1vw]"
            }
            inputClassName={
              "py-[10px] max-[1000px]:px-[1px] w-[8rem] h-[36px] text-[3vw] sm:text-[1vw] sm:h-auto lg:w-auto px-[1px]"
            }
            inputContainerStyle={{
              width: "fit-content",
              paddingRight: 0,
              height: "auto",
            }}
          />
        </div>
        <div>
          <BaseInput
            label={`
                  <img src=${ThemeUtil.icon.light_gray_checkout} alt="" />
                  Check-out
              `}
            labelStyle={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "#111110",
              // gap: "10px",
              // fontSize: "3vw",
              fontFamily: "darkerGrotesque-normal, sans-serif",
              fontWeight: 400,
            }}
            containerStyle={{
              display: "flex",
              flexDirection: "column",
              minHeight: "0",
              // width: "175px",
              // marginTop: "-10px",
              width: "fit-content",
              height: "auto",
              // padding: "10px",
            }}
            inputStyle={{
              // width: "auto",
              borderRadius: "10px",
              // padding: "10px",
              background: "rgba(232, 248, 255, 0.85)",
            }}
            labelClassName={
              "gap-[10px] max-[1000px]:gap-[5px] text-[3vw] sm:text-[1vw]"
            }
            inputClassName={
              "py-[10px] max-[1000px]:px-[1px] w-[8rem] h-[36px] text-[3vw] sm:text-[1vw] sm:h-auto lg:w-auto px-[1px]"
            }
            inputContainerStyle={{
              width: "fit-content",
              paddingRight: 0,
              height: "auto",
            }}
          />
        </div>
        <div>
          <BaseButton
            buttonStyle={{
              fontSize: 20,
              backgroundColor: "#FF6A28",
              color: "#fff",
              borderRadius: "25px",
              padding: "10px 32px ",
              cursor: "pointer",
            }}
            // hoverScale={1.1}
            // hoverOpacity={0.7}
            // containerClassName={"sm:w-[80px] w-[60px] sm:h-[80px] h-[60px]"}
            containerStyle={{
              width: "80px",
              height: "80px",
            }}
          >
            <span className="-z-10 w-full object-cover flex flex-col text-[10px] sm:text-[20px] leading-5 font-darkerGrotesque-normal font-normal items-center justify-center ">
              <Icon
                path={mdiMagnify}
                className={
                  "sm:h-[32px] w-[22px] sm:w-[32px] h-[22px] ml-1 text-white"
                }
              />
              Search
            </span>
          </BaseButton>
        </div>
      </div>
      ;
    </div>

    // <div
    //   className={
    //     "border h-[250px] max-[1000px]:h-[1000px] w-full mt-0 rounded-[12px] overflow-hidden relative"
    //   }
    //   style={{
    //     backgroundColor: "rgba(17, 17, 16, .7)",
    //   }}
    // >
    //   <img
    //     src={hero1}
    //     className={
    //       // "absolute w-full max-[1100px]:top-[-150%] max-[1440px]:top-[-200%] max-[700px]:top-[-120%] max-[600px]:top-[-90%] top-[-300%] bg-center bg-no-repeat -z-[999]"
    //       "absolute w-full max-[1100px]:top-[-150%] max-[1440px]:top-[-200%] max-[700px]:top-[-120%] max-[600px]:top-[-90%] top-[-300%] bg-center bg-no-repeat opacity-[.7]"
    //     }
    //     alt={"hero image"}
    //   />
    //   <div
    //     className={
    //       "z-[999] translate-x-[-50%] absolute bottom-10 gap-4 flex flex-col justify-center items-center left-[50%]"
    //     }
    //   >
    //     <h1
    //       className={
    //         "text-[36px] leading-[35px] text-white font-darkerGrotesque-bold text-center"
    //       }
    //     >
    //       {cutSentence(
    //         "Ravers House Party Awka Ravers House Party Awka Ravers House indigo sso  Party Awka a"
    //       )}
    //     </h1>
    //     <BaseAvatar
    //       containerStyle={{
    //         // width: 240,
    //         borderRadius: 12,
    //         // height: 60,
    //         backgroundColor: "rgba(250, 250, 250, 0.4)",
    //       }}
    //       containerCLassName="w-[240px] h-[60px] max-[768px]:w-suto max-[768px]:h-[48px]"
    //       hoverScale={1.04}
    //       hoverOpacity={0.7}
    //     >
    //       <div className={"flex select-none items-center justify-center gap-5 h-full"}>
    //         <span
    //           className={
    //             "text-white text-[20px] leading-[35px] font-darkerGrotesque-bold"
    //           }
    //         >
    //           View Details
    //         </span>
    //         {/*<ChevronRoundArrowSvg className={"-scale-x-[1] "} stroke={"white"} />*/}
    //         <img
    //           src={WhiteChevronArrow}
    //           className={"w-[25px] h-[25px]"}
    //           alt={"chevron round"}
    //         />
    //       </div>
    //     </BaseAvatar>
    //   </div>
    // </div>
  );
};
