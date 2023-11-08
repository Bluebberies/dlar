import { BaseButton } from "../../button/BaseButton.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import { motion } from "framer-motion";

export const PropertyDetailsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={"w-full mt-24"}>
      <h1
        className={
          "font-darkerGrotesque-bold text-[36px] leading-[35px] text-blackColor mb-3"
        }
      >
        Properties Description
      </h1>
      <div className={"flex items-center flex-wrap gap-2"}>
        <BaseButton
          containerStyle={{
            width: 300,
            height: 55,
          }}
          style={{
            background: ThemeUtil.color.primaryColor_2,
          }}
        >
          <div className={"flex items-center justify-center gap-2"}>
            <span
              className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
            >
              Status
            </span>
            <span
              className={
                "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
              }
            >
              {" "}
              Available
            </span>
          </div>
        </BaseButton>
        <BaseButton
          containerStyle={{
            width: 300,
            height: 55,
          }}
          style={{
            background: ThemeUtil.color.primaryColor_2,
          }}
        >
          <div className={"flex items-center justify-center gap-2"}>
            <span
              className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
            >
              Status
            </span>
            <span
              className={
                "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
              }
            >
              {" "}
              Available
            </span>
          </div>
        </BaseButton>
        <BaseButton
          containerStyle={{
            width: 300,
            height: 55,
          }}
          style={{
            background: ThemeUtil.color.primaryColor_2,
          }}
        >
          <div className={"flex items-center justify-center gap-2"}>
            <span
              className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
            >
              Status
            </span>
            <span
              className={
                "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
              }
            >
              {" "}
              Available
            </span>
          </div>
        </BaseButton>
        <BaseButton
          containerStyle={{
            width: 300,
            height: 55,
          }}
          style={{
            background: ThemeUtil.color.primaryColor_2,
          }}
        >
          <div className={"flex items-center justify-center gap-2"}>
            <span
              className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
            >
              Status
            </span>
            <span
              className={
                "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
              }
            >
              {" "}
              Available
            </span>
          </div>
        </BaseButton>
        <BaseButton
          containerStyle={{
            width: 300,
            height: 55,
          }}
          style={{
            background: ThemeUtil.color.primaryColor_2,
          }}
        >
          <div className={"flex items-center justify-center gap-2"}>
            <span
              className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
            >
              Status
            </span>
            <span
              className={
                "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
              }
            >
              {" "}
              Available
            </span>
          </div>
        </BaseButton>
      </div>
      <motion.div variants={container} whileInView='show' initial="hidden">
        <motion.p variants={item}>Loooooo</motion.p>
        <motion.p variants={item}>hooooooo</motion.p>
        <motion.p variants={item}>cooooooo</motion.p>
      </motion.div>
    </div>
  );
};
