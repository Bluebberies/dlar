import { CSSProperties, InputHTMLAttributes, useState } from "react";
import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineInfoCircle,
  AiFillCheckCircle,
} from "react-icons/ai";

interface BaseInputProps {
  label?: string;
  placeholder?: string;
  superText?: string;
  superTextPosition?: "left" | "right";
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  inputContainerStyle?: CSSProperties;
  type?: string;
  superTextStyles?: CSSProperties;
  inputContainerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  showValidTick?: boolean;
}
export const BaseInput = ({
  label,
  placeholder,
  superText,
  superTextPosition,
  containerStyle,
  labelStyle,
  type,
  inputStyle,
  inputContainerStyle,
  superTextStyles,
  inputContainerClassName,
  inputClassName,
  labelClassName,
  showValidTick,
  ...props
}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  // const [visible, setVisible] = useState(true);
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={"min-h-[100px] h-auto mt-5 mb-5"} style={containerStyle}>
      {label && (
        <h1
          dangerouslySetInnerHTML={{ __html: label }}
          className={`font-medium leading-[25px] text-left mb-2 text-blackColor font-darkerGrotesque-bold ${
            labelClassName ? labelClassName : "text-[28px] "
          }`}
          style={labelStyle}
        >
          {/* {label} */}
        </h1>
      )}

      <div
        style={inputContainerStyle}
        className={`${inputContainerClassName} relative h-[65px] flex items-center flex-row justify-between gap-1 ${
          type == "checkbox" ? "bg-none" : "bg-[#F5F5F5]"
        } rounded-xl pr-[15px]`}
      >
        {superText && (
          <span
            dangerouslySetInnerHTML={{ __html: superText }}
            // className={`absolute bottom-4 text-grayColor_2 text-[20px] leading-[25px] mt-5 ml-3 mr-20 ${
            className={`bsol text-grayColor_2 text-[20px] leading-[25px] ml-3 border-r-slate-950 border-r-4 pr-2 border-l-[#070707] ${
              superTextPosition === "left" ? "left-0" : "right-0"
            }`}
            style={superTextStyles}
          >
            {/* {superText} */}
          </span>
        )}
        <input
          autoComplete="True"
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className={`text-[#111110] border-0 rounded-xl w-full h-[100%] bg-[#F5F5F5] font-darkerGrotesque-medium focus:outline-0 pl-5 font-light text-[20px] leading-[25px] ${inputClassName}`}
          placeholder={placeholder}
          style={inputStyle}
          {...props}
        />
        {type == "password" &&
          (showPassword ? (
            <AiFillEyeInvisible
              onClick={handleTogglePassword}
              className="text-[30px] cursor-pointer text-[#111110]"
            />
          ) : (
            <AiFillEye
              onClick={handleTogglePassword}
              className="text-[30px] cursor-pointer text-[#111110]"
            />
          ))}
        {showValidTick && <AiFillCheckCircle className="text-[green] text-[30px] ml-3"/>}
      </div>
      {/* <p className="text-[red] text-[20px] leading-[15px] flex items-center gap-2 mb-4">
        <AiOutlineInfoCircle /> Input value is incorerct. 
      </p> */}
    </div>
  );
};
