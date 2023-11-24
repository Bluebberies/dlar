import { useMediaQuery } from "react-responsive";

export function NextSliderArrow(props: any) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  const { onClick } = props;
  return (
    <div
      className="right_arr"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={isSmallScreen ? "30" : "51"}
        height={isSmallScreen ? "30" : "50"}
        viewBox="0 0 51 50"
        fill="none"
      >
        <path d="M36.5002 13H15.5002V39H36.5002V13Z" fill="#111110" />
        <path
          d="M25.5001 4.16699C14.0209 4.16699 4.66675 13.5212 4.66675 25.0003C4.66675 36.4795 14.0209 45.8337 25.5001 45.8337C36.9793 45.8337 46.3334 36.4795 46.3334 25.0003C46.3334 13.5212 36.9793 4.16699 25.5001 4.16699ZM28.7917 26.0003L24.6251 31.0212C24.3126 31.3962 23.8751 31.5837 23.4167 31.5837C23.0626 31.5837 22.7084 31.4795 22.4167 31.2295C21.7709 30.6878 21.6668 29.7087 22.2084 29.042L25.5626 25.0003L22.2084 20.9587C21.6668 20.292 21.7709 19.3128 22.4167 18.7712C23.0834 18.2087 24.0834 18.3128 24.6251 18.9795L28.7917 24.0003C29.2709 24.5837 29.2709 25.417 28.7917 26.0003Z"
          fill="#E0E7F4"
        />
      </svg>
    </div>
  );
}

export function PrevSliderArrow(props: any) {
  const { onClick } = props;
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <div
      className="left_arr"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={isSmallScreen ? "30" : "51"}
        height={isSmallScreen ? "30" : "50"}
        viewBox="0 0 51 50"
        fill="none"
        className="sm:w-[50] sm:h-[50px]"
      >
        <path d="M35.5001 11H14.5001V41H35.5001V11Z" fill="#111110" />
        <path
          d="M25.5 4.16699C14.0208 4.16699 4.66663 13.5212 4.66663 25.0003C4.66663 36.4795 14.0208 45.8337 25.5 45.8337C36.9791 45.8337 46.3333 36.4795 46.3333 25.0003C46.3333 13.5212 36.9791 4.16699 25.5 4.16699ZM28.7916 29.042C29.3333 29.7087 29.25 30.6878 28.5833 31.2295C28.2916 31.4795 27.9375 31.5837 27.5833 31.5837C27.125 31.5837 26.6875 31.3962 26.375 31.0212L22.2083 26.0003C21.7291 25.417 21.7291 24.5837 22.2083 24.0003L26.375 18.9795C26.9375 18.3128 27.9166 18.2087 28.5833 18.7712C29.25 19.3128 29.3333 20.292 28.7916 20.9587L25.4583 25.0003L28.7916 29.042Z"
          fill="#E0E7F4"
        />
      </svg>
    </div>
  );
}
