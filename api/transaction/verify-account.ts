import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {AxiosError} from "axios";

import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

const verifyAccount = async (query: string) => {
  const {data} = await api.get<QueryResponse<AccountResponse>>(
    API_ENDPOINTS.TRANSACTION.verifyBankAccount(query),
  );

  return data;
};

export const useVerifyAccount = (): UseMutationResult<
  QueryResponse<AccountResponse>,
  AxiosError<ErrorData>,
  string
> => {
  return useMutation({
    mutationFn: verifyAccount,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
    },
  });
};

export interface AccountResponse {
  account_number: string;
  account_name: string;
  bank_id: number;
}
