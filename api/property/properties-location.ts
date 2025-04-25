import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

type Types = "workspace" | "shortlet" | undefined;

const getPropertiesLocations = async (type: Types) => {
  const {data} = await api.get<GenericResponse<Response[]>>(API_ENDPOINTS.LISTING.locations(type));

  return data;
};

export function useGetPropertiesLocations(type: Types) {
  return useQuery({
    queryKey: ["properties-location"],
    queryFn: () => getPropertiesLocations(type),
  });
}

export interface Response {
  location: string;
}
