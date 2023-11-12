import { BasePageLayout } from "../layout/BasePageLayouts/BasePageLayout.tsx";
import { SearchResultContent } from "../../component/content/page/SearchResultContent.tsx";

export const SearchResultView = () => {
  return (
    <BasePageLayout>
      <SearchResultContent />
    </BasePageLayout>
  );
};
