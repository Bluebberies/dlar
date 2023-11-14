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

export type BasePageHeaderProps = {
  headerNavStyles?: CSSProperties;
  filterPage?: boolean;
};

export const BasePageHeader = ({
  headerNavStyles,
  filterPage,
}: BasePageHeaderProps) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(true);
  const [locale, setLocale] = useState("");

  function handleBookmark() {
    navigate(RouterConstantUtil.routes.page.bookmark);
  }

  let location = useLocation();

  useEffect(() => {
    setLocale(location.pathname);
  }, [location]);
  // console.log("location", location);

  return (
    <div
      className={
        "fixed z-[10000000] max-[700px]:absolute top-0 left-0 right-0 max-[700px]:bg-transparent bg-[rgba(17,17,16,0.85)] min-[700px]:b h-auto flex flex-row items-center justify-between flex-wrap max-[1200px]:px-4 gap-3 max-[1020px]:px-8  px-24"
      }
      style={{
        height: "70px",
        ...headerNavStyles
      }}
    >
      {isAuth && (
        <div className="min-[700px]:hidden ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer">
              <GiHamburgerMenu
                className={"w-[27px] h-[27px] cursor-pointer text-[#fff]"}
              />
            </label>
          </div>
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
              <li className="hover:text-[#18ACE8] hover:bg-[#EFF6FF]  flex items-center justify-start flex-row text-[#111110] text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <img
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                  src={ThemeUtil.icon.questionIcon}
                  className={""}
                  alt={"icon"}
                />
                About Us
              </li>
              <li className="hover:text-[#18ACE8] hover:bg-[#EFF6FF]  flex items-center justify-start flex-row text-[#111110] text-[16px] font-medium leading-5 font-darkerGrotesque-bold">
                <img
                  onClick={() => navigate(RouterConstantUtil.routes.page.home)}
                  src={ThemeUtil.icon.headSetIcon}
                  className={""}
                  alt={"icon"}
                />
                Contact
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

      <img
        onClick={() => navigate(RouterConstantUtil.routes.page.home)}
        src={ThemeUtil.image.logoDarkSvg}
        className={"w-[97px] h-[35px] "}
        alt={"logo"}
      />
      {/* <GiHamburgerMenu
        className={
          "w-[27px] h-[27px] min-[700px]:hidden cursor-pointer text-[#fff]"
        }
      />
 */}
      {filterPage && <BasePageHeaderSearchInput />}
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
          to={"/page/about"}
          className={() =>
            locale.toLowerCase().includes("about") ? "active-nav" : "nav"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/page/contact"}
          className={() =>
            locale.toLowerCase().includes("contact") ? "active-nav" : "nav"
          }
        >
          Contact
        </NavLink>
      </div>
      {isAuth ? (
        <div className={"flex gap-5 items-center w-auto"}>
          <div
            className="tooltip tooltip-primary tooltip-bottom max-[700px]:hidden"
            data-tip="Bookmarks"
          >
            <BsFillBookmarkFill
              className="w-[20px] h-[20px] text-[white]"
              onClick={handleBookmark}
            />
          </div>
          <div
            className="tooltip tooltip-primary tooltip-bottom max-[700px]:hidden"
            data-tip="Chat"
          >
            <BsFillChatFill
              className="w-[20px] h-[20px] text-[white]"
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
                  className={"w-[27px] h-[27px] cursor-pointer text-[white]"}
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
