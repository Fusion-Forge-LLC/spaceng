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
  };
};

const initTransaction = async (payload: TransactionPayload) => {
  const {data} = await api.post<QueryResponse<TransactionResponse>>(
    API_ENDPOINTS.TRANSACTION.acceptpayment(payload.params),
    payload.data,
  );

  return data;
};

export const useInitTransaction = (): UseMutationResult<
  QueryResponse<TransactionResponse>,
  AxiosError<ErrorData>,
  TransactionPayload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: initTransaction,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};

export interface TransactionResponse {
  access_code: string;
  authorization_url: string;
  reference: string;
}
