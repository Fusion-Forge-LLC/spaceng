"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";
import {CouponResponse} from "@/@types/types";

type Payload = {
  id: string;
  data: {
    amount: number;
    minimum_duration: number;
    property: string;
    expiry_date?: Date;
  };
};

const editCoupon = async (payload: Payload) => {
  const {data} = await api.patch<QueryResponse<CouponResponse>>(
    API_ENDPOINTS.COUPON.modify(payload.id),
    payload.data,
  );

  return data;
};

export const useEditCoupon = (): UseMutationResult<
  QueryResponse<CouponResponse>,
  AxiosError<ErrorData>,
  Payload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: editCoupon,
    onSuccess: (data) => {
      showSuccess(data.message);
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};
