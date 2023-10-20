import {HomeHero} from "../../hero/HomeHero.tsx";
import {HomeFeaturedPropertiesCard} from "../../card/HomeFeaturedPropertiesCard.tsx";
import {ListOfPropertiesContent} from "./ListOfPropertiesContent.tsx";
import {recentlyUploadedData} from "../../../toolkit/data/recentlyUploadedData.ts";
import {nearYouData} from "../../../toolkit/data/nearYouData.ts";
import {BaseMapCard} from "../../card/BaseMapCard.tsx";

export const HomeContent = () => {
   return(
       <div className={"w-full h-full base-page-space"}>
           <HomeHero  />
           <HomeFeaturedPropertiesCard />
           <ListOfPropertiesContent title={"Recently Uploaded"} data={recentlyUploadedData} showSeeAll={true} />
           <ListOfPropertiesContent title={"Near You"} data={nearYouData} showSeeAll={true} />
           <BaseMapCard />
       </div>
   )
}
