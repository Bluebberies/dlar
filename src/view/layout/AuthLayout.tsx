import React, {CSSProperties} from "react";
import {ThemeUtil} from "../../util/ThemeUtil.ts";

interface AuthLayoutProps {
    children?: React.JSX.Element,
    title: string,
    subTitle: string,
    style?: CSSProperties | undefined
}
export const AuthLayout = ({children, title, subTitle, style}: AuthLayoutProps) => {
  return(
      <div
        className={"auth-two-background"}
      >
        {/*<img src={"/src/assets/image/onboarding.svg"}  className={"background-image"} alt={"onboarding"} />*/}
          <img src={"/src/assets/image/logo.svg"} className={"logo"} alt={"logo"}/>
          <div
            className={" w-[55%] m-auto mt-20 h-[80%] flex justify-center pt-10 mb-10"}
            style={style}
          >
              <div
                className={"text-center w-1/2"}
              >
                  <h2
                      className={"font-medium text-[48px] leading-[65px]"}
                      style={{color: ThemeUtil.color.blackColor}}
                  >{title}</h2>

                  <h2
                      className={"font-bold text-[28px] leading-[25px] text-grayColor_2"}
                  >{subTitle}</h2>

                  {children}

              </div>
        </div>
      </div>
  )
}

AuthLayout.defaultProps = {
    title: "Welcome back!",
    subTitle: "Login to your account",
}