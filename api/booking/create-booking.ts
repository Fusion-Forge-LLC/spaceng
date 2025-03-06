"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

export type BookingResponse = {
  amountPaid: number;
  refNumber: string;
  time: string;
  method: string;
  clientName: string;
};

const createBooking = async (transactionRef: string) => {
  const {data} = await api.get<QueryResponse<BookingResponse>>(
    API_ENDPOINTS.BOOKING.initBooking(transactionRef),
  );

  return data;
};

export const useCreateBooking = (): UseMutationResult<
  QueryResponse<BookingResponse>,
  AxiosError<ErrorData>,
  string
> => {
  return useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
