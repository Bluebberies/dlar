import {BaseButton} from "../button/BaseButton.tsx";

export const BasePageFooterSubscribeInput = () => {
  return(
      <div className={"h-[70px] p-1 rounded-2xl w-[700px] flex items-center bg-white overflow-hidden "}>
          <input placeholder={"Please enter your email address..."} className={"w-full h-full focus:outline-0 text-grayColor_2 text-[20px]"} />
          <BaseButton title={"Subscribe"} containerStyle={{
              width: 200,
              height: 60
          }}  />
      </div>
  )
}