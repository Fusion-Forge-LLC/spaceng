"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

import {logoutUser} from "../auth/logout";

const deleteProfile = async (id: string) => {
  const {data} = await api.delete<QueryResponse<any>>(API_ENDPOINTS.PROFILE.delete(id));

  return data;
};

export const useDeleteProfile = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  string
> => {
  return useMutation({
    mutationFn: deleteProfile,
    onSuccess: () => {
      showSuccess("Account deleted successfully");
      logoutUser();
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
