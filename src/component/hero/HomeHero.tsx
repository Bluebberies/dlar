import {BaseAvatar} from "../avatar/BaseAvatar.tsx";

export const HomeHero = () => {
  return(
      <div className={"border h-[500px] w-full mt-32 rounded-[12px] overflow-hidden relative"} style={{
          backgroundColor: "rgba(17, 17, 16, .7)",
      }}>
        <img src={"/src/assets/image/hero-image.jpg"} className={"absolute w-full h-full bg-center bg-no-repeat -z-[999]"} alt={"hero image"}/>
          <div className={"z-[999] absolute bottom-10 flex flex-col justify-center items-center left-[40%]"}>
              <h1 className={"text-[36px] leading-[35px] text-white mb-10"}>Ravers House Party Awka</h1>
              <BaseAvatar  containerStyle={{
                  width: 240,
                  borderRadius: 12,
                  height: 60,
                  backgroundColor: "rgba(250, 250, 250, 0.4)"
              }}>
                  <div className={"flex items-center justify-center gap-5 h-full"}>
                    <span className={"text-white text-[20px] leading-[35px]"}>View Details</span>
                      <img src={"/src/assets/icon/white-chevron-round.svg"} className={"w-[25px] h-[25px]"} alt={"chevron round"}/>
                  </div>
              </BaseAvatar>
          </div>
      </div>
  )
}