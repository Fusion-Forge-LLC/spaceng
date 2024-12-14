import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getBookingPerWeek = async () => {
  const {data} = await api.get<GenericResponse<Response[]>>(API_ENDPOINTS.BOOKING.bookingPerWeek);

  return data;
};

export function useGetBookingPerWeek() {
  return useQuery({
    queryKey: ["booking-per-week"],
    queryFn: getBookingPerWeek,
  });
}

interface Response {
  totalAmount: number;
  week: string;
}
