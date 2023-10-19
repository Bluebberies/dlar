import {RecentlyUploadCard} from "../../card/RecentlyUploadCard.tsx";
import {recentlyUploadedData} from "../../../toolkit/data/recentlyUploadedData.ts";

export const RecentlyUploadContent = () => {
  return(
      <div className={"w-full mt-20 "}>
          <div className={"flex items-center justify-between"}>
              <h1 className={"text-[48px] leading-[35px] mb-0 text-blackColor font-darkerGrotesque-bold"}>Recently Uploaded</h1>
                <div className={"flex items-center gap-2"}>
                    <span className={"text-[28px] leading-[35px] text-blackColor font-darkerGrotesque-bold"}>See all</span>
                    <img src={"/src/assets/icon/arrow-right.icon"} alt={"arrow"}/>
                </div>
          </div>
            <div className={"w-full mt-0 flex items-center gap-5 justify-between flex-wrap"}>
                {
                    recentlyUploadedData.map((value, index)=>{
                        return(
                            <RecentlyUploadCard key={index} item={value}  />
                        )
                    })
                }

            </div>
      </div>
  )
}