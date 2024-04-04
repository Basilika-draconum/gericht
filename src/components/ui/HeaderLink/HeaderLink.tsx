"use client";

import { Link } from "react-scroll";

import data from "@/data/header.json";
import { IHeaderLinkProps } from "./types";

export const HeaderLink: React.FC<IHeaderLinkProps> = ({ onClick }) => {
  const { linkToTable } = data;

  return (
    <Link
      className="flex gap-x-[10px] xl:gap-x-[50px] items-center justify-center group cursor-pointer transition-all"
      to={linkToTable.href}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={onClick}
    >
      <span className="smOnly:hidden inline-block bg-bg-white w-[1px] h-[20px] group-hover:bg-bg-accent group-focus:bg-bg-accent"></span>
      <span
        className="text-text-white font-semibold md:text-[13px] text-base leading-[28px] tracking-wider capitalize shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)]
      group-hover:text-text-accent group-focus:text-text-accent "
      >
        {linkToTable.title}
      </span>
    </Link>
  );
};
