"use client";
import Link from "next/link";
import Image from "next/image";

import data from "@/data/header.json";

export const Logo: React.FC = () => {
  const { logo } = data;

  return (
    <Link
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      role={logo.role}
      aria-label={logo.ariaLabel}
      className="inline-block"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={199}
        height={57}
        priority
        className="w-[109px] h-[37px] xl:w-[199px] xl:h-[57px]"
      />
    </Link>
  );
};
