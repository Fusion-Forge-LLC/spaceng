import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {toast} from "sonner";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {QueryResponse} from "@/@types/auth";

const requestLink = async () => {
  const {data} = await api.post<QueryResponse<null>>(API_ENDPOINTS.PROFILE.requestPasswordReset);

  return data;
};

export const useRequestLink = (): UseMutationResult<QueryResponse<null>, AxiosError<ErrorData>> => {
  return useMutation({
    mutationFn: requestLink,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
