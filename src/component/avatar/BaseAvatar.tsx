import React, { CSSProperties, MouseEventHandler, ReactElement } from "react";
import { motion } from "framer-motion";
import { ThemeUtil } from "../../util/ThemeUtil";

type BaseAvatarProps = {
  children: ReactElement<React.JSX.Element>;
  isActive?: boolean;
  containerStyle?: CSSProperties;
  onClick?: MouseEventHandler;
};
export const BaseAvatar = ({
  children,
  isActive,
  containerStyle,
  onClick,
}: BaseAvatarProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        opacity: 0.9,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.8, borderRadius: "15px" }}
      className={`flex items-center justify-center rounded-[12px] h-[45px] min-w-[100px] p-[10px]  cursor-pointer text-center  ${
        isActive ? "bg-grayColor_5" : ""
      }`}
      style={containerStyle}
      onClick={onClick}
    >
      {children}
      {/* <div onClick={onClick} className={`flex items-center justify-center rounded-[12px] h-[45px] min-w-[100px] p-[10px]  cursor-pointer text-center  ${ isActive ? "bg-grayColor_5" : ""}`} style={containerStyle}>
      </div> */}
    </motion.div>
  );
};
