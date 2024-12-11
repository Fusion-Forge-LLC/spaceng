import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {GenericResponse} from "@/lib/generic-types";
import {API_ENDPOINTS} from "@/lib/api-endpoints";

const getPayoutMethods = async () => {
  const {data} = await api.get<GenericResponse<Response[]>>(API_ENDPOINTS.PAYOUT.payoutMethod);

  return data;
};

export function useGetPayoutMethods() {
  return useQuery({
    queryKey: ["get-payout-methods"],
    queryFn: () => getPayoutMethods(),
  });
}

type Response = {
  bank_name: string;
  account_number: number;
  bank_code: string;
  account_name: string;
  is_primary: boolean;
  profile: string;
  _id: string;
  __v: 0;
};
