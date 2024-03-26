import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Reservation } from "@/sections/Reservation";
import { Special } from "@/sections/Special";
import { HappyHours } from "@/sections/HappyHours/HappyHours";

export default async function Home() {
  return (
    <>
      <Reservation />
      <About />
      <HappyHours />
      <Special />
      <Contacts />
    </>
  );
}
