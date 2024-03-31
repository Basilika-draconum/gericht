import { DrinkList } from "@/components/base/DrinkList";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Circle } from "@/components/ui/Circle/Circle";

import data from "@/data/special.json";
import Image from "next/image";

export const Special: React.FC = () => {
  const { title, subtitle, coctails, image1x, drinks } = data;
  return (
    <section className="section">
      <div className="container relative">
        <div className=" w-[86px] h-[86px] md:w-[106px] xl:w-[146px] xl:h-[146px]  md:h-[106px] z-20 absolute -top-3 right-2 md:-top-6 md:right-3 xl:-top-8 xl:right-9 rounded-full overflow-hidden">
          <Circle />
        </div>
        <div className="w-[86px] h-[86px] md:w-[106px] xl:w-[146px] xl:h-[146px]  md:h-[106px] z-20 absolute -bottom-[110px] left-2 md:-bottom-[154px] md:left-2 xl:-bottom-[225px] xl:left-7 rounded-full overflow-hidden">
          <Circle />
        </div>
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="items-center mb-6 md:mb-16"
        />
        <div className="grid md:grid-cols-3 gap-[16px] xl:gap-[32px]">
          <DrinkList items={coctails.coctails} title={coctails.title} />
          <Image src={image1x.src} alt={image1x.alt} width={412} height={660} />
          <DrinkList items={drinks.drinks} title={drinks.title} />
        </div>
      </div>
    </section>
  );
};
