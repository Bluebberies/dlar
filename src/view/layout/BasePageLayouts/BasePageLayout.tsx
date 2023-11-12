import React from "react";
import { motion } from "framer-motion";
import { BasePageHeader } from "../../../component/header/BasePageHeaders/index.tsx";
import { BasePageTab } from "../../../component/tab/BasePageTab.tsx";
import { BasePageFooter } from "../../../component/footer/BasePageFooter.tsx";
import { DesktopBasePageLayout } from "./DesktopBasePageLayout.tsx";

export type BasePageLayoutProps = {
  children?: React.JSX.Element;
};
export const BasePageLayout = ({ children }: BasePageLayoutProps) => {
  return (
    <motion.div
      key="BaseLayout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <DesktopBasePageLayout children={children} />
      {/* <div className={"base-page-background relative min-h-screen"}>
        <div className={"w-[auto] m-auto"}>
          <BasePageHeader />
          <BasePageTab />
          {children}
        </div>
        <BasePageFooter />
      </div> */}
    </motion.div>
  );
};
