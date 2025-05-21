"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type Payload = {
  clientId: string;
  vendorId: string;
};

type Response = {
  client: string;
  createdAt: string;
  updatedAt: string;
  vendor: string;
  __v: number;
  _id: string;
};

const getChaRoom = async (payload: Payload) => {
  const {data} = await api.post<QueryResponse<Response>>(API_ENDPOINTS.CHAT.getRoom, payload);

  return data;
};

export const useGetChatRoom = (): UseMutationResult<
  QueryResponse<Response>,
  AxiosError<ErrorData>,
  Payload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: getChaRoom,
    onSuccess: () => {},
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
