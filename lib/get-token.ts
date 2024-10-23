import Cookies from "js-cookie";

export const getToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return Cookies.get("spacefinda-token");
};

export const getUserId = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return Cookies.get("spacefinda-userId");
};
