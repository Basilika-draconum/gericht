import { FormReservation } from "@/components/base/FormReservation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Circle } from "@/components/ui/Circle/Circle";

import data from "@/data/reservation.json";
import { CircleClass } from "@/components/ui/Circle/type";

export const Reservation = () => {
  const { title, subTitle, button } = data;

  return (
    <section id="/reservation" className="section bg-bg-main">
      <div className="container relative">
        <Circle currentClass={CircleClass.ClassRight} />

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
