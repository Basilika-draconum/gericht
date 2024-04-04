import { SectionTitle } from "@/components/ui/SectionTitle";
import { FormNewsletter } from "@/components/base/FormNewsletter";
import { Circle } from "@/components/ui/Circle";

import data from "@/data/newsletter.json";
import { CircleClass } from "@/components/ui/Circle/type";

export const Newsletter: React.FC = () => {
  const { title, subtitle, slogan } = data;

  return (
    <section id="/newsletter" className="pt-[50px] md:pt-[100px] bg-bg-main">
      <div className="container relative">
        <Circle currentClass={CircleClass.ClassRight} />

        <div className="bg-text-extra relative z-[4] border-bg-accent/20 border py-[34px] px-5 md:px-8 md:py-[64px] flex flex-col justify-center items-center">
          <SectionTitle
            title={title}
            subtitle={subtitle}
            className="mb-3 xl:mb-6 items-center text-center"
          />
          <h3 className="font-sans text-text-white text-[13px] md:text-base font-normal leading-7 tracking-[0.64px] not-italic mb-[20px] md:mb-[34px] xl:mb-[64px] items-center">
            {slogan}
          </h3>
          <FormNewsletter />
        </div>
      </div>
    </section>
  );
};
