"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

import {displayErrorMessage} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {QueryResponse} from "@/@types/auth";

type Payload = {
  propertyId: string;
  date: number;
};

const getBooking = async (payload: Payload) => {
  const {data} = await api.get<QueryResponse<BookingResponse>>(
    API_ENDPOINTS.BOOKING.details(payload.propertyId, payload.date),
  );

  return data;
};

export const useGetBooking = (): UseMutationResult<
  QueryResponse<BookingResponse>,
  AxiosError<ErrorData>,
  Payload
> => {
  return useMutation({
    mutationFn: getBooking,
    onSuccess: (data) => {},
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};

export interface BookingResponse {
  booking: {
    _id: string;
    property_id: string;
    checkin: string;
    checkout: string;
    duration: number;
    transaction_id: string;
    payment_method: string;
    client: {
      _id: string;
      fullname: string;
      email: string;
      phone: string;
    };
    profile: {profile_image: string};
    no_of_guest: number;
    property_owner: string;
    status: string;
    amount_paid: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  };
  dates: string[];
}
