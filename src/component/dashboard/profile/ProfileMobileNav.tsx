import { IoClose } from "react-icons/io5";
// import DefaultUser from "../../../assets/default-user.png";
import HamburgerIcon from "@/component/icons/HamburgerIcon";
import React from "react";
import { ThemeUtil } from "@/util/ThemeUtil";

type PropTypes = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileMobileNav = ({ setMenuIsOpen, menuIsOpen }: PropTypes) => {

  // console.log("menuI");
  
  return (
    <div className=" px-8 md:px-12 py-1 bg-white top-0 fixed w-full z-[10000]">
      <div className="flex justify-between items-center py-3">
        <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="cursor-pointer">
          {menuIsOpen ? <IoClose size="2rem" /> : <HamburgerIcon />}

          {/* <HamburgerIcon /> */}
        </button>
        <button>
          <img src={ThemeUtil.icon.profile} alt="user avatar" />
        </button>
      </div>
    </div>
  );
};

export default ProfileMobileNav;
