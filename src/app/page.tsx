import { About } from "@/sections/About";
import { Header } from "@/sections/Header/Header";
import { Reservation } from "@/sections/Reservation";

export default async function Home() {
  return (
    <>
      <Header />
      <Reservation />
      <About />
    </>
  );
}
