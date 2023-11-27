// import { BaseButton } from "../../button/BaseButton.tsx";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
// import { motion } from "framer-motion";

export const PropertyDetailsSection = () => {
  return (
    // <div className={"w-full mt-24"}>
    //   <h1
    //     className={
    //       "font-darkerGrotesque-bold text-[36px] leading-[35px] text-blackColor mb-3"
    //     }
    //   >
    //     Properties Description
    //   </h1>
    //   <div className={"flex items-center flex-wrap gap-2"}>
    //     <BaseButton
    //       containerStyle={{
    //         width: 300,
    //         height: 55,
    //       }}
    //       style={{
    //         background: ThemeUtil.color.primaryColor_2,
    //       }}
    //     >
    //       <div className={"flex items-center justify-center gap-2"}>
    //         <span
    //           className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
    //         >
    //           Status
    //         </span>
    //         <span
    //           className={
    //             "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
    //           }
    //         >
    //           {" "}
    //           Available
    //         </span>
    //       </div>
    //     </BaseButton>
    //     <BaseButton
    //       containerStyle={{
    //         width: 300,
    //         height: 55,
    //       }}
    //       style={{
    //         background: ThemeUtil.color.primaryColor_2,
    //       }}
    //     >
    //       <div className={"flex items-center justify-center gap-2"}>
    //         <span
    //           className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
    //         >
    //           Status
    //         </span>
    //         <span
    //           className={
    //             "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
    //           }
    //         >
    //           {" "}
    //           Available
    //         </span>
    //       </div>
    //     </BaseButton>
    //     <BaseButton
    //       containerStyle={{
    //         width: 300,
    //         height: 55,
    //       }}
    //       style={{
    //         background: ThemeUtil.color.primaryColor_2,
    //       }}
    //     >
    //       <div className={"flex items-center justify-center gap-2"}>
    //         <span
    //           className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
    //         >
    //           Status
    //         </span>
    //         <span
    //           className={
    //             "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
    //           }
    //         >
    //           {" "}
    //           Available
    //         </span>
    //       </div>
    //     </BaseButton>
    //     <BaseButton
    //       containerStyle={{
    //         width: 300,
    //         height: 55,
    //       }}
    //       style={{
    //         background: ThemeUtil.color.primaryColor_2,
    //       }}
    //     >
    //       <div className={"flex items-center justify-center gap-2"}>
    //         <span
    //           className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
    //         >
    //           Status
    //         </span>
    //         <span
    //           className={
    //             "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
    //           }
    //         >
    //           {" "}
    //           Available
    //         </span>
    //       </div>
    //     </BaseButton>
    //     <BaseButton
    //       containerStyle={{
    //         width: 300,
    //         height: 55,
    //       }}
    //       style={{
    //         background: ThemeUtil.color.primaryColor_2,
    //       }}
    //     >
    //       <div className={"flex items-center justify-center gap-2"}>
    //         <span
    //           className={"font-darkerGrotesque-bold text-[20px] leading-[25px]"}
    //         >
    //           Status
    //         </span>
    //         <span
    //           className={
    //             "font-darkerGrotesque-bold text-grayColor_1 text-[20px] leading-[25px]"
    //           }
    //         >
    //           {" "}
    //           Available
    //         </span>
    //       </div>
    //     </BaseButton>
    //   </div>
    // </div>
    <>
      <div
        className={
          "mt-[81px] flex justify- flex-row w-full justify-between items-start flex-wrap gap-[30px]"
        }
      >
        <div className={"flex flex-col items-start gap-[20px]"}>
          <h1
            className={
              "font-darkerGrotesque-bold [@media(max-width:700px)]:text-[20px] text-[30px] [@media(max-width:700px)]:leadind-[20px] leading-[35px] text-blackColor"
            }
          >
            Hotel Description
          </h1>
          <ul
            className={
              "font-darkerGrotesque-semiBold [@media(max-width:700px)]:text-[14px] text-[16px] leading-[28px] text-[grayColor_1]]"
            }
          >
            <li>Beautiful and lovely Selfcon + A shop to rent:</li>
            <li>Spacious Rooms</li>
            <li>240k per year</li>
            <li>20k Fee</li>
            <li>10% Legal Fee</li>
            <li>10% Agency Fee</li>
          </ul>
        </div>
        <div className={"flex flex-col items-start gap-[20px]"}>
          <h1
            className={
              "font-darkerGrotesque-bold [@media(max-width:700px)]:text-[20px] text-[30px] [@media(max-width:700px)]:leadind-[20px] leading-[35px] text-blackColor"
            }
          >
            About Property
          </h1>
          <p
            className={
              "[@media(max-width:700px)]:w-full w-[506px] font-darkerGrotesque-semiBold [@media(max-width:700px)]:text-[20px] text-[16px] leading-[28px] text-grayColor_1]"
            }
          >
            No matter the category of rooms that guests are lodged in, The
            Avenue Suites ensures that guests have the perfect stay. The room
            categories fall into Classic, Deluxe, Executive Room, Deluxe
            Executive, Suite and Royal Suite. An en-suite bathroom with a
            shower, bathrobes and a hairdryer are fitted in the rooms. The TV
            comes with cable channels. A sitting area is also provided in the
            rooms for entertaining visitors. Views from the rooms are
            fascinating as you can enjoy a city and ocean view from the rooms.
            King-sized beds with clean and comfortable beddings are provided in
            the rooms.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-5 mt-5">
        <h1
          className={
            "font-darkerGrotesque-bold  [@media(max-width:700px)]:text-[20px] text-[30px] leading-[35px] text-blackColor"
          }
        >
          Hotel Details
        </h1>
        <div className="flex w-full flex-col items-start justify-between gap-2">
          {/* <div>
              <div className="bg-[rgba(255,246,164,0.50)] [@media(max-width:700px)]:w-[auto] w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
                <p className="[@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-blackColor font-bold font-darkerGrotesque-medium">
                  Status
                </p>
                <span className="[@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                  Fully booked
                </span>
                <img src={ThemeUtil.icon.warning_icon} alt="" />
              </div>
            </div> */}

          <div className="flex w-full flex-row gap-[5px] [@media(max-width:700px)]:flex-col">
            <div className="flex flex-col items-start gap-[15px]">
              <h1
                className={
                  "font-darkerGrotesque-bold [@media(max-width:700px)]:text-[16px] text-[20px] leading-[35px] text-blackColor"
                }
              >
                Status
              </h1>
              <div className="[@media(max-width:700px)]:bg-[#4ABF4F] bg-[#60E866] [@media(max-width:700px)]:rounded-[5px] [@media(max-width:700px)]:w-[170px] w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
                <span className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px] text-[#fff] font-bold flex flex-row gap-[10px] font-darkerGrotesque-medium">
                  Available <img src={ThemeUtil.icon.tick_icon} alt="" />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[15px]">
              <h1
                className={
                  "font-darkerGrotesque-bold [@media(max-width:700px)]:text-[16px] text-[20px] leading-[35px] text-blackColor"
                }
              >
                Available Rooms
              </h1>
              <div className="flex w-full flex-wrap flex-row items-start [@media(max-width:700px)]:gap-0 gap-[5px]">
                <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[150px] py-[10px] px-4 flex flex-row items-center justify-center gap-2">
                  <span className="[@media(max-width:700px)]:text-[14px] [@media(max-width:700px)]:font-normal text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                    Standard
                  </span>
                </div>
                <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[150px] py-[10px] px-4 flex flex-row items-center justify-center gap-2">
                  <span className="[@media(max-width:700px)]:text-[14px] [@media(max-width:700px)]:font-normal text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                    Deluxe
                  </span>
                </div>
                <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[150px] py-[10px] px-4 flex flex-row items-center justify-center gap-2">
                  <span className="[@media(max-width:700px)]:text-[14px] [@media(max-width:700px)]:font-normal text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                    Penthouse
                  </span>
                </div>
                <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[150px] py-[10px] px-4 flex flex-row items-center justify-center gap-2">
                  <span className="[@media(max-width:700px)]:text-[14px] [@media(max-width:700px)]:font-normal text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                    Presidential
                  </span>
                </div>
                <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[150px] py-[10px] px-4 flex flex-row items-center justify-center gap-2">
                  <span className="[@media(max-width:700px)]:text-[14px] [@media(max-width:700px)]:font-normal text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                    super Deluxe
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-row items-center flex-wrap  gap-2">
            <div className="bg-[#E8F8FF] [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
              <p className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px] text-blackColor font-bold font-darkerGrotesque-medium">
                Check in
              </p>
              <span className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                Any time
              </span>
            </div>
            <div className="bg-[#E8F8FF] [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
              <p className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px] text-blackColor font-bold font-darkerGrotesque-medium">
                Check out
              </p>
              <span className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                12pm
              </span>
            </div>
            <div className="bg-[#E8F8FF] [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
              <p className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px] text-blackColor font-bold font-darkerGrotesque-medium">
                Pets
              </p>
              <span className="[@media(max-width:700px)]:text-[16px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                Allowed
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full  [@media(max-width:700px)]:flex-col flex-row items-start gap-5 mt-5">
        <div className="flex w-full flex-col items-start gap-5 mt-5 ">
          <h1
            className={
              "font-darkerGrotesque-bold  [@media(max-width:700px)]:text-[20px] text-[30px] leading-[35px] text-blackColor"
            }
          >
            Tags
          </h1>
          <div className="grid  [@media(max-width:700px)]:w-full w-[80%] [@media(max-width:700px)]:grid-cols-2  [@media(max-width:700px)]:m-auto m-0 grid-cols-3 gap-2">
            <div className="bg-[#F6F6F6]  [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center  [@media(max-width:700px)]:justify-center justify-start gap-2">
              <span className="  [@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                Free Internet Access
              </span>
            </div>
            <div className="bg-[#F6F6F6]  [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center  [@media(max-width:700px)]:justify-center justify-start gap-2">
              <span className="  [@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                24/7 Electricity
              </span>
            </div>
            <div className="bg-[#F6F6F6]  [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center  [@media(max-width:700px)]:justify-center justify-start gap-2">
              <span className="  [@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                Adequate Parking Space
              </span>
            </div>
            <div className="bg-[#F6F6F6]  [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center  [@media(max-width:700px)]:justify-center justify-start gap-2">
              <span className="  [@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                Security Services
              </span>
            </div>
            <div className="bg-[#F6F6F6]  [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center  [@media(max-width:700px)]:justify-center justify-start gap-2">
              <span className="  [@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                Swimming Pool
              </span>
            </div>
            <div className="bg-[#F6F6F6]  [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center  [@media(max-width:700px)]:justify-center justify-start gap-2">
              <span className="  [@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
                Laundry Services
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[30px] right-1">
          <h1
            className={
              "font-darkerGrotesque-bold  [@media(max-width:700px)]:text-[20px] text-[30px] leading-[35px] text-blackColor"
            }
          >
            Rating
          </h1>
          <span className="text-[28px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-semiBold flex flex-row item-center justify-center gap-[5px]">
            <img src={ThemeUtil.icon.star_icon} alt="" />
            4.8
          </span>
          <span className="text-[15px] mt-[-25px] cursor-pointer select-none leading-[25px] text-[#18ACE8] font-bold font-darkerGrotesque-bold">
            See reviews
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-5 mt-[80px]">
        <h1
          className={
            "font-darkerGrotesque-bodangerWarningld  [@media(max-width:700px)]:text-[20px] text-[30px] leading-[35px] text-blackColor"
          }
        >
          Landmarks close to Hotel
        </h1>
        <div className="grid w-full [@media(max-width:700px)]:grid-cols-2 [@media(max-width:1000px)]:grid-cols-3 [@media(max-width:700px)]:m-auto grid-cols-4 gap-2">
          <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
            <span className="[@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
              Unizik ifite school gate
            </span>
          </div>
          <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
            <span className="[@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
              Dynamo Junction
            </span>
          </div>
          <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
            <span className="[@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
              Wintess Hotel and Suits
            </span>
          </div>
          <div className="bg-[#F6F6F6] [@media(max-width:700px)]:w-auto w-[250px] py-[10px] px-4 flex flex-row items-center justify-start gap-2">
            <span className="[@media(max-width:700px)]:text-[14px] text-[20px] leading-[25px] text-[#606060] font-bold font-darkerGrotesque-medium">
              St. Anthony Parish
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
