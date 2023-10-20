import {PropertyDisplayCard} from "../../card/PropertyDisplayCard.tsx";
import {BasePropertiesData} from "../../../toolkit/data/nearYouData.ts";
import {ThemeUtil} from "../../../util/ThemeUtil.ts";
import {BasePagination} from "../../pagination/BasePagination.tsx";
import {CSSProperties} from "react";
import {RouterConstantUtil} from "../../../util/constant/RouterConstantUtil.ts";
import {useNavigate} from "react-router-dom";

type ListOfPropertiesContentProps ={
    title: string,
    showSeeAll?: boolean,
    showPagination?: boolean,
    data: BasePropertiesData[],
    containerStyle?: CSSProperties
}
export const ListOfPropertiesContent = ({data, showSeeAll, showPagination, containerStyle, title}: ListOfPropertiesContentProps) => {
    const navigate = useNavigate()

    function handlePropertyNavigation() {
        navigate(RouterConstantUtil.routes.page.propertyDetails)
    }
  return(
      <div className={"w-full mt-20 "} style={containerStyle}>
          <div className={"flex items-center justify-between"}>
              <h1 className={"text-[48px] leading-[35px] mb-0 text-blackColor font-darkerGrotesque-bold"}>{title}</h1>
              {
                  showSeeAll && (
                      <div className={"flex items-center gap-2"}>
                          <span className={"text-[28px] leading-[35px] text-blackColor font-darkerGrotesque-bold"}>See all</span>
                          <img src={ThemeUtil.icon.arrowRight} alt={"arrow"}/>
                      </div>
                  )
              }

          </div>
            <div className={"w-full mt-0 flex items-center gap-5 justify-between flex-wrap"}>
                {
                    data.map((value, index)=>{
                        return(
                            <PropertyDisplayCard key={index} onClick={handlePropertyNavigation} item={value}  />
                        )
                    })
                }
            </div>
          {
              showPagination && (
                  <BasePagination />
              )
          }
      </div>
  )
}