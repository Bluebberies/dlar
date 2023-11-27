import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { BasePageHeader } from "@/component/header/BasePageHeaders/index.tsx";
import { BasePageTab } from "@/component/tab/BasePageTab.tsx";
import { BasePageFooter } from "@/component/footer/BasePageFooter.tsx";
import { DesktopBasePageLayout } from "./DesktopBasePageLayout.tsx";
import { useNavigate } from "react-router-dom";
import { ThemeUtil } from "@/util/ThemeUtil.ts";

export type BasePageLayoutProps = {
  children?: React.JSX.Element;
  filterPage?: boolean;
  headerNavStyles?: CSSProperties;
  isBgLight?: boolean;
  showHeaderBg?: boolean;
  hideHamburger?: boolean;
  showBackButton?: boolean;
  hideLogo?: boolean;
  baseLayoutStyles?: CSSProperties;
  backButtonStyles?: CSSProperties;
  backButtonClassName?: string;
  backButtonText?: string;
};
export const BasePageLayout = ({
  children,
  filterPage = false,
  headerNavStyles,
  isBgLight,
  showHeaderBg,
  hideHamburger,
  hideLogo,
  showBackButton = false,
  baseLayoutStyles,
  backButtonStyles,
  backButtonClassName,
  backButtonText
}: BasePageLayoutProps) => {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  return (
    <motion.div
      key="BaseLayout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* <DesktopBasePageLayout children={children} /> */}
      <div className={"base-page-background relative min-h-screen"}>
        <div className={"w-[auto] m-auto relative"} style={baseLayoutStyles}>
          <BasePageHeader
            filterPage={filterPage}
            headerNavStyles={headerNavStyles}
            isBgLight={isBgLight}
            showHeaderBg={showHeaderBg}
            hideHamburger={hideHamburger}
            hideLogo={hideLogo}
          />
          {showBackButton && (
            <div
              className={`mt-3 transition-[.2s] pl-[32px] ${backButtonClassName}`}
              style={backButtonStyles}
            >
              <div
                onClick={handleBack}
                className="flex hover:text-[#18ACE8] tems-center gap-3  cursor-pointer w-fit "
              >
                <img src={ThemeUtil.icon.arrowLeft} alt={"arrow left"} />
                <span
                  className={
                    "text-[20px] text-[#111110] leading-[35px] font-darkerGrotesque-bold"
                  }
                >
                  {backButtonText || "Back"}
                </span>
              </div>
            </div>
          )}
          {/* <BasePageTab /> */}
          {children}
        </div>
        <BasePageFooter />
      </div>
    </motion.div>
  );
};
