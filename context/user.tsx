"use client";

import React, {createContext, useContext, useState, Dispatch, SetStateAction} from "react";

import {useWhoAmI, User, whoAmIResponse} from "@/api/auth/whoami";

interface UserContextTypes {
  User: whoAmIResponse | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoading: boolean;
}

const UserContext = createContext<UserContextTypes>({
  User: null,
  setUser: () => null,
  isLoading: true,
});

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [User, setUser] = useState<User | null>(null);

  const {data, isLoading} = useWhoAmI();

  React.useLayoutEffect(() => {
    if (data && data.fullname !== User?.fullname) {
      setUser(data);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{User: data, setUser, isLoading}}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
