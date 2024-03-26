import { About } from "@/sections/About";
import { Header } from "@/sections/Header/Header";
import { Contacts } from "@/sections/Contacts";
import { Hero } from "@/sections/Hero/Hero";
import { Reservation } from "@/sections/Reservation";
import { Special } from "@/sections/Special";
import { Poison } from "@/sections/Poison/Poison";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Reservation />
      <About />
      <Poison />
      <Special />
      <Contacts />
    </>
  );
}
