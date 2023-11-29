import DashboardNavbar from "@/component/dashboard/navbar";
import Notifications from "@/component/dashboard/notifications";
import AccountOverview from "@/component/dashboard/profile/AccountOverview";
import UserDashboardLayouts from "@/view/layout/UserProfileLayout";

const NotificationsView = () => {
  return (
    <div>
      <DashboardNavbar />
      <Notifications />
    </div>
  );
};

export default NotificationsView;
