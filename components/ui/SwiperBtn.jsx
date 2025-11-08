"use client";

const SwiperBtn = ({ direction, onClick, w_h, bg, mt }) => {
  const isPrev = direction === "prev";

  const svgPath = isPrev
    ? "M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
    : "M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18";

  return (
    <div
      className={`absolute ${w_h || "lg:size-14"} ${
        bg || "bg-secondary/50 hover:bg-secondary"
      } backdrop-blur-[10px] border border-secondary-100 hover:border-secondary-300 rounded-full inline-flex items-center justify-center w-[38px] h-[38px] text-current transition-all duration-200  ease-[cubic-bezier(0.42,0,0.58,1)] z-1 top-[50%] -translate-y-[50%] ${
        mt || "mt-[22px]"
      } cursor-pointer ${
        isPrev
          ? "lg:pr-px -left-2.5 lg:-left-[30px] right-auto"
          : "lg:pl-0.5 -right-2.5 lg:-right-[30px] left-auto"
      }`}
      onClick={onClick}
    >
      <svg
        className="lg:w-7 w-[26px] h-auto object-contain origin-center"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#fff"
        fill="none"
      >
        <path
          d={svgPath}
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default SwiperBtn;
