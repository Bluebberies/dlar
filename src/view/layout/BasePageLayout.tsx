import React from "react";
import {BasePageHeader} from "../../component/header/BasePageHeader.tsx";

type BasePageLayoutProps = {
    children?: React.JSX.Element,

}
export const BasePageLayout = ({children}: BasePageLayoutProps) => {
  return(
      <div className={"base-page-background"}>
          <BasePageHeader />
          {children}
      </div>
  )
}