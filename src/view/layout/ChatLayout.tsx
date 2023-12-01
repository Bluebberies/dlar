import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import ChatMobileSideBar from "@/component/dashboard/chat/components/ChatMobileSideBar";
import ChatSideBar from "@/component/dashboard/chat/components/ChatSideBar";
import React, { ReactElement } from "react";
import DashboardNavbar from "@/component/dashboard/navbar";
import { motion } from "framer-motion";

type ChatLayoutsPropTypes = {
  children: ReactElement<React.JSX.Element>;
};

const ChatLayout = ({ children }: ChatLayoutsPropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const { pathname } = useLocation();

  return (
    <motion.div
      key="userprofile"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      {" "}
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
    </motion.div>
  );
};

export default ChatLayout;