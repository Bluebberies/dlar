import {createPortal} from "react-dom";
import {CSSProperties, ReactElement, useEffect} from "react";

export type BaseTeleportProps = {
    children?: ReactElement,
    containerStyle?: CSSProperties,
    show?: boolean,
}
export const BaseTeleport = ({children, containerStyle, show}:BaseTeleportProps ) => {
    const teleportDiv = document.getElementById("teleport")!



    useEffect(()=>{
        if (show){
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
            document.body.style.position = 'relative';
        }else {
            document.body.style.position = '';
            document.body.style.overflow = '';

        }
    }, [show])

  return createPortal(
      <div className={"absolute top-0 w-full h-full  z-[1000px]"}  style={{
          display: show ? "flex" : "none",
          background: "rgba(0,0,0,0.8)",
          ...containerStyle
      }}>
          {children}
      </div>,
      teleportDiv)
}