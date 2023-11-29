import { useEffect, useState } from "react";
import { BaseAvatar } from "@/component/avatar/BaseAvatar";
import { ThemeUtil } from "@/util/ThemeUtil";
import WhiteChevronArrow from "@/assets/icon/white-chevron-round.svg";
import { useNavigate } from "react-router-dom";
import { RouteUtil } from "@/util/RouteUtil";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const SlideImg1 = () => (
  <img
    // style={{ maxWidth: "100%", height: "100%" }}
    className="h-[100%] w-auto"
    src={ThemeUtil.image.ref_person1}
    alt="ref"
  />
);
const SlideImg2 = () => (
  <img
    // style={{ maxWidth: "100%", height: "100%" }}
    className="h-[100%] w-auto"
    src={ThemeUtil.image.ref_person2}
    alt="ref"
  />
);
const SlideImg3 = () => (
  <img
    // style={{ maxWidth: "100%", height: "100%" }}
    className="h-[100%] w-auto"
    src={ThemeUtil.image.ref_person3}
    alt="ref"
  />
);

const slideImgcomponents = [SlideImg1, SlideImg2, SlideImg3];

const ReferAndWinSection = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex: number) => (prevIndex + 1) % slideImgcomponents.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const CurrentComponent = slideImgcomponents[currentSlideIndex];

  return (
    <div className="mt-[15px] h-[200px] md:h-[400px] rounded-[12px] flex flex-row w-full items-center justify-between md:px-[100px] lg:px-[220px] bg-[linear-gradient(180deg,#A9F5FF_0%,rgba(173,127,219,0.22)_100%)]">
      <div className="transition-[.2s] lex flex-col gap-2 md:gap-5 ml-[25px] md:ml-0">
        <h3
          className={
            "text-[18px] md:hidden leading-[14px] text-[#111110] font-darkerGrotesque-bold font-bold"
          }
        >
          <span className="text-[#fff]">D</span>welar
        </h3>

        <h3
          className={
            "md:hidden  text-[28px] leading-[28px] text-[#fff] font-darkerGrotesque-black font-black"
          }
        >
          Refer and Earn
        </h3>

        <h2
          className={
            "hidden md:flex  text-[30px] leading-[45px] text-white font-darkerGrotesque-bold"
          }
        >
          Have you heard of the
        </h2>
        <h3
          className={
            "hidden md:flex text-[48px] leading-[45px] text-[#111110] font-darkerGrotesque-black font-black"
          }
        >
          <span className="text-[#18ACE8]">D</span>welar Refer and Earn{" "}
        </h3>
        <p
          className={
            "text-[14px] w-[187px] md:w-auto md:text-[20px] leading-[18px] md:leading-[35px] text-[#111110] font-darkerGrotesque-bold "
          }
        >
          Refer your friends and earn Up to 500Naira on any Sign up
        </p>
        <BaseAvatar
          containerStyle={{
            // width: "200px",
            // height: "55px",
            borderRadius: 12,
            // height: 60,
            backgroundColor: "#18ACE8",
            // padding: "10px",
          }}
          containerCLassName="px-[5px] w-[10px] md:w-[200px] h-[40px] md:h-[55px] py-[10px] sm:p-[10px]"
          hoverScale={1.04}
          hoverOpacity={0.7}
          onClick={() => navigate(RouterConstantUtil.routes.page.referrals)}
        >
          <div
            className={
              "flex select-none items-center justify-center gap-[10px] h-full"
            }
          >
            <span
              className={
                "text-white text-[13px] sm:text-[20px] leading-3 sm:leading-[35px] font-darkerGrotesque-bold"
              }
            >
              Refer Now
            </span>
            {/*<ChevronRoundArrowSvg className={"-scale-x-[1] "} stroke={"white"} />*/}
            <img
              src={WhiteChevronArrow}
              className={"w-[20px] sm:w-[25px] h-[20px] sm:h-[25px]"}
              alt={"chevron round"}
            />
          </div>
        </BaseAvatar>
      </div>
      <div
        className="h-full"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textSizeAdjust: "auto",
        }}
      >
        {currentSlideIndex === 0 ? (
          <Slide
            direction="right"
            triggerOnce={true}
            className="h-[100%] w-auto"
          >
            <CurrentComponent />
          </Slide>
        ) : currentSlideIndex === 1 ? (
          <Fade triggerOnce={true} className="h-[100%] w-auto">
            <CurrentComponent />
          </Fade>
        ) : (
          <Zoom triggerOnce={true} className="h-[100%] w-auto">
            <CurrentComponent />
          </Zoom>
        )}
        {/* <Slide direction="right" className="h-[100%] w-auto">
          <img
            // style={{ maxWidth: "100%", height: "100%" }}
            className="h-[100%] w-auto"
            src={ThemeUtil.image.ref_person1}
            alt="ref"
          />
        </Slide> */}
      </div>
    </div>
  );
};

export default ReferAndWinSection;
