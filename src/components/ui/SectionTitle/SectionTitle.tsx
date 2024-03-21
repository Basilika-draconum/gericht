import Spoon from "~/icons/spoon.svg";

import { SectionTitleProps } from "./types";

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <p className="text-text-white font-upright leading-[1.3] tracking-[0.92px] font-bold text-[14px] md:text-[18px] xl:text-[23px]">
        {subtitle}
      </p>
      <Spoon className="w-10 h-[9px]" />
      <h2 className="text-text-accent font-upright font-semibold text-[32px] md:text-[48px] xl:text-[64px]">
        {title}
      </h2>
    </div>
  );
};
