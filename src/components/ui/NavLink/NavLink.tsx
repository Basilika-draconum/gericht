"use client";
import { Link } from "react-scroll";

import { INavLinkProps } from "./types";

export const NavLink = ({ title, href, onClick }: INavLinkProps) => {
  return (
    <div className="relative group cursor-pointer">
      <Link
        className="text-text-white text-[16px] xl:text-base font-normal leading-7 tracking-[0.64px] group-hover:text-text-accent group-focus:text-text-accent transition-all"
        to={href}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={onClick}
      >
        {title}
      </Link>
      <div className="absolute left-0 top-6 w-full h-0.5 origin-left bg-text-accent transition-all transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></div>
    </div>
  );
};
