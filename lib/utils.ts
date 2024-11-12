import {AxiosError} from "axios";
import {clsx, type ClassValue} from "clsx";
import {toast} from "sonner";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const displayErrorMessage = (errorData: AxiosError<any>, toastId?: string | number) => {
  if (errorData.message === "Network Error") {
    toast.error("Please check your internet connection");

    return;
  }

  const {message} = errorData.response?.data || {};

  toast.error(capitalizeFirstLetter(message), {
    id: toastId ?? "",
  });
};

export function getFirstLetter(string = "") {
  return string.charAt(0);
}

export function capitalizeFirstLetter(string = "") {
  string = String(string);

  return getFirstLetter(string)?.toUpperCase() + string.toLowerCase()?.slice(1);
}

export function showSuccess(message: string) {
  toast.success(message);
}

export const calculateDays = (
  checkin: string,
  checkout: string,
  propertyType: "shortlet" | "workspace",
) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const differenceinMilliseconds = Math.abs(parseInt(checkout) - parseInt(checkin));
  const differenceInDays = Math.ceil(differenceinMilliseconds / oneDay);

  return propertyType === "shortlet" ? (differenceInDays ?? 1) : differenceInDays + 1;
};
