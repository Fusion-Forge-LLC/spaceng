import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {displayErrorMessage} from "@/lib/utils";
import {ErrorData} from "@/lib/http";
import {patchRequest} from "@/lib/http-helpers";

type Payload = {
  transactionRef: string;
};

const newPlan = async (payload: Payload) => {
  const {data} = await patchRequest<any, Payload>(API_ENDPOINTS.PROFILE.plan, payload);

  return data;
};

export const useNewPlan = (): UseMutationResult<
  GenericResponse<null>,
  AxiosError<ErrorData>,
  Payload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: newPlan,
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/dashboard/overview");
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
