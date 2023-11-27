import { ListOfPropertiesContent } from "./ListOfPropertiesContent.tsx";
import { PropertiesData } from "../../../toolkit/data/nearYouData.ts";
import { BaseMapCard } from "../../card/BaseMapCard.tsx";

export const BookmarkContent = () => {
  return (
    <div className={"w-full h-full"}>
      <ListOfPropertiesContent
        containerStyle={{
          marginTop: 15,
        }}
        title={"My Bookmarks"}
        data={PropertiesData}
        showPagination={true}
      />
      {/* <BaseMapCard /> */}
    </div>
  );
};
