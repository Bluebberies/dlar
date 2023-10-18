import Icon from "@mdi/react";
import {mdiMagnify} from "@mdi/js";

export const BasePageHeaderSearchInput = () => {
  return(
      <div className={"h-[52px] rounded-2xl w-[452px] border-2 border-[#C0C0C0] flex items-center gap-5 overflow-hidden "}>
        <Icon path={mdiMagnify}  className={"h-[32px] w-[32px] ml-1 text-grayColor_2"} />
          <input placeholder={"What are you looking for..."} className={"w-full h-full font-darkerGrotesque-bold focus:outline-0 text-grayColor_2 text-[20px]"} />
      </div>
  )
}