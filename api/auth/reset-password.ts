import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {toast} from "sonner";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {displayErrorMessage} from "@/lib/utils";
import {ErrorData} from "@/lib/http";
import {patchRequest} from "@/lib/http-helpers";

type ResetPasswordPayload = {
  otp: string;
  password: string;
  confirmPassword: string;
};

export interface ResetPasswordResponse {
  //update to proper response
  id: string;
}

const resetPassword = async (payload: ResetPasswordPayload) => {
  const {data} = await patchRequest<any, ResetPasswordPayload>(API_ENDPOINTS.AUTH.RESET, payload);

  return data;
};

export const useResetPassword = (): UseMutationResult<
  GenericResponse<ResetPasswordResponse>,
  AxiosError<ErrorData>,
  ResetPasswordPayload
> => {
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
