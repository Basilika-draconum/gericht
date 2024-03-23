import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Reservation } from "@/sections/Reservation";
import { Special } from "@/sections/Special";

export default async function Home() {
  return (
    <>
      <Reservation />
      <About />
      <Special />
      <Contacts />
    </>
  );
}
