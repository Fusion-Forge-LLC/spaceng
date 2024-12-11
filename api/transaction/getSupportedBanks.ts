import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {GenericResponse} from "@/lib/generic-types";
import {API_ENDPOINTS} from "@/lib/api-endpoints";

const getBanks = async (query: string) => {
  const {data} = await api.get<GenericResponse<BankResponse[]>>(
    API_ENDPOINTS.TRANSACTION.getBanks(query),
  );

  return data;
};

export function useGetBanks(query: string) {
  return useQuery({
    queryKey: ["get-banks", query],
    queryFn: () => getBanks(query),
  });
}

export interface BankResponse {
  id: number;
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: string;
  pay_with_bank: boolean;
  supports_transfer: boolean;
  active: boolean;
  country: string;
  currency: string;
  type: string;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}
