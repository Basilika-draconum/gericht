"use client";
import { Link } from "react-scroll";

import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  className = "",
  to,
}) => {
  return to ? (
    <Link to={to} smooth={true} duration={2000} spy={true} offset={50}>
      <button
        type={type}
        className={`w-fit text-nowrap bg-bg-accent py-2 px-8 text-text-extra font-upright font-bold text-[16px] leading-[1.75] tracking-[0.64px] transition-all hover:bg-bg-hoveraccent focus:bg-bg-hoveraccent cursor-pointer ${className}`}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      className={`w-fit text-nowrap bg-bg-accent py-2 px-8 text-text-extra font-upright font-bold text-[16px] leading-[1.75] tracking-[0.64px] transition-all hover:bg-bg-hoveraccent focus:bg-bg-hoveraccent cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};
