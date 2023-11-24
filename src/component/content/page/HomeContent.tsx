import { HomeHero } from "../../hero/HomeHero.tsx";
import { HomeFeaturedPropertiesCard } from "../../card/HomeFeaturedPropertiesCard.tsx";
import { ListOfPropertiesContent } from "./ListOfPropertiesContent.tsx";
import { PropertiesData } from "@/toolkit/data/nearYouData.ts";
import { BaseMapCard } from "../../card/BaseMapCard.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import UserStatsSection from "./UserStatsSection.tsx";
import GetApp from "./GetApp.tsx";
import ReferAndWinSection from "./ReferAndWinSection.tsx";

export const HomeContent = () => {
  // px-[100px] max-[1000px]:px-0
  return (
    <div className={"w-full h-full overflow-x-hidden"}>
      <HomeHero />
      {/* <BaseMapCard /> */}
      <ListOfPropertiesContent
        title={"Hospitality Highlight"}
        data={PropertiesData}
        showSeeAll={true}
        showFilters={false}
        linkTo={"recommended"}
        isSlider={true}
      />
      <ReferAndWinSection />

      <ListOfPropertiesContent
        title={"Most Visited"}
        data={PropertiesData}
        showSeeAll={true}
        showFilters={false}
        linkTo={"recommended"}
        isSlider={true}
      />
      <ListOfPropertiesContent
        title={"Most Popular"}
        data={PropertiesData}
        showSeeAll={true}
        showFilters={false}
        linkTo={"recommended"}
        isSlider={true}
      />
      <ListOfPropertiesContent
        title={"Recommended"}
        data={PropertiesData}
        showSeeAll={true}
        showFilters={true}
        linkTo={"recommended"}
      />
      <ListOfPropertiesContent
        title={"Near you"}
        data={PropertiesData}
        showSeeAll={true}
        showFilters={false}
        linkTo={"nearYou"}
      />
      <UserStatsSection />
      <GetApp />

      {/* <HomeFeaturedPropertiesCard />
      {/* <ListOfPropertiesContent
        title={"Near You"}
        data={PropertiesData}
        showSeeAll={true}
      /> */}
      {/* <BaseMapCard /> */}
    </div>
  );
};
