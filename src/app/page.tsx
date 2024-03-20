import { About } from "@/sections/About";
import { Reservation } from "@/sections/Reservation";

export default async function Home() {
  return (
    <>
      <Reservation />
      <About />
    </>
  );
}
