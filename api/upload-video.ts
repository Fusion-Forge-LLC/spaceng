import {useMutation} from "@tanstack/react-query";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse, QueryError} from "@/lib/generic-types";
import {uploadImageRequest} from "@/lib/http-helpers";
import {displayErrorMessage, showSuccess} from "@/lib/utils";

type UploadResponse = {url: string};

async function uploadVideo(payload: FormData) {
  return uploadImageRequest<GenericResponse<UploadResponse>, FormData>({
    url: API_ENDPOINTS.UPLOAD.uploadVideo,
    payload,
  });
}

export function useUploadVideo() {
  return useMutation({
    mutationFn: uploadVideo,
    mutationKey: ["upload-video"],

    onSuccess(data) {
      showSuccess(data.message);
    },

    onError(error: QueryError) {
      displayErrorMessage(error);
    },
  });
}
