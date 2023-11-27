import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import { BookmarkContent } from "@/component/content/page/BookmarkContent.tsx";
import AgentProfileContent from "@/component/content/page/AgentProfileContent";

export const AgentProfileView = () => {
  return (
    <BasePageLayout
      isBgLight={true}
      showHeaderBg={true}
      showBackButton={true}
      backButtonStyles={{
        paddingTop: "3rem",
        width: "80%",
        margin: "auto",
        paddingLeft: "0",
      }}
      //   backButtonClassName={{ paddingTop: "3rem", width:"80%", margin: "auto", paddingLeft: "0" }}
      headerNavStyles={{
        position: "sticky",
      }}
    >
      <AgentProfileContent/>
    </BasePageLayout>
  );
};
