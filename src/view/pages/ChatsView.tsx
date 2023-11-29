import Chat from "@/component/dashboard/chat";
// import { UserDashboardLayouts } from '@/view/layout/UserDashboardLayout';
// import UserDashboardLayouts from './../layout/UserProfileLayout';
import UserDashboardLayouts from "@/view/layout/UserProfileLayout";
import ChatLayout from "../layout/ChatLayout";
import Chats from "@/component/dashboard/chat/Chats";

const ChatsView = () => {
  return (
    <ChatLayout>
      <Chats />
    </ChatLayout>
  );
};

export default ChatsView;
