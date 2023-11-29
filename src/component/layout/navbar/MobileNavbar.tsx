import { Link, useLocation } from "react-router-dom";
import BookmarkIcon from "../../icons/BookmarkIcon";
import HomeIcon from "../../icons/HomeIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import WalletIcon from "../../icons/WalletIcon";
import NotificationIcon from "@/component/icons/NotificationIcon";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
import ChatIcon from "@/component/icons/ChatIcon";
import { ThemeUtil } from "@/util/ThemeUtil";

type PropTypes = {
  isActive: (path: string) => boolean;
};

const MobileNavbar = ({ isActive }: PropTypes) => {
  const { pathname } = useLocation();

  const isHome = () => {
    return pathname === "/";
  };

  return (
    <div className="btm-nav bg-white z-30 h-[auto]">
      <button
        className={`${
          isHome() ? "active bg-white" : ""
        } flex flex-col justify-center gap-1`}
      >
        <Link to={RouterConstantUtil.routes.page.home}>
          <HomeIcon />
        </Link>
        <span className="font-semibold text-grayColor_1">Home</span>
      </button>
      <button
        className={`${
          isActive("bookmark") ? "active bg-white" : ""
        } flex flex-col justify-center gap-1`}
      >
        <Link to={RouterConstantUtil.routes.page.bookmark}>
          <BookmarkIcon />
        </Link>
        <span className="font-semibold text-grayColor_1">Bookmark</span>
      </button>
      <button
        className={`${
          isActive("notifications") ? "active bg-white" : ""
        } flex flex-col justify-center gap-1`}
      >
        <Link to={RouterConstantUtil.routes.page.notifications}>
          <NotificationIcon />
        </Link>
        <span className="font-semibold text-grayColor_1">Notifications</span>
      </button>
      <button
        className={`${
          isActive("chat") ? "active bg-white" : ""
        } flex flex-col justify-center gap-1`}
      >
        {/* <Link to="/profile">
          <ProfileIcon />
        </Link> */}
        <Link to={RouterConstantUtil.routes.page.chat}>
          <ChatIcon/>
        </Link>
        {/* <span className="font-semibold text-grayColor_1">Profile</span> */}
        <span className="font-semibold text-grayColor_1">Chat</span>
      </button>
    </div>
  );
};

export default MobileNavbar;
