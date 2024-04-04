import data from "@/data/happyHours.json";

export const HappyHours: React.FC = () => {
  const { title, day, time } = data;

  return (
    <section className="section section-bg-happy h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 md:gap-8 ">
        <h2 className="w-full text-text-accent not-italic capitalize tracking-[3.84px] font-semibold text-6xl md:text-9xl leading-[100.4px] md:leading-[166.4px] font-upright text-center">
          {title}
        </h2>

        <h3 className="w-full flex gap-1 justify-center text-text-white not-italic capitalize tracking-[1.28px] font-bold leading-[41.6px] text-[24px] md:text-[32px] font-upright text-center">
          <span className="inline-block">{day}</span>
          <span className="inline-block">{time}</span>
        </h3>
      </div>
    </section>
  );
};
