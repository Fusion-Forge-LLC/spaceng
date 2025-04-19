import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {PropertyResponse} from "@/@types/types";

export type Type = "workspace" | "shortlet";

const getPropertiesList = async (type: Type, query: {[k: string]: string}) => {
  const sortBy = query["sort"] || "newest";
  const location = query["location"] || "all";
  const bedrooms = query["bedrooms"] || "all";
  const searchString = query["q"] || "";
  const page = query["page"] || "1";
  const {data} = await api.get<GenericResponse<Response>>(
    API_ENDPOINTS.LISTING.listing(type, sortBy, location, bedrooms, searchString, page),
  );

  return data;
};

export function useGetPropertiesList(type: Type, query: {[k: string]: string}) {
  return useQuery({
    queryKey: ["properties-list", type, query],
    queryFn: () => getPropertiesList(type, query),
  });
}

export interface Response {
  properties: PropertyResponse[];
  total_properties: number;
}
