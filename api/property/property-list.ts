import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {PropertyResponse} from "@/@types/types";

type Type = "workspace" | "shortlet";

const getPropertiesList = async (type: Type) => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.LISTING.listing(type));

  return data;
};

export function useGetPropertiesList(type: Type) {
  return useQuery({
    queryKey: ["properties-list", type],
    queryFn: () => getPropertiesList(type),
  });
}

export interface Response {
  properties: PropertyResponse[];
  total_properties: number;
}
