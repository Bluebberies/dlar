import {ButtonHTMLAttributes, CSSProperties} from "react";
import {ThemeUtil} from "../../util/ThemeUtil.ts";

type BaseButtonProps = {
    title?: string,
    containerStyle?: CSSProperties,
    buttonStyle?: CSSProperties,
}
export const BaseButton = ({title, containerStyle, buttonStyle, ...props}: BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return(
      <div
        className={`button-container`}
        style={containerStyle}
      >
          <button
              className={"button"}
              style={{backgroundColor: ThemeUtil.color.primaryColor, color: ThemeUtil.color.whiteColor, ...buttonStyle}}
              {...props}
          >{title}</button>
      </div>
  )
}