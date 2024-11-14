"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

const toggleWishlist = async (propertyId: string) => {
  const {data} = await api.get<QueryResponse<any>>(
    API_ENDPOINTS.WISHLIST.toggleWishlist(propertyId),
  );

  return data;
};

export const useToggleWishlist = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  string
> => {
  return useMutation({
    mutationFn: toggleWishlist,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
