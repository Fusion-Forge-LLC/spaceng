"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type Payload = {
  name: string;
  review_text: string;
  rating: number;
  propertyId: string;
};

const submitRatin = async (payload: Payload) => {
  const {data} = await api.post<QueryResponse<null>>(API_ENDPOINTS.RATING.create, payload);

  return data;
};

export const useSubmitRating = (): UseMutationResult<
  QueryResponse<null>,
  AxiosError<ErrorData>,
  Payload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: submitRatin,
    onSuccess: (data) => {
      showSuccess(data.message);

      router.push("/account/bookings");
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
