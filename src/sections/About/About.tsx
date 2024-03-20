import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/about.json";

export const About: React.FC = () => {
  const { title, subtitle, description, button, image1, image2 } = data;
  return (
    <section className="section">
      <div className="container">
        <div className="flex gap-[143px]">
          <Image
            width={523}
            height={702}
            alt={image1.alt}
            src={image1.src}
            className="pt-[136px]"
          />

          <div>
            <Image
              width={634}
              height={385}
              alt={image2.alt}
              src={image2.src}
              className="mb-10 "
            />
            <SectionTitle
              title={title}
              subtitle={subtitle}
              start
              className={"mb-8"}
            />
            <p className="font-sans text-text-secondary text-[16px] leading-[1.75] tracking-[0.64px] font-normal mb-8">
              {description}
            </p>
            <Button text={button} type="button" />
          </div>
        </div>
      </div>
    </section>
  );
};
