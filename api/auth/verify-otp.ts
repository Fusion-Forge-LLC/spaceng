import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";

type VerifyOtpPayload = {
  otpCode: string;
  id: string;
};

export interface VerifyOtpResponse {
  // update to proper response
  id: string;
}

const verifyOtp = async (payload: VerifyOtpPayload) => {
  const {data} = await api.post<GenericResponse<VerifyOtpResponse>>(
    API_ENDPOINTS.AUTH.VERIFY_OTP,
    payload,
  );

  return data;
};

export const useVerifyOtp = (
  redirect: string,
): UseMutationResult<
  GenericResponse<VerifyOtpResponse>,
  AxiosError<ErrorData>,
  VerifyOtpPayload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      toast.success(data.message);
      router.push(redirect);
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
