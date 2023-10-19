import {AgentCheckbox} from "../checkbox/AgentCheckbox.tsx";
import {ThemeUtil} from "../../util/ThemeUtil.ts";


export const SelectAgentCard = () => {


  return(
      <>
        <AgentCheckbox />
        <AgentCheckbox title={"Tenant"} avatar={ThemeUtil.icon.tenant} />
      </>
  )
}