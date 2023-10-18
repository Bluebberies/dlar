import {BaseAvatar} from "../avatar/BaseAvatar.tsx";
import {RecentlyUploadedDataProps} from "../../toolkit/data/recentlyUploadedData.ts";

type RecentlyUploadCardProps = {
    item: RecentlyUploadedDataProps
}
export const RecentlyUploadCard = ({item}: RecentlyUploadCardProps) => {
  return(
      <div className={"w-[400px] h-[534px]  rounded-[12px] overflow-hidden mt-10"}>
        <div className={"h-[300px] overflow-hidden rounded-[12px] relative"}>
            <img src={item.image[0]} className={"w-full h-full z-0"} alt={"andrea"} />
            <BaseAvatar containerStyle={{
                position:"absolute",
                backgroundColor: "white",
                bottom: 10,
                zIndex: 100,
                minWidth: 50,
                height: 40,
                left: 10
            }}>
                <div className={"flex justify-center items-center gap-1 h-full rounded-[12px] "}>
                    <img src={"/src/assets/icon/camera-outline.svg"} className={"w-[20px] h-[20px]"} alt={"andrea"} />
                    <span>
                        {item.image.length}
                    </span>
                </div>
            </BaseAvatar>
        </div>
          <div className={"mt-5"}>
              <h1 className={"text-[36px] leading-[35px] text-blackColor font-darkerGrotesque-bold"}>{item.title}</h1>
              <div className={"flex items-center gap-2"}>
                  <img src={"/src/assets/icon/black-map-pin-fill.svg"} className={"text-blackColor"} alt={"black-map-pin-fill"} />
                  <p className={"text-[28px] font-light leading-[35px] text-blackColor font-darkerGrotesque-medium"}>{item.location}</p>
              </div>
              <p className={"text-[20px] font-light leading-[25px] text-grayColor_1 mt-5 mb-5 ml-5 font-darkerGrotesque-semiBold"}>{item.type}</p>
              <div className={"flex justify-between items-center"}>
                  <img src={"/src/assets/icon/naira.svg"} className={"text-blackColor w-[16px] h-[16px]"} alt={"naira"} />
                  <p className={"text-[28px] self-start font-light leading-[35px] text-blackColor font-darkerGrotesque-black"}>{item.amount} <span className={"text-grayColor_1 font-darkerGrotesque-semiBold text-[28px]"}>per annum</span></p>
                  <img src={"/src/assets/icon/bookmark-outline.svg"} className={"text-blackColor ml-28 w-[24px] h-[24px]"} alt={"bookmark"} />
              </div>

          </div>
      </div>
  )
}