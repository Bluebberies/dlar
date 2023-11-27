import { CSSProperties, MouseEventHandler } from "react";
import { ThemeUtil } from "../../util/ThemeUtil.ts";

type SectionTitleHeaderProps = {
  title?: string;
  containerStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  containerClassName?: string;
  onClick?: MouseEventHandler;
  html?: string;
};
export const SectionTitleHeader = ({
  title,
  containerStyle,
  headerStyle,
  containerClassName,
  html,
}: SectionTitleHeaderProps) => {
  return (
    <div
      className={`${
        containerClassName ? containerClassName : ""
      } h-[80px] w-full  my-2`}
      style={{
        ...containerStyle,
      }}
    >
      {title && (
        <p
          className={
            "flex items-center justify-start rounded-2xl pl-8 w-full h-full text-[20px] font-darkerGrotesque-bold leading-[20px] font-bold"
          }
          style={{
            //   fontSize: "20px",
            backgroundColor: ThemeUtil.color.primaryColor,
            color: ThemeUtil.color.whiteColor,
            ...headerStyle,
          }}
        >
          {title}
        </p>
      )}
      {html && (
        <div dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      )}
    </div>
  );
};
