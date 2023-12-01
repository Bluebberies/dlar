import { BaseAvatar } from "@/component/avatar/BaseAvatar";
import { ThemeUtil } from "@/util/ThemeUtil";

type PaymentPropertyImagesPropTypes = {
  propertyData: any;
};

const PaymentPropertyImages = ({
  propertyData,
}: PaymentPropertyImagesPropTypes) => {
  return (
    <div className="w-[60%] [@media(max-width:700px)]:w-full">
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
      <div
        className={
          "relative w-full [@media(max-width:500px)]:h-[250px] h-[500px] rounded-[10px] mt-5 overflow-hidden"
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
          "w-full [@media(max-width:500px)]:h-[63px]  h-[150px] mt-2 flex gap-0 justify-between items-center"
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
  );
};

export default PaymentPropertyImages;
