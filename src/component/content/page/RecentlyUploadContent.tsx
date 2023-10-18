import {RecentlyUploadCard} from "../../card/RecentlyUploadCard.tsx";

export const RecentlyUploadContent = () => {
  return(
      <div className={"w-full mt-52 "}>
          <div className={"flex items-center justify-between"}>
              <h1 className={"text-[48px] leading-[35px] mb-10"}>Recently Uploaded</h1>
                <div className={"flex items-center gap-2"}>
                    <span className={"text-[28px] leading-[35px]"}>See all</span>
                    <img src={"/src/assets/icon/arrow.svg"} alt={"arrow"}/>
                </div>
          </div>
            <div className={"w-full mt-5 flex items-center justify-between flex-wrap"}>
                <RecentlyUploadCard />
                <RecentlyUploadCard />
                <RecentlyUploadCard />
                <RecentlyUploadCard />
                <RecentlyUploadCard />
                <RecentlyUploadCard />
            </div>
      </div>
  )
}