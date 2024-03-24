import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Reservation } from "@/sections/Reservation";
import { Special } from "@/sections/Special";
import { Newsletter } from "@/sections/Newsletter/Newsletter";
import { Footer } from "@/sections/Footer/Footer";

export default async function Home() {
  return (
    <>
      <Reservation />
      <About />
      <Special />
      <Contacts />
      <Newsletter />
      <Footer />
    </>
  );
}
