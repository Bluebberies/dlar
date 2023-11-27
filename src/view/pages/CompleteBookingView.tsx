import React from "react";
import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import CompleteBookingContent from "@/component/content/page/CompleteBookingContent";

export default function CompleteBookingsView() {
  return (
    <BasePageLayout
      isBgLight={true}
      showHeaderBg={true}
      showBackButton={true}
      backButtonStyles={{ paddingTop: "3rem", width:"80%", margin: "auto", paddingLeft: "0" }}
    //   backButtonClassName={{ paddingTop: "3rem", width:"80%", margin: "auto", paddingLeft: "0" }}
      headerNavStyles={{
        position: "sticky",
      }}
    >
      <CompleteBookingContent />
    </BasePageLayout>
  );
}
