import {BaseAvatar} from "../avatar/BaseAvatar.tsx";

export const BasePageTab = () => {

  return(
      <div className={"flex gap-5 w-full justify-center mt-10 base-page-space"}>
        <BaseAvatar isActive={true}>
            <span className={"text-center"}>All</span>
        </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center"}>Lodges</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center"}>Apartment</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center"}>Selfcon</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center"}>Duplex</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center"}>pent House</span>
          </BaseAvatar>
          <BaseAvatar isActive={false}>
              <span className={"text-center"}>Bungalow</span>
          </BaseAvatar>

          <BaseAvatar isActive={true}  containerStyle={{
              marginLeft: 200
          }}>
              <div className={"flex gap-3 items-center"}>
                  <img src={"/src/assets/icon/setting-slider.svg"} className={"w-[24px] h-[24px]"} alt={"setting-slider"}/>
                  <span className={"text-center"}>More Filters</span>
              </div>
          </BaseAvatar>
      </div>
  )
}
