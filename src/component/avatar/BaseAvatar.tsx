import React, {CSSProperties, ReactElement} from "react";

type BaseAvatarProps = {
    children: ReactElement<React.JSX.Element>,
    isActive?: boolean,
    containerStyle?: CSSProperties,
    onClick?: ()=> void
}
export const BaseAvatar = ({children, isActive, containerStyle, onClick}:BaseAvatarProps) => {
  return(
      <div onClick={onClick} className={`rounded-[12px] h-[45px] min-w-[100px] p-[10px]  cursor-pointer text-center  ${ isActive ? "bg-grayColor_5" : ""}`} style={containerStyle}>
          {children}
      </div>
  )
}