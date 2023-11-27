import React, { useState } from "react";

type BookMarkFillableIconProps = {
  filledColor: string;
  borderColor: string;
  size: number;
};

const BookMarkFillableIcon = ({
  filledColor,
  borderColor,
  size,
}: BookMarkFillableIconProps) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
    // You can also perform additional actions here when the icon is clicked
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={isFilled ? filledColor : "none"}
      stroke={borderColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={handleClick}
    >
      <path d="M6 2l6 9l6-9" />
      <rect x="2" y="11" width="20" height="11" rx="2" ry="2" />
    </svg>
  );
};

export default BookMarkFillableIcon;
