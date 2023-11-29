import { useLocation } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import MobileHeader from "@/component/layout/MobileHeader";
import Navbar from "@/component/layout/navbar";

const DashboardNavbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname.startsWith(`/${path}`);
  };

  return (
    <>
      {isTabletOrMobile ? (
        <div className="">
          {!isActive("chat") && <Navbar isActive={isActive} />}
          {!isActive("profile") && <MobileHeader isActive={isActive} />}
        </div>
      ) : (
        <div className="overflow-auto bg-accent5">
          <Navbar isActive={isActive} />
        </div>
      )}
    </>
  );
};

export default DashboardNavbar;
