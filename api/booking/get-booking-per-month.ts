import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getBookingPerMonth = async () => {
  const {data} = await api.get<GenericResponse<Response[]>>(API_ENDPOINTS.BOOKING.bookingPerMonth);

  return data;
};

export function useGetBookingPerMonth() {
  return useQuery({
    queryKey: ["booking-per-month"],
    queryFn: getBookingPerMonth,
  });
}

interface Response {
  month: string;
  totalAmount: number;
  year: number;
}
