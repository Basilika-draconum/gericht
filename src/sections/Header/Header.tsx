"use client";
import { useState } from "react";

import { Navbar } from "@/components/base/Navbar/Navbar";
import { Logo } from "@/components/ui/Logo/Logo";
import { HeaderLink } from "@/components/ui/HeaderLink/HeaderLink";
import { MenuOverlay } from "@/components/base/MenuOverlay/MenuOverlay";
import { ButtonNavToggle } from "@/components/ui/ButtonNavToggle/ButtonNavToggle";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="absolute top-8 bottom-8 left-0 z-20 bg-transparent w-full">
      <div className="px-[60px] md:px-[120px] flex justify-between items-center gap-1">
        <Logo />
        <div className="block md:hidden">
          <ButtonNavToggle
            open={isMenuOpen}
            onClick={toggleMenu}
            type={"button"}
          />
        </div>
        <Navbar />
        <div className="hidden md:block">
          <HeaderLink />
        </div>
      </div>
      {isMenuOpen && <MenuOverlay open={isMenuOpen} onClick={closeMenu} />}
    </header>
  );
};
