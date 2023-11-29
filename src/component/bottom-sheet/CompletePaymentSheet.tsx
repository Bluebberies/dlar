import { ThemeUtil } from "@/util/ThemeUtil";
import { BaseAvatar } from "../avatar/BaseAvatar";
import { BaseButton } from "../button/BaseButton";
import BottomSheetLayout, {
  BottomSheetLayoutPropTypes,
} from "./BottomSheetLayout";
import { amountFilter } from "@/util/constants/generics";
import { BaseInput } from "../input/BaseInput";
import { FilterCheckbox } from "../checkbox/FilterCheckbox";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const CompletePaymentSheet = ({
  isOpen,
  setOpen,
  myref,
  snapPoints = [1000, 900],
}: BottomSheetLayoutPropTypes) => {
  const [currentPaymentView, setCurrentPaymentView] = useState(1);
  const ref1 = useRef<any>(null);

  const handleBackdropTap = () => [
    setOpen(false),
    setCurrentPaymentView(1),
    // setCurrentPaymentView()
    ref1.current?.scrollIntoView({ behavior: "smooth" }),
  ];

  const handleNext = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
    setCurrentPaymentView(2);
  };

  // const ref2 = useRef(null);

  return (
    <BottomSheetLayout
      snapPoints={snapPoints}
      myref={myref}
      isOpen={isOpen}
      setOpen={setOpen}
      handleBackdropTap={handleBackdropTap}
    >
      <div className="flex flex-col items-center">
        <h1
          ref={ref1}
          className="text-[24px] leading-[20px] text-[#111110] font-darkerGrotesque-bold "
        >
          Complete your Bookings at Bon Hotels.
        </h1>
        <p className="text-[16px] leading-[16px] font-black text-[#606060] font-darkerGrotesque-semiBold mt-[15px]">
          It only takes 30 seconds
        </p>
        {currentPaymentView == 1 && (
          <motion.div
            key="CompletePayment1"
            initial={{ opacity: 0, x: 1100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full m-auto flex flex-col items-center justify-center"
          >
            <div className="bg-[#F6F6F6] gap-[30px] flex rounded-[25px] flex-col w-[95%] h-auto my-[30px] py-[30px] px-[10px]">
              <div className="bg-[#fff] w-full h-auto flex rounded-[20px] py-[20px] px-[25px] flex-col">
                <BaseInput
                  placeholder={"Start with first name"}
                  label={"Full Name"}
                  labelStyle={{ fontSize: "20px" }}
                  containerStyle={{ margin: "10px 0" }}
                />
                <BaseInput
                  placeholder={"Input your email address"}
                  label={"Email"}
                  labelStyle={{ fontSize: "20px" }}
                  containerStyle={{ margin: "10px 0" }}
                  type="email"
                />
                <BaseInput
                  placeholder={"Input your phone number"}
                  label={"Phone Number"}
                  labelStyle={{ fontSize: "20px" }}
                  containerStyle={{ margin: "10px 0" }}
                  type="Tel"
                />
              </div>
              <div className="bg-[#fff] w-full h-auto flex rounded-[20px] py-[20px] px-[25px] flex-col">
                <FilterCheckbox
                  labelTextStyle={{ fontSize: "16px" }}
                  label={"This is a reservation for someones else"}
                />
                <BaseInput
                  placeholder={"Add any extra request"}
                  containerStyle={{ margin: "15px 0" }}
                  inputContainerStyle={{ height: "150px" }}
                  type="Tel"
                />
              </div>
              <div className="flex w-full flex-row justify-between items-center">
                <p className="flex flex-row gap-[5px] items-center font-black text-[#111110] font-darkerGrotesque-bold text-[16px] leading-[25px] mt-[20px] ">
                  <img src={ThemeUtil.icon.gift_icon} alt="" />
                  Add Discount Code
                </p>
                <BaseInput
                  placeholder={"Input code"}
                  containerStyle={{ margin: "15px 0", minHeight: "0px" }}
                  inputContainerStyle={{
                    backgroundColor: "#fff",
                    padding: "0",
                  }}
                  inputStyle={{ width: "100%", backgroundColor: "#fff" }}
                  type="Tel"
                />
              </div>
            </div>
            <div className=" mb-[7rem] flex flex-row items-center justify-between flex-wrap w-[90%] mt-[35px]">
              <BaseButton
                onClick={handleBackdropTap}
                buttonStyle={{
                  fontSize: 16,
                  backgroundColor: "inherit",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: ThemeUtil.color.blackColor,
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "45%",
                  height: "65px",
                }}
              >
                <p>Cancel</p>
              </BaseButton>
              <BaseButton
                onClick={handleNext}
                buttonStyle={{
                  fontSize: 16,
                  backgroundColor: "#18ACE8",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: "#fff",
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "45%",
                  height: "65px",
                }}
              >
                <p>Next</p>
              </BaseButton>
            </div>
          </motion.div>
        )}
        {currentPaymentView == 2 && (
          <motion.div
            key="CompletePayment2"
            initial={{ opacity: 0, x: 1100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full m-auto flex flex-col items-center justify-center"
          >
            <div className="flex items-start mt-[30px] gap-[20px] justify-start">
              <img
                src={ThemeUtil.image.pool_view1}
                className="w-[200px] h-[150px] rounded-[10px]"
                alt=""
              />
              <div className="flex flex-col gap-[2px] ">
                <h1 className="text-[24px] w-[8rem] leading-[24px] text-[#18ACE8] font-darkerGrotesque-bold ">
                  Bon Hotels
                </h1>
                <p
                  className={
                    "w-[8rem] flex items-center gap-1 lg:gap-2 text-[16px] leading-[35px] text-[#111110] font-darkerGrotesque-medium"
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
              <div className="grid grid-cols-2 gap-3 w-[90%] m-auto">
                <BaseInput
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
              <div className="w-[90%] m-auto py-3 space-y-2 mt-3">
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
            <div className="flex  w-[90%] m-auto flex-row justify-between items-center">
              <h4 className="flex flex-row gap-[15px] items-center font-black text-[#111110] font-darkerGrotesque-bold text-[20px] leading-[20px] mt-[20px] ">
                Total Payable amount
              </h4>
              <span className="flex flex-row gap-[15px] items-center font-black text-[#18ACE8] font-darkerGrotesque-bold text-[20px] leading-[30px] mt-[20px] ">
                ₦40,000
              </span>
            </div>

            <div className=" mb-[7rem] flex flex-row items-center justify-between flex-wrap w-[90%] mt-[35px]">
              <BaseButton
                onClick={handleBackdropTap}
                buttonStyle={{
                  fontSize: 16,
                  backgroundColor: "inherit",
                  border: "2px solid #111110",
                  fontFamily: "darkerGrotesque-bold, sans-serif",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: ThemeUtil.color.blackColor,
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "45%",
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
                  color: "#fff",
                }}
                hoverScale={1.1}
                hoverOpacity={0.7}
                containerStyle={{
                  width: "45%",
                  height: "65px",
                }}
              >
                <p>Pay Now</p>
              </BaseButton>
            </div>
          </motion.div>
        )}
      </div>
    </BottomSheetLayout>
  );
};

export default CompletePaymentSheet;
