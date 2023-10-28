import {PropertyDetailsImageSection} from "../../section/propertyDetails/PropertyDetailsImageSection.tsx";
import {PropertyDescriptionSection} from "../../section/propertyDetails/PropertyDescriptionSection.tsx";
import {PropertyDetailsSection} from "../../section/propertyDetails/PropertyDetailsSection.tsx";

export const PropertyDetailsContent = () => {
  return(
      <div className={"w-full base-page-space"}>
        <PropertyDetailsImageSection />
          <PropertyDescriptionSection />
          <PropertyDetailsSection />
      </div>
  )
}