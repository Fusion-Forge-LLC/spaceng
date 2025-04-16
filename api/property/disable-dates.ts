"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type payload = {id: string; data: Date[]};

const disableDates = async (payload: payload) => {
  const {data} = await api.patch<QueryResponse<any>>(
    API_ENDPOINTS.PROPERTY.disableDates(payload.id),
    payload.data,
  );

  return data;
};

export const useDisableDates = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  payload
> => {
  return useMutation({
    mutationFn: disableDates,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
