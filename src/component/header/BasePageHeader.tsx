import {BasePageHeaderSearchInput} from "../input/BasePageHeaderSearchInput.tsx";
import { NavLink} from "react-router-dom";
import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";
import Icon from "@mdi/react";
import {mdiBellBadge} from "@mdi/js";

export const BasePageHeader = () => {
  return (
      <div className={"base-page-header base-page-space"}>
          <img src={"/src/assets/image/logo.svg"} className={"w-[97px] h-[35px]"} alt={"logo"} />
          <BasePageHeaderSearchInput />
          <div className={"flex gap-5 items-center"}>
              <NavLink to={RouterConstantUtil.routes.page.home} className={({isActive})=>  isActive ? "active-nav" : "inactive-nav"}>Home</NavLink>
              <NavLink to={"/"} className={({isActive})=>  isActive ? "active-nav" : "inactive-nav"}>About</NavLink>
              <NavLink to={"/"} className={({isActive})=>  isActive ? "active-nav" : "inactive-nav"}>Contact</NavLink>
          </div>
          <div className={"flex gap-5 items-center"}>
            <img src={"/src/assets/icon/bookmark.svg"} className={"w-[20px] h-[20px]"} alt={"book mark"} />
            <img src={"/src/assets/icon/chat.svg"} className={"w-[24px] h-[24px]"} alt={"chat"} />
              <Icon path={mdiBellBadge} className={"w-[24px] h-[24px]"} />
            <img src={"/src/assets/icon/profile.svg"} className={"w-[40px] h-[40px]"} alt={"profile"} />
          </div>
      </div>
  )
}