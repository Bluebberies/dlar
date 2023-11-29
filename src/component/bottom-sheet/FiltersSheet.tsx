import { ThemeUtil } from "@/util/ThemeUtil";
import { BaseAvatar } from "../avatar/BaseAvatar";
import { BaseButton } from "../button/BaseButton";
import BottomSheetLayout, {
  BottomSheetLayoutPropTypes,
} from "./BottomSheetLayout";
import { amountFilter } from "@/util/constants/generics";
import { BaseInput } from "../input/BaseInput";
import { FilterCheckbox } from "../checkbox/FilterCheckbox";

const FilterSheet = ({
  isOpen,
  setOpen,
  myref,
}: BottomSheetLayoutPropTypes) => {
  return (
    <BottomSheetLayout myref={myref} isOpen={isOpen} setOpen={setOpen}>
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
    </BottomSheetLayout>
  );
};

export default FilterSheet;
