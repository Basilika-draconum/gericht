import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Circle } from "@/components/ui/Circle";
import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/contacts.json";
import { CircleClass } from "@/components/ui/Circle/type";

export const Contacts: React.FC = () => {
  const { title, subtitle, description, button, schedule, image1x } = data;

  return (
    <section id="/contact" className="section section-bg">
      <div className="container flex gap-[80px] items-center relative">
        <Circle
          currentClass={CircleClass.ClassLeft}
          className="hidden md:block mdOnly:-top-[146px]"
        />

        <div>
          <SectionTitle
            title={title}
            subtitle={subtitle}
            className="mb-6 md:mb-16 items-start"
          />

          <p className="font-sans text-text-secondary text-[13px] md:text-[16px] leading-[1.75] tracking-[0.64px] font-normal md:mb-6 xl:md-8">
            {description}
          </p>

          <div className="flex flex-col">
            <h3 className="font-upright text-text-accent text-[16px] md:text-[23px] leading-[1.75] tracking-[0.64px] font-semibold mb-4 ">
              {schedule.title}
            </h3>
            <div className="flex mb-10 md:mb-16 flex-col gap-2 font-sans text-text-white text-[13px] md:text-[16px] leading-[1.75] tracking-[0.64px] font-normal md:gap-4">
              <p>{schedule.days}</p>
              <p>{schedule.weekend}</p>
            </div>
          </div>
          <Button type="button" text={button} />
        </div>

        <Image
          src={image1x.src}
          width={667}
          height={736}
          alt={image1x.alt}
          className="hidden md:block w-[500px] h-[350px] xl:w-[647px] xl:h-[716px]"
        />
      </div>
    </section>
  );
};
