import React from "react";
import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import ReferralsContent from "@/component/content/page/ReferralsContent.tsx";
import ContactPageContent from "@/component/content/page/ContactPageContent";

export default function ContactPageView() {
  return (
    <BasePageLayout isBgLight={true}>
      <ContactPageContent />
    </BasePageLayout>
  );
}
