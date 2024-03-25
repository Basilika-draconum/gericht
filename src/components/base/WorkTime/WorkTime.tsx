import data from "@/data/footer.json";

export const WorkTime = () => {
  const { working } = data;

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center mb-4 md:mb-6 text-2xl md:text-[32px] text-text-addaccent font-normal not-italic leading-[41.6px] tracking-[1.28px] capitalize">
        {working.title}
      </h3>
      <ul className="font-sans flex flex-col gap-2">
        {working.times.map(({ day, time, id }) => (
          <li
            key={id}
            className="flex flex-col items-center gap-[2px] text-[13px] md:text-base text-text-secondary font-normal not-italic leading-7 tracking-[0.64px] cursor-pointer transition-all group"
          >
            <p className="text-center group-hover:text-text-accent group-focus:text-text-accent">
              {day}
            </p>
            <p className="text-center group-hover:text-text-accent group-focus:text-text-accent">
              {time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
