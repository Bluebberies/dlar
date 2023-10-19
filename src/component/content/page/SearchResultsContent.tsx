import {RecentlyUploadCard} from "../../card/RecentlyUploadCard.tsx";
import {nearYouData} from "../../../toolkit/data/nearYouData.ts";
import {BasePagination} from "../../pagination/BasePagination.tsx";

export const SearchResultsContent = () => {
  return(
      <div className={"w-full mt-20 "}>
          <div className={"flex items-center justify-between"}>
              <h1 className={"text-[48px] leading-[35px] mb-0 text-blackColor font-darkerGrotesque-bold"}>Search Results: 1-50 of 300</h1>

          </div>
            <div className={"w-full mt-0 flex items-center gap-5 justify-between flex-wrap"}>
                {
                    nearYouData.map((value, index)=>{
                        return(
                            <RecentlyUploadCard key={index} item={value}  />
                        )
                    })
                }
                <BasePagination />
            </div>
      </div>
  )
}