import {ThemeUtil} from "../../util/ThemeUtil.ts";

export const BasePagination = () => {
  return(
      <div className={"w-full h-[75px]  mb-10 flex justify-center items-center gap-5"}>
          <img src={ThemeUtil.icon.arrowLeft} className={"cursor-pointer"} alt={"arrow"}/>
          <span className={"font-darkerGrotesque-bold cursor-pointer text-[20px] leading-[35px] text-blackColor"}>1</span>
          <span className={"font-darkerGrotesque-bold cursor-pointer text-[20px] leading-[35px] text-grayColor_1"}>2</span>
          <img src={ThemeUtil.icon.arrowRight} className={"cursor-pointer"} alt={"arrow"}/>
      </div>
  )
}