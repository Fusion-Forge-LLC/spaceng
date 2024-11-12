"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

const createBooking = async (transactionRef: string) => {
  const {data} = await api.get<QueryResponse<any>>(
    API_ENDPOINTS.BOOKING.initBooking(transactionRef),
  );

  return data;
};

export const useCreateBooking = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  string
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      showSuccess(data.message);
      console.log(data);
      router.push("/account/bookings");
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
