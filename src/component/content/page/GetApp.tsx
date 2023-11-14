import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BaseAvatar } from "@/component/avatar/BaseAvatar.tsx";
import { ThemeUtil } from "@/util/ThemeUtil";
import { motion } from "framer-motion";

export default function GetApp() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: .5}}
      viewport={{ once: true }}
      
    >
      <div className="w-full p-[100px] max-[500px]:p-[20px] max-[600px]:p-[50px] pb-0 flex max-[850px]:flex-col flex-row items-center justify-between ">
        <div>
          <h1 className=" w-[auto] max-[700px]:text-[30px] text-[48px]  max-[700px]:leading-[28px] leading-[55px] font-darkerGrotesque-black text-[#111110]">
            Download our App
          </h1>
          <h2 className="mt-[20px] w-full md:w-[536px] text-[30px] leading-normal font-darkerGrotesque-medium text-[#111110]">
            Do a whole lot and more with our exclusive app like instant
            bookings, transactions and lots more.
          </h2>
          <div className="flex flex-row items-center max-[348px]:flex-wrap max-[348px]:gap-2 gap-[30px] mt-[38px]">
            <BaseAvatar
              isActive={true}
              // onClick={handleFilter}
              containerStyle={{
                // marginLeft: 200,
                minWidth: 0,
                padding: "5px 20px",
                backgroundColor: "#18ACE8",
                // marginLeft: "auto",
                height: 70,
              }}
            >
              <div className={"flex gap-3 items-center justify-center"}>
                <FaApple className={"w-[35px] h-[35px] text-[#fff]"} />
                <span
                  className={
                    "text-center text-[#fff] font-darkerGrotesque-bold max-[600px]:text-[16px] max-[600px]:leading-[15px] text-[20px]"
                  }
                >
                  Download on <br className="max-[600px]:hidden"></br>Apple
                  Store
                </span>
              </div>
            </BaseAvatar>
            <BaseAvatar
              isActive={true}
              // onClick={handleFilter}
              containerStyle={{
                // marginLeft: 200,
                minWidth: 0,
                padding: "5px 20px",
                backgroundColor: "#18ACE8",
                // marginLeft: "auto",
                height: 70,
              }}
            >
              <div className={"flex gap-3 items-center justify-center"}>
                <IoLogoGooglePlaystore
                  className={"w-[35px] h-[35px] text-[#fff]"}
                />
                <span
                  className={
                    "text-center text-[#fff] font-darkerGrotesque-bold max-[600px]:text-[16px] max-[600px]:leading-[15px] text-[20px]"
                  }
                >
                  Download on <br className="max-[600px]:hidden"></br> Play
                  Store
                </span>
              </div>
            </BaseAvatar>
          </div>
        </div>
        <div>
          <img
            src={ThemeUtil.image.phone_preview}
            alt={"mobile"}
            // className="max:[700px]:w-[50px] max:[700px]:h-[50px]"
          />
        </div>
      </div>
    </motion.div>
  );
}
