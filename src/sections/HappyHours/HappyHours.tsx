import Image from "next/image";

import data from "@/data/happyHours.json";

export const HappyHours: React.FC = () => {
  const { image, title, day, time } = data;

  return (
    <section className="relative">
      <div className="w-full h-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={1440}
          height={900}
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="w-full text-text-accent not-italic capitalize tracking-[3.84px] font-semibold text-9xl leading-[166.4px] font-upright text-center mb-8">
          {title}
        </h2>
        <h3 className="w-full text-text-white not-italic capitalize tracking-[1.28px] font-bold leading-[41.6px] text-[32px] font-upright text-center">
          {day}
          {time}
        </h3>
      </div>
    </section>
  );
};
