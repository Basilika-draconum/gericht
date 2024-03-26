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
          height={800}
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute ">
        <h2 className="text-center mb-8">{title}</h2>
        <h3 className="text-center">
          {day}
          {time}
        </h3>
      </div>
    </section>
  );
};
