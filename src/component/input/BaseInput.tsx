import {CSSProperties, InputHTMLAttributes} from "react";

interface BaseInputProps {
    label?: string,
    placeholder?: string,
    superText?: string,
    superTextPosition?: "left"|"right",
    containerStyle?: CSSProperties
}
export const BaseInput = ({label, placeholder, superText, superTextPosition, containerStyle, ...props}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>)  => {
    return(
      <div className={"h-[100px] mt-5 mb-5"} style={containerStyle}>
          {
              label && (
                  <h1
                      className={"font-medium text-[28px] leading-[25px]  text-left mb-2 font-darkerGrotesque-bold"}
                  >{label}</h1>
              )
          }

          {
              superText && (
                  <span className={`absolute text-grayColor_2 text-[20px] leading-[25px] mt-5 ml-3 mr-20 ${superTextPosition === "left"? "left-0" : "right-0"}`}>{superText}</span>
              )
          }
          <input className={'border-0 w-full h-[60%] bg-[#F5F5F5] font-darkerGrotesque-bold focus:outline-0 pl-5 font-light text-[20px] leading-[25px]'} placeholder={placeholder} {...props}  />
      </div>
  )
}