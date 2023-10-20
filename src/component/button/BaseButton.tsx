import {ButtonHTMLAttributes, CSSProperties, ReactElement} from "react";
import {ThemeUtil} from "../../util/ThemeUtil.ts";

type BaseButtonProps = {
    title?: string,
    containerStyle?: CSSProperties,
    buttonStyle?: CSSProperties,
    children?: ReactElement
}
export const BaseButton = ({title, containerStyle, children, buttonStyle, ...props}: BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return(
      <div
        className={`button-container`}
        style={containerStyle}
      >
          <button
              className={"button"}
              style={{backgroundColor: ThemeUtil.color.primaryColor, color: ThemeUtil.color.whiteColor, ...buttonStyle}}
              {...props}
          >{children || title}</button>
      </div>
  )
}