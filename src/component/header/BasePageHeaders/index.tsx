import { CSSProperties } from "react";
import { IoIosNotifications, IoCloseSharp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BasePageHeaderSearchInput } from "../../input/BasePageHeaderSearchInput.tsx";
import { NavLink, useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import MobileBasePageHeader from "./MobileBasePageHeader";
import DesktopBasePageHeader from "./DesktopBasePageHeader.tsx";

export type BasePageHeaderProps = {
  headerNavStyles?: CSSProperties;
};

export const BasePageHeader = ({ headerNavStyles }: BasePageHeaderProps) => {
  const navigate = useNavigate();
  function handleBookmark() {
    navigate(RouterConstantUtil.routes.page.bookmark);
  }

  return (
    <div>
      <div className="min-[700px]:hidden">
        <MobileBasePageHeader headerNavStyles={headerNavStyles} />;
      </div>
      <div className="max-[700px]:hidden">
        <DesktopBasePageHeader handleBookmark={handleBookmark} />;
      </div>
    </div>
  );
};
