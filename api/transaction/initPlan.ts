"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type TransactionPayload = {
  plan: string;
};

const initPlan = async (payload: TransactionPayload) => {
  const {data} = await api.post<QueryResponse<TransactionResponse>>(
    API_ENDPOINTS.TRANSACTION.initPlan,
    payload,
  );

  return data;
};

export const useInitPlan = (): UseMutationResult<
  QueryResponse<TransactionResponse>,
  AxiosError<ErrorData>,
  TransactionPayload
> => {
  return useMutation({
    mutationFn: initPlan,
    onSuccess: () => {},
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};

export interface TransactionResponse {
  access_code: string;
  authorization_url: string;
  reference: string;
}
