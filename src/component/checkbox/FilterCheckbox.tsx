import { BaseInput } from "../input/BaseInput.tsx";

type FilterCheckboxProps = {
  label: string;
};
export const FilterCheckbox = ({ label }: FilterCheckboxProps) => {
  return (
    <div className={"flex items-center h-[45px] gap-2"}>
      <div className="form-control">
        <label className="label cursor-pointer flex items-center h-[45px] gap-2">
          {/* <span className="label-text">Remember me</span> */}
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span
            className={
              "font-darkerGrotesque-bold text-[20px] leading-[20px] text-blackColor"
            }
          >
            {label}
          </span>
        </label>
      </div>
      {/* <BaseInput
        type={"checkbox"}
        className={"w-[24px] h-full"}
        containerStyle={{ minHeight: 0 }}
      /> */}
    </div>
  );
};
