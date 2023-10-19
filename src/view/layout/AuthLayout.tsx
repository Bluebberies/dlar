import React, {CSSProperties} from "react";
import {ThemeUtil} from "../../util/ThemeUtil.ts";
import Logo from "../../assets/image/logo.svg"
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
          <img src={Logo} className={"logo"} alt={"logo"}/>
          <div
            className={" w-[55%] m-auto p-10  flex justify-center  mb-10 "}
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                ...style
            }}
          >
              <div
                className={"text-center w-1/2"}
              >
                  <h2
                      className={"font-medium text-[48px] leading-[65px] font-darkerGrotesque-bold"}
                      style={{color: ThemeUtil.color.blackColor}}
                  >{title}</h2>

                  <h2
                      className={"font-bold text-[28px] leading-[25px] text-grayColor_2 font-darkerGrotesque-semiBold"}
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