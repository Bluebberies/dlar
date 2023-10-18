import React from "react";
import {BasePageHeader} from "../../component/header/BasePageHeader.tsx";
import {BasePageTab} from "../../component/tab/BasePageTab.tsx";
import {BasePageFooter} from "../../component/footer/BasePageFooter.tsx";

type BasePageLayoutProps = {
    children?: React.JSX.Element,

}
export const BasePageLayout = ({children}: BasePageLayoutProps) => {
  return(
      <div className={"base-page-background"}>
          <div className={"w-[1440px] m-auto"}>
              <BasePageHeader />
              <BasePageTab />
              {children}
          </div>
          <BasePageFooter />
      </div>
  )
}