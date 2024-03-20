import { NavLink } from "@/components/ui/NavLink/NavLink";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-[38px] items-center">
        <li>
          <NavLink title={"Home"} href={"/"} />
        </li>
        <li>
          <NavLink title={"About"} href={"/about"} />
        </li>
        <li>
          <NavLink title={"Poisons"} href={"/poisons"} />
        </li>
        <li>
          <NavLink title={"Contact Us"} href={"/contact"} />
        </li>
      </ul>
    </nav>
  );
};
