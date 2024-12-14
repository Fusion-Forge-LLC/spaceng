import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getBookingHabit = async () => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.BOOKING.habit);

  return data;
};

export function useGetBookingHabit() {
  return useQuery({
    queryKey: ["booking-habit"],
    queryFn: getBookingHabit,
  });
}

interface Response {
  average_stay: {averageDuration: number; maxDuration: number};
  repeat_guest: number;
  locations: number;
}
