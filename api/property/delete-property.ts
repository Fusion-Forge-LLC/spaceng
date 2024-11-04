import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {displayErrorMessage, showSuccess} from "@/lib/utils";
import {QueryResponse} from "@/@types/auth";

const deleteProperty = async (payload: string) => {
  const {data} = await api.delete<QueryResponse<any>>(API_ENDPOINTS.PROPERTY.delete(payload));

  return data;
};

export const useDeleteProperty = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  string
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: deleteProperty,
    onSuccess: (data) => {
      showSuccess(data.message);
      console.log(data);
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
