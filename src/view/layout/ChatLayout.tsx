import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import ChatMobileSideBar from "@/component/dashboard/chat/components/ChatMobileSideBar";
import ChatSideBar from "@/component/dashboard/chat/components/ChatSideBar";
import React, { ReactElement } from "react";
import DashboardNavbar from "@/component/dashboard/navbar";

type ChatLayoutsPropTypes = {
  children: ReactElement<React.JSX.Element>;
};

const ChatLayout = ({ children }: ChatLayoutsPropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const { pathname } = useLocation();

  return (
    <div className="">
      <DashboardNavbar />
      {isTabletOrMobile ? (
        <>
          <div className="mt-2 w-full bg-white min-h-screen ">
            {pathname === "/chat" ? (
              <ChatMobileSideBar />
            ) : (
              <div className="h-full mb-0">
                {/* <Outlet /> */}
                {children}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="w-96">
            <ChatSideBar />
          </div>
          <div className="bg-accent5 fixed pl-96 mt-2 w-full">
            {/* <Outlet /> */}
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default ChatLayout;
