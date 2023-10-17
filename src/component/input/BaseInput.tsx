import {InputHTMLAttributes} from "react";

interface BaseInputProps {
    label?: string,
    placeholder?: string,
}
export const BaseInput = ({label, placeholder, ...props}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>)  => {
    return(
      <div className={"h-[100px] mt-5 mb-5"}>
          <h1
            className={"font-medium text-[28px] leading-[25px]  text-left mb-2"}
          >{label}</h1>

          <input className={"border-0 w-full h-[60%] bg-[#F5F5F5] pl-5 font-light text-[20px] leading-[25px]"} placeholder={placeholder} {...props}  />
      </div>
  )
}