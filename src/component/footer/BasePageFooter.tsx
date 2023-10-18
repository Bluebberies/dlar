import {BasePageFooterSubscribeInput} from "../input/BasePageFooterSubscribeInput.tsx";
import {BaseAvatar} from "../avatar/BaseAvatar.tsx";

export const BasePageFooter = () => {
  return(
      <div className={"h-[800px] w-full mt-40"}>
        <div className={"h-[30%]  flex items-center justify-between p-40"} style={{
            backgroundColor: "#cffdfd"
        }}>
            <p className={"text-[48px] leading-[50px] w-[360px]"}>
                Be the first to hear about our Updates
            </p>
            <BasePageFooterSubscribeInput />
        </div>
        <div className={"h-[60%] w-full bg-primaryColor flex items-center justify-between p-16"} >
            <div className={" h-full w-full self-center"}>
                <BaseAvatar isActive={true} containerStyle={{
                    width: 200,
                    height: 70
                }} >
                    <div className={"flex items-center justify-center"}>
                        <img src={"/src/assets/image/logo.svg"} alt={"logo"} className={"w-[135px] h-[40px]"} />
                    </div>
                </BaseAvatar>
                <h1 className={"text-[28px] leading-[35px] text-white mt-5 mb-5"}>About Us</h1>
                <p className={"text-[20px] leading-[35px] text-white w-[380px]"}>
                    Dwelar is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution see more...
                </p>
            </div>
            <div className={" h-full w-full self-center"}>
                <h1 className={"text-[28px]  leading-[35px] text-white"}>Useful Links</h1>
                <div className={"flex justify-start h-full items-center"}>
                    <div className={" h-[80%]  w-40"}>
                        <ul className={"text-[20px]  text-white leading-[35px]"}>
                            <li>Agent</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Advertise</li>
                        </ul>
                    </div>
                    <div className={" h-[80%] w-full self-center"}>
                        <ul className={"text-[20px]  text-white leading-[35px]"}>
                            <li>Properties Nearby</li>
                            <li>Feature Property</li>
                            <li>Become an Ambassador</li>
                            <li>Campaign Programs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"  h-full w-full"}>
                <h1 className={"text-[28px] leading-[35px] text-white"}>Follow us on our socials</h1>
                <div className={"flex gap-5 mt-5"}>
                    <img src={"/src/assets/icon/white-facebook.svg"} alt={"facebook"} />
                    <img src={"/src/assets/icon/white-twitter.svg"} alt={"twitter"} />
                    <img src={"/src/assets/icon/white-instagram.svg"} alt={"instagram"} />
                    <img src={"/src/assets/icon/white-linkin.svg"} alt={"linkin"} />
                </div>

                <h1 className={"text-[28px] leading-[35px] text-white"}>Contact us</h1>


                <div className={"flex gap-2 mt-5"}>
                    <img src={"/src/assets/icon/white-call.svg"} alt={"call"} />
                    <span className={"text-[20px]  text-white leading-[27px]"}>+234 803 884 8947</span>
                </div>

                <div className={"flex gap-2 mt-5"}>
                    <img src={"/src/assets/icon/white-message-filled.svg"} alt={"call"} />
                    <span className={"text-[20px]  text-white leading-[27px]"}>Info@dwelar.com</span>
                </div>
            </div>
        </div>
        <div className={"h-[10%] flex items-center justify-center"}>
            <span>2023 Dwelar. All Rights Reserved</span>
        </div>
      </div>
  )
}