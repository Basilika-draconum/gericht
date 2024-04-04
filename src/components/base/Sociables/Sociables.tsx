"use client";
import Link from "next/link";

import Instagram from "~/icons/instagram.svg";
import Facebook from "~/icons/facebook.svg";
import Twitter from "~/icons/twitter.svg";

import { SociablesProps } from "./types";

export const Sociables: React.FC<SociablesProps> = ({ onClick }) => {
  return (
    <ul className="flex gap-4 text-text-addaccent transition-all cursor-pointer">
      <li>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="facebook"
          onClick={onClick}
        >
          <Facebook className="hover:text-text-accent" />
        </Link>
      </li>

      <li>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="twitter"
          onClick={onClick}
        >
          <Twitter className="hover:text-text-accent" />
        </Link>
      </li>

      <li>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="instagram"
          onClick={onClick}
        >
          <Instagram className="hover:text-text-accent" />
        </Link>
      </li>
    </ul>
  );
};
