"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";
import {CouponResponse} from "@/@types/types";

type Payload = {
  couponCode: string;
  propertyId: string;
  duration: number;
};

const validateCoupon = async (payload: Payload) => {
  const {couponCode: code, propertyId, duration} = payload;
  const {data} = await api.get<QueryResponse<CouponResponse>>(
    API_ENDPOINTS.COUPON.validate(code, propertyId, duration),
  );

  return data;
};

export const useValidateCoupon = (): UseMutationResult<
  QueryResponse<CouponResponse>,
  AxiosError<ErrorData>,
  Payload
> => {
  return useMutation({
    mutationFn: validateCoupon,
    onSuccess: (data) => {
      showSuccess(data.message);
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
