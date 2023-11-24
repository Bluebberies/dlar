import { PropertyDisplayCard } from "../../card/PropertyDisplayCard.tsx";
import { PropertiesDataProps } from "@/toolkit/data/nearYouData.ts";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { BasePagination } from "../../pagination/BasePagination.tsx";
import { CSSProperties, useEffect, useState } from "react";
import { RouterConstantUtil } from "@/util/constant/RouterConstantUtil.ts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BasePageTab } from "@/component/tab/BasePageTab.tsx";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { PrevSliderArrow, NextSliderArrow } from "./SliderArrows.tsx";
import { NextSliderArrow, PrevSliderArrow } from "./SliderArrows.tsx";

type ListOfPropertiesContentProps = {
  title: string;
  showSeeAll?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  data: PropertiesDataProps[];
  containerStyle?: CSSProperties;
  linkTo?: string;
  isSlider?: boolean;
};

export const ListOfPropertiesContent = ({
  data,
  showSeeAll,
  showPagination,
  containerStyle,
  title,
  showFilters,
  linkTo,
  isSlider = false,
}: ListOfPropertiesContentProps) => {
  const [spliceDigits, setSpliceDigits] = useState(8);

  const isBigScreen = useMediaQuery({ query: "(max-width: 1220px)" });
  const isMedium1 = useMediaQuery({ query: "(max-width: 700px)" });
  const isSmall1 = useMediaQuery({ query: "(max-width: 580px)" });
  const isSmall2 = useMediaQuery({ query: "(max-width: 380px)" });

  const isSpliceChangeScreen1 = useMediaQuery({ query: "(max-width: 1400px)" });
  const isSpliceChangeScreen2 = useMediaQuery({ query: "(max-width: 565px)" });

  const navigate = useNavigate();

  function handlePropertyNavigation(id: string) {
    navigate(RouterConstantUtil.routes.page.basePropertyDetails + `${id}`);
  }

  useEffect(() => {
    if (isSpliceChangeScreen1) {
      setSpliceDigits(6);
    }
    if (isSpliceChangeScreen2) {
      setSpliceDigits(4);
    }
  }, [isSpliceChangeScreen2, isSpliceChangeScreen1]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -1000 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 1000 },
  };

  // isSmall1 ? 1 :

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmall2? 1: isMedium1 ? 2 : isBigScreen ? 3 : 4,
    slidesToScroll: isSmall1 ? 1 : 2,
    nextArrow: <NextSliderArrow />,
    prevArrow: <PrevSliderArrow />,
  };

  return (
    <div
      className={"w-full m-auto flex flex-col max-w-[100rem] mt-5 max-[500px]: px-[8px] sm:px-[32px] md:px-[32px]"}
      style={containerStyle}
    >
      <div
        className={
          "max-[860px]:px-[5%] px-[4%] py-8 flex items-center justify-between"
        }
      >
        <h1
          className={
            "text-[24px] md:text-[36px] leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold"
          }
        >
          {title}
        </h1>
        {showSeeAll && (
          <div
            onClick={() =>
              navigate(
                `${RouterConstantUtil.routes.page.baseFilteredPage}${linkTo}`
              )
            }
            className={"flex items-center gap-2 cursor-pointer"}
          >
            <span
              className={
                "text-[14px] md:text-[28px] leading-[16px] md:leading-[35px] text-blackColor font-darkerGrotesque-medium md:font-darkerGrotesque-bold"
              }
            >
              See all
            </span>
            <img
              src={ThemeUtil.icon.arrowRight}
              alt={"arrow"}
              className="max:[700px]:w-[20px] max:[700px]:h-[20px]"
            />
          </div>
        )}
      </div>
      {showFilters && <BasePageTab />}
      {isSlider && (
        <motion.div
          variants={container}
          viewport={{ once: true }}
          whileInView="show"
          initial="hidden"
          className={
            // max-[425px]:flex
            // "w-full mt-0 grid grid-cols-4 max-[1400px]:grid-cols-3 display_property_grid_mobile max-[565px]:grid-cols-2 justify-between flex-wrap"
            "w-full mt-0 display max-[565px]:grid-cols-2 justify-between flex-wrap"
          }
        >
          <Slider {...settings}>
            {data.slice(0, spliceDigits).map((value, index) => (
              <motion.div variants={item} key={index} className="m-auto w-full">
                <PropertyDisplayCard
                  // key={index}
                  isSlider={isSlider}
                  onClick={() => handlePropertyNavigation(value.id)}
                  item={value}
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      )}

      {!isSlider && (
        <motion.div
          variants={container}
          viewport={{ once: true }}
          whileInView="show"
          initial="hidden"
          className={
            // max-[425px]:flex
            "w-full mt-0 grid grid-cols-4 max-[1400px]:grid-cols-3 display_property_grid_mobile max-[565px]:grid-cols-2 justify-between flex-wrap"
            // "w-full mt-0 display max-[565px]:grid-cols-2 justify-between flex-wrap"
          }
        >
          {data.slice(0, spliceDigits).map((value, index) => (
            <motion.div variants={item} key={index} className="m-auto w-full">
              <PropertyDisplayCard
                // key={index}
                isSlider={isSlider}
                onClick={() => handlePropertyNavigation(value.id)}
                item={value}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {showPagination && <BasePagination />}
    </div>
  );
};
