import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`w-fit bg-bg-accent py-2 px-8 text-text-extra font-upright font-bold text-[16px] leading-[1.75] tracking-[0.64px] transition-all hover:bg-bg-hoveraccent focus:bg-bg-hoveraccent cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};
