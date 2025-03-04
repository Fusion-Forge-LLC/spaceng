"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type RentalPayload = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
};

const addOtherRental = async (payload: RentalPayload) => {
  const {data} = await api.post<QueryResponse<Response>>(API_ENDPOINTS.OTHER_RENTALS.add, payload);

  return data;
};

export const useAddOtherRental = (): UseMutationResult<
  QueryResponse<Response>,
  AxiosError<ErrorData>,
  RentalPayload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: addOtherRental,
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

type Response = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  _id: string;
  __v: 0;
};
