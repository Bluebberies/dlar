import {BaseInput} from "../input/BaseInput.tsx";
import  { useState} from "react";

type AgentCheckboxProps ={
    title: string,
    avatar: string
}
export const AgentCheckbox = ({title, avatar}: AgentCheckboxProps) => {
    const [checkbox, setCheckbox] = useState<boolean>()
    function handleCheck() {
        setCheckbox(!checkbox)
    }
  return(
      <div className={"flex justify-between items-center h-[80px] rounded-[10px] bg-grayColor_3 p-5 cursor-pointer mb-5 mt-5"} onClick={handleCheck}>
          <img src={avatar} className={" h-[60px]"} alt={"agent"}  />
          <span className={"-ml-64"}>{title}</span>
          <BaseInput type={"checkbox"} checked={checkbox}  className={"rounded w-full h-full"} />
      </div>
  )
}

AgentCheckbox.defaultProps = {
    title: "Agent",
    avatar: "/src/assets/icon/agent.svg",
}