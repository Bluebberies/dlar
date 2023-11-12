import React from "react";
// import { motion } from "framer-motion";
import { BasePageHeader } from "../../../component/header/BasePageHeaders/index.tsx";
import { BasePageTab } from "../../../component/tab/BasePageTab.tsx";
import { BasePageFooter } from "../../../component/footer/BasePageFooter.tsx";
import { BasePageLayoutProps } from "./BasePageLayout.tsx";

export const DesktopBasePageLayout = ({ children }: BasePageLayoutProps) => {
  return (
    <div className={"base-page-background relative min-h-screen"}>
      <BasePageHeader />
      <BasePageTab />
      <div className={"w-[auto] m-auto"}>
        
        {children}
      </div>
      <BasePageFooter />
    </div>
  );
};
