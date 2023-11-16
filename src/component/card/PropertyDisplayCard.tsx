import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { PropertiesDataProps } from "@/toolkit/data/nearYouData.ts";
import { motion } from "framer-motion";
import heroImage from "../../assets/image/hero-image.jpg";
import hero1 from "../../assets/image/hero1.jpg";
import WhiteChevronArrow from "../../assets/icon/white-chevron-round.svg";
import { cutSentence } from "./../../util/helper";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

type RecentlyUploadCardProps = {
  // item: RecentlyUploadedDataProps,
  cardType?: string;
  item: PropertiesDataProps;
  onClick?: () => void;
};
export const PropertyDisplayCard = ({
  item,
  onClick,
  cardType,
}: RecentlyUploadCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        opacity: 0.8,
        transition: { duration: 0.1 },
      }}
      className={
        "flex flex-col items-center w-full md:w-[280px] h-[auto] rounded-[12px] overflow-hidden mt-10 cursor-pointer"
      }
      onClick={onClick}
    >
      <div
        className={
          "w-full sm:w-[170px] md:w-[280px] h-[170px] md:h-[300px] overflow-hidden rounded-[12px] relative"
        }
      >
        <img
          src={item.images[0]}
          className={"w-full h-full z-0 "}
          alt={"andrea"}
        />
        <BaseAvatar
          containerStyle={{
            position: "absolute",
            backgroundColor: "white",
            bottom: 10,
            zIndex: 100,
            minWidth: 50,
            height: 40,
            left: 10,
          }}
        >
          <div
            className={
              "flex justify-center items-center gap-1 h-full rounded-[12px] "
            }
          >
            <img
              src={ThemeUtil.icon.cameraOutline}
              className={"w-[20px] h-[20px]"}
              alt={"andrea"}
            />
            <span>{item.images.length}</span>
          </div>
        </BaseAvatar>
      </div>
      <div className={"mt-5"}>
        <h1
          className={
            "text-[16px] md:text-[30px] leading-[16px] md:leading-[35px] text-blackColor font-darkerGrotesque-bold w-full break-all"
          }
        >
          {item.title}
        </h1>
        <div className={"flex items-center gap-1 md:gap-2"}>
          <img
            src={ThemeUtil.icon.blackMap}
            className={
              "text-blackColor w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            }
            alt={"black-map-pin-fill"}
          />
          <p
            className={
              "text-[14px] md:text-[20px] font-light leading-[16px] md:leading-[35px] text-blackColor font-darkerGrotesque-medium"
            }
          >
            {item.location}
          </p>
        </div>
        <p
          className={
            "text-[14px] md:text-[20px] font-light leading-[25px] text-grayColor_1 mt-2 md:mt-5 mb-2 md:mb-5 ml-5 font-darkerGrotesque-semiBold"
          }
        >
          {item.type}
        </p>
        <div className={"flex justify-between items-center w-full"}>
          <img
            src={ThemeUtil.icon.naira}
            className={"text-blackColor w-[16px] h-[16px]"}
            alt={"naira"}
          />
          <p
            className={
              "w-full text-[16px] md:text-[20px] font-light leading-[16px] md:leading-[35px] text-blackColor font-darkerGrotesque-black"
            }
          >
            {item.amount}{" "}
            <span
              className={
                "text-grayColor_1 font-darkerGrotesque-semiBold text-[16px] md:text-[20px]"
              }
            >
              per annum
            </span>
          </p>
          <img
            src={ThemeUtil.icon.bookmarkOutline}
            className={"text-blackColor w-[24px] h-[24px]"}
            alt={"bookmark"}
          />
        </div>
      </div>
    </motion.div>

    // <div
    //   className={"h-auto w-[280px] rounded-[12px] relative"}
    //   style={{
    //     background:
    //       "linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, #000 100%)",
    //   }}
    // >
    //   <img
    //     src={ThemeUtil.image.bedroom}
    //     className={
    //       "rounded-[12px] opacity-[.9] h-auto w-[280px] bg-center bg-no-repeat"
    //     }
    //     alt={"hero image"}
    //   />
    //   <div
    //     className={
    //       "z-[999] px-[16px] translate-x-[-50%] w-full absolute bottom-10 gap-[3px] flex flex-col justify-start items-start left-[50%]"
    //     }
    //   >
    //     <h2
    //       className={
    //         "text-[30px] leading-[35px] text-[#FAFAFA] font-darkerGrotesque-bold w-full break-all"
    //       }
    //     >
    //       Bon Hotel
    //     </h2>
    //     <div className={"flex items-center gap-2"}>
    //       {/* <img
    //         src={ThemeUtil.icon.blackMap}
    //         className={"text-blackColor w-[24px] h-[24px]"}
    //         alt={"black-map-pin-fill"}
    //       /> */}
    //       <IoLocationSharp className={"text-[#fff] w-[24px] h-[24px]"}/>
    //       <p
    //         className={
    //           "text-[16px] font-light leading-[20px] text-[#FAFAFA] font-darkerGrotesque-medium"
    //         }
    //       >
    //         {item.location}
    //       </p>
    //     </div>
    //     <BaseAvatar
    //       containerStyle={{
    //         // width: 240,
    //         borderRadius: 12,
    //         // height: 60,
    //         backgroundColor: "#18ACE8",
    //         padding: "10px"
    //       }}
    //       containerCLassName="w-auto h-[46px] p-[10px]"
    //       hoverScale={1.04}
    //       hoverOpacity={0.7}
    //     >
    //       <div
    //         className={
    //           "flex select-none items-center justify-center gap-[10px] h-full"
    //         }
    //       >
    //         <span
    //           className={
    //             "text-white text-[20px] leading-[35px] font-darkerGrotesque-bold"
    //           }
    //         >
    //           Checkout
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
