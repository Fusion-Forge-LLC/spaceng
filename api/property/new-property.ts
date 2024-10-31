"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";
import {PropertyPayload} from "@/@types/types";

const newProperty = async (payload: PropertyPayload) => {
  const {data} = await api.post<QueryResponse<PropertyResponse>>(
    API_ENDPOINTS.PROPERTY.create,
    payload,
  );

  return data;
};

export const useCreateProperty = (): UseMutationResult<
  QueryResponse<PropertyResponse>,
  AxiosError<ErrorData>,
  PropertyPayload
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: newProperty,
    onSuccess: (data) => {
      showSuccess(data.message);
      console.log(data);
      router.push("/dashboard/overview");
    },
    onError: (error) => {
      console.log(error);
      displayErrorMessage(error);
    },
  });
};

export interface PropertyResponse {
  data: {
    bedroom: number;
    createdAt: string;
    features: string;
    gallery: string;
    price: string;
    price_postfix: string;
    property_address: {
      address: string;
      location: string;
      neighborhood: string;
    };
    property_description: string;
    property_title: string;
    reviews: string[];
    type: "shortlet" | "workspace";
    updatedAt: string;
    user: string;
    video: string[];
    __v: number;
    _id: string;
  };
  message: string;
  success: boolean;
}
