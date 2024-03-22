"use client";
import { Link } from "react-scroll";
import data from "@/data/header.json";

export type IHeaderLinkProps = {
  onClick?: () => void;
};
export const HeaderLink: React.FC<IHeaderLinkProps> = ({ onClick }) => {
  const { linkToTable } = data;
  return (
    <Link
      className="flex gap-x-[10px] xl:gap-x-[50px] items-center justify-center"
      to={linkToTable.href}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={onClick}
    >
      <span className="hidden md:inline-block bg-bg-white w-[1px] h-[20px]"></span>
      <span className="text-text-white font-semibold text-base md:text-[13px] xl:text-base leading-[28px] tracking-wider capitalize shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)]">
        {linkToTable.title}
      </span>
    </Link>
  );
};
