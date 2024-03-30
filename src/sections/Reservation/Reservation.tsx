import { FormReservation } from "@/components/base/FormReservation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Circle } from "@/components/ui/Circle/Circle";

import data from "@/data/reservation.json";

export const Reservation = () => {
  const { title, subTitle, button } = data;

  return (
    <section className="section bg-bg-main">
      <div className="container relative">
        <div className="w-[86px] h-[86px] md:w-[106px] xl:w-[146px] xl:h-[146px]  md:h-[106px] z-50 absolute  -top-3 right-2 md:-top-6 md:right-3 xl:-top-8 xl:right-9 rounded-full overflow-hidden">
          <Circle />
        </div>

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
