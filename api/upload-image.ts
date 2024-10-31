import {useMutation} from "@tanstack/react-query";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse, QueryError} from "@/lib/generic-types";
import {uploadImageRequest} from "@/lib/http-helpers";
import {displayErrorMessage, showSuccess} from "@/lib/utils";

type UploadResponse = {
  uploadedImages: {
    url: string;
    index: number;
  }[];
};

async function uploadImage(payload: FormData) {
  return uploadImageRequest<GenericResponse<UploadResponse>, FormData>({
    url: API_ENDPOINTS.UPLOAD.uploadImage,
    payload,
  });
}

export function useUploadImage() {
  return useMutation({
    mutationFn: uploadImage,
    mutationKey: ["upload-image"],

    onSuccess(data) {
      showSuccess(data.message);
    },

    onError(error: QueryError) {
      displayErrorMessage(error);
    },
  });
}
