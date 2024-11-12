"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type TransactionPayload = {
  params: string;
  data: {
    email: string;
    amount: number;
    propertyId: string;
    checkin: string;
    checkout: string;
    bank_code: string;
    account_number: string;
  };
};

const initBankTransaction = async (payload: TransactionPayload) => {
  const {data} = await api.get<QueryResponse<TransactionResponse>>(
    API_ENDPOINTS.TRANSACTION.bankpayment,
  );

  return data;
};

export const useInitBankTransaction = (): UseMutationResult<
  QueryResponse<TransactionResponse>,
  AxiosError<ErrorData>,
  TransactionPayload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: initBankTransaction,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};

export interface TransactionResponse {
  reference: string;
  status: string;
  display_text: string;
}
