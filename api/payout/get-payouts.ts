import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {GenericResponse} from "@/lib/generic-types";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {PayoutResponse} from "@/@types/types";

const getPayouts = async () => {
  const {data} = await api.get<GenericResponse<PayoutResponse[]>>(API_ENDPOINTS.PAYOUT.payouts);

  return data;
};

export function useGetPayouts() {
  return useQuery({
    queryKey: ["get-payout"],
    queryFn: () => getPayouts(),
  });
}
