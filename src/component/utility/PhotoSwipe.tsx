import {BaseTeleport} from "../teleport/BaseTeleport.tsx";
import Icon from "@mdi/react";
import {mdiClose, mdiMagnifyPlusOutline} from "@mdi/js";
import {useState} from "react";

type PhotoSwipeProps ={
    show?: boolean,
    onClose?: ()=> void,
    data: string[]
}
export const PhotoSwipe = ({show, onClose, data}: PhotoSwipeProps) => {
    const [zoom, setZoom] = useState<boolean>()
    
    function handleZoom() {
        setZoom(!zoom)
    }
    console.log(data[0])
  return(
      <BaseTeleport
          show={show}
      >
          <div className={"w-full h-full"}>
              <div className={"w-full flex items-center p-[25px] justify-between"}>
                  <span className={"text-[20px] text-white font-darkerGrotesque-bold"}>1/1</span>
                  <div className={"flex items-center gap-4"}>
                      <div onClick={handleZoom}>
                          <Icon path={mdiMagnifyPlusOutline} className={"w-[30px] text-white h-[30px] cursor-pointer"} />
                      </div>
                      <div onClick={onClose}>
                          <Icon path={mdiClose} className={"w-[30px] h-[30px] text-white cursor-pointer"}  />
                      </div>
                  </div>
              </div>

              <div className={"w-[30%] h-[30%] m-auto mt-20"}>
                  <img src={data[0]} alt={"image"} className={`w-full h-full ${zoom ? "scale-100" : "scale-150"}`}  />
              </div>
          </div>
      </BaseTeleport>
  )
}