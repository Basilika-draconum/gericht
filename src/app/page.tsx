import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Hero } from "@/sections/Hero/Hero";
import { Reservation } from "@/sections/Reservation";
import { Special } from "@/sections/Special";

export default async function Home() {
  return (
    <>
      <Hero />
      <Reservation />
      <About />
      <Special />
      <Contacts />
    </>
  );
}
