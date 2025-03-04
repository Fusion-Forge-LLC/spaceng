import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getPropertiesLocations = async () => {
  const {data} = await api.get<GenericResponse<Response[]>>(API_ENDPOINTS.LISTING.locations);

  return data;
};

export function useGetPropertiesLocations() {
  return useQuery({
    queryKey: ["properties-location"],
    queryFn: getPropertiesLocations,
  });
}

export interface Response {
  location: string;
}
