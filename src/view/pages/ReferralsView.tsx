import React from "react";
import {BasePageLayout} from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import ReferralsContent from "@/component/content/page/ReferralsContent.tsx";

export default function ReferralsView() {
  return (
    <BasePageLayout>
      <ReferralsContent />
    </BasePageLayout>
  );
}
