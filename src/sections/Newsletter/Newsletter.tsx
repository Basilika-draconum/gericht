import { SectionTitle } from "@/components/ui/SectionTitle";
import { FormNewsletter } from "@/components/base/FormNewsletter/FormNewsletter";
import { Circle } from "@/components/ui/Circle/Circle";

import data from "@/data/newsletter.json";

export const Newsletter: React.FC = () => {
  const { title, subtitle, slogan } = data;

  return (
    <section className="pt-[50px] md:pt-[100px] bg-bg-main">
      <div className="container relative">
        <div className=" w-[86px] h-[86px] md:w-[106px] xl:w-[146px] xl:h-[146px]  md:h-[106px] z-20 absolute  -top-3 right-2 md:-top-6 md:right-3 xl:-top-8 xl:right-9 rounded-full overflow-hidden">
          <Circle />
        </div>

        <div className=" bg-text-extra relative z-10 border-bg-accent/20 border py-[34px] px-5 md:px-8 md:py-[64px] flex flex-col justify-center items-center">
          <SectionTitle
            title={title}
            subtitle={subtitle}
            className="mb-6 items-center text-center"
          />
          <h3 className="font-sans text-text-white text-[13px] md:text-base font-normal leading-7 tracking-[0.64px] not-italic mb-[34px] md:mb-[64px] items-center">
            {slogan}
          </h3>
          <FormNewsletter />
        </div>
      </div>
    </section>
  );
};
