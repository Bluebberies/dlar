import {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactElement,
} from "react";
import { motion } from "framer-motion";
import { ThemeUtil } from "@/util/ThemeUtil.ts";

type BaseButtonProps = {
  title?: string;
  containerStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  children?: ReactElement;
  containerClassName?: string;
  onClick?: MouseEventHandler;
  hoverScale?: number;
  hoverOpacity?: number;
  tapScale?: number;
};
export const BaseButton = ({
  title,
  containerStyle,
  children,
  buttonStyle,
  containerClassName,
  onClick,
  hoverScale = 1.1,
  hoverOpacity = 0.9,
  tapScale = 0.8,
}: // ...props
BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div
      // className={`button-container`}
      className={` ${containerClassName} button-container `}
      style={containerStyle}
    >
      <motion.button
        whileHover={{
          scale: hoverScale,
          opacity: hoverOpacity,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: tapScale, borderRadius: "15px" }}
        className={"button select-none"}
        style={{
          fontSize: "20px",
          backgroundColor: ThemeUtil.color.primaryColor,
          color: ThemeUtil.color.whiteColor,
          ...buttonStyle,
        }}
        onClick={onClick}
      >
        {children || title}
        {/* <button
          className={"button"}
          style={{
            fontSize: "20px",
            backgroundColor: ThemeUtil.color.primaryColor,
            color: ThemeUtil.color.whiteColor,
            ...buttonStyle,
          }}
          {...props}
        >
        {children || title}
        </button> */}
      </motion.button>
    </div>
  );
};
