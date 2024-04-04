import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Circle } from "@/components/ui/Circle";

import data from "@/data/about.json";
import { CircleClass } from "@/components/ui/Circle/type";

export const About: React.FC = () => {
  const { title, subtitle, description, button, image1, image2 } = data;
  return (
    <section id="/about" className="section section-bg">
      <div className="container relative">
        <Circle currentClass={CircleClass.ClassLeft} />

        <div className="flex md:gap-[43px] xl:gap-[143px] items-center">
          <Image
            width={523}
            height={702}
            alt={image1.alt}
            src={image1.src}
            className="hidden md:block w-[320px] h-[550px] xl:w-[523px] xl:h-[702px]"
          />

          <div>
            <Image
              width={634}
              height={385}
              alt={image2.alt}
              src={image2.src}
              className="mb-10 md:w-[370px] md:h-[250px]"
            />
            <SectionTitle
              title={title}
              subtitle={subtitle}
              className={"mb-8 items-start"}
            />
            <p className="font-sans text-text-secondary text-[13px] md:text-[16px] leading-[1.75] tracking-[0.64px] font-normal mb-8">
              {description}
            </p>
            <Button text={button} type="button" />
          </div>
        </div>
      </div>
    </section>
  );
};
