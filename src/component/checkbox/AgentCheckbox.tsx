// import { BaseInput } from "../input/BaseInput.tsx";
import { MouseEventHandler, useState } from "react";
import { ThemeUtil } from "@/util/ThemeUtil.ts";

type AgentSelectProps = {
  title: string;
  avatar: string;
  selected: boolean;
  handleAgentSelect: MouseEventHandler;
};
export const AgentCheckbox = ({
  title,
  avatar,
  handleAgentSelect,
  selected,
}: AgentSelectProps) => {
  //   const [checkbox, setCheckbox] = useState<boolean>();
  //   function handleCheck() {
  //     setCheckbox(!checkbox);
  //   }
  console.log("gsgsg", selected, title);

  return (
    <div
      className={`hover:bg-[#e8e2e2] transition-all flex flex-row items-center gap-10 h-[10opx] w-[500px] max-[790px]:w-full  rounded-[10px] p-5 cursor-pointer mb-5 mt-5`}
      onClick={handleAgentSelect}
      style={{
        backgroundColor: selected? "#dfdada": "#f5f5f5"
      }}
    >
      <img
        src={avatar}
        className={" h-[60px] w-[60px] rounded-full"}
        alt={"avatar"}
      />
      <span className={"font-darkerGrotesque-bold text-[20px]"}>{title}</span>
      {/* <BaseInput
        type={"checkbox"}
        checked={checkbox}
        className={"rounded w-full h-full"}
      /> */}
    </div>
  );
};

AgentCheckbox.defaultProps = {
  title: "Agent",
  avatar: ThemeUtil.icon.agent,
};
