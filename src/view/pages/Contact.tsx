import React from "react";
import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import ContactPageContent from "@/component/content/page/ContactPageContent";

export default function ContactPageView() {
  return (
    <BasePageLayout
      isBgLight={true}
      showHeaderBg={true}
      headerNavStyles={{
        position: "sticky",
      }}
    >
      <ContactPageContent />
    </BasePageLayout>
  );
}
