import { NavLink } from "@/components/ui/NavLink/NavLink";

import data from "@/data/header.json";

export const Navbar: React.FC = () => {
  const { navbarLinks } = data;

  return (
    <nav className="hidden md:block">
      <ul className="flex flex-col md:flex-row gap-[28px] xl:gap-[38px] items-center">
        {navbarLinks &&
          navbarLinks.map(({ title, href, id }) => (
            <li key={id}>
              <NavLink title={title} href={href} />
            </li>
          ))}
      </ul>
    </nav>
  );
};
