import {SecondPageLayout} from "../layout/SecondPageLayout.tsx";
import {PropertyDetailsContent} from "../../component/content/page/PropertyDetailsContent.tsx";

export const PropertyDetailsView = () => {
  return(
      <SecondPageLayout>
          <PropertyDetailsContent />
      </SecondPageLayout>
  )
}