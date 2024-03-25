import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Reservation } from "@/sections/Reservation";
import { Special } from "@/sections/Special";
import { Poison } from "@/sections/Poison/Poison";

export default async function Home() {
  return (
    <>
      <Reservation />
      <About />
      <Poison />
      <Special />
      <Contacts />
    </>
  );
}
