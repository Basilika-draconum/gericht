import { Navbar } from "@/components/base/Navbar/Navbar";
import { Logo } from "@/components/ui/Logo/Logo";
import { HeaderLink } from "@/components/ui/HeaderLink/HeaderLink";

export const Header = () => {
  return (
    <header className="bg-black flex justify-between py-8 px-[120px] w-full items-center">
      <Logo />
      <Navbar />
      <HeaderLink />
    </header>
  );
};
