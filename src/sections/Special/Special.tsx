import Image from "next/image";

import { DrinkList } from "@/components/base/DrinkList";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Circle } from "@/components/ui/Circle/Circle";

import data from "@/data/special.json";
import { CircleClass } from "@/components/ui/Circle/type";

export const Special: React.FC = () => {
  const { title, subtitle, coctails, image1x, drinks } = data;
  return (
    <section className="section">
      <div className="container relative">
        <Circle currentClass={CircleClass.ClassRight} />

        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="items-center mb-6 md:mb-16"
        />

        <div className="grid md:grid-cols-3 gap-[24px] xl:gap-[32px]">
          <DrinkList items={coctails.coctails} title={coctails.title} />
          <Image
            src={image1x.src}
            alt={image1x.alt}
            width={412}
            height={660}
            className="mdOnly:self-center"
          />
          <DrinkList items={drinks.drinks} title={drinks.title} />
        </div>
      </div>
    </section>
  );
};
