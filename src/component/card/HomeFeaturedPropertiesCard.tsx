import {BaseAvatar} from "../avatar/BaseAvatar.tsx";
import {ThemeUtil} from "../../util/ThemeUtil.ts";

export const HomeFeaturedPropertiesCard = () => {
  return(
      <div className={"w-full h-[469px] mt-20 "}>
        <h1 className={"text-[48px] leading-[35px] mb-10 text-blackColor font-darkerGrotesque-bold"}>Featured Properties</h1>
          <div className={"rounded-[12px] h-[400px] overflow-hidden relative"} style={{
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 1))",
              zIndex: 100
          }}>
              <img src={"/src/assets/image/matteo.jpg"} className={"w-full h-full bg-center bg-no-repeat -z-[200]"} alt={"matteo"} />
              <div className={"z-[999] absolute bottom-10 flex flex-col gap-2 items-start left-[70px]"}>
                  <h1 className={"text-[36px] leading-[35px] text-white font-darkerGrotesque-bold"}>Ravers House Party Awka</h1>
                  <div className={"flex items-center gap-2"}>
                      <img src={"/src/assets/icon/white-map-pin-fill.icon"} alt={"white-map-pin-fill"} />
                      <p className={"text-[28px] font-light leading-[35px] text-white"}>Ifite Awka, Anambra State.</p>
                  </div>
                  <BaseAvatar  containerStyle={{
                      width: 240,
                      borderRadius: 12,
                      height: 60,
                      backgroundColor: ThemeUtil.color.primaryColor,
                      marginTop: 10
                  }}>
                      <div className={"flex items-center justify-center gap-5 h-full"}>
                          <span className={"text-white text-[20px] leading-[35px]"}>View Lodge</span>
                          <img src={"/src/assets/icon/white-chevron-round.icon"} className={"w-[25px] h-[25px]"} alt={"chevron round"}/>
                      </div>
                  </BaseAvatar>
              </div>
          </div>
      </div>
  )
}