import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import { SearchResultContent } from "@/component/content/page/SearchResultContent.tsx";

export const SearchResultView = () => {
  return (
    <BasePageLayout
      // isBgLight={true}
      filterPage={true}
      hideHamburger={true}
      showBackButton={true}
      hideLogo={true}
      showHeaderBg={true}
      headerNavStyles={{
        position: "sticky",
        // backgroundColor: "inherit",
      }}
    >
      <SearchResultContent />
    </BasePageLayout>
  );
};
