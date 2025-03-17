"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type payload = {
  [key: string]: string | boolean | {[key: string]: any};
};

const updateProfile = async (payload: payload) => {
  const {data} = await api.patch<QueryResponse<any>>(API_ENDPOINTS.PROFILE.update, payload);

  return data;
};

export const useUpdateProfile = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  payload
> => {
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {},
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
