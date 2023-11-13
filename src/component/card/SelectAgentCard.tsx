import { useState } from "react";
import { AgentCheckbox } from "../checkbox/AgentCheckbox.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";

export const SelectAgentCard = () => {
  const [selectedUserType, setSelectedUserType] = useState<string>("Agent");

  function handleAgentSelect(user: string) {
    
    setSelectedUserType(user);
    console.log("agent", selectedUserType);
  }

  // function handleSelectedUserStyle (user){
    
  // }

  // const style = {
  //   backgroundColor: "red"
  // }

  const users = [
    {
      user: "Agent",
      src: ThemeUtil.icon.agent,
    },
    { user: "Tenant", src: ThemeUtil.icon.tenant },
  ];

  return (
    <div className="flex gap-1 flex-col h-[auto] items-center w-[100%] rounded-[15px]">
      {/* <AgentCheckbox /> */}
      {users.map((item, i) => (
        <AgentCheckbox selected={item.user === selectedUserType} handleAgentSelect={() => handleAgentSelect(item.user)} key={i} title={item.user} avatar={item.src} />
      ))}
      {/* <AgentCheckbox title={"Agent"} avatar={ThemeUtil.icon.agent} />
      <AgentCheckbox title={"Tenant"} avatar={ThemeUtil.icon.tenant} /> */}
    </div>
  );
};
