import React, { ReactElement, useState } from "react";
import { useMediaQuery } from "react-responsive";
// import { Outlet } from "react-router-dom";
import ProfileMobileNav from "@/component/dashboard/profile/ProfileMobileNav";
import SideBar from "@/component/dashboard/profile/ProfileSideBar";
import { motion } from "framer-motion";
import { BasePageHeader } from "@/component/header/BasePageHeaders";
import DashboardNavbar from "@/component/dashboard/navbar";

type UserDashboardLayoutsPropTypes = {
  children: ReactElement<React.JSX.Element>;
};

const UserDashboardLayouts = ({ children }: UserDashboardLayoutsPropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <motion.div
      key="userprofile"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardNavbar />
      {isTabletOrMobile ? (
        <div className="bg-[#F9F9F9]">
          <ProfileMobileNav
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
          />
          <SideBar menuIsOpen={menuIsOpen} />
          <div className="pt-20">{children}</div>
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="w-80">
            <SideBar />
          </div>
          <div className="w-[70%] px-8 mt-8">{children}</div>
        </div>
      )}
    </motion.div>
  );
};

export default UserDashboardLayouts;
