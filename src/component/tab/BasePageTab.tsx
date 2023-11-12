import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ThemeUtil } from "../../util/ThemeUtil.ts";
import { FilterCard } from "../card/FilterCard.tsx";

export const BasePageTab = () => {
  const [filter, setFilter] = useState<boolean>(false);
  const [activePropertyTab, setActivePropertyTab] = useState<string>("All");

  function handleFilter() {
    setFilter(!filter);
  }

  const propertyTypes: string[] = [
    "All",
    "Hotels",
    "Lodges",
    "Apartment",
    "Selfcon",
    "Duplex",
  ];

  function handlePropertyTabChange(type: string) {
    setActivePropertyTab(type);
  }

  return (
    <>
      <div
        className={"flex gap-28 max-[1000px]:gap-24 max-[900px]:gap-10 max-[850px]:gap-8 max-[800px]:gap-4 max-[800px]:flex-wrap w-full justify-center mb-20 base-page-space"}
      >
        <div className="flex flex-row items-center justify-center gap-1 max-[900px]:gap-[2px]">
          {propertyTypes.map((type, i) => (
            <BaseAvatar
            key={i}
              isActive={activePropertyTab == type}
              onClick={() => handlePropertyTabChange(type)}
            >
              <span
                className={
                  "text-center text-blackColor font-darkerGrotesque-bold"
                }
              >
                {type}
              </span>
            </BaseAvatar>
          ))}
        </div>

        <BaseAvatar
          isActive={true}
          onClick={handleFilter}
          containerStyle={{
            // marginLeft: 200,
            minWidth: 150,
          }}
        >
          <div className={"flex gap-3 items-center justify-center"}>
            <img
              src={ThemeUtil.icon.settingSlider}
              className={"w-[24px] h-[24px]"}
              alt={"setting-slider"}
            />
            <span
              className={
                "text-center text-blackColor font-darkerGrotesque-bold text-[20px]"
              }
            >
              More Filters
            </span>
          </div>
        </BaseAvatar>
      </div>

      <AnimatePresence>
        {filter && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 10, duration: 0.1 }}
          >
            <FilterCard />
          </motion.div>
        )}
      </AnimatePresence>

      {/* {filter && <FilterCard />} */}
    </>
  );
};
