"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";
import {BookingType} from "@/@types/types";

const getClientBookings = async (status: string) => {
  const {data} = await api.get<QueryResponse<BookingType[]>>(
    API_ENDPOINTS.BOOKING.getBookings(status),
  );

  return data;
};

export const useGetClientBookings = (): UseMutationResult<
  QueryResponse<BookingType[]>,
  AxiosError<ErrorData>,
  string
> => {
  return useMutation({
    mutationFn: getClientBookings,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
