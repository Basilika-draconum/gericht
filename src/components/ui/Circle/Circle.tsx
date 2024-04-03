import CircleSpoon from "~/icons/circle.svg";

import { CircleProps } from "./type";

export const Circle: React.FC<CircleProps> = ({
  currentClass,
  className = "",
}) => {
  const right = "-top-5 right-2 md:-top-6 md:right-3 xl:-top-8 xl:right-9";
  const left =
    " -top-[100px] left-2 md:-top-[75px] md:left-[15px] xl:-top-[215px] xl:left-5";
  const selectedClass = currentClass === "classRight" ? right : left;

  return (
    <div
      className={`w-[86px] h-[86px] md:w-[106px] xl:w-[146px] xl:h-[146px]  md:h-[106px] z-[5] absolute rounded-full overflow-hidden ${selectedClass} ${className}`}
    >
      <CircleSpoon className="animate-spin-slow w-[86px] h-[86px] md:w-[106px] md:h-[106px] xl:w-[146px] xl:h-[146px] flex items-center justify-center" />
    </div>
  );
};
