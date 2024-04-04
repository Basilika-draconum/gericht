import { ButtonNavToggle } from "@/components/ui/ButtonNavToggle/ButtonNavToggle";
import { HeaderLink } from "@/components/ui/HeaderLink/HeaderLink";
import { Logo } from "@/components/ui/Logo/Logo";
import { NavLink } from "@/components/ui/NavLink/NavLink";
import { Sociables } from "@/components/base/Sociables/Sociables";

import { IMenuOverlayProps } from "./types";
import data from "@/data/header.json";

export const MenuOverlay: React.FC<IMenuOverlayProps> = ({ onClick, open }) => {
  const { navbarLinks } = data;

  return (
    <div
      className={`smOnly:fixed smOnly:top-0 smOnly:left-0 smOnly:z-[9999] smOnly:px-[60px] smOnly:py-8 smOnly:flex smOnly:items-center smOnly:flex-col smOnly:gap-[30px] smOnly:align-center smOnly:w-full smOnly:h-full smOnly:bg-bg-main smOnly:overflow-y-auto
          smOnly:transition-all  ${open ? "left-0" : "left-[-100%]"}`}
    >
      <div className="w-full flex justify-between items-center gap-2">
        <Logo />
        <ButtonNavToggle open={open} onClick={onClick} type={"button"} />
      </div>

      <ul className="flex flex-col gap-4 items-center">
        {navbarLinks.map(({ title, href, id }) => (
          <li key={id}>
            <NavLink title={title} href={href} onClick={onClick} />
          </li>
        ))}
      </ul>

      <HeaderLink onClick={onClick} />
      <Sociables onClick={onClick} />
    </div>
  );
};
