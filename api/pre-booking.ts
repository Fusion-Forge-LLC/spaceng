"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type Payload = {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  reason: string;
  date: string;
};

const createPreBooking = async (payload: Payload) => {
  const {data} = await api.post<QueryResponse<null>>(API_ENDPOINTS.PRE_BOOKING, payload);

  return data;
};

export const useCreatePreBooking = (): UseMutationResult<
  QueryResponse<null>,
  AxiosError<ErrorData>,
  Payload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: createPreBooking,
    onSuccess: (data) => {
      showSuccess(data.message);
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
