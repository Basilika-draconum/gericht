import { Button } from "@/components/ui/Button";

import { FormReservationProps } from "./types";

export const FormReservation: React.FC<FormReservationProps> = ({ button }) => {
  return (
    <div className="flex flex-col items-center gap-16">
      <form className="flex flex-row gap-8 ">
        {/* here will be form */}
        <input
          type="text"
          className="border-text-addaccent border p-4 bg-bg-main text-[16px] font-upright font-semibold leading-[1.75] tracking-[0.64px] text-text-secondary"
          placeholder="1 Person"
        />
        <input
          type="text"
          className="border-text-addaccent border p-4 bg-bg-main text-[16px] font-upright font-semibold leading-[1.75] tracking-[0.64px] text-text-secondary"
          placeholder="1 Person"
        />
        <input
          type="text"
          className="border-text-addaccent border p-4 bg-bg-main text-[16px] font-upright font-semibold leading-[1.75] tracking-[0.64px] text-text-secondary"
          placeholder="1 Person"
        />
      </form>

      <Button type="submit" text={button} />
    </div>
  );
};
