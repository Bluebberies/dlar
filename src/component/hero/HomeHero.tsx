import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import heroImage from "../../assets/image/hero-image.jpg";
import hero1 from "../../assets/image/hero1.jpg";
import WhiteChevronArrow from "../../assets/icon/white-chevron-round.svg";
import { cutSentence } from "./../../util/helper";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { useState } from "react";

export const HomeHero = () => {
  const [activeTab, setActiveTab] = useState("hotels");

  function handleTabClick(tab: string) {
    setActiveTab(tab);
  }

  return (
    <>
      <div
        className={
          "h-[515px] max-[700px]:h-[400px] w-full mt-0 overflow-hidden relative"
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
          className={
            "z-[999] translate-x-[-50%] w-full absolute bottom-10 gap-4 flex flex-col justify-center items-center left-[50%]"
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
          <div className="flex items-center flex-wrap justify-center flex-row gap-3 mt-[12px] min-[700px]:hidden">
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
                borderBottom: activeTab == "apartments" ? "2px solid #18ACE8" : "",
              }}
              onClick={() => handleTabClick("apartments")}
              className="flex items-center justify-center p-[10px] w-[90px] text-[16px] leading-[14px] text-white font-bold font-darkerGrotesque-bold text-center"
            >
              Apartments
            </p>
          </div>
        </div>
      </div>
      {/* <div
        className="min-[700px]:hidden"
        style={{
          height: "120px",
          backgroundColor: "rgba(17, 17, 16, .85)",
        }}
      ></div> */}
    </>

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
