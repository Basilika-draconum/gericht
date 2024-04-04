"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { MenuItem, Select, ThemeProvider } from "@mui/material";
import toast from "react-hot-toast";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { muiTheme } from "@/app/mui-theme";
import { Button } from "@/components/ui/Button";

import data from "@/data/reservation.json";
import { FormData } from "./types";

const defaultValues = {
  select1: "",
  select2: "",
  date: dayjs(new Date()),
};

export const FormReservation: React.FC = () => {
  const { button, guests, times } = data;
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({ defaultValues });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    toast(
      `You booked a table for ${formData.select1} people and at ${formData.select2}:00
      We're looking forward for you ${formData.date}.`,
    );
    reset();
  };

  return (
    <div className="flex flex-col items-center gap-16">
      <ThemeProvider theme={muiTheme}>
        <form
          action="#"
          className="flex flex-col items-center xl:flex-row gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full relative">
            <Controller
              control={control}
              name="select1"
              defaultValue={"1"}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  size="medium"
                  sx={{ minWidth: 300, color: "#F5EFDB" }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "#0C0B08", // Колір фону спливаючого вікна
                      },
                    },
                  }}
                  className="border-text-addaccent border"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" className="text-text-secondary" disabled>
                    <em>Number of people</em>
                  </MenuItem>
                  {guests.map((guest) => (
                    <MenuItem
                      className="text-[13px] md:text-[20px] font-upright font-semibold leading-[1.75] tracking-[0.64px] text-text-secondary"
                      value={guest.value}
                      key={guest.value}
                    >
                      {guest.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <div className="flex justify-end absolute bottom-[-22px] right-0">
              {errors?.select1 && (
                <div className="flex fle-row items-center">
                  <p className="text-rose-400 text-[13px] leading-6 tracking-[2.4px] ml-1">
                    {errors?.select1?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full relative">
            <Controller
              control={control}
              name="select2"
              defaultValue={"11"}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  size="medium"
                  sx={{ minWidth: 320, color: "#F5EFDB" }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "#0C0B08", // Колір фону спливаючого вікна
                      },
                    },
                  }}
                  className="border-text-addaccent border relative"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" className="text-text-secondary" disabled>
                    <em>Time</em>
                  </MenuItem>
                  {times.map((time) => (
                    <MenuItem
                      className="text-[13px] md:text-[20px] font-upright font-semibold leading-[1.75] tracking-[0.64px] text-text-secondary"
                      value={time.value}
                      key={time.value}
                    >
                      {time.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <div className="flex justify-end absolute bottom-[-22px] right-0">
              {errors?.select2 && (
                <div className="flex fle-row items-center">
                  <p className="text-rose-400 text-[13px] leading-6 tracking-[2.4px] ml-1">
                    {errors?.select2?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <Controller
            name="date"
            control={control}
            defaultValue={dayjs(new Date())}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    minWidth: 320,
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      { border: "1px solid #f5efdb" },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      { border: "1px solid #f5efdb" },
                    "& .MuiOutlinedInput-root": {
                      color: "#f5efdb",
                    },
                  }}
                  slotProps={{
                    openPickerButton: {
                      color: "secondary",
                    },
                  }}
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  disablePast
                />
              </LocalizationProvider>
            )}
          />

          <Button type="submit" text={button} />
        </form>
      </ThemeProvider>
    </div>
  );
};
