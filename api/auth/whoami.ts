import {useQuery} from "@tanstack/react-query";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {getRequest} from "@/lib/http-helpers";

type User = {
  _id: string;
  email: string;
  phone: string;
  role: "client" | "business" | "others";
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
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

    const userInfo = {
      _id: user._id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      isEmailVerified: user.verified,
    };

    const payload = {
      ...userInfo,
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
