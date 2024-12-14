"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";
import {PayoutResponse} from "@/@types/types";

type Payload = {
  amount: number;
};

const requestPayout = async (payload: Payload) => {
  const {data} = await api.post<QueryResponse<PayoutResponse>>(
    API_ENDPOINTS.PAYOUT.request,
    payload,
  );

  return data;
};

export const useRequestPayout = (): UseMutationResult<
  QueryResponse<PayoutResponse>,
  AxiosError<ErrorData>,
  Payload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: requestPayout,
    onSuccess: (data) => {
      showSuccess(data.message);
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
