import { DrinkItemType } from "./types";

export const DrinkItem: React.FC<DrinkItemType> = ({ title, price, desc }) => {
  return (
    <li className="flex flex-col gap-2">
      <div className="relative flex font-upright text-[18px] md:text-[20px]  xl:text-[23px] font-semibold leading-[1.3] traking-[0.92px] text-text-accent">
        <h4 className="text-text-accent">{title}</h4>
        <p className="text-text-white drink-price">{price}</p>
      </div>

      <p className="font-sans text-[13px] md:text-[16px] font-regular leading-[1.75] traking-[0.64px] text-text-secondary">
        {desc}
      </p>
    </li>
  );
};
