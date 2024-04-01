import CircleSpoon from "~/icons/circle.svg";

import { CircleProps } from "./type";

export const Circle: React.FC<CircleProps> = ({ currentClass }) => {
  return (
    <div
      className={`w-[86px] h-[86px] md:w-[106px] xl:w-[146px] xl:h-[146px]  md:h-[106px] z-[5] absolute ${currentClass} rounded-full overflow-hidden`}
    >
      <CircleSpoon className="animate-spin-slow w-[86px] h-[86px] md:w-[106px] md:h-[106px] xl:w-[146px] xl:h-[146px] flex items-center justify-center" />
    </div>
  );
};
