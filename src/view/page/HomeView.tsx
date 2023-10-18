import {BasePageLayout} from "../layout/BasePageLayout.tsx";
import {BasePageTab} from "../../component/tab/BasePageTab.tsx";
import {HomeContent} from "../../component/content/page/HomeContent.tsx";
import {BasePageFooter} from "../../component/footer/BasePageFooter.tsx";

export const HomeView = () => {
  document.title = "Home | Dwelar"

  return (
      <BasePageLayout>
        <>
            <BasePageTab />
            <HomeContent />
            <BasePageFooter />
        </>
      </BasePageLayout>
  )
}