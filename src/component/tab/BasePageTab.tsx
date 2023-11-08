import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ThemeUtil } from "../../util/ThemeUtil.ts";
import { FilterCard } from "../card/FilterCard.tsx";

export const BasePageTab = () => {
  const [filter, setFilter] = useState<boolean>(false);

  function handleFilter() {
    setFilter(!filter);
  }

  return (
    <>
      <div
        className={
          "flex gap-1 w-full justify-center mt-10 mb-20 base-page-space"
        }
      >
        <BaseAvatar isActive={true}>
          <span
            className={"text-center text-blackColor font-darkerGrotesque-bold"}
          >
            All
          </span>
        </BaseAvatar>
        <BaseAvatar isActive={true}>
          <span
            className={"text-center text-blackColor font-darkerGrotesque-bold"}
          >
            Lodges
          </span>
        </BaseAvatar>
        <BaseAvatar isActive={false}>
          <span
            className={"text-center text-blackColor font-darkerGrotesque-bold"}
          >
            Apartment
          </span>
        </BaseAvatar>
        <BaseAvatar isActive={false}>
          <span
            className={"text-center text-blackColor font-darkerGrotesque-bold"}
          >
            Selfcon
          </span>
        </BaseAvatar>
        <BaseAvatar isActive={false}>
          <span
            className={"text-center text-blackColor font-darkerGrotesque-bold"}
          >
            Duplex
          </span>
        </BaseAvatar>
        <BaseAvatar isActive={false}>
          <span
            className={"text-center text-blackColor font-darkerGrotesque-bold"}
          >
            pent House
          </span>
        </BaseAvatar>
        <BaseAvatar isActive={false}>
          <span
            className={"text-center text-blackColor font-darkerGrotesque-bold"}
          >
            Bungalow
          </span>
        </BaseAvatar>

        <BaseAvatar
          isActive={true}
          onClick={handleFilter}
          containerStyle={{
            marginLeft: 200,
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
            animate={{ height: "auto" ,opacity: 1 }}
            exit={{ height: 0,opacity: 0 }}
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
