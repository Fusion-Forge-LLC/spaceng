"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";
import {PropertyPayload} from "@/@types/types";

type payload = {id: string; data: PropertyPayload};

const updateProperty = async (payload: payload) => {
  const {data} = await api.patch<QueryResponse<any>>(
    API_ENDPOINTS.PROPERTY.modify(payload.id),
    payload.data,
  );

  return data;
};

export const useUpdateProperty = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  payload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: updateProperty,
    onSuccess: (data) => {
      showSuccess(data.message);

      router.push("/dashboard/management");
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
