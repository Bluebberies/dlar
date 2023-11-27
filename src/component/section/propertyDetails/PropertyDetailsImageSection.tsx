import { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { BaseButton } from "../../button/BaseButton.tsx";
import { SectionTitleHeader } from "../../header/SectionTitleHeader.tsx";
import { RouterConstantUtil } from "@/util/constant/RouterConstantUtil.ts";
import { BaseAvatar } from "@/component/avatar/BaseAvatar.tsx";

type PropertyDetailsImageSectionPropType = {
  propertyData: any;
  handleBookNow: MouseEventHandler;
};

export const PropertyDetailsImageSection = ({
  propertyData,
  handleBookNow,
}: PropertyDetailsImageSectionPropType) => {
  const [photoSwiper, setPhotoSwiper] = useState<boolean>();
  const [image, setImage] = useState<any[]>([]);
  const navigate = useNavigate();

  function handlePhotoSwipe(value: string) {
    setImage((prevState) => {
      const imageState = [...prevState];
      imageState.push(value);
      return imageState;
    });
    setPhotoSwiper(true);
  }

  return (
    <div className={"w-full h-full flex flex-col items-start gap-[15px]"}>
      <h1
        className={
          "[@media(max-width:700px)]:text-[28px] text-[48px] leading-[35px] text-blackColor font-darkerGrotesque-bold"
        }
      >
        {propertyData?.title}
      </h1>
      <div className={"flex items-center gap-2 w-full"}>
        <img
          src={ThemeUtil.icon.blackMap}
          className={"text-blackColor"}
          alt={"black-map-pin-fill"}
        />
        <p
          className={
            "[@media(max-width:700px)]:text-[24px] text-[28px] font-light leading-[35px] text-blackColor font-darkerGrotesque-medium"
          }
        >
          {propertyData?.location}
        </p>
        <img
          src={ThemeUtil.icon.bookmarkOutline}
          className={
            "text-blackColor cursor-pointer ml-auto w-[24px] h-[24px] "
          }
          alt={"bookmark"}
        />
      </div>

      <div className="flex flex-row items-start justify-between w-full ">
        <div className="w-[60%] [@media(max-width:700px)]:w-full">
          <div
            className={
              "relative w-full [@media(max-width:500px)]:h-[250px] h-[400px] rounded-[10px] mt-5 overflow-hidden"
            }
          >
            <img
              src={ThemeUtil.image.mathew}
              alt={"andrea"}
              // onClick={() => handlePhotoSwipe(ThemeUtil.image.mathew)}
              className={
                "select-none w-full h-full cursor-pointer duration-[.2s] hover:scale-[1.1]"
              }
            />
            <BaseAvatar
              hoverScale={1}
              tapScale={1}
              hoverOpacity={1}
              containerStyle={{
                position: "absolute",
                backgroundColor: "white",
                bottom: 10,
                zIndex: 100,
                minWidth: 50,
                height: 40,
                left: 10,
              }}
            >
              <div
                className={
                  "flex justify-center items-center gap-1 h-full rounded-[12px] "
                }
              >
                <img
                  src={ThemeUtil.icon.cameraOutline}
                  className={"select-none w-[20px] h-[20px]"}
                  alt={"andrea"}
                />
                <span className="text-[#000] select-none text-[20px] leading-[20] font-darkerGrotesque-bold">
                  7
                </span>
              </div>
            </BaseAvatar>
          </div>
          <div
            className={
              "w-full [@media(max-width:500px)]:h-[63px]  h-[120px] mt-2 flex gap-0 justify-between items-center"
            }
          >
            <div className={"h-full w-[24%] rounded-[5px] overflow-hidden "}>
              <img
                src={ThemeUtil.image.andrea}
                alt={"andrea"}
                className={"w-full h-full"}
              />
            </div>
            <div className={"h-full w-[24%] rounded-[5px] overflow-hidden "}>
              <img
                src={ThemeUtil.image.mathew}
                alt={"andrea"}
                className={"w-full h-full"}
              />
            </div>
            <div className={"h-full w-[24%] rounded-[5px] overflow-hidden "}>
              <img
                src={ThemeUtil.image.simone}
                alt={"andrea"}
                className={"w-full h-full"}
              />
            </div>
            <div
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), lightgray 50%",
              }}
              className={
                "relative flex items-center justify-center h-full w-[24%] rounded-[5px] overflow-hidden"
              }
            >
              <img
                src={ThemeUtil.image.lance}
                alt={"andrea"}
                // className={"w-full h-full"}
                className={
                  "absolute max-[415px]:scale-[2] w-full h-full bg-center bg-no-repeat opacity-[.2]"
                }
              />
              <div className="text-center gap-2 z-[1] flex items-center justify-center flex-col font-darkerGrotesque-bold text-white">
                <p className="[@media(max-width:700px)]:text-[30px] text-[40px] leading-[20px]">
                  +3
                </p>
                <span className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[20px]">
                  Images
                </span>
              </div>
            </div>
          </div>
          <div className={"flex justify-between items-center mt-5 pl-[10px]"}>
            <span
              className={
                "font-darkerGrotesque-semiBold [@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px]"
              }
            >
              Posted 5hrs ago
            </span>
            <div className={"flex  items-center"}>
              <img
                src={ThemeUtil.icon.naira}
                className={"text-blackColor w-[16px] h-[16px]"}
                alt={"naira"}
              />
              <p
                className={
                  "[@media(max-width:700px)]:text-[20px] text-[36px] self-start font-light leading-[30px] text-blackColor font-darkerGrotesque-bold"
                }
              >
                40,000{" "}
                <span
                  className={
                    "text-grayColor_1 font-darkerGrotesque-semiBold [@media(max-width:700px)]:text-[16px] text-[24px] leading-[20px]"
                  }
                >
                  per night
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={"w-[36%] h-full [@media(max-width:700px)]:hidden"}>
          <SectionTitleHeader
            headerStyle={{
              backgroundColor: "#111110",
              padding: "10px 30px",
              color: "#FAFAFA",
              fontSize: "28px",
            }}
            containerStyle={{
              width: "100%",
              height: "60px",
            }}
            title={"Posted by"}
          />
          <div className={"flex items-center mt-[40px]"}>
            <img
              src={ThemeUtil.icon.agent}
              className={"w-[80px] rounded-[10px] h-[80px]"}
              alt={"agent"}
            />
            <span
              className={
                "font-darkerGrotesque-bold text-[24px] leading-[35px] ml-2 text-[#111110]"
              }
            >
              Mr Anthony
            </span>
          </div>
          <div
            className={
              "w-full p-[10px] h-[60px] bg-grayColor_6 mt-5 mb-5 flex items-center pl-2"
            }
          >
            <p
              className={
                "font-darkerGrotesque-bold text-[20px] text-[#111110] leading-[25px]"
              }
            >
              Registered{" "}
              <span className={"font-darkerGrotesque-medium text-grayColor_1"}>
                2 years ago
              </span>
            </p>
          </div>
          <div className={"w-full flex items-center gap-2"}>
            <img
              src={ThemeUtil.icon.blackCall}
              className={"w-[24px] h-[24px]"}
              alt={"agent"}
            />
            <img
              src={ThemeUtil.icon.blackWhatsapp}
              className={"w-[24px] h-[24px]"}
              alt={"agent"}
            />
            <span
              className={
                "font-darkerGrotesque-bold text-[20px] leading-[25px] text-grayColor_1"
              }
            >
              +234 803 884 8947
            </span>
          </div>
          <p
            onClick={() =>
              navigate(RouterConstantUtil.routes.page.baseAgentProfile + "636")
            }
            className={
              "cursor-pointer font-darkerGrotesque-bold text-[20px] w-full  leading-[25px] text-primaryColor  border-b border-b-primaryColor mt-5"
            }
          >
            View agent and properties posted by agent
          </p>

          <BaseButton
            title={"Book now"}
            onClick={handleBookNow}
            style={{
              background: ThemeUtil.color.blackColor,
              color: "white",
              fontFamily: "darkerGrotesque-bold, sans-serif",
              fontSize: 20,
              // lineHeight: 30
            }}
          />
          <BaseButton
            containerStyle={{
              marginTop: 20,
              marginBottom: 20,
              width: "100%",
              borderRadius: "10px",
            }}
            hoverOpacity={1}
            hoverScale={1}
            tapScale={1}
            // style={{
            //   background: ThemeUtil.color.primaryColor_2,
            // }}
            buttonStyle={{
              color: "#111110",
              backgroundColor: "#E8F8FF",
            }}
          >
            <div className={"flex items-center justify-center gap-[15px]"}>
              <img
                src={ThemeUtil.icon.blackCall}
                className={"w-[24px] h-[24px]"}
                alt={"call owner"}
              />
              <img
                src={ThemeUtil.icon.chatOwner}
                className={"w-[24px] h-[24px]"}
                alt={"chat owner"}
              />
              <span
                className={
                  "font-darkerGrotesque-semiBold text-[16px] leading-[20px]"
                }
              >
                Call or Text for enquiries
              </span>
            </div>
          </BaseButton>
          <BaseButton
            title={"Share this property"}
            buttonStyle={{
              color: "#111110",
              backgroundColor: "#F6F6F6",
            }}
            containerStyle={{
              marginTop: 20,
              marginBottom: 20,
              width: "100%",
              borderRadius: "12px",
            }}
          />
          <div
            className={
              "h-[60px] flex items-center justify-end gap-2  mt-10 mb-10"
            }
          >
            <img
              src={ThemeUtil.icon.warning_icon}
              className={"w-[20px] h-[20px]"}
              alt={"chat owner"}
            />
            <p
              className={
                "font-darkerGrotesque-bold text-[24px]  leading-[20px] text-dangerColor"
              }
            >
              Report Agent
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[24px] [@media(max-width:700px)]:hidden flex flex-row gap-[90px] items-center">
        <h1
          className={
            "font-darkerGrotesque-bold text-[#111110] text-[28px] leading-[20px]"
          }
        >
          Share this property
        </h1>
        <div className="flex flex-row [@media(max-width:900px)]:gap-[25px] gap-[50px] items-center">
          <img
            src={ThemeUtil.icon.facebook}
            alt=""
            className="w-[50px] h-[50px] cursor-pointer"
          />
          <img
            src={ThemeUtil.icon.whatsapp}
            alt=""
            className="w-[50px] h-[50px] cursor-pointer"
          />
          <img
            src={ThemeUtil.icon.twitter}
            alt=""
            className="w-[50px] h-[50px] cursor-pointer"
          />
          <img
            src={ThemeUtil.icon.telegram}
            alt=""
            className="w-[50px] h-[50px] cursor-pointer"
          />
          <img
            src={ThemeUtil.icon.dark_instagram}
            alt=""
            className="w-[50px] h-[50px] cursor-pointer"
          />
        </div>
      </div>
    </div>

    // <div className={"flex justify-center items-center h-[861px] mt-2"}>
    //   {/* <PhotoSwipe
    //     data={image}
    //     show={photoSwiper}
    //     onClose={() => setPhotoSwiper(!photoSwiper)}
    //   /> */}
    //   <div className={"w-full h-full mr-8"}>
    //     <h1
    //       className={
    //         "text-[36px] leading-[35px] text-blackColor font-darkerGrotesque-bold"
    //       }
    //     >
    //       {propertyData?.title}
    //     </h1>
    //     <div className={"flex items-center gap-2 w-full"}>
    //       <img
    //         src={ThemeUtil.icon.blackMap}
    //         className={"text-blackColor"}
    //         alt={"black-map-pin-fill"}
    //       />
    //       <p
    //         className={
    //           "text-[28px] font-light leading-[35px] text-blackColor font-darkerGrotesque-medium"
    //         }
    //       >
    //         {propertyData?.location}
    //       </p>
    //       <img
    //         src={ThemeUtil.icon.bookmarkOutline}
    //         className={"text-blackColor ml-auto w-[24px] h-[24px] "}
    //         alt={"bookmark"}
    //       />
    //     </div>

    //     <div className={"w-full h-[500px] rounded-[10px] mt-5 overflow-hidden"}>
    //       <img
    //         src={ThemeUtil.image.mathew}
    //         alt={"andrea"}
    //         onClick={() => handlePhotoSwipe(ThemeUtil.image.mathew)}
    //         className={
    //           "w-full h-full z-[100px] cursor-pointer duration-150 scale-100 hover:scale-150"
    //         }
    //       />
    //     </div>
    //     <div
    //       className={
    //         "w-full h-[150px] mt-2 flex gap-0 justify-between items-center"
    //       }
    //     >
    //       <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
    //         <img
    //           src={ThemeUtil.image.andrea}
    //           alt={"andrea"}
    //           className={"w-full h-full"}
    //         />
    //       </div>
    //       <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
    //         <img
    //           src={ThemeUtil.image.mathew}
    //           alt={"andrea"}
    //           className={"w-full h-full"}
    //         />
    //       </div>
    //       <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
    //         <img
    //           src={ThemeUtil.image.simone}
    //           alt={"andrea"}
    //           className={"w-full h-full"}
    //         />
    //       </div>
    //       <div className={"h-full w-[200px] rounded-[5px] overflow-hidden "}>
    //         <img
    //           src={ThemeUtil.image.lance}
    //           alt={"andrea"}
    //           className={"w-full h-full"}
    //         />
    //       </div>
    //     </div>
    //     <div className={"flex justify-between items-center mt-5"}>
    //       <span
    //         className={
    //           "font-darkerGrotesque-semiBold text-[20px] leading-[25px]"
    //         }
    //       >
    //         Posted 5hrs ago
    //       </span>
    //       <div className={"flex  items-center"}>
    //         <img
    //           src={ThemeUtil.icon.naira}
    //           className={"text-blackColor w-[16px] h-[16px]"}
    //           alt={"naira"}
    //         />
    //         <p
    //           className={
    //             "text-[28px] self-start font-light leading-[20px] text-blackColor font-darkerGrotesque-black"
    //           }
    //         >
    //           240,000{" "}
    //           <span
    //             className={
    //               "text-grayColor_1 font-darkerGrotesque-semiBold text-[24px]"
    //             }
    //           >
    //             per annum
    //           </span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={"w-[45%] h-full "}>
    //     <SectionTitleHeader title={"Posted by"} />
    //     <div className={"flex items-center "}>
    //       <img
    //         src={ThemeUtil.icon.agent}
    //         className={"w-[80px] h-[80px]"}
    //         alt={"agent"}
    //       />
    //       <span
    //         className={
    //           "font-darkerGrotesque-bold text-[24px] leading-[35px] ml-2 text-[#111110]"
    //         }
    //       >
    //         Mr Anthony
    //       </span>
    //     </div>
    //     <div
    //       className={
    //         "w-[300px] h-[60px] bg-grayColor_6 mt-5 mb-5 flex items-center pl-2"
    //       }
    //     >
    //       <p
    //         className={"font-darkerGrotesque-bold text-[20px]  leading-[25px]"}
    //       >
    //         Registered{" "}
    //         <span className={"font-darkerGrotesque-medium text-grayColor_1"}>
    //           2 years ago
    //         </span>
    //       </p>
    //     </div>
    //     <div className={"w-full flex items-center gap-2"}>
    //       <img
    //         src={ThemeUtil.icon.blackCall}
    //         className={"w-[15px] h-[19px]"}
    //         alt={"agent"}
    //       />
    //       <img
    //         src={ThemeUtil.icon.blackWhatsapp}
    //         className={"w-[15px] h-[19px]"}
    //         alt={"agent"}
    //       />
    //       <span
    //         className={
    //           "font-darkerGrotesque-bold text-[20px] leading-[25px] text-grayColor_1"
    //         }
    //       >
    //         +234 803 884 8947
    //       </span>
    //     </div>
    //     <p
    //       className={
    //         "font-darkerGrotesque-bold text-[20px]  leading-[25px] text-primaryColor  border-b border-b-primaryColor w-[330px] mt-5"
    //       }
    //     >
    //       View agent and properties posted by agent
    //     </p>
    //     <BaseButton
    //       containerStyle={{
    //         marginTop: 20,
    //         marginBottom: 20,
    //       }}
    //       style={{
    //         background: ThemeUtil.color.primaryColor_2,
    //       }}
    //     >
    //       <div className={"flex items-center justify-center gap-2"}>
    //         <img
    //           src={ThemeUtil.icon.chatOwner}
    //           className={"w-[31px] h-[28px]"}
    //           alt={"chat owner"}
    //         />
    //         <span
    //           className={
    //             "font-darkerGrotesque-semiBold text-[20px] leading-[20px]"
    //           }
    //         >
    //           Chat with owner
    //         </span>
    //       </div>
    //     </BaseButton>
    //     <BaseButton
    //       title={"Pay Now"}
    //       style={{
    //         background: ThemeUtil.color.blackColor,
    //         color: "white",
    //         fontFamily: "darkerGrotesque-bold, sans-serif",
    //         fontSize: 20,
    //         // lineHeight: 30
    //       }}
    //     />

    //     <div
    //       className={
    //         "w-[300px] h-[60px] bg-grayColor_6 flex items-center pl-2 mt-10 mb-10"
    //       }
    //     >
    //       <p
    //         className={"font-darkerGrotesque-bold text-[28px]  leading-[20px]"}
    //       >
    //         Share this property
    //       </p>
    //     </div>

    //     <div
    //       className={
    //         "w-[300px] h-[60px]  flex items-center gap-10 pl-2 mt-10 mb-10"
    //       }
    //     >
    //       <img
    //         src={ThemeUtil.icon.facebook}
    //         className={"w-[41px] h-[41px]"}
    //         alt={"chat owner"}
    //       />
    //       <img
    //         src={ThemeUtil.icon.whatsapp}
    //         className={"w-[41px] h-[41px]"}
    //         alt={"chat owner"}
    //       />
    //       <img
    //         src={ThemeUtil.icon.twitter}
    //         className={"w-[41px] h-[41px]"}
    //         alt={"chat owner"}
    //       />
    //     </div>
    //     <div
    //       className={
    //         "h-[60px] flex items-center justify-end gap-2  mt-10 mb-10"
    //       }
    //     >
    //       <img
    //         src={ThemeUtil.icon.warning_icon}
    //         className={"w-[20px] h-[20px]"}
    //         alt={"chat owner"}
    //       />
    //       <p
    //         className={
    //           "font-darkerGrotesque-bold text-[24px]  leading-[20px] text-dangerColor"
    //         }
    //       >
    //         Report Agent
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};
