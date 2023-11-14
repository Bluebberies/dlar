import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { ThemeUtil } from "../../util/ThemeUtil.ts";
import { FilterCard } from "../card/FilterCard.tsx";
// import Sheet from 'react-modal-sheet';
import Sheet, { SheetRef } from 'react-modal-sheet';

export const BasePageTab = () => {
  const [filter, setFilter] = useState<boolean>(false);
  const [activePropertyTab, setActivePropertyTab] = useState<string>("All");
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef>();

  function handleFilter() {
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
    // setFilter(!filter);
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
        className={
          "max-[700px]:hidden mt-[30px] flex gap-28 max-[1000px]:gap-24 max-[900px]:gap-10 max-[850px]:gap-8 max-[800px]:gap-4 max-[800px]:flex-wrap w-full justify-center mb-20 base-page-space"
        }
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
          // onClick={()=>document.getElementById('my_modal_2').showModal()}
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

      <div
        className={
          "min-[700px]:hidden mt-[30px] flex gap-28 max-[1000px]:gap-24 max-[900px]:gap-10 max-[850px]:gap-8 max-[800px]:gap-4 max-[800px]:flex-wrap w-full justify-center mb-20"
        }
      >
        <div className="flex w-full flex-wrap flex-row items-center gap-[5px]">
          {propertyTypes.map((type, i) => (
            <BaseAvatar
              activeBg={"bg-[#18ACE8]"}
              mobileBg='bg-[#F2F2F2]'
              key={i}
              isActive={activePropertyTab == type}
              onClick={() => handlePropertyTabChange(type)}
            >
              <span
                className={`text-center ${
                  activePropertyTab == type
                    ? "text-[#FAFAFA]"
                    : "text-blackColor"
                } font-darkerGrotesque-bold`}
              >
                {type}
              </span>
            </BaseAvatar>
          ))}
          <BaseAvatar
            isActive={true}
            // onClick={handleFilter}
            onClick={() => setOpen(true)}
            // onClick={()=>document.getElementById('my_modal_2').showModal()}
            containerStyle={{
              // marginLeft: 200,
              minWidth: 0,
              padding: "10px 9px",
              backgroundColor: "#FF6A28",
              marginLeft: "auto"
            }}
          >
            <div className={"flex gap-3 items-center bg-[#] justify-center"}>
              <img
                src={ThemeUtil.icon.settingSliderWhite}
                className={"w-[24px] h-[24px]"}
                alt={"setting-slider"}
              />
              <span
                className={
                  "text-center text-[#fff] font-darkerGrotesque-bold text-[20px]"
                }
              >
                Filters
              </span>
            </div>
          </BaseAvatar>
        </div>
      </div>
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        disableDrag={false}
        rootId="root"
        snapPoints={[700, 500]}
        initialSnap={1}
      >
        <Sheet.Container>
           <Sheet.Header />
          <Sheet.Content style={{ paddingBottom: ref.current?.y }}>
            <Sheet.Scroller draggableAt="both">
              {/* Some content here that makes the sheet content scrollable */}
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setOpen(false)}/>
      </Sheet>

      <dialog id="my_modal_2" className="modal">
        <FilterCard />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* <AnimatePresence>
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
      </AnimatePresence> */}

      {/* {filter && <FilterCard />} */}
    </>
  );
};
