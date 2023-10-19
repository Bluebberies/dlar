import {BaseAvatar} from "../avatar/BaseAvatar.tsx";
import {useState} from "react";
import {BaseButton} from "../button/BaseButton.tsx";
import {BaseInput} from "../input/BaseInput.tsx";
import {FilterCheckbox} from "../checkbox/FilterCheckbox.tsx";
import {ThemeUtil} from "../../util/ThemeUtil.ts";

export const BasePageTab = () => {
    const [filter, setFilter] = useState<boolean>(true)

    function handleFilter() {
        setFilter(!filter)
    }

  return(
      <>
          <div className={"flex gap-5 w-full justify-center mt-10 mb-20 base-page-space"}>
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

              <BaseAvatar isActive={true}  onClick={handleFilter} containerStyle={{
                  marginLeft: 200
              }}>
                  <div className={"flex gap-3 items-center"}>
                      <img src={"/src/assets/icon/setting-slider.icon"} className={"w-[24px] h-[24px]"} alt={"setting-slider"}/>
                      <span className={"text-center text-blackColor font-darkerGrotesque-bold"}>More Filters</span>
                  </div>
              </BaseAvatar>


          </div>

          {
              filter &&(
                  <div className={"w-full mt-10 mb-10 "}>
                    <BaseButton title={"More Filers"}  containerStyle={{
                        width: 300,
                        height: 60,
                        marginBottom: 20
                    }} />
                      <div className={"flex h-[195px] mb-5"}>
                          <div className={"w-full h-full"}>
                              <h1 className={"font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"}>Type of property</h1>
                              <div className={"flex items-center justify-between mt-4"}>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"All"} />
                                      <FilterCheckbox label={"Selfcon"} />
                                      <FilterCheckbox label={"Apartment"} />
                                  </div>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"Duplex"} />
                                      <FilterCheckbox label={"Lodges"} />
                                      <FilterCheckbox label={"Hotel"} />
                                  </div>
                              </div>
                          </div>
                          <div className={"w-full h-full "}>
                              <h1 className={"font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"}>Type of Furnishing</h1>
                              <div className={"flex items-center justify-between mt-4"}>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"All"} />
                                      <FilterCheckbox label={"unfurnished"} />
                                  </div>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"Furnished"} />
                                      <FilterCheckbox label={"Semi-furnished"} />
                                  </div>
                              </div>

                          </div>
                          <div className={"w-full h-full "}>
                              <h1 className={"font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"}>Condition</h1>
                              <div className={"flex items-center justify-between mt-4"}>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"All"} />
                                      <FilterCheckbox label={"Newly built"} />
                                      <FilterCheckbox label={"Renovated"} />
                                  </div>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"Fairly used"} />
                                      <FilterCheckbox label={"New"} />
                                      <FilterCheckbox label={"New"} />
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div className={"flex h-[250px]"}>
                          <div className={"w-full h-full "}>
                              <h1 className={"font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"}>When Uploaded</h1>
                              <div className={"flex items-center justify-between mt-4"}>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"Anytime"} />
                                      <FilterCheckbox label={"3 days ago"} />
                                      <FilterCheckbox label={"2 weeks ago"} />
                                  </div>
                                  <div className={"w-full"}>
                                      <FilterCheckbox label={"24 hours ago"} />
                                      <FilterCheckbox label={"1 week ago"} />
                                      <FilterCheckbox label={"1 month ago"} />
                                  </div>
                              </div>
                          </div>
                          <div className={"w-full h-full "}>
                              <h1 className={"font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"}>Price Range</h1>
                              <div className={"flex items-center gap-2 justify-between mt-4"}>
                                  <div className={"w-full flex flex-col items-center"}>
                                      <BaseInput placeholder={"1000"} containerStyle={{
                                          marginBottom:-30,
                                          marginTop: 0
                                      }}  />
                                      <FilterCheckbox label={"Minimum Price"} />
                                  </div>
                                  <div className={"w-full flex flex-col items-center"}>
                                      <BaseInput placeholder={"4000"} containerStyle={{
                                          marginBottom:-30,
                                          marginTop: 0
                                      }} />
                                      <FilterCheckbox label={"Maximum Price"} />
                                  </div>
                              </div>
                          </div>
                          <div className={"w-full h-full "}>
                              <h1 className={"font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"}>Location</h1>
                              <BaseInput value={"Ifite, Awka"} containerStyle={{
                                  marginBottom:-30,
                                  marginTop: 16
                              }} />
                          </div>
                      </div>
                      <div className={"w-full flex justify-end items-center "}>
                          <BaseAvatar isActive={true} containerStyle={{
                              backgroundColor: ThemeUtil.color.primaryColor,
                              width: 200,
                              height: 60,
                              borderRadius: 12
                          }}>
                              <div className={"h-full w-full flex items-center justify-center"}>
                                  <p className={"text-center text-white font-darkerGrotesque-bold text-[20px] leading-[20px]"}>
                                      Apply
                                      <span className={"ml-5"}>(300)</span>
                                  </p>
                              </div>
                          </BaseAvatar>
                          <BaseButton title={"Cancel"} buttonStyle={{
                              backgroundColor: "white",
                              color: ThemeUtil.color.blackColor,
                              fontSize: 20,
                              // lineHeight: 20
                          }}  containerStyle={{
                              width: 200,
                              height: 60,
                          }} />
                      </div>
                  </div>
              )
          }
      </>
  )
}
