import {ThemeUtil} from "../../../util/ThemeUtil.ts";
import {BaseButton} from "../../button/BaseButton.tsx";
import {PhotoSwipe} from "../../utility/PhotoSwipe.tsx";
import {useState} from "react";

export const PropertyDetailsImageSection = () => {
    const [photoSwiper, setPhotoSwiper] = useState<boolean>()
    const [image, setImage] = useState<any[]>([])

    function handlePhotoSwipe(value: string) {
        setImage(prevState => {
            const imageState = [...prevState]
            imageState.push(value)
            return imageState
        })
        setPhotoSwiper(true)
    }
  return(
      <div className={"flex justify-center items-center h-[861px] mt-2"}>
          <PhotoSwipe data={image} show={photoSwiper} onClose={()=>setPhotoSwiper(!photoSwiper)} />
          <div className={"w-full h-full mr-8"}>
              <h1 className={"text-[36px] leading-[35px] text-blackColor font-darkerGrotesque-bold"}>My Odessy Lodge </h1>
              <div className={"flex items-center gap-2 w-full"}>
                  <img src={ThemeUtil.icon.blackMap} className={"text-blackColor"} alt={"black-map-pin-fill"} />
                  <p className={"text-[28px] font-light leading-[35px] text-blackColor font-darkerGrotesque-medium"}>Ifite Awka.</p>
                  <img src={ThemeUtil.icon.bookmarkOutline} className={"text-blackColor ml-auto w-[24px] h-[24px] "} alt={"bookmark"} />
              </div>

              <div className={"w-full h-[500px] rounded-[10px] mt-5 overflow-hidden"}>
                  <img src={ThemeUtil.image.mathew} alt={"andrea"} onClick={()=>handlePhotoSwipe(ThemeUtil.image.mathew)} className={"w-full h-full z-[100px] cursor-pointer duration-150 scale-100 hover:scale-150"} />
              </div>
              <div className={"w-full h-[150px] mt-2 flex gap-0 justify-between items-center"}>
                  <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
                      <img src={ThemeUtil.image.andrea} alt={"andrea"} className={"w-full h-full"} />
                  </div>
                  <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
                      <img src={ThemeUtil.image.mathew} alt={"andrea"} className={"w-full h-full"} />
                  </div>
                  <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
                      <img src={ThemeUtil.image.simone} alt={"andrea"} className={"w-full h-full"} />
                  </div>
                  <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
                      <img src={ThemeUtil.image.lance} alt={"andrea"} className={"w-full h-full"} />
                  </div>
              </div>
              <div className={"flex justify-between items-center mt-5"}>
                  <span className={"font-darkerGrotesque-semiBold text-[20px] leading-[25px]"}>Posted 5hrs ago</span>
                  <div className={"flex  items-center"}>
                      <img src={ThemeUtil.icon.naira} className={"text-blackColor w-[16px] h-[16px]"} alt={"naira"} />
                      <p className={"text-[28px] self-start font-light leading-[20px] text-blackColor font-darkerGrotesque-black"}>240,000 <span className={"text-grayColor_1 font-darkerGrotesque-semiBold text-[24px]"}>per annum</span></p>
                  </div>
              </div>
          </div>
          <div className={"w-[45%] h-full "}>
              <BaseButton title={"Posted by"} />
              <div className={"flex items-center "}>
                  <img src={ThemeUtil.icon.agent} className={"w-[80px] h-[80px]"} alt={"agent"} />
                  <span className={"font-darkerGrotesque-bold text-[24px] leading-[35px] ml-2"}>Mr Anthony</span>
              </div>
              <div className={"w-[300px] h-[60px] bg-grayColor_6 mt-5 mb-5 flex items-center pl-2"}>
                  <p className={"font-darkerGrotesque-bold text-[20px]  leading-[25px]"}>Registered <span className={"font-darkerGrotesque-medium text-grayColor_1"}>2 years ago</span></p>
              </div>
              <div className={"w-full flex items-center gap-2"}>
                  <img src={ThemeUtil.icon.blackCall} className={"w-[15px] h-[19px]"} alt={"agent"} />
                  <img src={ThemeUtil.icon.blackWhatsapp} className={"w-[15px] h-[19px]"} alt={"agent"} />
                  <span className={"font-darkerGrotesque-bold text-[20px] leading-[25px] text-grayColor_1"}>+234 803 884 8947</span>
              </div>
              <p className={"font-darkerGrotesque-bold text-[20px]  leading-[25px] text-primaryColor  border-b border-b-primaryColor w-[330px] mt-5"}>View agent and properties posted by agent</p>
              <BaseButton
                  containerStyle={{
                      marginTop: 20,
                      marginBottom: 20
                  }}
                  style={{
                      background: ThemeUtil.color.primaryColor_2,
                  }}>
                  <div className={"flex items-center justify-center gap-2"}>
                      <img src={ThemeUtil.icon.chatOwner} className={"w-[31px] h-[28px]"} alt={"chat owner"} />
                      <span className={"font-darkerGrotesque-semiBold text-[20px] leading-[20px]"}>Chat with owner</span>
                  </div>
              </BaseButton>
              <BaseButton title={"Pay Now"} style={{
                  background: ThemeUtil.color.blackColor,
                  color: "white",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontSize: 20,
                  // lineHeight: 30
              }} />

              <div className={"w-[300px] h-[60px] bg-grayColor_6 flex items-center pl-2 mt-10 mb-10"}>
                  <p className={"font-darkerGrotesque-bold text-[28px]  leading-[20px]"}>Share this property</p>
              </div>

              <div className={"w-[300px] h-[60px]  flex items-center gap-10 pl-2 mt-10 mb-10"}>
                  <img src={ThemeUtil.icon.facebook} className={"w-[41px] h-[41px]"} alt={"chat owner"} />
                  <img src={ThemeUtil.icon.whatsapp} className={"w-[41px] h-[41px]"} alt={"chat owner"} />
                  <img src={ThemeUtil.icon.twitter} className={"w-[41px] h-[41px]"} alt={"chat owner"} />

              </div>
              <div className={"h-[60px] flex items-center justify-end gap-2  mt-10 mb-10"}>
                  <img src={ThemeUtil.icon.dangerWarning} className={"w-[20px] h-[20px]"} alt={"chat owner"} />
                  <p className={"font-darkerGrotesque-bold text-[24px]  leading-[20px] text-dangerColor"}>Report Agent</p>
              </div>

          </div>
      </div>
  )
}