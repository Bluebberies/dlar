import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../util/constants/RouterConstantUtil.ts";

type BasePageHeaderSearchInputProps = {
  isNavbarFixed?: boolean;
  placeholder?: string;
  classNames?: string;
};

export const BasePageHeaderSearchInput = ({
  isNavbarFixed,
  placeholder,
  classNames,
}: BasePageHeaderSearchInputProps) => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  function handleKeyUp(key: string) {
    console.log(search);
    if (key === "Enter" && search !== "") {
      navigate(RouterConstantUtil.routes.page.searchResult);
    }
  }
  return (
    <div
      className={
        "h-[52px] rounded-[20px] max-[700px]:w-[80%] w-[452px] border-2 border-[#C0C0C0] flex items-center gap-5 overflow-hidden "
      }
    >
    <Icon
      path={mdiMagnify}
      className={"h-[30px] w-[30px] ml-1 text-grayColor_2"}
    />
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={placeholder ?? "What are you looking for..."}
        // onKeyUp={(event) => handleKeyUp(event.key)}
        className={`w-full pr-4 h-full font-darkerGrotesque-bold focus:outline-0 bg-inherit text-grayColor_2 ${
          isNavbarFixed && "text-white"
        } text-[20px]`}
      />
    </div>
    // <div className="form-control">
    //   <label className="relative block">
    //     <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    //       {/* <SearchIcon /> */}
    //       <Icon
    //         path={mdiMagnify}
    //         className={"h-[32px] w-[32px] ml-1 text-grayColor_2"}
    //       />
    //     </span>
    //     <input
    //       type="text"
    //       placeholder={placeholder ?? "Search..."}
    //       className={`pr-2 py-3 rounded-badge pl-12 w-full font-semibold lg:max-w-[400px] focus:outline-none focus:border-primaryColor_2 ${classNames}`}
    //     />
    //   </label>
    // </div>
  );
};
