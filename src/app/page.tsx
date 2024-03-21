import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Reservation } from "@/sections/Reservation";

export default async function Home() {
  return (
    <>
      <Reservation />
      <About />
      <Contacts />
    </>
  );
}
