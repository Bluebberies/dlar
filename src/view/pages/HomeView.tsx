import {BasePageLayout} from "../layout/BasePageLayout.tsx";
import {HomeContent} from "../../component/content/page/HomeContent.tsx";

export const HomeView = () => {
  document.title = "Home | Dwelar"

  return (
      <BasePageLayout>
          <HomeContent />
      </BasePageLayout>
  )
}