import React from "react";
import { motion } from "framer-motion";
import { BasePageHeader } from "@/component/header/BasePageHeaders/index.tsx";
import { BasePageFooter } from "@/component/footer/BasePageFooter.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { useNavigate } from "react-router-dom";

type SecondPageLayoutProps = {
  children?: React.JSX.Element;
};
export const SecondPageLayout = ({ children }: SecondPageLayoutProps) => {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <motion.div
      key="BaseLayout"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={"base-page-background relative"}>
        <BasePageHeader />
        <div className={"w-[1440px] m-auto relative"}>
          <div
            className={
              "flex items-center gap-3 w-full base-page-space mt-16 cursor-pointer"
            }
            onClick={handleBack}
          >
            <img src={ThemeUtil.icon.arrowLeft} alt={"arrow left"} />
            <span
              className={"text-[20px] leading-[35px] font-darkerGrotesque-bold"}
            >
              Back
            </span>
          </div>
          {children}
        </div>
        <BasePageFooter />
      </div>
    </motion.div>
  );
};
