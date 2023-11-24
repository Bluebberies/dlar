import React from "react";
import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import AboutPageContent from "@/component/content/page/AboutPageContent";

export default function AboutPageView() {
  return (
    <BasePageLayout isBgLight={true} headerNavStyles={{
      position: "sticky"
    }}>
      <AboutPageContent />
    </BasePageLayout>
  );
}
