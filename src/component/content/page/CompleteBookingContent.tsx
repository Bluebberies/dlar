import {
  PropertiesData,
  PropertiesDataProps,
} from "@/toolkit/data/nearYouData";
import {
  RecentlyUploadedDataProps,
  recentlyUploadedData,
} from "@/toolkit/data/recentlyUploadedData";
import { RouterConstantUtil } from "@/util/constant/RouterConstantUtil";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BaseInput } from "@/component/input/BaseInput";
import { ThemeUtil } from "@/util/ThemeUtil";
import { useMediaQuery } from "react-responsive";
import { FilterCheckbox } from "@/component/checkbox/FilterCheckbox";
import { BaseButton } from "@/component/button/BaseButton";

const CompleteBookingContent = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState<
    PropertiesDataProps | RecentlyUploadedDataProps
  >();

  const { propertyid } = useParams();

  useEffect(() => {
    const allPropertyData = [...PropertiesData, ...recentlyUploadedData];
    const dataExist = allPropertyData.find((data) => data.id == propertyid);

    if (dataExist) {
      setPropertyData(dataExist);
    } else {
      navigate(RouterConstantUtil.routes.page.noPageFound, {
        replace: false,
      });
    }

    if (isMobileScreen) {
      navigate(RouterConstantUtil.routes.page.basePropertyDetails + propertyid);
    }
  }, [propertyid, navigate, isMobileScreen]);

//   useEffect(() => {}, [isMobileScreen]);
  return (
    <div className="mt-2 w-[80%] h-auto flex items-start m-auto justify-center flex-col">
      <h1 className="text-[45px] leading-[35px] text-[#111110] font-darkerGrotesque-bold ">
        Complete your Bookings at Bon Hotels.
      </h1>
      <p className="text-[32px] leading-[35px] font-black text-[#606060] font-darkerGrotesque-semiBold mt-[15px]">
        It only takes 30 seconds
      </p>
      <div className="flex max-[1000px]:flex-col flex-row mt-16 gap-[40px] w-full h-auto">
        {/* py-30 px-40 */}
        <div className="bg-[#F6F6F6] max-[1000px]:w-full gap-[30px] flex rounded-[25px] flex-col w-[50%] h-auto py-[30px] px-[40px]">
          <div className="bg-[#fff] w-full h-auto flex rounded-[20px] py-[20px] px-[25px] flex-col">
            <BaseInput
              placeholder={"Start with first name"}
              label={"Full Name"}
              labelStyle={{ fontSize: "20px" }}
              containerStyle={{ margin: "15px 0" }}
            />
            <BaseInput
              placeholder={"Input your email address"}
              label={"Email"}
              labelStyle={{ fontSize: "20px" }}
              containerStyle={{ margin: "15px 0" }}
              type="email"
            />
            <BaseInput
              placeholder={"Input your phone number"}
              label={"Phone Number"}
              labelStyle={{ fontSize: "20px" }}
              containerStyle={{ margin: "15px 0" }}
              type="Tel"
            />
          </div>
          <div className="bg-[#fff] w-full h-auto flex rounded-[20px] py-[20px] px-[25px] flex-col">
            <FilterCheckbox label={"This is a reservation for someones else"} />
            <BaseInput
              placeholder={"Add any extra request"}
              containerStyle={{ margin: "15px 0" }}
              inputContainerStyle={{ height: "150px" }}
              type="Tel"
            />
          </div>
          <div className="flex w-full flex-row justify-between items-center">
            <p className="flex flex-row gap-[15px] items-center font-black text-[#111110] font-darkerGrotesque-bold text-[20px] leading-[25px] mt-[20px] ">
              <img src={ThemeUtil.icon.gift_icon} alt="" />
              Add Discount Code
            </p>
            <BaseInput
              placeholder={"Input code"}
              containerStyle={{ margin: "15px 0", minHeight: "0px" }}
              inputContainerStyle={{ backgroundColor: "#fff", padding: "0" }}
              inputStyle={{ width: "100%", backgroundColor: "#fff" }}
              type="Tel"
            />
          </div>
        </div>
        <div>
          <div className="flex items-start gap-[20px] justify-start">
            <img
              src={ThemeUtil.image.pool_view1}
              className="w-[200px] h-[150px] rounded-[10px]"
              alt=""
            />
            <div className="flex flex-col gap-[15px] w-auto">
              <h1 className="text-[48px] w-[20rem] leading-[35px] text-[#18ACE8] font-darkerGrotesque-bold ">
                Bon Hotels
              </h1>
              <p
                className={
                  "flex items-center gap-1 lg:gap-2 text-[28px] leading-[35px] text-[#111110] font-darkerGrotesque-medium"
                }
              >
                <img
                  src={ThemeUtil.icon.blackMap}
                  className={
                    "text-blackColor w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                  }
                  alt={"black-map-pin-fill"}
                />
                Tempsite, Awka.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-9">
              <BaseInput
                //   placeholder={"Input your email address"}
                label={"How many nights"}
                labelStyle={{ fontSize: "20px", marginBottom: "24px" }}
                containerStyle={{
                  marginTop: "19px",
                  marginBottom: 0,
                  minHeight: 0,
                }}
                type="number"
              />
              <BaseInput
                //   placeholder={"Input your phone number"}
                label={"Number of rooms"}
                labelStyle={{ fontSize: "20px", marginBottom: "24px" }}
                containerStyle={{
                  marginTop: "19px",
                  marginBottom: 0,
                  minHeight: 0,
                }}
                type="number"
              />{" "}
              <BaseInput
                //   placeholder={"Input your phone number"}
                label={"Check In date"}
                labelStyle={{ fontSize: "20px", marginBottom: "24px" }}
                containerStyle={{
                  marginTop: "19px",
                  marginBottom: 0,
                  minHeight: 0,
                }}
                type="date"
              />{" "}
              <BaseInput
                //   placeholder={"Input your phone number"}
                label={"Check out date"}
                labelStyle={{ fontSize: "20px", marginBottom: "24px" }}
                containerStyle={{
                  marginTop: "19px",
                  marginBottom: 0,
                  minHeight: 0,
                }}
                type="date"
              />
            </div>
            <div className="w-full py-3 space-y-2 mt-3">
              <label className="label font-medium leading-[25px] text-[20px] mb-2 text-blackColor font-darkerGrotesque-bold ">
                Type of Room
              </label>
              <select
                className="rounded-[15px] bg-[#F6F6F6] font-medium leading-[25px] text-left mb-2 text-blackColor font-darkerGrotesque-bold  h-[72px] py-3 w-full focus:border-primary focus:outline-none pl-[1rem]"
                name="gender"
              >
                <option disabled selected>
                  -- Select --
                </option>
                <option value="male">Standard</option>
                <option value="female">SelfCon</option>
              </select>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between items-center">
            <h4 className="flex flex-row gap-[15px] items-center font-black text-[#111110] font-darkerGrotesque-bold text-[20px] leading-[25px] mt-[20px] ">
              Total Payable amount
            </h4>
            <span className="flex flex-row gap-[15px] items-center font-black text-[#18ACE8] font-darkerGrotesque-bold text-[36px] leading-[30px] mt-[20px] ">
              ₦40,000
            </span>
          </div>
          <div>
            {" "}
            <div className="flex flex-row items-center justify-between flex-wrap w-full mt-[7rem]">
              <BaseButton
                buttonStyle={{
                  fontSize: 16,
                  backgroundColor: "inherit",
                  border: "1.5px solid #111110",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: ThemeUtil.color.blackColor,
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "40%",
                  height: "65px",
                }}
              >
                <p>Pay at Hotel</p>
              </BaseButton>
              <BaseButton
                buttonStyle={{
                  fontSize: 16,
                  backgroundColor: "#18ACE8",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: ThemeUtil.color.blackColor,
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "40%",
                  height: "65px",
                }}
              >
                <p>Pay Now</p>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteBookingContent;
