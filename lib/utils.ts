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

export function hideEmail(email: string) {
  const [name, domain] = email.split("@");
  const nameLength = name.length;
  let hiddenName = "";

  // If the username is less than 4 characters, don't obfuscate
  if (nameLength <= 3) {
    return email;
  }

  // Replace characters in the middle of the username with asterisks
  for (let i = 0; i < nameLength; i++) {
    if (i < 2 || i >= nameLength - 1) {
      hiddenName += name[i];
    } else {
      hiddenName += "*";
    }
  }

  return `${hiddenName}@${domain}`;
}

export function hidePhoneNumber(phoneNumber: string) {
  const phoneNumberLength = phoneNumber.length;

  // Handle short phone numbers
  if (phoneNumberLength <= 3) {
    return phoneNumber;
  }

  // Determine the number of digits to hide
  const digitsToHide = Math.max(4, 1);
  const startIndex = Math.floor(phoneNumberLength / 2) - Math.floor(digitsToHide / 2);

  let hiddenNumber = "";

  for (let i = 0; i < phoneNumberLength; i++) {
    if (i < startIndex || i >= startIndex + digitsToHide) {
      hiddenNumber += phoneNumber[i];
    } else {
      hiddenNumber += "*";
    }
  }

  return hiddenNumber;
}

export function checkAllChecked(newsletters: {[key: string]: string | boolean}) {
  delete newsletters._id;

  return Object.values(newsletters).every((value) => value === true);
}

export function formatMessageDate(inputDate: string) {
  const currentDate = new Date();
  const givenDate = new Date(inputDate);

  const diffTime = currentDate.getTime() - givenDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Format givenDate for fallback (when it's not within a week)
  const fallbackDate = givenDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Check conditions
  if (diffDays === 0) {
    return "today";
  } else if (diffDays === 1) {
    return "yesterday";
  } else if (diffDays < 7) {
    return givenDate.toLocaleDateString(undefined, {weekday: "long"});
  } else {
    return fallbackDate;
  }
}

export function formatDateString(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(today.getDate() - 1);

  const timeDiff = today.getTime() - date.getTime();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  if (timeDiff < oneDayInMilliseconds) {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  } else if (date >= yesterday) {
    return "Yesterday";
  } else if (date.getTime() >= today.getTime() - 7 * 24 * 60 * 60 * 1000) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return daysOfWeek[date.getDay()];
  } else {
    return date.toLocaleDateString("en-GB", {year: "numeric", month: "short", day: "numeric"});
  }
}
