import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {toast} from "sonner";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";

type ReSendOTPPayload = {
  email: string;
};

export interface ReSendOtpResponse {
  id: string;
}

const reSendOtp = async (payload: ReSendOTPPayload) => {
  const {data} = await api.post<any>(API_ENDPOINTS.AUTH.RESEND_OTP, payload);

  return data;
};

export const useReSendOtp = (): UseMutationResult<any, AxiosError<ErrorData>, ReSendOTPPayload> => {
  return useMutation({
    mutationFn: reSendOtp,
    onSuccess(data) {
      toast.success(data.message);
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
