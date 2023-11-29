import { useMediaQuery } from "react-responsive";
import DefaultNavbar from "./DefaultNavbar";
import MobileNavbar from "./MobileNavbar";
import { BasePageHeader } from "@/component/header/BasePageHeaders";

type PropTypes = {
  isActive: (path: string) => boolean;
};

const Navbar = ({ isActive }: PropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <MobileNavbar isActive={isActive} />
      ) : (
        <BasePageHeader
          filterPage={true}
          headerNavStyles={{
            backgroundColor: "#fff",
          }}
          isBgLight={true}
          persistDarkLogo={true}
          showNavbarFixed={false}
          showHeaderBg={false}
          // hideHamburger={hideHamburger}
          // hideLogo={hideLogo}
        />
        // <DefaultNavbar isActive={isActive} />
      )}
    </>
  );
};

export default Navbar;
