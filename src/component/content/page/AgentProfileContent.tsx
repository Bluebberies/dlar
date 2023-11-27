// import React from "react";
import { PropertiesData } from "@/toolkit/data/nearYouData";
import { ListOfPropertiesContent } from "./ListOfPropertiesContent";
import { SectionTitleHeader } from "@/component/header/SectionTitleHeader";
import { ThemeUtil } from "@/util/ThemeUtil";
import { BaseButton } from "@/component/button/BaseButton";

const AgentProfileContent = () => {
  return (
    <div className="mt-6">
      <div className="mt-2 w-[95%] lg:w-[80%] h-auto flex m-auto justify-center [@media(max-width:800px)]:flex-col flex-row [@media(max-width:800px)]:gap-1 gap-10 mb-[50px]">
        <div className="[@media(max-width:800px)]:pt-0 pt-[30px] [@media(max-width:800px)]:px-0 px-[32px] [@media(max-width:800px)]:pb-0 pb-[170px] gap-[20px] [@media(max-width:800px)]:bg-inherit bg-[#F6F6F6] [@media(max-width:800px)]:w-full w-[40%] flex items-center flex-col justify-center f">
          <div className="flex items-center justify-center flex-col [@media(max-width:800px)]:gap-1 gap-[20px] bg-[#fff] py-[30px] rounded-[20px] w-full">
            <img
              src={ThemeUtil.icon.profile}
              className="rounded-[50%] w-[80px] h-[80px]"
              alt=""
            />
            <h2 className="text-[24px] md:text-[48px] leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Mr Anthony
            </h2>
            <p
              className={
                "flex items-center gap-1 lg:gap-2 text-[16px] md:text-[28px] leading-[35px] text-[#111110] font-darkerGrotesque-medium"
              }
            >
              <img
                src={ThemeUtil.icon.blackMap}
                className={
                  "text-blackColor w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                }
                alt={"black-map-pin-fill"}
              />
              Ifite, Awka.
            </p>
            <span className="[@media(min-width:800px)]:hidden text-[16px] leading-[25px] text-[#4ABF4F] font-darkerGrotesque-semiBold">
              Available
            </span>
          </div>
          <div className="flex flex-row items-center [@media(max-width:800px)]:bg-[#e8f8ff] bg-[#fff] justify-center gap-2 w-full py-5">
            <p className="text-[16px] md:text-[20px] leading-[25px] text-blackColor font-bold font-darkerGrotesque-bold">
              Registered
            </p>
            <span className="text-[16px] md:text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-bold">
              2 years ago
            </span> 
          </div>
          <div className="flex flex-row items-center bg-[#fff] justify-center gap-2 w-full py-5">
            <img src={ThemeUtil.icon.blackWhatsapp} alt="" />
            <img src={ThemeUtil.icon.blackCall} alt="" />
            <span className="text-[10px] md:text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-bold">
              +234 803 884 8947
            </span>
          </div>
          <BaseButton
            buttonStyle={{
              fontSize: 20,
            }}
            hoverScale={1.1}
            hoverOpacity={0.7}
            containerStyle={{
              width: "100%",
              height: "55px",
              borderRadius: "0",
            }}
          >
            <span className="flex items-center justify-center gap-3">
              <img src={ThemeUtil.icon.ChatOwnerLight} alt="wallet" />
              Chat with owner
            </span>
          </BaseButton>
        </div>

        <div className="flex [@media(max-width:800px)]:w-full w-[50%] flex-col items-start justify-start">
          <h1 className="text-[20px] md:text-[36px] [@media(max-width:800px)]:m-auto leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
            About Agent
          </h1>
          <p className="text-[14px] w-full xl:w-[560px] md:text-[20px] leading-[28px] md:leading-[35px] text-[#606060] font-bold font-darkerGrotesque-semiBold">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetu.
          </p>
          <div className="[@media(max-width:800px)]:hidden w-full mt-[30px] gap-[20px] flex flex-col items-start">
            <h1 className="text-[20px] md:text-[36px] leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Status
            </h1>
            <div className="flex flex-row items-center bg-[#F6F6F6] justify-start pl-[2rem] gap-2 w-full py-5">
              <span className="text-[10px] md:text-[20px] leading-[25px] text-[#606060] font-semibold font-darkerGrotesque-semiBold">
                Available
              </span>
            </div>
          </div>
          <div className="w-full mt-[30px] gap-[20px] flex flex-col items-start">
            <h1 className="text-[20px] md:text-[36px] leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Website
            </h1>
            <div className="flex flex-row items-center bg-[#F6F6F6] justify-start pl-[2rem] gap-2 w-full py-5">
              <span className="text-[16px] md:text-[20px] leading-[25px] text-[#606060] font-semibold font-darkerGrotesque-semiBold">
                anthonyestate.com
              </span>
            </div>
          </div>
          <div className="w-full mt-[30px] gap-[20px] flex flex-col items-start">
            <h1 className="text-[18px] md:text-[36px] leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold">
              Socials
            </h1>
            <div className="flex flex-row items-center [@media(max-width:800px)]:justify-between justify-start gap-2 w-full">
              {/* <span className="text-[10px] md:text-[20px] leading-[25px] text-[#606060] font-semibold font-darkerGrotesque-semiBold">
                anthonyestate.com
              </span> */}
              <div className="bg-[#E8F8FF] rounded-[12px] py-[10px] [@media(max-width:800px)]:py-[8px] [@media(max-width:800px)]:px-[15px] px-[20px] cursor-pointer hover:scale-[1.1] transition-[.2s]">
                <img
                  src={ThemeUtil.icon.dark_facebook}
                  className="w-[48px] h-[48px]"
                  alt=""
                />
              </div>
              <div className="bg-[#E8F8FF] rounded-[12px] py-[10px] [@media(max-width:800px)]:py-[8px] [@media(max-width:800px)]:px-[15px] px-[20px] cursor-pointer hover:scale-[1.1] transition-[.2s]">
                <img
                  src={ThemeUtil.icon.dark_instagram}
                  className="w-[48px] h-[48px]"
                  alt=""
                />
              </div>
              <div className="bg-[#E8F8FF] rounded-[12px] py-[10px] [@media(max-width:800px)]:py-[8px] [@media(max-width:800px)]:px-[15px] px-[20px] cursor-pointer hover:scale-[1.1] transition-[.2s]">
                <img
                  src={ThemeUtil.icon.dark_telegram}
                  className="w-[48px] h-[48px]"
                  alt=""
                />
              </div>
              <div className="bg-[#E8F8FF] rounded-[12px] py-[10px] [@media(max-width:800px)]:py-[8px] [@media(max-width:800px)]:px-[15px] px-[20px] cursor-pointer hover:scale-[1.1] transition-[.2s]">
                <img
                  src={ThemeUtil.icon.dark_twitter}
                  className="w-[48px] h-[48px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="flex flex-row gap-[10px] items-center justify-end w-full mt-10 text-[15px] md:text-[24px] leading-[20px] text-[#E33629] font-bold font-darkerGrotesque-bold">
            <img src={ThemeUtil.icon.warning_icon} alt="" />
            Report Agent
          </p>
        </div>
      </div>
      <ListOfPropertiesContent
        title={"Properties posted by Agent"}
        data={PropertiesData}
        showPagination={true}
        showFilters={false}
        showAllProperties={true}
      />
    </div>
  );
};

export default AgentProfileContent;
