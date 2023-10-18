import {BaseInput} from "../input/BaseInput.tsx";

type FilterCheckboxProps = {
    label: string
}
export const FilterCheckbox = ({label}: FilterCheckboxProps) => {
  return(
      <div className={"flex items-center h-[45px] gap-2"}>
          <BaseInput type={"checkbox"} className={"w-[24px] h-full"} />
          <span className={"font-darkerGrotesque-bold text-[20px] leading-[20px] text-blackColor"}>{label}</span>
      </div>
  )
}