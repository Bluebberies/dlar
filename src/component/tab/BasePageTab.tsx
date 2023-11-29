import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { ThemeUtil } from "../../util/ThemeUtil.ts";
import { FilterCard } from "../card/FilterCard.tsx";
// import Sheet from 'react-modal-sheet';
import Sheet, { SheetRef } from "react-modal-sheet";
import { FilterCheckbox } from "@/component/checkbox/FilterCheckbox";
import { BaseInput } from "@/component/input/BaseInput";
import { amountFilter } from "@/util/constants/generics.ts";
import { BaseButton } from "../button/BaseButton.tsx";
import FilterSheet from "../bottom-sheet/FiltersSheet.tsx";

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
          "max-[700px]:hidden mt-[10px] flex gap-28 max-[1000px]:gap-24 max-[900px]:gap-10 max-[850px]:gap-8 max-[800px]:gap-4 max-[800px]:flex-wrap w-full justify-center mb-4 base-page-space"
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
          "min-[700px]:hidden mt-[20px] flex gap-28 max-[1000px]:gap-24 max-[900px]:gap-10 max-[850px]:gap-8 max-[800px]:gap-4 max-[800px]:flex-wrap w-full justify-center mb-4"
        }
      >
        {/* <div className="flex w-full flex-wrap flex-row items-center gap-[5px]"> */}
        <div className="grid grid-col-3 xs:grid-cols-4 gap-[5px]">
          {propertyTypes.map((type, i) => (
            <BaseAvatar
              activeBg={"bg-[#18ACE8]"}
              mobileBg="bg-[#F2F2F2]"
              key={i}
              isActive={activePropertyTab == type}
              onClick={() => handlePropertyTabChange(type)}
              containerCLassName="rounded-[8px] max-[425px]:min-w-0 max-[425px]:py-[7px] max-[425px]:px-[10px] max-[425px]:h-auto"
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
            containerCLassName="max-[400px]:col-start-3 col-start-4 max-[400px]:row-start-3  row-start-2"
            containerStyle={{
              // marginLeft: 200,
              // gridColumn: "4",
              // gridRow: "2",
              minWidth: 0,
              // padding: "10px 9px",
              backgroundColor: "#FF6A28",
              marginLeft: "auto",
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
      {/* <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        disableDrag={false}
        // rootId="root"
        snapPoints={[700, 500]}
        initialSnap={1}
        style={{ zIndex: "10000000000" }}
      >
        <Sheet.Container style={{ zIndex: "10000000000" }}>
          <Sheet.Header />
          <Sheet.Content
            style={{ paddingBottom: ref.current?.y, zIndex: "10000000000" }}
          >
            <Sheet.Scroller draggableAt="both">
              <div className="flex flex-col items-center py-10">
                <h1 className="font-darkerGrotesque-bold text-[#111110] leading-[35px] text-[24px]">
                  More filters
                </h1>
                <div className="flex flex-col mt-5 items-center gap-[10px]">
                  <p className="font-darkerGrotesque-bold text-[#606060] leading-[20px] text-[20px]">
                    Type of property
                  </p>
                  <div className="grid grid-cols-2 gap-[1rem]">
                    <FilterCheckbox label={"All"} />
                    <FilterCheckbox label={"Hotel"} />
                    <FilterCheckbox label={"Hotel"} />
                    <FilterCheckbox label={"Penthouse"} />
                  </div>
                </div>
                <div className="flex flex-col mt-6 items-center gap-[10px]">
                  <p className="font-darkerGrotesque-bold text-[#606060] leading-[20px] text-[20px]">
                    Type of Servicing
                  </p>
                  <div className="grid grid-cols-2 gap-[1rem]">
                    <FilterCheckbox label={"All"} />
                    <FilterCheckbox label={"Unfurnishing"} />
                    <FilterCheckbox label={"Furnished"} />
                    <FilterCheckbox label={"Semi-furnished"} />
                  </div>
                </div>
                <BaseInput
                  containerStyle={{
                    width: "100%",
                    padding: "0px 2rem",
                  }}
                  placeholder="Ifite, Awka"
                  labelStyle={{
                    color: "#606060",
                    fontSize: "20px",
                    lineHeight: "20px",
                    fontWeight: 700,
                  }}
                  label="Location"
                />
                <div
                  className={
                    "w-full h-auto flex flex-col items-center justify-center gap-7 "
                  }
                >
                  <h1
                    className={
                      "font-darkerGrotesque-bold text-[20px] leading-[20px] text-[#606060]"
                    }
                  >
                    Price Range
                  </h1>
                  <div className={"flex items-center gap-2 justify-between"}>
                    <div className={"w-full flex flex-row items-center"}>
                      {amountFilter.map((item, i) => (
                        <BaseInput
                          key={i}
                          placeholder={item.placeholder}
                          containerStyle={{
                            // marginBottom: -30,
                            marginTop: 0,
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column-reverse",
                          }}
                          inputStyle={{
                            backgroundColor: "#fff",
                            border: "1.5px solid #D6D6D6",
                            borderRadius: "5px",
                            paddingLeft: "0px",
                            padding: "5px",
                          }}
                          inputContainerStyle={{
                            backgroundColor: "#fff",
                            width: "80%",
                            height: "45px",
                          }}
                          label={`${item.type} Price`}
                          labelStyle={{
                            fontSize: "20px",
                            lineHeight: "20px",
                            marginTop: "15px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "mt-3 w-full max-[1000px]:flex-wrap flex justify-center items-center "
                  }
                >
                  <BaseButton
                    onClick={() => setOpen(false)}
                    title={"Cancel"}
                    buttonStyle={{
                      backgroundColor: "white",
                      color: ThemeUtil.color.blackColor,
                      fontSize: 20,
                      // lineHeight: 20
                    }}
                    containerStyle={{
                      width: 150,
                      height: 60,
                    }}
                  />
                  <BaseAvatar
                    isActive={true}
                    containerStyle={{
                      backgroundColor: ThemeUtil.color.primaryColor,
                      width: 150,
                      height: 55,
                      borderRadius: 12,
                    }}
                    hoverScale={1}
                    hoverOpacity={0.7}
                  >
                    <div
                      className={
                        "h-full select-none w-full flex items-center justify-center"
                      }
                    >
                      <p
                        className={
                          "text-center text-white font-darkerGrotesque-bold text-[20px] leading-[20px]"
                        }
                      >
                        Apply (300)
                      </p>
                    </div>
                  </BaseAvatar>
                </div>
              </div>

            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setOpen(false)} />
      </Sheet> */}
      <FilterSheet myref={ref} isOpen={isOpen} setOpen={setOpen} />

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
