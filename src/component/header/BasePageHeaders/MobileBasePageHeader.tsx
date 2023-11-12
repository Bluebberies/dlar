import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { BasePageHeaderSearchInput } from "../../input/BasePageHeaderSearchInput.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import { BasePageHeaderProps } from "./index.tsx";


export default function MobileBasePageHeader({ headerNavStyles }: BasePageHeaderProps) {
  return (
    <div className="absolute top-0 left-0 right-0 h-auto flex flex-col gap-2 py-8 max-[1200px]:px-4  max-[1020px]:px-8  px-24">
    <img
      src={ThemeUtil.icon.arrowLeft}
      alt="goBback"
      className={"w-[48px] h-[48px] cursor-pointer text-[#000]"}
    />
    <div
      className={"flex flex-row items-center justify-between gap-3"}
      style={headerNavStyles}
    >
      <GiHamburgerMenu
        className={"w-[27px] h-[27px] cursor-pointer text-[#000]"}
      />
      <BasePageHeaderSearchInput />
      <div className={"flex gap-5 items-center w-auto"}>
        <div className="tooltip tooltip-primary" data-tip="Notifictaions">
          <div className="avatar online">
            <div className="w-[24px] rounded-full">
              <IoIosNotifications
                className={"w-[27px] h-[27px] cursor-pointer text-[#111110]"}
              />
            </div>
          </div>
        </div>
        <img
          src={ThemeUtil.icon.profile}
          className={"w-[40px] h-[40px] cursor-pointer"}
          alt={"profile"}
        />
      </div>
    </div>
  </div>

  )
}
