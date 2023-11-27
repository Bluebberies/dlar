import {SecondPageLayout} from "@/view/layout/SecondPageLayout.tsx";
import {BookmarkContent} from "@/component/content/page/BookmarkContent.tsx";
import { BasePageLayout } from "../layout/BasePageLayouts/BasePageLayout";

export const BookmarkView = () => {
  return (
    // <SecondPageLayout>
    //     <BookmarkContent />
    // </SecondPageLayout>
    <BasePageLayout
      hideHamburger={true}
      filterPage={true}
      showBackButton={true}
      hideLogo={true}
      showHeaderBg={true}
      headerNavStyles={{
        position: "sticky",
        // backgroundColor: "inherit",
      }}
    >
      <BookmarkContent />
    </BasePageLayout>
  );
}