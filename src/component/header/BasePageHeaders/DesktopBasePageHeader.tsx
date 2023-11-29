import { IoIosNotifications } from "react-icons/io";
import { BasePageHeaderSearchInput } from "../../input/BasePageHeaderSearchInput.tsx";
import { NavLink, useLocation } from "react-router-dom";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil.ts";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { MouseEventHandler } from "react";

type DesktopBasePageHeaderProps = {
  handleBookmark: MouseEventHandler;
};

export default function DesktopBasePageHeader({
  handleBookmark,
}: DesktopBasePageHeaderProps) {
  const location = useLocation();

  console.log("location", location);

  return (
    <div
      className={
        "h-auto flex flex-row items-center justify-between flex-wrap max-[1200px]:px-4 gap-3 max-[1020px]:px-8 py-8 pb-4 px-24"
      }
    >
      <img
        src={ThemeUtil.image.logo}
        className={"w-[97px] h-[35px]"}
        alt={"logo"}
      />
      <BasePageHeaderSearchInput />
      <div className={"flex gap-5 items-center"}>
        <NavLink
          to={RouterConstantUtil.routes.page.home}
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className={"flex gap-5 items-center w-auto"}>
        <div className="tooltip tooltip-primary" data-tip="Bookmarks">
          <img
            src={ThemeUtil.icon.bookmark}
            className={"w-[20px] h-[20px] cursor-pointer"}
            alt={"book mark"}
            onClick={handleBookmark}
          />
        </div>
        <div className="tooltip tooltip-primary" data-tip="Chat">
          <img
            src={ThemeUtil.icon.chat}
            className={"w-[24px] h-[24px] cursor-pointer"}
            alt={"chat"}
          />
        </div>
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
  );
}
