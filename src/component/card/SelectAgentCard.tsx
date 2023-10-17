import {AgentCheckbox} from "../checkbox/AgentCheckbox.tsx";


export const SelectAgentCard = () => {


  return(
      <>
        <AgentCheckbox />
        <AgentCheckbox title={"Tenant"} avatar={"/src/assets/icon/tenant.svg"} />
      </>
  )
}