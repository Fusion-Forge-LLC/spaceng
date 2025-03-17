import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getBookingOverview = async () => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.BOOKING.overview);

  return data;
};

export function useGetBookingOverview() {
  return useQuery({
    queryKey: ["booking-overview"],
    queryFn: getBookingOverview,
  });
}

interface Response {
  total_bookings: number;
  conversion: number;
  booking_peak: null | {
    topBookingDate: string;
    totalBookings: number;
  };
}
