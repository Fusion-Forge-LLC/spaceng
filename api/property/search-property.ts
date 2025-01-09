import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {AxiosError} from "axios";

import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {PropertyResponse} from "@/@types/types";
import {QueryResponse} from "@/@types/auth";
import {displayErrorMessage, showSuccess} from "@/lib/utils";

type Type = {
  type: "workspace" | "shortlet";
  searchString: string;
};

const searchProperties = async (payload: Type) => {
  const {data} = await api.get<QueryResponse<Response>>(
    API_ENDPOINTS.LISTING.search(payload.type, payload.searchString),
  );

  return data;
};

export const useSearchProperties = (): UseMutationResult<
  QueryResponse<Response>,
  AxiosError<ErrorData>,
  Type
> => {
  return useMutation({
    mutationFn: searchProperties,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};

export interface Response {
  properties: PropertyResponse[];
  total_properties: number;
}
