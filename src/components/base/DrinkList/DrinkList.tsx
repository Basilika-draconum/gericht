import { DrinkItem } from "@/components/ui/DrinkItem";

import { DrinkListProps } from "./types";

export const DrinkList: React.FC<DrinkListProps> = ({ items, title }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-text-white text-center font-upright text-[24px] md:text-[34px] xl:text-[45px] font-semibold leading-[1.3] tracking-[1.8px] mb-6 md:mb-12">
        {title}
      </h4>
      <ul className="flex flex-col gap-10 w-full mdOnly:gap-5 ">
        {items.map((drink) => (
          <DrinkItem
            key={drink.id}
            title={drink.title}
            price={drink.price}
            desc={drink.desc}
          />
        ))}
      </ul>
    </div>
  );
};
