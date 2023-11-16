import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import { SearchResultContent } from "@/component/content/page/SearchResultContent.tsx";

export const SearchResultView = () => {
  return (
    <BasePageLayout
      filterPage={true}
      // headerNavStyles={{
      //   position: "relative",
      //   backgroundColor: "inherit",
      // }}
    >
      <SearchResultContent />
    </BasePageLayout>
  );
};
