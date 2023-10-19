import {HomeMapContent} from "./HomeMapContent.tsx";
import {SearchResultsContent} from "./SearchResultsContent.tsx";

export const SearchResultContent = () => {
   return(
       <div className={"w-full h-full base-page-space"}>
           <SearchResultsContent />
           <HomeMapContent />
       </div>
   )
}
