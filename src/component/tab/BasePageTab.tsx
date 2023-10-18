import {BaseAvatar} from "../avatar/BaseAvatar.tsx";

export const BasePageTab = () => {

  return(
      <div className={"flex gap-5 w-full justify-center mt-10 base-page-space"}>
        <BaseAvatar isActive={true}>
            <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>All</span>
        </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>Lodges</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>Apartment</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>Selfcon</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>Duplex</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>pent House</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>Bungalow</span>
          </BaseAvatar>

          <BaseAvatar isActive={true}  containerStyle={{
              marginLeft: 200
          }}>
              <div className={"flex gap-3 items-center"}>
                  <img src={"/src/assets/icon/setting-slider.svg"} className={"w-[24px] h-[24px]"} alt={"setting-slider"}/>
                  <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>More Filters</span>
              </div>
          </BaseAvatar>
      </div>
  )
}
