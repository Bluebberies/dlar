import {HomeHero} from "../../hero/HomeHero.tsx";
import {HomeFeaturedPropertiesCard} from "../../card/HomeFeaturedPropertiesCard.tsx";
import {RecentlyUploadContent} from "./RecentlyUploadContent.tsx";

export const HomeContent = () => {
   return(
       <div className={"w-full h-full base-page-space"}>
           <HomeHero  />
           <HomeFeaturedPropertiesCard />
           <RecentlyUploadContent />
       </div>
   )
}
