import {useQuery} from "@tanstack/react-query";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {getRequest} from "@/lib/http-helpers";

export type User = {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  role: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};

async function whoAmI() {
  return getRequest<GenericResponse<User>>({
    url: API_ENDPOINTS.whoAmI,
  });
}

export function useWhoAmI() {
  const {data, isLoading, refetch} = useQuery({
    queryFn: whoAmI,
    queryKey: ["whoami"],
  });

  if (data?.data) {
    const user = data.data;
    const role = user.role;

    // const userInfo = {
    //   _id: user._id,
    //   fullname: user.fullname,
    //   createdAt: user.createdAt,
    //   updatedAt: user
    //   email: user.email,
    //   phone: user.phone,
    //   role: user.role,
    //   verified: user.verified,
    // };

    const payload = {
      ...user,
    };

    return {
      data: payload,
      isLoading,
    };
  } else {
    return {
      data: null,
      isLoading,
      fetchWhoAmI: refetch,
    };
  }
}
