"use client";
import { Link } from "react-scroll";

export const HeaderLink = () => {
  return (
    <Link
      className="flex gap-x-[50px] items-center justify-center"
      to={"/contact"}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <span className="inline-block bg-bg-white w-[1px] h-[20px]"></span>
      <span className="text-text-white font-semibold text-base leading-[28px] tracking-wider capitalize shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)]">
        {" "}
        book table
      </span>
    </Link>
  );
};
