import Image from "next/image";

import data from "@/data/hero.json";

export const Hero = () => {
  const { title, image1 } = data;

  return (
    <section className="section-hero section-bg">
      <div className="container">
        <div className="w-full flex justify-center items-center relative">
          <h1
            className="font-cormorant inline-block white-space-no-wrap w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5]
              text-text-white text-5xl leading-[155.3px] tracking-[5.05px] md:text-8xl md:leading-[195.3px] md:tracking-[7.05px] xl:text-[181px] xl:leading-[235.3px] xl:tracking-[9.05px] font-bold capitalize not-italic"
          >
            {title}
          </h1>

          <Image
            width={634}
            height={840}
            src={image1.src}
            alt={image1.alt}
            priority
            className="w-[240px] h-[343px] md:w-[400px] md:h-[528px] xl:h-[840px] xl:w-[634px]"
          />
        </div>
      </div>
    </section>
  );
};
