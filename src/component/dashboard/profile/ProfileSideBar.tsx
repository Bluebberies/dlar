import { RouteUtil } from "@/util/RouteUtil";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
import { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type PropTypes = {
  menuIsOpen?: boolean;
};

// const a = true
const ProfileSideBar = ({ menuIsOpen }: PropTypes) => {
  useEffect(() => {
    console.log("Menu is open:", menuIsOpen);
    if (menuIsOpen !== undefined && menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen]);

  const location = useLocation();

  return (
    <>
      {" "}
      {menuIsOpen !== undefined && menuIsOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          }}
        ></div>
      )}
      <div
        id="sideNav"
        className={`lg:block fixed ${
          menuIsOpen !== undefined && !menuIsOpen && "hidden opacity-0"
        }  opacity-[1] w-full sm:w-96 transition-[.2s] rounded-none border-none lg:w-80 top-0 z-30 shadow-md `}
      >
        <div className=" h-screen pt-16">
          <div className="flex flex-col bg-white py-8 items-center sm:justify-between w-full h-full">
            <div className="flex flex-col w-full items-center gap-10 pt-20">
              <button
                className={`sidebar-link ${
                  location.pathname == RouterConstantUtil.routes.page.profile &&
                  "active"
                }`}
              >
                <Link to={RouterConstantUtil.routes.page.profile}>
                  Account Details
                </Link>
              </button>
              <button className="sidebar-link">
                <Link to="#">My Wallet</Link>
              </button>
              <button
                className={`sidebar-link ${
                  location.pathname ==
                    RouterConstantUtil.routes.page.profileSettings && "active"
                }`}
              >
                <Link to={RouterConstantUtil.routes.page.profileSettings}>
                  Settings
                </Link>
              </button>
            </div>
            <div>
              <button className="mt-40 sm:mt-0 sidebar-logout-link text-red-500">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSideBar;
