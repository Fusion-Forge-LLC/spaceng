import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {displayErrorMessage, showSuccess} from "@/lib/utils";
import {QueryResponse} from "@/@types/auth";

const deleteCoupon = async (payload: string) => {
  const {data} = await api.delete<QueryResponse<any>>(API_ENDPOINTS.COUPON.modify(payload));

  return data;
};

export const useDeleteCoupon = (): UseMutationResult<
  QueryResponse<any>,
  AxiosError<ErrorData>,
  string
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: deleteCoupon,
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
