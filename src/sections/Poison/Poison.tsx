import { Gallery } from "@/components/base/Gallary/Gallery";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";

import data from "@/data/poison.json";

export const Poison: React.FC = () => {
  const { title, subtitle } = data;

  return (
    <section id="/poisons" className="section">
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
