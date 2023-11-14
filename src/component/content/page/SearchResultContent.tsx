import { BaseMapCard } from "../../card/BaseMapCard.tsx";
import { ListOfPropertiesContent } from "./ListOfPropertiesContent.tsx";
import { PropertiesData } from "../../../toolkit/data/nearYouData.ts";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const SearchResultContent = () => {
  const [pageTitle, setPageTitle] = useState("");

  const l = useLocation();

  useEffect(() => {
    // setLocation(l.pathname)
    // if(l.pathname)
    let v = l.pathname.split("/");
    let k = v[v.length - 1];
    if (k == "forYou") {
      setPageTitle("For You");
    } else if (k == "nearYou") {
      setPageTitle("Near You");
    } else if (k == "recommended") {
      setPageTitle("Recommended");
    } else if (k == "recentlyUploaded") {
      setPageTitle("Recently Uploaded");
    } else if (k == "search-result") {
      setPageTitle("Search Results: 1-50 of 300");
    }
  }, [l.pathname]);

  return (
    <div className={"w-full h-full base-page-space"}>
      <ListOfPropertiesContent
        title={pageTitle}
        data={PropertiesData}
        showPagination={true}
        showFilters={true}
      />
      <BaseMapCard />
    </div>
  );
};
