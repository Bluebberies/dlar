import { PropertyDisplayCard } from "../../card/PropertyDisplayCard.tsx";
import { PropertiesDataProps } from "@/toolkit/data/nearYouData.ts";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import { BasePagination } from "../../pagination/BasePagination.tsx";
import { CSSProperties } from "react";
import { RouterConstantUtil } from "@/util/constant/RouterConstantUtil.ts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BasePageTab } from "@/component/tab/BasePageTab.tsx";

type ListOfPropertiesContentProps = {
  title: string;
  showSeeAll?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  data: PropertiesDataProps[];
  containerStyle?: CSSProperties;
  linkTo?: string
};
export const ListOfPropertiesContent = ({
  data,
  showSeeAll,
  showPagination,
  containerStyle,
  title,
  showFilters,
  linkTo,
}: ListOfPropertiesContentProps) => {
  const navigate = useNavigate();

  function handlePropertyNavigation(id: string) {
    navigate(RouterConstantUtil.routes.page.basePropertyDetails + `${id}`);
  }

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

  return (
    <div
      className={"w-full mt-20 max-[500px]: px-[8px] sm:px-[32px] md:px-[32px]"}
      style={containerStyle}
    >
      <div className={"flex items-center justify-between"}>
        <h1
          className={
            "text-[24px] md:text-[36px] leading-[35px] text-blackColor font-bold font-darkerGrotesque-bold"
          }
        >
          {title}
        </h1>
        {showSeeAll && (
          <div
            onClick={() => navigate(`${RouterConstantUtil.routes.page.baseFilteredPage}${linkTo}`)}
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
      <motion.div
        variants={container}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        className={"w-full mt-0 grid grid-cols-4 max-[1400px]:grid-cols-3 max-[1400px]:grid-cols-2 max-[425px]:flex justify-between flex-wrap"}
      >
        {data.slice(0, 8).map((value, index) => (
          <motion.div variants={item} key={index} className="m-auto w-full">
            <PropertyDisplayCard
              // key={index}
              onClick={() => handlePropertyNavigation(value.id)}
              item={value}
            />
          </motion.div>
        ))}
      </motion.div>
      {showPagination && <BasePagination />}
    </div>
  );
};
