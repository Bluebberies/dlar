import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import heroImage from "../../assets/image/hero-image.jpg";
import hero1 from "../../assets/image/hero1.jpg";
import WhiteChevronArrow from "../../assets/icon/white-chevron-round.svg";
import { cutSentence } from "./../../util/helper";

export const HomeHero = () => {
  return (
    <div
      className={
        "border h-[250px] max-[1000px]:h-[1000px] w-full mt-0 rounded-[12px] overflow-hidden relative"
      }
      style={{
        backgroundColor: "rgba(17, 17, 16, .7)",
      }}
    >
      <img
        src={hero1}
        className={
          // "absolute w-full max-[1100px]:top-[-150%] max-[1440px]:top-[-200%] max-[700px]:top-[-120%] max-[600px]:top-[-90%] top-[-300%] bg-center bg-no-repeat -z-[999]"
          "absolute w-full max-[1100px]:top-[-150%] max-[1440px]:top-[-200%] max-[700px]:top-[-120%] max-[600px]:top-[-90%] top-[-300%] bg-center bg-no-repeat opacity-[.7]"
        }
        alt={"hero image"}
      />
      <div
        className={
          "z-[999] translate-x-[-50%] absolute bottom-10 gap-4 flex flex-col justify-center items-center left-[50%]"
        }
      >
        <h1
          className={
            "text-[36px] leading-[35px] text-white font-darkerGrotesque-bold text-center"
          }
        >
          {cutSentence(
            "Ravers House Party Awka Ravers House Party Awka Ravers House indigo sso  Party Awka a"
          )}
        </h1>
        <BaseAvatar
          containerStyle={{
            // width: 240,
            borderRadius: 12,
            // height: 60,
            backgroundColor: "rgba(250, 250, 250, 0.4)",
          }}
          containerCLassName="w-[240px] h-[60px] max-[768px]:w-suto max-[768px]:h-[48px]"
          hoverScale={1.04}
          hoverOpacity={0.7}
        >
          <div className={"flex select-none items-center justify-center gap-5 h-full"}>
            <span
              className={
                "text-white text-[20px] leading-[35px] font-darkerGrotesque-bold"
              }
            >
              View Details
            </span>
            {/*<ChevronRoundArrowSvg className={"-scale-x-[1] "} stroke={"white"} />*/}
            <img
              src={WhiteChevronArrow}
              className={"w-[25px] h-[25px]"}
              alt={"chevron round"}
            />
          </div>
        </BaseAvatar>
      </div>
    </div>
  );
};
