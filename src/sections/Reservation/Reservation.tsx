import { FormReservation } from "@/components/base/FormReservation";
import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/reservation.json";

export const Reservation = () => {
  const { title, subTitle, button } = data;

  return (
    <section className="section bg-bg-main">
      <div className="container">
        <div className="relative z-10 flex flex-col gap-16 items-center border-bg-accent/20 border py-[42px] px-8">
          <SectionTitle
            title={title}
            subtitle={subTitle}
            className="items-center"
          />
          <FormReservation button={button} />
        </div>
      </div>
    </section>
  );
};
