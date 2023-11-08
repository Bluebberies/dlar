import {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactElement,
} from "react";
import { motion } from "framer-motion";
import { ThemeUtil } from "../../util/ThemeUtil.ts";

type BaseButtonProps = {
  title?: string;
  containerStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  children?: ReactElement;
  containerClassName?: string;
  onClick?: MouseEventHandler;
};
export const BaseButton = ({
  title,
  containerStyle,
  children,
  buttonStyle,
  containerClassName,
  onClick,
  // ...props
}: BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div
      // className={`button-container`}
      className={` ${containerClassName} button-container`}
      style={containerStyle}
    >
      <motion.button
        whileHover={{
          scale: 1.2,
          opacity: 0.8,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9, borderRadius: "15px" }}
        className={"button"}
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
