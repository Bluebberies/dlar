import {BaseButton} from "../../button/BaseButton.tsx";
import {ThemeUtil} from "../../../util/ThemeUtil.ts";

export const PropertyDetailsSection = () => {
  return(
      <div className={"w-full mt-24"}>
        <h1 className={"font-darkerGrotesque-bold text-[36px] leading-[35px] text-blackColor mb-3"}>Properties Description</h1>
        <div className={"flex items-center flex-wrap gap-2"}>
          <BaseButton
              containerStyle={{
                width: 300,
                height: 55
              }}
            style={{
              background: ThemeUtil.color.primaryColor_2
            }}
          >
            <div className={"flex items-center justify-center gap-2"}>
              <span className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}>Status</span>
              <span className={"font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"}> Available</span>
            </div>
          </BaseButton>
          <BaseButton
              containerStyle={{
                width: 300,
                height: 55
              }}
              style={{
                background: ThemeUtil.color.primaryColor_2
              }}
          >
            <div className={"flex items-center justify-center gap-2"}>
              <span className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}>Status</span>
              <span className={"font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"}> Available</span>
            </div>
          </BaseButton>
          <BaseButton
              containerStyle={{
                width: 300,
                height: 55
              }}
              style={{
                background: ThemeUtil.color.primaryColor_2
              }}
          >
            <div className={"flex items-center justify-center gap-2"}>
              <span className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}>Status</span>
              <span className={"font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"}> Available</span>
            </div>
          </BaseButton>
          <BaseButton
              containerStyle={{
                width: 300,
                height: 55
              }}
              style={{
                background: ThemeUtil.color.primaryColor_2
              }}
          >
            <div className={"flex items-center justify-center gap-2"}>
              <span className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}>Status</span>
              <span className={"font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"}> Available</span>
            </div>
          </BaseButton>
          <BaseButton
              containerStyle={{
                width: 300,
                height: 55
              }}
              style={{
                background: ThemeUtil.color.primaryColor_2
              }}
          >
            <div className={"flex items-center justify-center gap-2"}>
              <span className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}>Status</span>
              <span className={"font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"}> Available</span>
            </div>
          </BaseButton>
        </div>
      </div>
  )
}