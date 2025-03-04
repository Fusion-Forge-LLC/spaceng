"use client";

import React, {createContext, useContext, useState, Dispatch, SetStateAction} from "react";

import {useWhoAmI, whoAmIResponse} from "@/api/auth/whoami";

interface UserContextTypes {
  User: whoAmIResponse | null;
  setUser: Dispatch<SetStateAction<whoAmIResponse | null>>;
  isLoading: boolean;
}

const UserContext = createContext<UserContextTypes>({
  User: null,
  setUser: () => null,
  isLoading: true,
});

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [User, setUser] = useState<whoAmIResponse | null>(null);

  const {data, isLoading} = useWhoAmI();

  React.useLayoutEffect(() => {
    if (data && User === null) {
      setUser(data);
    }
  }, [data]);

  return <UserContext.Provider value={{User, setUser, isLoading}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
