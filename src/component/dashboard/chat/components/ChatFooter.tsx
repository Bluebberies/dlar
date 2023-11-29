import { useMediaQuery } from "react-responsive";
import AttachmentIcon from "./icons/AttachmentIcon";
import EmojiIcon from "./icons/EmojiIcon";
import SendIcon from "./icons/SendIcon";
import VoiceNoteIcon from "./icons/VoiceNoteIcon";
import React from "react";
import { BaseInput } from "@/component/input/BaseInput";

type propTypes = {
  setInputIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ChatIconProps = {
  isMobile: boolean;
};

const ChatFooter = ({ setInputIsFocused }: propTypes) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="fixed bottom-0  bg-white right-0 md:py-2 w-full mx-auto my-0 rounded-full md:rounded-none md:px-0 overflow-x-hidden md:w-full left-0 lg:pl-96 z-0">
      <div className="flex justify-start items-center gap-1 px-4 md:px-8">
        <span className="cursor-pointer">
          <EmojiIcon isMobile={isMobile} />
        </span>
        <div className="w-full py-3 space-y-2">
          <input
            type="text"
            className="px-3 text-[16px] bg-inherit py-3 focus:outline-0 border-double border-[1px] border-primary rounded-full w-full text-grayColor_1 font-medium text-base md:text-[16px]"
            placeholder="Message"
            onFocus={() => setInputIsFocused(true)}
            onBlur={() => setInputIsFocused(false)}
          />
        </div>
        {/* <BaseInput
          onFocus={() => setInputIsFocused(true)}
          onBlur={() => setInputIsFocused(false)}
          placeholder="message..."
          labelStyle={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          containerStyle={{
            display: "flex",
            flexDirection: "column",
            minHeight: "0",
            width: "100%",
            height: "auto",
          }}
          inputStyle={{
            width: "100%",
            borderRadius: "10px",
            background: "rgba(232, 248, 255, 0.85)",
          }}
          labelClassName={"font-darkerGrotesque-medium text-[17px]"}
          inputClassName={
            "py-[10px] h-[60px] text-[20px] sm:h-auto lg:w-auto px-[3px]"
          }
          inputContainerStyle={{
            background: "rgba(232, 248, 255, 0.85)",
            width: "100%",
            paddingRight: "10px",
            height: "auto",
            // border: "2px solid #111110",
            // border-radius: 20px;
            border: " 2px solid rgba(192, 192, 192, 0.70)",
          }}
        /> */}

        <span className="cursor-pointer">
          <VoiceNoteIcon isMobile={isMobile} />
        </span>
        <span className="cursor-pointer">
          <AttachmentIcon isMobile={isMobile} />
        </span>
        <span className="cursor-pointer block p-2.5 bg-primary rounded-full">
          <SendIcon isMobile={isMobile} />
        </span>
      </div>
    </div>
  );
};

export default ChatFooter;
