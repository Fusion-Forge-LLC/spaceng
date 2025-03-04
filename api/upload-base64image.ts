import {useMutation} from "@tanstack/react-query";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryError} from "@/lib/generic-types";
import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api from "@/lib/http";
import {QueryResponse} from "@/@types/auth";

type Payload = {
  url: string;
};

async function uploadBase64Image(payload: Payload) {
  const {data} = await api.post<QueryResponse<Response>>(
    API_ENDPOINTS.UPLOAD.uploadBase64,
    payload,
  );

  return data;
}

export function useUploadBase64Image() {
  return useMutation({
    mutationFn: uploadBase64Image,
    mutationKey: ["upload-image"],

    onSuccess(data) {
      showSuccess(data.message);
    },

    onError(error: QueryError) {
      displayErrorMessage(error);
    },
  });
}

type Response = {
  url: string;
};
