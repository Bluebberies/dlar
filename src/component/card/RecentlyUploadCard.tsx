import {BaseAvatar} from "../avatar/BaseAvatar.tsx";

export const RecentlyUploadCard = () => {
  return(
      <div className={"w-[400px] h-[534px] border rounded-[12px] overflow-hidden"}>
        <div className={"h-[300px] overflow-hidden rounded-[12px] relative"}>
            <img src={"/src/assets/image/andrea.jpg"} className={"w-full h-full z-0"} alt={"andrea"} />
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
                    <span>7</span>
                </div>
            </BaseAvatar>
        </div>
          <div className={"mt-5"}>
              <h1 className={"text-[36px] leading-[35px] text-blackColor"}>My Odessy Lodge</h1>
              <div className={"flex items-center gap-2"}>
                  <img src={"/src/assets/icon/black-map-pin-fill.svg"} className={"text-blackColor"} alt={"black-map-pin-fill"} />
                  <p className={"text-[28px] font-light leading-[35px] text-blackColor"}>Ifite Awka.</p>
              </div>
              <p className={"text-[20px] font-light leading-[25px] text-blackColor mt-5 mb-5 ml-5"}>Selfcon</p>
              <div className={"flex justify-start items-center"}>
                  <img src={"/src/assets/icon/naira.svg"} className={"text-blackColor"} alt={"naira"} />
                  <p className={"text-[28px] font-light leading-[35px] text-blackColor"}>220,000 <span className={"text-grayColor_1"}>per annum</span></p>
                  <img src={"/src/assets/icon/bookmark-outline.svg"} className={"text-blackColor ml-28"} alt={"naira"} />
              </div>

          </div>
      </div>
  )
}