import { About } from "@/sections/About";
import { Header } from "@/sections/Header/Header";
import { Contacts } from "@/sections/Contacts";
import { Reservation } from "@/sections/Reservation";
import { Special } from "@/sections/Special";

export default async function Home() {
  return (
    <>
      <Header />
      <Reservation />
      <About />
      <Special />
      <Contacts />
    </>
  );
}
