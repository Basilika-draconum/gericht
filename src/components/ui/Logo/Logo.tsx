"use client";
import Link from "next/link";
import Image from "next/image";

import logoGericht from "~/icons/logo.svg";

export const Logo = () => {
  return (
    <Link
      href="/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      role="navigation"
      aria-label="logoGericht"
      className="inline-block"
    >
      <Image
        src={logoGericht}
        alt="Gericht"
        width={199}
        height={57}
        priority
        className="w-[199px] h-[57px]"
      />
    </Link>
  );
};
