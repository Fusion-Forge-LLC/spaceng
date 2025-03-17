import {AxiosError} from "axios";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {displayErrorMessage} from "@/lib/utils";
import {ErrorData} from "@/lib/http";
import {patchRequest} from "@/lib/http-helpers";

const freePlan = async () => {
  const {data} = await patchRequest<any, null>(API_ENDPOINTS.PROFILE.free_plan);

  return data;
};

export const useFreePlan = (): UseMutationResult<
  GenericResponse<null>,
  AxiosError<ErrorData>,
  null
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: freePlan,
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/dashboard/overview");
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
