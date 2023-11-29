import AccountOverview from "@/component/dashboard/profile/AccountOverview";
import UserDashboardLayouts from "@/view/layout/UserProfileLayout";

const ProfileView = () => {
  return (
    <UserDashboardLayouts>
      <AccountOverview />
    </UserDashboardLayouts>
  );
};

export default ProfileView;
