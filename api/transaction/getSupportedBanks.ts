import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {GenericResponse} from "@/lib/generic-types";

const getBanks = async () => {
  const {data} = await api.get<GenericResponse<BankResponse[]>>(
    "https://api.paystack.co/bank?pay_with_bank=true",
  );

  return data;
};

export function useGetBanks() {
  return useQuery({
    queryKey: ["get-banks"],
    queryFn: getBanks,
  });
}

interface BankResponse {
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
