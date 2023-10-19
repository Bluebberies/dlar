import {HomeMapContent} from "./HomeMapContent.tsx";
import {BookmarksContent} from "./BookmarksContent.tsx";

export const BookmarkContent = () => {
   return(
       <div className={"w-full h-full base-page-space"}>
           <BookmarksContent />
           <HomeMapContent />
       </div>
   )
}
