import { CSSProperties, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { BasePageHeaderSearchInput } from "../../input/BasePageHeaderSearchInput.tsx";
import { NavLink } from "react-router-dom";
import { RouterConstantUtil } from "@/util/constant/RouterConstantUtil.ts";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { BaseButton } from "@/component/button/BaseButton.tsx";
import { BsFillBookmarkFill, BsFillChatFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import BookmarkIcon from "@/component/customIcon/BookmarkIcon.tsx";

export type BasePageHeaderProps = {
  headerNavStyles?: CSSProperties;
  filterPage?: boolean;
  isBgLight?: boolean;
  showHeaderBg?: boolean;
  hideHamburger?: boolean;
  hideLogo?: boolean;
};

export const BasePageHeader = ({
  headerNavStyles,
  filterPage,
  isBgLight,
  showHeaderBg = false,
  hideHamburger = false,
  hideLogo = false,
}: BasePageHeaderProps) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(true);
  const [locale, setLocale] = useState("");
  const isMobileScreen = useMediaQuery({ query: "(max-width: 700px)" });
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  function handleBookmark() {
    navigate(RouterConstantUtil.routes.page.bookmark);
  }

  let location = useLocation();

  useEffect(() => {
    setLocale(location.pathname);
  }, [location]);
  // console.log("location", location);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the threshold value based on when you want the navbar to become fixed
      const threshold = 100;
      const shouldFixNavbar = window.scrollY > threshold;

      setNavbarFixed(shouldFixNavbar);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("is", hideLogo);

  return (
    <div
      // bg-[rgba(17,17,16,0.85)]
      className={
        "py-4 fixed z-[10000000] max-[700px]:absolute top-0 left-0 right-0 max-[700px]:bg-transparent min-[700px]:b h-auto flex flex-row items-center justify-between flex-wrap max-[1200px]:px-4 gap-3 max-[1020px]:px-8  px-24"
      }
      style={{
        backgroundColor: showHeaderBg
          ? "rgba(17,17,16,0.85)"
          : isNavbarFixed
          ? "rgba(17,17,16,0.85)"
          : "transparent",
        transition: "background-color 0.3s ease-in-out",
        minHeight: "70px",
        ...headerNavStyles,
      }}
    >
      {isAuth && (
        <div className="min-[700px]:hidden ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          {!hideHamburger && (
            <div className="drawer-content">
              <label htmlFor="my-drawer">
                <GiHamburgerMenu
                  className={`w-[27px] h-[27px] cursor-pointer ${
                    showHeaderBg
                      ? "text-[#fff]"
                      : isBgLight
                      ? "text-black"
                      : "text-[#fff]"
                  }`}
                />
              </label>
            </div>
          )}
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="bg-[#fff] gap-3 flex flex-col justify-start menu p-4 w-80 min-h-full text-base-content">
              <li className="mb-10">
                <img
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                  src={ThemeUtil.image.logo}
                  className={"w-[97px] h-[35px] "}
                  alt={"logo"}
                />
              </li>
              <li className="hover:bg-[#EFF6FF] hover:text-[#18ACE8] flex items-center justify-start flex-row text-[#111110] text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <img
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                  src={ThemeUtil.icon.profileIcon}
                  className={""}
                  alt={"icon"}
                />
                Become an Agent
              </li>
              <li className=" flex items-center text-[#111110] justify-start flex-row text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <NavLink
                  to={RouterConstantUtil.routes.page.aboutPage}
                  // className={({ isActive }) => (isActive ? "active-nav" : "nav")}
                  className={() =>
                    locale.toLowerCase().includes("about")
                      ? "w-[80%] text-[#EFF6FF] bg-[#18ACE8]"
                      : "w-[80%] text-[#111110] font-medium"
                  }
                >
                  <img
                    onClick={() =>
                      navigate(RouterConstantUtil.routes.page.home)
                    }
                    src={ThemeUtil.icon.questionIcon}
                    className={""}
                    alt={"icon"}
                  />
                  About Us
                </NavLink>
              </li>
              <li className=" flex items-center text-[#111110] justify-start flex-row text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <NavLink
                  to={RouterConstantUtil.routes.page.contactPage}
                  // className={({ isActive }) => (isActive ? "active-nav" : "nav")}
                  className={() =>
                    locale.toLowerCase().includes("contact")
                      ? "w-[80%] text-[#EFF6FF] bg-[#18ACE8]"
                      : "w-[80%] text-[#111110] font-medium"
                  }
                >
                  <img
                    onClick={() =>
                      navigate(RouterConstantUtil.routes.page.home)
                    }
                    src={ThemeUtil.icon.headSetIcon}
                    className={""}
                    alt={"icon"}
                  />
                  Contact
                </NavLink>
              </li>
              <li className="hover:text-[#18ACE8] hover:bg-[#EFF6FF]  flex items-center justify-start flex-row text-[#111110] text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <img
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                  src={ThemeUtil.icon.chatIcon}
                  className={""}
                  alt={"icon"}
                />
                Messages
                <span className="text-[#fff] py-[2px] px-[6px]  bg-[#FF472E] rounded-[50%] w-[28px] h-[28px] flex items-center justify-center ml-auto">
                  2
                </span>
              </li>
              <li className="hover:text-[#18ACE8] hover:bg-[#EFF6FF]  flex items-center justify-start flex-row text-[#111110] text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <img
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                  src={ThemeUtil.icon.sideBarNotificationIcon}
                  className={""}
                  alt={"icon"}
                />
                Notifications
                <span className="text-[#fff] py-[2px] px-[6px]  bg-[#FF472E] rounded-[50%] w-[28px] h-[28px] flex items-center justify-center ml-auto">
                  6
                </span>
              </li>
              <li className="hover:text-[#18ACE8] hover:bg-[#EFF6FF]  flex items-center justify-start flex-row text-[#111110] text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <img
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                  src={ThemeUtil.icon.settingsWheel}
                  className={""}
                  alt={"icon"}
                />
                Settings
              </li>
              <div className="flex items-start justify-start flex-col gap-9 mt-auto">
                <h3
                  className="flex items-center flex-row gap-3  text-[#f00] text-[12px] font-normal leading-5 font-darkerGrotesque-bold"
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                >
                  <img
                    src={ThemeUtil.icon.logout}
                    className={"rounded-full"}
                    alt={"user"}
                  />
                  Logout
                </h3>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 rounded-full">
                      <img
                        onClick={() =>
                          navigate(RouterConstantUtil.routes.page.home)
                        }
                        src={ThemeUtil.icon.profile}
                        className={"rounded-full"}
                        style={{
                          border: "2px solid #D9D9D9",
                        }}
                        alt={"user"}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" text-[#111110] text-[12px] font-normal leading-5 font-darkerGrotesque-bold">
                      Hart Hagerty
                    </div>
                    <div className=" text-[#606060] text-[12px] font-normal leading-[14px] font-darkerGrotesque-bold">
                      United States
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}

      {(!isMobileScreen && !hideLogo) ||
      (!isMobileScreen && hideLogo) ||
      (isMobileScreen && !hideLogo) ? (
        <img
          onClick={() => navigate(RouterConstantUtil.routes.page.home)}
          src={
            showHeaderBg
              ? ThemeUtil.image.logoDarkSvg
              : isBgLight && isMobileScreen
              ? ThemeUtil.image.logo
              : ThemeUtil.image.logoDarkSvg
          }
          className={"w-[97px] h-[35px] "}
          alt={"logo"}
        />
      ) : null}

      {filterPage && (
        <BasePageHeaderSearchInput isNavbarFixed={isNavbarFixed} />
      )}
      <div
        className={`flex items-center gap-14 max-[700px]:hidden ${
          filterPage && "hidden"
        }`}
      >
        <NavLink
          to={RouterConstantUtil.routes.page.home}
          // className={({ isActive }) => (isActive ? "active-nav" : "nav")}
          className={() =>
            locale.toLowerCase().includes("home") ? "active-nav" : "nav"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={RouterConstantUtil.routes.page.aboutPage}
          className={() =>
            locale.toLowerCase().includes("about") ? "active-nav" : "nav"
          }
        >
          About
        </NavLink>
        <NavLink
          to={RouterConstantUtil.routes.page.contactPage}
          className={() =>
            locale.toLowerCase().includes("contact") ? "active-nav" : "nav"
          }
        >
          Contact
        </NavLink>
      </div>
      {isAuth ? (
        <div className={"flex gap-5 items-center w-auto select-none"}>
          <div
            className="tooltip tooltip-primary tooltip-bottom max-[700px]:hidden"
            data-tip="Bookmarks"
          >
            {/* <BookmarkIcon /> */}
            <BsFillBookmarkFill
              className="w-[20px] h-[20px] cursor-pointer hover:text-[#18ACE8] text-[white]"
              onClick={handleBookmark}
            />
          </div>
          <div
            className="tooltip tooltip-primary  tooltip-bottom max-[700px]:hidden"
            data-tip="Chat"
          >
            <BsFillChatFill
              className="w-[20px] h-[20px] cursor-pointer hover:text-[#18ACE8] text-[white]"
              // onClick={handleBookmark}
            />
          </div>
          <div
            className="tooltip tooltip-primary tooltip-bottom max-[700px]:hidden"
            data-tip="Notifictaions"
          >
            <div className="avatar online">
              <div className="w-[24px] rounded-full">
                <IoIosNotifications
                  className={
                    "w-[27px] hover:text-[#18ACE8] h-[27px] cursor-pointer text-[white]"
                  }
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
      ) : (
        <BaseButton
          title={"Login"}
          onClick={() => navigate(RouterConstantUtil.routes.auth.login)}
          buttonStyle={{
            fontSize: "14px",
            color: "#FFF",
            fontFamily: "darkerGrotesque-bold, sans-serif",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "20px",
            borderRadius: "10px",
          }}
          containerStyle={{
            display: "flex",
            width: "90px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </div>
  );
};
