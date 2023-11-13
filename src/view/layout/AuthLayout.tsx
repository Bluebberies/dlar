import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import Logo from "../../assets/image/logo.svg";
import useHandleRouteNavigate from "@/util/customhooks/useHandleRouteNavigate.tsx";
export interface AuthLayoutProps {
  children?: React.JSX.Element;
  title: string;
  subTitle: string;
  style?: CSSProperties | undefined;
  routeUrl?: string;
  footerNextRouteType?: string;
}
export const AuthLayout = ({
  children,
  title,
  subTitle,
  style,
  routeUrl = "",
  footerNextRouteType,
}: AuthLayoutProps) => {
  return (
    <motion.div
      key="AuthLayout"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8 }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className={"auth-two-background"}>
        <img src={Logo} className="logo max-[425px]:hidden" alt={"logo"} />
        <div
          className=" m-auto flex flex-col items-center max-[425px]:mt-[16px] mt-16 w-[40%] max-[1100px]:w-[70%] max-[600px]:w-[100%]"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            ...style,
          }}
        >
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className={
              "font-medium max-[425px]:text-[38px] w-[90%] text-[40px] text-center leading-[45px] max-[425px]:mb-[8px] mb-[10px] font-darkerGrotesque-bold"
            }
            style={{ color: ThemeUtil.color.blackColor }}
          >
            {/* {title} */}
          </h2>
          <h2
            className={
              "text-center w-[80%] font-bold max-[425px]:text-[21px] text-[25px] leading-[25px] text-grayColor_2 font-darkerGrotesque-semiBold"
            }
          >
            {subTitle}
          </h2>
          {children}
        </div>
        <p
          className={`hidden ${
            footerNextRouteType && "max-[425px]:flex"
          } text-grayColor_1 text-[18px] text-center cursor-pointer`}
        >
          {footerNextRouteType == "register"
            ? "Don’t have an account yet?"
            : "Already have an account?"}
          <span
            className={"text-blackColor font-darkerGrotesque-bold"}
            onClick={useHandleRouteNavigate(routeUrl)}
          >
            {footerNextRouteType == "register" ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

AuthLayout.defaultProps = {
  title: "Welcome back!",
  subTitle: "Login to your account",
};
