"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/Button";

import data from "@/data/newsletter.json";
import { ConfigFormNewsletter } from "./types";

export const FormNewsletter: React.FC = () => {
  const { button } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConfigFormNewsletter>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<ConfigFormNewsletter> = (data) => {
    toast(`We will contact you at the specified email:${data.email}`);
    reset();
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex  gap-8 items-center justify-center"
    >
      <div className=" flex flex-col w-full xl:w-[796px] relative">
        <input
          className="border-text-addaccent border outline-none w-full xl:w-[796px] p-3 md:p-4 bg-bg-main text-[13px] md:text-[16px] font-upright font-semibold leading-7 tracking-[0.64px] capitalize text-text-secondary"
          id="newsletter-email"
          autoComplete="email"
          aria-label="Email"
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email Address is required",
          })}
        />
        <div className="flex justify-end absolute bottom-[-22px] right-0">
          {errors?.email && (
            <div className="flex fle-row items-center">
              <p className="text-rose-400 text-[13px] leading-6 tracking-[2.4px] ml-1">
                {errors?.email?.message}
              </p>
            </div>
          )}
        </div>
      </div>

      <Button type="submit" text={button} />
    </form>
  );
};
