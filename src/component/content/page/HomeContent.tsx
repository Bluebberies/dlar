import { HomeHero } from "../../hero/HomeHero.tsx";
import { HomeFeaturedPropertiesCard } from "../../card/HomeFeaturedPropertiesCard.tsx";
import { ListOfPropertiesContent } from "./ListOfPropertiesContent.tsx";
import { recentlyUploadedData } from "../../../toolkit/data/recentlyUploadedData.ts";
import { PropertiesData } from "../../../toolkit/data/nearYouData.ts";
import { BaseMapCard } from "../../card/BaseMapCard.tsx";

export const HomeContent = () => {
  return (
    <div className={"w-full h-full px-[100px] max-[1000px]:px-0 "}>
      <HomeHero />
      <HomeFeaturedPropertiesCard />
      <ListOfPropertiesContent
        title={"Recently Uploaded"}
        data={PropertiesData}
        showSeeAll={true}
      />
      <ListOfPropertiesContent
        title={"Near You"}
        data={PropertiesData}
        showSeeAll={true}
      />
      <BaseMapCard />
    </div>
  );
};
