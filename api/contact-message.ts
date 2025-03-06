"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type Payload = {
  full_name: string;
  email: string;
  number: string;
  comment: string;
};

const sendContactMessage = async (payload: Payload) => {
  const {data} = await api.post<QueryResponse<null>>(API_ENDPOINTS.CONTACT, payload);

  return data;
};

export const useSendContactMessage = (): UseMutationResult<
  QueryResponse<null>,
  AxiosError<ErrorData>,
  Payload
> => {
  return useMutation({
    mutationFn: sendContactMessage,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
