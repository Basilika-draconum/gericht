import { Button } from "@/components/ui/Button";

import { FormReservationProps } from "./types";

export const FormReservation: React.FC<FormReservationProps> = ({ button }) => {
  return (
    <div className="flex flex-col items-center gap-16">
      <form className="flex flex-row gap-8 ">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>

      <Button type="submit" text={button} />
    </div>
  );
};
