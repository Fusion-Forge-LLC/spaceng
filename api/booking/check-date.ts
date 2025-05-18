"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type Payload = {
  propertyId: string;
  checkin: string;
  checkout: string;
};

const checkDateAvailability = async (payload: Payload) => {
  const {data} = await api.post<QueryResponse<null>>(API_ENDPOINTS.BOOKING.checAvailable, payload);

  return data;
};

export const useCheckDateAvailability = (): UseMutationResult<
  QueryResponse<null>,
  AxiosError<ErrorData>,
  Payload
> => {
  return useMutation({
    mutationFn: checkDateAvailability,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
