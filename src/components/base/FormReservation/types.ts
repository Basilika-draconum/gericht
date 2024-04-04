import { Dayjs } from "dayjs";

export interface FormReservationProps {
  button: string;
}
export interface FormData {
  select1: string;
  select2: string;
  date: Dayjs;
}
