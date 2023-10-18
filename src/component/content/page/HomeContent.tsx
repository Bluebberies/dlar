import {HomeHero} from "../../hero/HomeHero.tsx";
import {HomeFeaturedPropertiesCard} from "../../card/HomeFeaturedPropertiesCard.tsx";
import {RecentlyUploadContent} from "./RecentlyUploadContent.tsx";
import {NearYouContent} from "./NearYouContent.tsx";
import {HomeMapContent} from "./HomeMapContent.tsx";

export const HomeContent = () => {
   return(
       <div className={"w-full h-full base-page-space"}>
           <HomeHero  />
           <HomeFeaturedPropertiesCard />
           <RecentlyUploadContent />
           <NearYouContent />
           <HomeMapContent />
       </div>
   )
}
