import { PropertyDetailsImageSection } from "../../section/propertyDetails/PropertyDetailsImageSection.tsx";
import { PropertyDetailsSection } from "../../section/propertyDetails/PropertyDetailsSection.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { SectionTitleHeader } from "@/component/header/SectionTitleHeader.tsx";
import { BaseButton } from "@/component/button/BaseButton.tsx";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil.ts";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  PropertiesDataProps,
  PropertiesData,
} from "@/toolkit/data/nearYouData.ts";
import {
  recentlyUploadedData,
  RecentlyUploadedDataProps,
} from "@/toolkit/data/recentlyUploadedData.ts";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SheetRef } from "react-modal-sheet";
import CompletePaymentSheet from "@/component/bottom-sheet/CompletePaymentSheet";
import { ListOfPropertiesContent } from "./ListOfPropertiesContent.tsx";
import { BaseAvatar } from "./../../avatar/BaseAvatar";
import { BaseInput } from "@/component/input/BaseInput.tsx";
import { OtpInput } from "@/component/input/OtpInput.tsx";
import PaymentSideBar from "@/component/section/payForProperty/PaymentSideBar.tsx";
import PropertPaymentSheet from "@/component/bottom-sheet/PropertyPaymentBottomSheet.tsx";

export const PayForPropertyContent = () => {
  const [propertyData, setPropertyData] = useState<
    PropertiesDataProps | RecentlyUploadedDataProps
  >();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 700px)" });
  const [isSheetOpen, setSheetOpen] = useState(false);
  const ref = useRef<SheetRef>();

  const { propertyid } = useParams();
  const navigate = useNavigate();

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
  }, [propertyid, navigate]);

  const [otp, setOtp] = useState<string>("");
  const [tabNum, setTabNum] = useState(1);
  const [paymentType, setPaymentType] = useState("");

  function handlePaymentType(n: number, pType: string) {
    setTabNum(n);
    setPaymentType(pType);
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  }

  const handlePaymentSheet = () => {
    // if (!isMobileScreen) {
    //   navigate(
    //     RouterConstantUtil.routes.page.baseCompleteBookings + propertyId
    //   );
    // }else{
    // }
    setSheetOpen(true);
  };

  console.log("hfhfkhr", tabNum);

  return (
    <div className={"w-full h-auto mt-5"}>
      {/* @media(max-width:1200px)]:w-[90%] */}
      <div className="[ w-[90%] h-auto m-auto">
        <PaymentSideBar
          handlePaymentType={handlePaymentType}
          setOtp={setOtp}
          propertyData={propertyData}
          tabNum={tabNum}
          otp={otp}
          paymentType={paymentType}
        />
        <div className="[@media(min-width:700px)]:hidden">
          <BaseButton
            title={"Proceed Payment"}
            onClick={handlePaymentSheet}
            style={{
              background: ThemeUtil.color.blackColor,
              color: "white",
              fontFamily: "darkerGrotesque-bold, sans-serif",
              fontSize: 20,
            }}
            containerStyle={{
              marginTop: 20,
              width: "100%",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
      <PropertPaymentSheet
        myref={ref}
        isOpen={isSheetOpen}
        setOpen={setSheetOpen}
        handlePaymentType={handlePaymentType}
        tabNum={tabNum}
        paymentType={paymentType}
        otp={otp}
        setOtp={setOtp}
      />
    </div>
  );
};
