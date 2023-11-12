import { PropertyDisplayCard } from "../../card/PropertyDisplayCard.tsx";
import { PropertiesDataProps } from "../../../toolkit/data/nearYouData.ts";
import { ThemeUtil } from "../../../util/ThemeUtil.ts";
import { BasePagination } from "../../pagination/BasePagination.tsx";
import { CSSProperties } from "react";
import { RouterConstantUtil } from "../../../util/constant/RouterConstantUtil.ts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type ListOfPropertiesContentProps = {
  title: string;
  showSeeAll?: boolean;
  showPagination?: boolean;
  data: PropertiesDataProps[];
  containerStyle?: CSSProperties;
};
export const ListOfPropertiesContent = ({
  data,
  showSeeAll,
  showPagination,
  containerStyle,
  title,
}: ListOfPropertiesContentProps) => {
  const navigate = useNavigate();

  function handlePropertyNavigation(id: string) {
    navigate(RouterConstantUtil.routes.page.basePropertyDetails + `/${id}`);
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
    <div className={"w-full mt-20 "} style={containerStyle}>
      <div className={"flex items-center justify-between"}>
        <h1
          className={
            "text-[48px] leading-[35px] mb-0 text-blackColor font-darkerGrotesque-bold"
          }
        >
          {title}
        </h1>
        {showSeeAll && (
          <div className={"flex items-center gap-2"}>
            <span
              className={
                "text-[28px] leading-[35px] text-blackColor font-darkerGrotesque-bold"
              }
            >
              See all
            </span>
            <img src={ThemeUtil.icon.arrowRight} alt={"arrow"} />
          </div>
        )}
      </div>
      <motion.div
        variants={container}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
        className={
          "w-full mt-0 flex items-center gap-5 justify-between flex-wrap"
        }
      >
        {data.map((value, index) => (
          <motion.div variants={item} key={index}>
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
