"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type AccountPayload = {
  account_number: string;
  bank_code: string;
  bank_name: string;
  account_name: string;
  is_primary: boolean;
};

const newPayoutMethod = async (payload: AccountPayload) => {
  const {data} = await api.post<QueryResponse<Response>>(
    API_ENDPOINTS.PAYOUT.payoutMethod,
    payload,
  );

  return data;
};

export const useAddPayoutMethod = (): UseMutationResult<
  QueryResponse<Response>,
  AxiosError<ErrorData>,
  AccountPayload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: newPayoutMethod,
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
