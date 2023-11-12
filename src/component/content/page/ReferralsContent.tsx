import DesktopReferral from "./referral/DesktopReferral";
import MobileReferral from "./referral/MobileReferral";

function ReferralsContent() {
  return (
    <div>
      <div className="min-[700px]:hidden">
        <MobileReferral />;
      </div>
      <div className="max-[700px]:hidden">
        <DesktopReferral />;
      </div>
    </div>
  );
}

export default ReferralsContent;
