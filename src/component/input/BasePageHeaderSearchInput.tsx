import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouterConstantUtil } from "../../util/constant/RouterConstantUtil.ts";

export const BasePageHeaderSearchInput = () => {
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
        "h-[52px] rounded-2xl w-[452px] border-2 border-[#C0C0C0] flex items-center gap-5 overflow-hidden "
      }
    >
      <Icon
        path={mdiMagnify}
        className={"h-[32px] w-[32px] ml-1 text-grayColor_2"}
      />
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={"What are you looking for..."}
        onKeyUp={(event) => handleKeyUp(event.key)}
        className={
          "w-full h-full font-darkerGrotesque-bold focus:outline-0 bg-inherit text-grayColor_2 text-[20px]"
        }
      />
    </div>
  );
};
