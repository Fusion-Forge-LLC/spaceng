"use client";

import React, {createContext, useContext, useState, Dispatch, SetStateAction} from "react";

import {useWhoAmI, User} from "@/api/auth/whoami";

export interface UserDataTypes {
  id: string;
  emailAddress: string;
  role: "patient" | "doctor";
  firstName: string;
  middleName: string | undefined;
  lastName: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  sex: string | undefined;
  dateOfBirth: string | undefined;
  profilePhoto: string;
}

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
    if (data) {
      setUser(data);
      // setUser({
      //   dateOfBirth: data.dateOfBirth,
      //   emailAddress: data.email,
      //   firstName: data.firstName,
      //   id: data._id,
      //   isEmailVerified: data.isEmailVerified,
      //   isPhoneVerified: data.isPhoneVerified,
      //   lastName: data.lastName,
      //   middleName: data.middleName,
      //   profilePhoto: data.profilePhoto,
      //   role: data.role,
      //   sex: data.sex,
      // });
    }
  }, [data]);

  return <UserContext.Provider value={{User, setUser}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
