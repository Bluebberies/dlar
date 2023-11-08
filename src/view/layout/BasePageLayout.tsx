import React from "react";
import { motion } from "framer-motion";
import { BasePageHeader } from "../../component/header/BasePageHeader.tsx";
import { BasePageTab } from "../../component/tab/BasePageTab.tsx";
import { BasePageFooter } from "../../component/footer/BasePageFooter.tsx";

type BasePageLayoutProps = {
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
      <div className={"base-page-background relative min-h-screen"}>
        <div className={"w-[1440px] m-auto"}>
          <BasePageHeader />
          <BasePageTab />
          {children}
        </div>
        <BasePageFooter />
      </div>
    </motion.div>
  );
};
