import { BasePageLayout } from "../layout/BasePageLayouts/BasePageLayout.tsx";
import { HomeContent } from "../../component/content/page/HomeContent.tsx";

export const HomeView = () => {
  document.title = "Home | Dwelar";

  return (
    <BasePageLayout>
      <HomeContent />
    </BasePageLayout>
  );
};
