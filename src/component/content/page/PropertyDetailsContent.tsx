import { PropertyDetailsImageSection } from "../../section/propertyDetails/PropertyDetailsImageSection.tsx";
import { PropertyDetailsSection } from "../../section/propertyDetails/PropertyDetailsSection.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { SectionTitleHeader } from "@/component/header/SectionTitleHeader.tsx";
import { BaseButton } from "@/component/button/BaseButton.tsx";
import { RouterConstantUtil } from "@/util/constant/RouterConstantUtil.ts";
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
import CompletePaymentSheet from '@/component/bottom-sheet/CompletePaymentSheet';

export const PropertyDetailsContent = () => {
  const [propertyData, setPropertyData] = useState<
    PropertiesDataProps | RecentlyUploadedDataProps
  >();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 700px)" });
  const [isSheetOpen, setSheetOpen] = useState(false);
  const ref = useRef<SheetRef>();

  const { id: propertyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const allPropertyData = [...PropertiesData, ...recentlyUploadedData];
    const dataExist = allPropertyData.find((data) => data.id == propertyId);
    if (dataExist) {
      setPropertyData(dataExist);
    } else {
      navigate(RouterConstantUtil.routes.page.noPageFound, {
        replace: false,
      });
    }
  }, [propertyId, navigate]);

  const handleBookNow = () => {
    // if (!isMobileScreen) {
    //   navigate(
    //     RouterConstantUtil.routes.page.baseCompleteBookings + propertyId
    //   );
    // }
    console.log("gdgdg");
    
    setSheetOpen(true)
  };

  return (
    <div className={"w-full h-auto"}>
      <div className="[@media(max-width:1200px)]:w-[90%] w-[70%] h-auto m-auto">
        {/* <PropertyDescriptionSection /> */}

        <PropertyDetailsImageSection
          handleBookNow={handleBookNow}
          propertyData={propertyData}
        />
        <PropertyDetailsSection />
        <div
          className={"w-full h-full mt-[30px] [@media(min-width:700px)]:hidden"}
        >
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
          <div
            className={"flex items-center flex-col justify-center mt-[30px]"}
          >
            <img
              src={ThemeUtil.icon.agent}
              className={"w-[50px] rounded-[10px] h-[50px]"}
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
              "w-full p-[10px] h-[60px] bg-grayColor_6 mt-5 mb-5 flex items-center justify-center pl-2"
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
          <div className={"w-full flex items-center justify-center gap-2"}>
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
              "cursor-pointer text-center font-darkerGrotesque-bold text-[20px] w-full  leading-[25px] text-primaryColor  border-b border-b-primaryColor mt-5"
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
          <div className="flex flex-row flex-wrap justify-center gap-[50px] items-center">
            <img
              src={ThemeUtil.icon.facebook}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src={ThemeUtil.icon.whatsapp}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src={ThemeUtil.icon.twitter}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src={ThemeUtil.icon.telegram}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src={ThemeUtil.icon.dark_instagram}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>

          <div
            className={
              "h-[60px] flex items-center justify-end gap-2  mt-[10px] mb-10"
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

      <ListOfPropertiesContent
        title={"Similar searches"}
        data={PropertiesData}
        showPagination={true}
        showFilters={false}
        showAllProperties={true}
      />

      <CompletePaymentSheet myref={ref} isOpen={isSheetOpen} setOpen={setSheetOpen} />
    </div>
  );
};
