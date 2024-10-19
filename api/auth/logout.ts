// import { useUser } from "@/context/user";
import Cookies from "js-cookie";

export function useSignOut() {
  //   const { setUser } = useUser();

  function logout() {
    Cookies.remove("spacefinda-token");
    // setUser(null);
    window.location.reload();
  }

  return {
    logout,
  };
}

export function logoutUser() {
  Cookies.remove("spacefinda-token");
  window.location.href = "/auth/login";
}
