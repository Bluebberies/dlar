import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";

type OtpInputProps = {
  numberOfInputs: number;
  onChangeText?: (text: string) => void;
};
export const OtpInput = ({ numberOfInputs, onChangeText }: OtpInputProps) => {
  const ref = useRef<any>(
    [...Array<any>(numberOfInputs)].map(() => createRef())
  );
  // const ref = useRef<HTMLInputElement>(null)
  const [inputBoxes, setInputBoxes] = useState<any[]>([]);
  const [input, setInput] = useState(inputBoxes.fill(""));

  function handleKeyUp(key: string, index: number) {
    const nextIndex = index + 1;
    if (key.length === 1 && nextIndex < inputBoxes.length) {
      ref.current[nextIndex].current.focus();
    }

    if (key === "Backspace" && index > 0) {
      ref.current[index - 1].current.focus();
      ref.current[index].current.clear;
    }
  }
  function handleOnChangeText(value: string, index: number) {
    setInput((prevState) => {
      const state = [...prevState];
      state[index] = value;
      return state;
    });
    console.log(input);
  }

  useLayoutEffect(() => {
    const inputs = [];
    for (let i = 1; i <= numberOfInputs; i++) {
      inputs.push(i);
    }
    setInputBoxes(inputs);
  }, [numberOfInputs]);

  useEffect(() => {
    if (onChangeText) {
      onChangeText(input.join(""));
    }
  }, [input, onChangeText]);
  return (
    <div
      className={
        "w-full h-[auto] flex max-[440px]:flex-wrap items-center justify-center gap-3 mt-5 mb-5"
      }
    >
      {inputBoxes?.map((_, index) => {
        return (
          <input
            type="number"
            key={index}
            ref={ref.current[index]}
            onKeyUp={(event) => handleKeyUp(event.key, index)}
            onChange={(event) => handleOnChangeText(event.target.value, index)}
            maxLength={1}
            className={
              "w-[80px] h-[70px] max-[425px]:w-[40px] max-[425px]:h-[40px] max-[850px]:w-[60px] max-[850px]:h-[60px]focus:outline-0 text-center border-[3px] border-grayColor_4 rounded-[4px]"
            }
          />
        );
      })}
    </div>
  );
};

OtpInput.defaultProps = {
  numberOfInputs: 5,
};
