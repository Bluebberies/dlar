import { IconProps } from "../../types/icon.interface";

const NotificationIcon = ({ isActive, color = "#fff" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_1506_8727)">
        <path
          d="M12.9473 22.852C13.3673 22.8424 13.7703 22.6845 14.085 22.4063C14.3998 22.1281 14.6061 21.7476 14.6673 21.332H11.1606C11.2236 21.7589 11.4395 22.1484 11.7682 22.428C12.0968 22.7076 12.5159 22.8583 12.9473 22.852Z"
          fill={isActive ? "#18ACE8" : "#111110"}
        />
        <path
          d="M22.8471 18.7536L22.6205 18.5536C21.9774 17.9807 21.4146 17.3236 20.9471 16.6003C20.4366 15.602 20.1306 14.5117 20.0471 13.3936V10.1003C20.0444 9.70023 20.0088 9.3011 19.9405 8.90693C18.8112 8.67482 17.7969 8.05961 17.0691 7.16545C16.3414 6.27129 15.945 5.15312 15.9471 4.00026V3.58026C15.2511 3.23772 14.5032 3.01247 13.7338 2.91359V2.07359C13.7338 1.83755 13.64 1.61118 13.4731 1.44427C13.3062 1.27736 13.0798 1.18359 12.8438 1.18359C12.6078 1.18359 12.3814 1.27736 12.2145 1.44427C12.0476 1.61118 11.9538 1.83755 11.9538 2.07359V2.94693C10.2309 3.18996 8.65418 4.04809 7.51462 5.36288C6.37505 6.67768 5.74962 8.36035 5.7538 10.1003V13.3936C5.67031 14.5117 5.36432 15.602 4.8538 16.6003C4.39439 17.3218 3.8406 17.9788 3.20714 18.5536L2.98047 18.7536V20.6336H22.8471V18.7536Z"
          fill={isActive ? "#18ACE8" : "#111110"}
        />
        <path
          d="M20.9471 7.33464C22.7881 7.33464 24.2804 5.84225 24.2804 4.0013C24.2804 2.16035 22.7881 0.667969 20.9471 0.667969C19.1062 0.667969 17.6138 2.16035 17.6138 4.0013C17.6138 5.84225 19.1062 7.33464 20.9471 7.33464Z"
          fill="#E33629"
        />
      </g>
      <defs>
        <clipPath id="clip0_1506_8727">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.947266)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NotificationIcon;
