import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getClientLocation = async () => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.BOOKING.locations);

  return data;
};

export function useGetClientLocation() {
  return useQuery({
    queryKey: ["booking-location"],
    queryFn: getClientLocation,
  });
}

interface Response {
  locations: {
    city: string;
    percentage: number;
  }[];
  total: number;
}
