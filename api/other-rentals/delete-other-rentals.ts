"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

const deleteOtherRental = async (id: string) => {
  const {data} = await api.delete<QueryResponse<null>>(API_ENDPOINTS.OTHER_RENTALS.delete(id));

  return data;
};

export const useDeleteOtherRental = (): UseMutationResult<
  QueryResponse<null>,
  AxiosError<ErrorData>,
  string
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: deleteOtherRental,
    onSuccess: (data) => {
      showSuccess(data.message);
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
