"use client";
import Image from "next/image";
import Link from "next/link";

import data from "@/data/footer.json";

export const Sociables: React.FC = () => {
  const { icons } = data;

  return (
    <ul className="flex gap-4 ">
      {icons.map(({ alt, href, src, id }) => (
        <li key={id}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={alt}
          >
            <Image
              src={src}
              alt={alt}
              width={24}
              height={24}
              className="text-text-addaccent cursor-pointer transition-all hover:text-text-accent focus:text-text-accent"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
