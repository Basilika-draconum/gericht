import React from "react";
import { IButtonNavToggleProps } from "./types";

import data from "@/data/header.json";

export const ButtonNavToggle: React.FC<IButtonNavToggleProps> = ({
  open,
  onClick,
}) => {
  const { buttonToggle } = data;
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-text-white text-base"
    >
      {open ? buttonToggle.titleClose : buttonToggle.titleOpen}
    </button>
  );
};
