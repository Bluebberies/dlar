import { PropertyDisplayCard } from "../../card/PropertyDisplayCard.tsx";
import { PropertiesDataProps } from "@/toolkit/data/nearYouData.ts";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { BasePagination } from "../../pagination/BasePagination.tsx";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil.ts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BasePageTab } from "@/component/tab/BasePageTab.tsx";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextSliderArrow, PrevSliderArrow } from "./SliderArrows.tsx";
import Pagination from "@/util/customhooks/Pagination";

let PageSize = 12;

type ListOfPropertiesContentProps = {
  title: string;
  showSeeAll?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  data: PropertiesDataProps[];
  containerStyle?: CSSProperties;
  linkTo?: string;
  isSlider?: boolean;
  showAllProperties?: boolean;
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
  showAllProperties = false,
}: ListOfPropertiesContentProps) => {
  const [spliceDigits, setSpliceDigits] = useState(8);
  // console.log("hhdhd", data.length);

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
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -1000 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 1000 },
  };

  const item2 = {
    // hidden: { opacity: 0},
    // show: { opacity: 1},
    // exit: {opacity: 0}
  };

  // isSmall1 ? 1 :

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmall2 ? 1 : isMedium1 ? 2 : isBigScreen ? 3 : 4,
    slidesToScroll: isSmall1 ? 1 : 2,
    nextArrow: <NextSliderArrow />,
    prevArrow: <PrevSliderArrow />,
  };
  false;

  const [currentPage, setCurrentPage] = useState(1);

  const currentPropertyData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // console.log("gagagag", data.slice(firstPageIndex, lastPageIndex));

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  // useEffect(() => {
  //   console.log("currentPropertyData", currentPropertyData);
  // }, [currentPropertyData]);

  return (
    <div
      className={
        "w-full m-auto flex flex-col max-w-[100rem] mt-2 max-[500px]: px-[8px] sm:px-[32px] md:px-[32px]"
      }
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
            className={
              "hover:scale-[1.1] transition-[.2s] flex items-center gap-2 cursor-pointer"
            }
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
          {showAllProperties &&
            currentPropertyData.map((value, index) => (
              <motion.div
                variants={item2}
                key={index}
                className="m-auto w-full"
              >
                <PropertyDisplayCard
                  // key={index}
                  isSlider={isSlider}
                  onClick={() => handlePropertyNavigation(value.id)}
                  item={value}
                />
              </motion.div>
            ))}
          {!showAllProperties &&
            data
              // .slice(0, showAllProperties ? undefined : spliceDigits)
              .slice(0, spliceDigits)
              .map((value, index) => (
                <motion.div
                  variants={item}
                  key={index}
                  className="m-auto w-full"
                >
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

      {showAllProperties && (
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      )}

      {/* {showPagination && <BasePagination />} */}
    </div>
  );
};
