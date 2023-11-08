import {BasePageLayout} from "../layout/BasePageLayout.tsx";
import {SearchResultContent} from "../../component/content/page/SearchResultContent.tsx";

export const SearchResultView = () => {
  return(
      <BasePageLayout>
          <SearchResultContent />
      </BasePageLayout>
  )
}