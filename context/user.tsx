"use client";

import React, {createContext, useContext, useState, Dispatch, SetStateAction} from "react";

import {useWhoAmI, User} from "@/api/auth/whoami";

interface UserContextTypes {
  User: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextTypes>({
  User: null,
  setUser: () => null,
});

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [User, setUser] = useState<User | null>(null);

  const {data} = useWhoAmI();

  React.useLayoutEffect(() => {
    if (data && data.fullname !== User?.fullname) {
      console.log("data has beens set");
      setUser(data);
    }
  }, [data]);

  return <UserContext.Provider value={{User, setUser}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
