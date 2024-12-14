import {AxiosError} from "axios";
import {clsx, type ClassValue} from "clsx";
import {toast} from "sonner";
import {twMerge} from "tailwind-merge";

import {ReviewTypes} from "@/@types/types";

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

export const ratingText = (rating: number) => {
  switch (rating) {
    case 1:
      return "I hate it!";
    case 2:
      return "I don't like it";
    case 3:
      return "I'm undecided";
    case 4:
      return "I like it";
    case 5:
      return "I love it!";
    default:
      return "";
  }
};

export const getAverageRating = (rating: ReviewTypes[]) => {
  if (rating.length === 0) return 0;

  return rating.reduce((accumulator, review) => accumulator + review.rating, 0) / rating.length;
};

export const getAmountString = (amount: number | undefined) => {
  if (!amount) return "₦0";
  const amountString = amount.toLocaleString();

  return `₦${amountString}`;
};

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function getRandomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}
