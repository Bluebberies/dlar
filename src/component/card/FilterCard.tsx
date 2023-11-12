import { BaseButton } from "../button/BaseButton.tsx";
import { FilterCheckbox } from "../checkbox/FilterCheckbox.tsx";
import { BaseInput } from "../input/BaseInput.tsx";
import { BaseAvatar } from "../avatar/BaseAvatar.tsx";
import { ThemeUtil } from "../../util/ThemeUtil.ts";
import { SectionTitleHeader } from "../header/SectionTitleHeader.tsx";
import { propertyFilters } from "../../toolkit/data/propertyFilters.ts";

export const FilterCard = () => {
  const amountFilter = [
    {
      type: "Minimun",
      placeholder: "1000",
    },
    {
      type: "Maximum",
      placeholder: "400000",
    },
  ];
  return (
    <div className={"m-10 mb-10 "}>
      <SectionTitleHeader
        title={"More Filers"}
        containerStyle={{
          width: 300,
          height: 60,
        }}
        headerStyle={{ justifyContent: "center", paddingLeft: "0" }}
      />
      {/* <div className={"flex h-[195px] mb-5"}> */}
      <div className={"grid grid-cols-3 max-[860px]:grid-cols-2 h-[auto]"}>
        {propertyFilters.map((obj) => (
          <div className={"w-full h-full mt-[60px]"}>
            <h1
              className={
                "font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"
              }
            >
              {obj.title}
            </h1>
            <div className={"flex items-center justify-between mt-4"}>
              <div className={"w-full grid grid-cols-2"}>
                {obj.items.map((cbox) => (
                  <FilterCheckbox label={cbox} />
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className={"flex h-[250px] max-[1250px]:flex-wrap mt-[60px] gap-12"}>
          <div className={"w-full h-auto "}>
            <h1
              className={
                "font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"
              }
            >
              Price Range
            </h1>
            <div className={"flex items-center gap-2 justify-between"}>
              <div className={"w-full flex flex-row items-center"}>
                {amountFilter.map((item) => (
                  <BaseInput
                    placeholder={item.placeholder}
                    containerStyle={{
                      marginBottom: -30,
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
                      width: "180px",
                      height: "45px",
                    }}
                    label={`${item.type} Price`}
                    labelStyle={{ fontSize: "20px", lineHeight: "20px" }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={"w-full h-full "}>
            <h1
              className={
                "font-darkerGrotesque-bold text-[24px] leading-[20px] text-grayColor_1"
              }
            >
              Location
            </h1>
            <BaseInput
              placeholder={"Ifite, Awka"}
              containerStyle={{
                marginBottom: -30,
                marginTop: 16,
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
                width: "400px",
                height: "45px",
              }}
            />
          </div>
        </div>
      </div>
      <div className={"w-full flex justify-end items-center "}>
        <BaseAvatar
          isActive={true}
          containerStyle={{
            backgroundColor: ThemeUtil.color.primaryColor,
            width: 200,
            height: 60,
            borderRadius: 12,
          }}
          hoverScale={1}
          hoverOpacity={0.7}
        >
          <div className={"h-full select-none w-full flex items-center justify-center"}>
            <p
              className={
                "text-center text-white font-darkerGrotesque-bold text-[20px] leading-[20px]"
              }
            >
              Apply
              <span className={"ml-5"}>(300)</span>
            </p>
          </div>
        </BaseAvatar>
        <BaseButton
          title={"Cancel"}
          buttonStyle={{
            backgroundColor: "white",
            color: ThemeUtil.color.blackColor,
            fontSize: 20,
            // lineHeight: 20
          }}
          containerStyle={{
            width: 200,
            height: 60,
          }}
        />
      </div>
    </div>
  );
};
