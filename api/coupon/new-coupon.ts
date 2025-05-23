"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";
import {CouponResponse} from "@/@types/types";

type Payload = {
  amount: number;
  minimum_duration: number;
  property: string;
  expiry_date?: Date;
};

const createCoupon = async (payload: Payload) => {
  const {data} = await api.post<QueryResponse<CouponResponse>>(
    API_ENDPOINTS.COUPON.create,
    payload,
  );

  return data;
};

export const useCreateCoupon = (): UseMutationResult<
  QueryResponse<CouponResponse>,
  AxiosError<ErrorData>,
  Payload
> => {
  return useMutation({
    mutationFn: createCoupon,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
