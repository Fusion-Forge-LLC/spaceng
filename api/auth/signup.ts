"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {toast} from "sonner";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {ErrorData} from "@/lib/http";
import {postRequest} from "@/lib/http-helpers";
import {displayErrorMessage} from "@/lib/utils";

type SignUpPayload = {
  email: string;
  password: string;
  fullname: string;
  phone_number: string;
  role: "client" | "business" | "others";
};

const signUp = async (payload: SignUpPayload) => {
  console.log(API_ENDPOINTS.AUTH.REGISTER);
  const {data} = await postRequest<any, SignUpPayload>(API_ENDPOINTS.AUTH.REGISTER, payload);

  return data;
};

export const useSignUp = (): UseMutationResult<any, AxiosError<ErrorData>, SignUpPayload> => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data, variables) => {
      toast.success(data.message);
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
