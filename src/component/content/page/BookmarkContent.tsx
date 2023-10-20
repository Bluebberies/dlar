import {ListOfPropertiesContent} from "./ListOfPropertiesContent.tsx";
import {nearYouData} from "../../../toolkit/data/nearYouData.ts";
import {BaseMapCard} from "../../card/BaseMapCard.tsx";

export const BookmarkContent = () => {
   return(
       <div className={"w-full h-full base-page-space"}>
           <ListOfPropertiesContent containerStyle={{
               marginTop: 15
           }} title={"My Bookmarks"} data={nearYouData} showPagination={true} />
           <BaseMapCard />
       </div>
   )
}
