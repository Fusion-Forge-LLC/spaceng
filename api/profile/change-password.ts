import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {toast} from "sonner";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {displayErrorMessage} from "@/lib/utils";
import {ErrorData} from "@/lib/http";
import {patchRequest} from "@/lib/http-helpers";

type Payload = {
  current_password: string;
  new_password: string;
  confirm_password: string;
};

export interface changePasswordResponse {
  //update to proper response
  id: string;
}

const changePassword = async (payload: Payload) => {
  const {data} = await patchRequest<any, Payload>(API_ENDPOINTS.PROFILE.changePassword, payload);

  return data;
};

export const useChangePassword = (): UseMutationResult<
  GenericResponse<changePasswordResponse>,
  AxiosError<ErrorData>,
  Payload
> => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
