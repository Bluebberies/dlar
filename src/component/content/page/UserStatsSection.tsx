import { ThemeUtil } from "@/util/ThemeUtil";
import React from "react";
import { motion } from "framer-motion";

export default function UserStatsSection() {
  return (
    <motion.div
      initial={{ opacity: 0,  x: -100  }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: .5 }}
      viewport={{ once: true }}
    >
      <div
        className="w-full flex-wrap px-[20px] md:px-[120px] h-[auto] gap-8 py-[90px] flex flex-row items-start justify-between"
        style={{
          background:
            "linear-gradient(127deg, rgba(232, 248, 255, 0.50) 26.76%, #E8F8FF 71.66%)",
        }}
      >
        <div className="max-[700px]:w-full">
          <h1 className="w-full md:w-[536px] max-[700px]:text-[30px] max-[700px]:leading-[25px] text-[48px] leading-[55px] font-darkerGrotesque-black text-[#111110]">
            What our clients are saying about us.
          </h1>
          <p className="mt-[20px] w-full md:w-[536px] text-[30px] leading-normal font-darkerGrotesque-medium text-[#111110]">
            In Dwelar, Customer satisfaction has always been our priority, we
            are because they are.
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center">
              <h4 className=" max-[700px]:text-[24px] text-[48px]  max-[700px]:leading-[23px] leading-[55px] font-darkerGrotesque-bold text-[#18ACE8]">
                10.4k
              </h4>
              <p className="text-[24px]  max-[700px]:text-[16px] leading-normal font-darkerGrotesque-medium text-[#111110]">
                Active Dwelarns
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className=" max-[700px]:text-[24px] text-[48px]  max-[700px]:leading-[23px] leading-[55px] font-darkerGrotesque-bold text-[#F8BD00]">
                4.92
              </h4>
              <p className="text-[24px]  max-[700px]:text-[16px] leading-normal font-darkerGrotesque-medium text-[#111110]">
                Overall rating
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[30px] w-full md:w-auto">
          <div className="flex flex-row gap-5 items-center">
            <img
              src={ThemeUtil.image.ref_dummy_icon}
              alt={"ref"}
              className="max:[700px]:w-[50px] max:[700px]:h-[50px]"
            />
            <h1 className=" w-[auto] max-[700px]:text-[30px] text-[48px]  max-[700px]:leading-[28px] leading-[55px] font-darkerGrotesque-black text-[#111110]">
              Chibuike kelvin
            </h1>
          </div>
          <p className="w-full md:w-[536px]  max-[700px]:text-[16px] text-[20px]  max-[700px]:leading-[16px] leading-normal font-darkerGrotesque-bold text-[#606060]">
            When i was introduced to Dwelar at first, i was skeptical to try it
            out, but signing in to and and using their services made me think
            different
          </p>
        </div>
      </div>
    </motion.div>
  );
}
