import Spoon from "~/icons/spoon.svg";

import { SectionTitleProps } from "./types";

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  start,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${start ? "items-start" : "items-center"}`}
    >
      <p className="text-text-white font-upright text-[23px] leading-[1.3] tracking-[0.92px] font-bold">
        {subtitle}
      </p>
      <Spoon className="w-10 h-[9px]" />
      <h2 className="text-text-accent font-upright font-semibold text-[64px]">
        {title}
      </h2>
    </div>
  );
};
