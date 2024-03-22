"use client";
import { Link } from "react-scroll";
import { INavLinkProps } from "./types";

export const NavLink = ({ title, href, onClick }: INavLinkProps) => {
  return (
    <Link
      className="text-text-white text-[13px] xl:text-base font-normal leading-7 tracking-[0.64px]"
      to={href}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};
