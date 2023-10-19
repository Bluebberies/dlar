import {BasePageHeaderSearchInput} from "../input/BasePageHeaderSearchInput.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";
import Icon from "@mdi/react";
import {mdiBellBadge} from "@mdi/js";
import {ThemeUtil} from "../../util/ThemeUtil.ts";

export const BasePageHeader = () => {
    const navigate = useNavigate()
    function handleBookmark() {
        navigate(RouterConstantUtil.routes.page.bookmark)
    }
  return (
      <div className={"base-page-header base-page-space"}>
          <img src={ThemeUtil.image.logo} className={"w-[97px] h-[35px]"} alt={"logo"} />
          <BasePageHeaderSearchInput />
          <div className={"flex gap-5 items-center"}>
              <NavLink to={RouterConstantUtil.routes.page.home} className={({isActive})=>  isActive ? "active-nav" : "inactive-nav"}>Home</NavLink>
              <NavLink to={"/"} className={({isActive})=>  isActive ? "active-nav" : "inactive-nav"}>About</NavLink>
              <NavLink to={"/"} className={({isActive})=>  isActive ? "active-nav" : "inactive-nav"}>Contact</NavLink>
          </div>
          <div className={"flex gap-5 items-center"}>
            <img src={ThemeUtil.icon.bookmark} className={"w-[20px] h-[20px] cursor-pointer"} alt={"book mark"} onClick={handleBookmark} />
            <img src={ThemeUtil.icon.chat} className={"w-[24px] h-[24px] cursor-pointer"} alt={"chat"} />
              <Icon path={mdiBellBadge} className={"w-[24px] h-[24px] cursor-pointer"} />
            <img src={ThemeUtil.icon.profile} className={"w-[40px] h-[40px] cursor-pointer"} alt={"profile"} />
          </div>
      </div>
  )
}