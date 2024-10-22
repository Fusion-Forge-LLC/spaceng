import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";

type SendPinPayload = {
  email: string;
  isResend?: boolean;
  isResetting?: boolean;
};

export interface SendPinResponse {
  id: string;
}

const sendOtp = async (payload: SendPinPayload) => {
  const {data} = await api.post<any>(API_ENDPOINTS.AUTH.SEND_OTP, payload);

  return data;
};

export const useSendOtp = (): UseMutationResult<any, AxiosError<ErrorData>, SendPinPayload> => {
  const router = useRouter();

  return useMutation({
    mutationFn: sendOtp,
    onSuccess(data) {
      toast.success(data.message);
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
