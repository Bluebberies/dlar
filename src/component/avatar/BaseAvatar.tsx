import React, { CSSProperties, MouseEventHandler, ReactElement } from "react";
import { motion } from "framer-motion";

type BaseAvatarProps = {
  children: ReactElement<React.JSX.Element>;
  isActive?: boolean;
  containerStyle?: CSSProperties;
  containerCLassName?: string;
  onClick?: MouseEventHandler;
  hoverScale?: number;
  hoverOpacity?: number;
  tapScale?: number;
  activeBg?: string;
  mobileBg?: string;
};
export const BaseAvatar = ({
  children,
  isActive,
  containerStyle,
  containerCLassName,
  onClick,
  hoverScale = 1.1,
  hoverOpacity = 0.9,
  tapScale = 0.8,
  activeBg = 'bg-grayColor_5',
  mobileBg = ''
}: BaseAvatarProps) => {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        opacity: hoverOpacity,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: tapScale, borderRadius: "15px" }}
      className={` ${containerCLassName} flex items-center justify-center rounded-[12px] h-[45px] min-w-[100px] p-[10px]  cursor-pointer text-center  ${
        isActive ? activeBg : mobileBg
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
