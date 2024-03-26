import { IButtonNavToggleProps } from "./types";

import data from "@/data/header.json";

export const ButtonNavToggle: React.FC<IButtonNavToggleProps> = ({
  open,
  onClick,
  type,
}) => {
  const { buttonToggle } = data;
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-text-white text-base font-normal leading-7 tracking-[0.64px] transition-all hover:text-text-accent focus:text-text-accent cursor-pointer"
    >
      {open ? buttonToggle.titleClose : buttonToggle.titleOpen}
    </button>
  );
};
