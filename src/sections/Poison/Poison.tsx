import { Gallery } from "@/components/base/Gallery";
import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/poison.json";

export const Poison: React.FC = () => {
  const { title, subtitle } = data;

  return (
    <section id="/poisons" className="section md:pb-0">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-[34px] md:gap-[64px]">
          <SectionTitle
            title={title}
            subtitle={subtitle}
            className="items-center"
          />
          <Gallery />
        </div>
      </div>
    </section>
  );
};
