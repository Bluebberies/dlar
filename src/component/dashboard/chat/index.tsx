import { useMediaQuery } from "react-responsive";
import { Outlet, useLocation } from "react-router-dom";
import ChatMobileSideBar from "./components/ChatMobileSideBar";
import ChatSideBar from "./components/ChatSideBar";

const Chat = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1400px)" });

  const { pathname } = useLocation();

  return (
    <div className="">
      {isTabletOrMobile ? (
        <>
          <div className="mt-2 w-full bg-white ">
            {pathname === "/chat" ? (
              <ChatMobileSideBar />
            ) : (
              <div className="h-full mb-2 md:mb-0">
                <Outlet />
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
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
