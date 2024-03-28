"use client";

import { Controller, useForm } from "react-hook-form";
import { MenuItem, Select } from "@mui/material";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers";

import { Button } from "@/components/ui/Button";

import data from "@/data/reservation.json";
// import dayjs, { Dayjs } from "dayjs";

const defaultValues = {
  select: "",
  // date: Dayjs,
};

export const FormReservation: React.FC = () => {
  const { button, guests } = data;
  const {
    handleSubmit,
    control,

    // formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="flex flex-col items-center gap-16">
      <form className="flex flex-col xl:flex-row gap-8" onSubmit={onSubmit}>
        <Controller
          render={({ field }) => (
            <Select
              {...field}
              size="medium"
              sx={{ minWidth: 320 }}
              className="border-text-addaccent border"
            >
              {guests.map((guest) => (
                <MenuItem
                  className="border-text-addaccent border bg-bg-main text-[13px] md:text-[20px] font-upright font-semibold leading-[1.75] tracking-[0.64px] text-text-secondary"
                  value={guest.value}
                  key={guest.value}
                >
                  {guest.label}
                </MenuItem>
              ))}
            </Select>
          )}
          control={control}
          name="select"
          defaultValue={"10"}
        />
        {/* <Controller
          name="date"
          control={control}
          defaultValue={dayjs()} // Початкове значення дати
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={field.value}
                onChange={(newValue) => field.onChange(newValue)}
              />
            </LocalizationProvider>
          )}
        /> */}
      </form>

      <Button type="submit" text={button} />
    </div>
  );
};
