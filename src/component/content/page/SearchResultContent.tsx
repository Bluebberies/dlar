import { BaseMapCard } from "../../card/BaseMapCard.tsx";
import { ListOfPropertiesContent } from "./ListOfPropertiesContent.tsx";
import { PropertiesData } from "../../../toolkit/data/nearYouData.ts";

export const SearchResultContent = () => {
  return (
    <div className={"w-full h-full base-page-space"}>
      <ListOfPropertiesContent
        title={"Search Results: 1-50 of 300"}
        data={PropertiesData}
        showPagination={true}
      />
      <BaseMapCard />
    </div>
  );
};
