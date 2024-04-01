import { SectionTitle } from "@/components/ui/SectionTitle";
import { FormNewsletter } from "@/components/base/FormNewsletter/FormNewsletter";
import { Circle } from "@/components/ui/Circle/Circle";

import data from "@/data/newsletter.json";

export const Newsletter: React.FC = () => {
  const { title, subtitle, slogan, classRight } = data;

  return (
    <section className="pt-[50px] md:pt-[100px] bg-bg-main">
      <div className="container relative">
        <Circle currentClass={classRight} />

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
